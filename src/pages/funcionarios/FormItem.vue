<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <q-form class="row justify-center" @submit.prevent="addItems">
          <p class="col-12 text-body3 text-center q-mt-lg">
            {{
              isUpdate
                ? "Actualizar dados do funcionário"
                : "Cadastrar novo funcionário"
            }}
          </p>
          <div class="col-md-6 col-sm-6 col-xs-10 q-gutter-y-sm">
            <q-input
              label="Carregue uma foto do tipo passe"
              stack-label=""
              v-model="image"
              multiple
              filled
              type="file"
              accept="image/*"
            />
            <!-- <div class="col-12 q-ma-md flex flex-center">
              <q-uploader
                style="max-width: 300px"
                label="Adicione uma imagen"
                accept=".jpg, image/*"
                v-model="image"
                multiple
                filled
              />
            </div>-->

            <q-input
              v-model="form.nome"
              label="Nome completo"
              class="col-12"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Porfavor digite o nome da escola',
              ]"
            />
            <q-input
              v-model="form.nome_pai"
              label="Nome do pai"
              class="col-12"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Porfavor o nome do pai',
              ]"
            />
            <q-input
              v-model="form.nome_mae"
              label="Nome da maê"
              class="col-12"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Porfavor o nome da maê',
              ]"
            />

            <q-input
              v-model="form.num_bilhete"
              label="Nº do bilhete"
              class="col-12"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Porfavor informe o nº do Bilhete',
              ]"
            />

            <q-input
              v-model="form.data_emissao"
              label="Data de emissão"
              class="col-12"
              type="date"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) ||
                  'Porfavor informe a data de emissão',
              ]"
            />

            <q-input
              v-model="form.data_caducidade"
              label="Data de caducidade"
              class="col-12"
              type="date"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) ||
                  'Porfavor informe a data de caducidade',
              ]"
            />
            <q-input
              v-model="form.data_nascimento"
              label="Data de nascimento"
              class="col-12"
              type="date"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) ||
                  'Porfavor informe a data de nascimento',
              ]"
            />
            <q-input
              v-model="form.num_agente"
              label="Nº de agente"
              class="col-12"
              lazy-rules
              :rules="[(val) => !!val || 'Porfavor informe o nº de agente']"
            />

            <q-input
              v-model="form.provincia"
              label="Provincia"
              class="col-12"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Informe a província',
              ]"
            />

            <q-input
              v-model="form.municipio"
              label="Município"
              class="col-12"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Informe o município',
              ]"
            />

            <q-input
              v-model="form.comuna"
              label="Comuna"
              class="col-12"
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Informe a Comuna']"
            />

            <q-input
              v-model="form.localidade"
              label="Localidade"
              class="col-12"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Informe a localidade',
              ]"
            />
            <q-select
              v-model="form.categoria_id"
              :options="categorias"
              option-value="id"
              option-label="categoria"
              map-options
              emit-value
              label="Selecione uma categoria"
            />
            <q-input
              v-model="form.habilitacao"
              label="Habilitação"
              class="col-12"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Informe a habilitação',
              ]"
            />
            <q-input
              v-model="form.area_formacao"
              label="Área de formação"
              class="col-12"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Informe a área de formação',
              ]"
            />
            <q-input
              v-model="form.instituto_formacao"
              label="Instituto de formação"
              class="col-12"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) ||
                  'Informe o nome da instituição onde se formou',
              ]"
            />

            <q-btn
              type="submit"
              :icon="
                isUpdate ? 'mdi-file-edit-outline' : 'mdi-content-save-all'
              "
              color="info"
              class="full-width"
              :label="
                isUpdate
                  ? 'Actualizar dados do funcionário'
                  : 'Cadastrar o funcionário'
              "
            />

            <!-- Btn delete for mobile -->
            <q-btn
              v-if="$q.platform.is.mobile && isUpdate"
              @click="deletarItem(form)"
              icon="mdi-delete-empty"
              color="negative"
              class="full-width"
              label="Apagar dados do  funcionário"
            />

            <q-btn
              v-if="$q.platform.is.mobile"
              flat
              icon="mdi-format-list-bulleted"
              color="secondary"
              class="full-width q-pa-sm"
              label="Lista de funcionários"
              :to="{ name: 'funcionarios' }"
            />
          </div>
        </q-form>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import usenotification from "src/composible/useNotify";
import userApi from "src/composible/userApi";
import { Loading, useQuasar } from "quasar";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "form-categoria",
  setup() {
    const { post, getById, update, list, remove, uploadImage, fileName } =
      userApi();

    const { notifyError, notifySuccess } = usenotification();
    const table = "funcionarios";
    const router = useRouter();
    const route = useRoute();
    const $q = useQuasar();
    const categorias = ref([]);
    const image = ref([]);
    const form = ref({
      nome: "",
      nome_pai: "",
      nome_mae: "",
      num_agente: "",
      num_bilhete: "",
      data_emissao: "",
      data_caducidade: "",
      data_nascimento: "",
      provincia: "",
      municipio: "",
      comuna: "",
      localidade: "",
      categoria_id: "",
      habilitacao: "",
      area_formacao: "",
      instituto_formacao: "",
      img_url: "",
      file_name: "",
    });

    const isUpdate = computed(() => {
      return route.params.id;
    });

    const listarCategorias = async () => {
      categorias.value = await list("categorias");
    };

    const deletarItem = async (item) => {
      try {
        $q.dialog({
          title: "Confirmação",
          message: `tens a certeza que pretendes eliminar ${item.nome} ?`,
          cancel: true,
          persistent: true,
        }).onOk(async () => {
          Loading.show({ message: "Apagando informação do funcionário..." });
          await remove(table, item.id);
          router.push({ name: "funcionario" });
          notifySuccess("Funcionário apagado com sucesso");
        });
      } catch (error) {
        notifyError(error.message);
      } finally {
        Loading.hide();
      }
    };
    onMounted(() => {
      listarCategorias();
      if (isUpdate.value) {
        getItem(table, isUpdate.value);
      }
    });

    const getItem = async (table, id) => {
      try {
        Loading.show({ message: "Carregando informações" });
        form.value = await getById(table, id);
      } catch (error) {
        notifyError(error.message);
      } finally {
        Loading.hide();
      }
    };

    const addItems = async () => {
      try {
        if (image.value.length > 0) {
          await uploadImage(image.value[0], "sgdme").then((imgUrl) => {
            form.value.img_url = imgUrl;
            form.value.file_name = fileName;
          });
        }
        if (isUpdate.value) {
          Loading.show({ message: "Actualização em processamento" });
          await update(table, form.value);
          notifySuccess("Funcionário actualizado com sucesso");
        } else {
          Loading.show({ message: "Cadastro em processamento" });
          await post(table, form.value);
          notifySuccess("Funcionário cadastrada com sucesso");
        }
      } catch (error) {
        notifyError(error.message);
      } finally {
        Loading.hide();
        router.push({ name: "funcionarios" });
      }
    };

    return {
      form,
      isUpdate,
      table,
      image,
      deletarItem,
      addItems,
      categorias,
    };
  },
};
</script>
<style lang="css" scoped>
.margin-bottom {
  margin-bottom: 80px !important;
}
</style>
