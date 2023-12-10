<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <div class="row" v-if="$q.platform.is.desktop">
          <q-table
            :rows="funcionarios"
            flat
            bordered
            :columns="columns"
            row-key="id"
            class="col-12"
            virtual-scroll
          >
            <template v-slot:top>
              <span class="text-h6">Funcionarios</span>
              <q-space />
              <q-btn
                v-if="$q.platform.is.desktop"
                icon="mdi-plus"
                label="Funcionario"
                color="info"
                dense
                :to="{ name: 'form-funcionario' }"
              />
            </template>
            <template v-slot:body-cell-img_url="props">
              <q-td :props="props" class="text-center">
                <q-avatar v-if="props.row.img_url">
                  <img :src="props.row.img_url" />
                </q-avatar>
                <q-avatar
                  v-else
                  color="secondary"
                  text-color="white"
                  icon="mdi-image-off"
                  class="flex-center"
                />
              </q-td>
            </template>
            <template v-slot:body-cell-actions="props">
              <q-td :props="props" class="q-gutter-x-sm text-center">
                <q-btn
                  icon="mdi-eye-outline"
                  color="grey"
                  dense
                  size="sm"
                  @click="detalhes(props.row)"
                >
                  <q-tooltip>Ver detalhes</q-tooltip>
                </q-btn>
                <q-btn
                  icon="mdi-pencil-outline"
                  color="info"
                  dense
                  size="sm"
                  @click="alterarItem(props.row)"
                >
                  <q-tooltip>Alterar</q-tooltip>
                </q-btn>
                <q-btn
                  icon="mdi-delete-outline"
                  color="negative"
                  dense
                  size="sm"
                  @click="deletarItem(props.row)"
                  ><q-tooltip>Apagar</q-tooltip></q-btn
                >
              </q-td>
            </template>
          </q-table>
        </div>

        <!-- List for mobile -->
        <q-list bordered v-if="$q.platform.is.mobile && funcionarios != ''">
          <div
            class="row text-body3 text-h5 flex-center q-pa-lg bg-secondary text-white"
          >
            <q-btn flat icon="mdi-account-tie" label="Funcionários" />
          </div>
          <q-separator />
          <q-item
            v-for="funcionario in funcionarios"
            :key="funcionario.id"
            class="q-mb-sm"
            clickable
            v-ripple
            @click="alterarItem(funcionario)"
          >
            <q-item-section avatar>
              <q-avatar v-if="funcionario.img_url">
                <img :src="funcionario.img_url" />
              </q-avatar>
              <q-avatar
                v-else
                color="grey"
                text-color="white"
                icon="mdi-image-off"
              />
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ funcionario.nome }}</q-item-label>
              <q-item-label caption lines="1"
                >Nº de agente:
                <strong class="secondary">{{ funcionario.num_agente }}</strong>
              </q-item-label>
              <q-item-label caption lines="1"
                >Nº do BI:
                <strong class="secondary">{{ funcionario.num_bilhete }}</strong>
              </q-item-label>
            </q-item-section>
            <q-separator />
          </q-item>
        </q-list>

        <q-page-sticky
          class="margin-bottom"
          position="bottom-right"
          :offset="[18, 18]"
          v-if="$q.platform.is.mobile"
        >
          <q-btn
            fab
            icon="mdi-plus"
            color="primary"
            :to="{ name: 'form-funcionario' }"
          />
        </q-page-sticky>

        <!-- Mais detalhes -->
        <detalhes-component :show="handleShowDetail" :itens="itens" />
        <!-- fim dialog -->
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
import { defineComponent } from "vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import userApi from "src/composible/userApi";
import usenotification from "src/composible/useNotify";
import userAuth from "src/composible/userAuthUser";
import { Loading, useQuasar } from "quasar";
import { columns } from "./table";
import detalhesComponent from "src/components/detalhesComponent.vue";
export default defineComponent({
  components: { detalhesComponent },
  setup() {
    const funcionarios = ref([]);
    const itensDetails = ref("");
    const { list, remove } = userApi();
    const token = userAuth();
    const router = useRouter();
    const storage = "sgdme";
    const handleShowDetail = ref(false);
    const $q = useQuasar();
    const itens = ref([]);
    const card = ref(false);
    const table = "funcionarios";
    const { notifyError, notifySuccess } = usenotification();

    const listarFuncionarios = async () => {
      Loading.show({ message: "Carregando funcionários" });
      try {
        funcionarios.value = await list(table);
      } catch (error) {
        notifyError(error.message);
      } finally {
        Loading.hide();
      }
    };

    const detalhes = (data) => {
      itens.value = data;
      handleShowDetail.value = true;
    };

    const deletarItem = async (item) => {
      try {
        $q.dialog({
          title: "Confirmação",
          message: `tens a certeza que pretendes eliminar ${item.nome} ?`,
          cancel: true,
          persistent: true,
        }).onOk(async () => {
          Loading.show({ message: "Apagando dados do funcionários..." });
          await remove(table, item.id);
          listarEscolas();
          notifySuccess("Dados do funcionário apagado com sucesso");
        });
      } catch (error) {
        notifyError(error.message);
      } finally {
        Loading.hide();
      }
    };

    const alterarItem = (item) => {
      router.push({ name: "form-funcionario", params: { id: item.id } });
    };

    onMounted(() => {
      listarFuncionarios();
    });

    return {
      columns,
      alterarItem,
      deletarItem,
      funcionarios,
      storage,
      token,
      detalhes,
      card,
      itensDetails,
      itens,
      handleShowDetail,
    };
  },
});
</script>

<style lang="css" scoped>
.margin-bottom {
  margin-bottom: 80px !important;
}
</style>
