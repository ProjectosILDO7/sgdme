<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <p class="text-body1">
          Documentos: <i>Termos de Início de funções & Guias de colocações</i>
        </p>
        <btn-back-page />
        <q-separator />
        <div class="q-pa-md" v-if="$q.platform.is.desktop">
          <q-table
            dense
            flat
            :rows="rows"
            :columns="columns"
            row-key="name"
            :filter="filter"
          >
            <template v-slot:top-right>
              <q-td>
                <q-input
                  outlined
                  dense
                  label="Procurar"
                  autofocus
                  v-model="filter"
                  hint="Procure por nº de agente ou nome"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-magnify"></q-icon>
                  </template>
                </q-input>
              </q-td>
            </template>
            <template v-slot:body-cell-img_url="props">
              <q-td :props="props">
                <q-avatar square>
                  <q-img :src="props.row.img_url" />
                </q-avatar>
              </q-td>
            </template>
            <template v-slot:body-cell-options="props">
              <q-td :props="props" class="q-gutter-sm">
                <q-btn
                  dense
                  size="sm"
                  icon="mdi-file-document-outline"
                  label="Guia de colocação"
                  color="primary"
                />
                <q-btn
                  dense
                  size="sm"
                  icon="mdi-file-document-outline"
                  label="Termo de início de funções"
                  color="primary"
                  @click="printDoc(props.row.id)"
                />
              </q-td>
            </template>
          </q-table>
        </div>

        <!-- List for mobile -->
        <q-list bordered v-if="$q.platform.is.mobile && rows != ''">
          <div
            class="row text-body3 text-h5 flex-center q-pa-lg bg-secondary text-white"
          >
            <q-btn flat icon="mdi-account-tie" label="Funcionários" />
          </div>
          <q-separator />
          <q-item
            v-for="funcionario in rows"
            :key="funcionario.id"
            class="q-mb-sm q-mt-sm"
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
            </q-item-section>

            <q-item-section side top>
              <div>
                <q-btn-dropdown
                  flat
                  dropdown-icon="mdi-dots-vertical"
                  no-icon-animation
                >
                  <q-list>
                    <q-item
                      clickable
                      v-close-popup
                      @click="alterarItem(funcionario)"
                    >
                      <q-item-section>
                        <q-item-label>
                          <q-btn
                            dense
                            flat
                            size="sm"
                            icon="mdi-file-document-outline"
                            color="green-10"
                            label="Guia de marcha"
                          />
                        </q-item-label>
                      </q-item-section>
                    </q-item>

                    <q-item
                      clickable
                      v-close-popup
                      @click="detalhes(funcionario)"
                    >
                      <q-item-section>
                        <q-item-label>
                          <q-btn
                            dense
                            flat
                            size="sm"
                            label="Termo de função"
                            icon="mdi-file-document-outline"
                            color="blue-grey-8"
                            @click="printDoc(funcionario)"
                          />
                        </q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
                <!--


                -->
              </div>
            </q-item-section>
            <q-separator />
          </q-item>
        </q-list>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
import btnBackPage from "src/components/btnBack/btnBackPage.vue";
import { columns } from "./table";
import { ref, onMounted } from "vue";
import userApi from "src/composible/userApi";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import usenotification from "src/composible/useNotify";
export default {
  name: "DocRH",
  components: { btnBackPage },
  setup() {
    const filter = ref("");
    const router = useRouter();
    const tabela = "funcionarios";
    const { notifyError, notifySuccess } = usenotification();
    const $q = useQuasar();
    const rows = ref([]);
    const { brand, getById, getFuncionariosWithCategoriasAndEscolas, list } =
      userApi();
    onMounted(() => {
      carregarFuncionarios();
    });
    const carregarFuncionarios = async () => {
      try {
        $q.loading.show("Carregando funcionários...");
        rows.value = await getFuncionariosWithCategoriasAndEscolas(tabela);
      } catch (error) {
        console.log(error.message);
      } finally {
        $q.loading.hide();
      }
    };

    const printDoc = (id) => {
      router.push({ name: "docPrint", params: { id: id } });
    };

    return {
      columns,
      filter,
      rows,
      printDoc,
    };
  },
};
</script>
