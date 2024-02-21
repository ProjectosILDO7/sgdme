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
              v-bind="{ ...inputConfig }"
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
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Porfavor digite o nome da escola',
              ]"
              v-bind="{ ...inputConfig }"
            />
            <q-input
              v-model="form.nome_pai"
              label="Nome do pai"
              class="col-12"
              :rules="[
                (val) => (val && val.length > 0) || 'Porfavor o nome do pai',
              ]"
              v-bind="{ ...inputConfig }"
            />
            <q-input
              v-model="form.nome_mae"
              label="Nome da maê"
              class="col-12"
              :rules="[
                (val) => (val && val.length > 0) || 'Porfavor o nome da maê',
              ]"
              v-bind="{ ...inputConfig }"
            />

            <q-input
              v-model="form.num_bilhete"
              label="Nº do bilhete"
              class="col-12"
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Porfavor informe o nº do Bilhete',
                (val) =>
                  (val && val.length == 14) ||
                  'O nº do Bilhete tem de ter no mínimo 14 caracteres',
              ]"
              v-bind="{ ...inputConfig }"
            />

            <q-input
              v-model="form.data_emissao"
              label="Data de emissão"
              class="col-12"
              type="date"
              :rules="[
                (val) =>
                  (val && val.length > 0) ||
                  'Porfavor informe a data de emissão',
              ]"
              v-bind="{ ...inputConfig }"
            />

            <q-input
              v-model="form.data_caducidade"
              label="Data de caducidade"
              class="col-12"
              type="date"
              :rules="[
                (val) =>
                  (val && val.length > 0) ||
                  'Porfavor informe a data de caducidade',
              ]"
              v-bind="{ ...inputConfig }"
            />
            <q-input
              v-model="form.data_nascimento"
              label="Data de nascimento"
              class="col-12"
              type="date"
              :rules="[
                (val) =>
                  (val && val.length > 0) ||
                  'Porfavor informe a data de nascimento',
              ]"
              v-bind="{ ...inputConfig }"
            />
            <q-select
              v-model="form.genero"
              :options="options"
              option-label="name"
              label="Selecione o gênero"
              :rules="[
                (val) =>
                  (val && val.length > 0) ||
                  'Porfavor informe o gênero do funcionário',
              ]"
              v-bind="{ ...inputConfig }"
            />

            <q-input
              v-model="form.data_inicio_funcao"
              label="Data de início de função"
              class="col-12"
              type="date"
              :rules="[
                (val) =>
                  (val && val.length > 0) ||
                  'Porfavor informe a data de início de função',
              ]"
              v-bind="{ ...inputConfig }"
            />
            <q-input
              v-model="form.num_agente"
              label="Nº de agente"
              class="col-12"
              :rules="[
                (val) => !!val || 'Porfavor informe o nº de agente',
                (val) =>
                  (val && val.length == 7) ||
                  'O nº de agente tem de ter no mínimo 7 caracteres',
              ]"
              v-bind="{ ...inputConfig }"
            />

            <q-input
              v-model="form.provincia"
              label="Provincia"
              class="col-12"
              :rules="[
                (val) => (val && val.length > 0) || 'Informe a província',
              ]"
              v-bind="{ ...inputConfig }"
            />

            <q-input
              v-model="form.municipio"
              label="Município"
              class="col-12"
              :rules="[
                (val) => (val && val.length > 0) || 'Informe o município',
              ]"
              v-bind="{ ...inputConfig }"
            />

            <q-input
              v-model="form.comuna"
              label="Comuna"
              class="col-12"
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Informe a Comuna']"
              v-bind="{ ...inputConfig }"
            />

            <q-input
              v-model="form.localidade"
              label="Localidade"
              class="col-12"
              :rules="[
                (val) => (val && val.length > 0) || 'Informe a localidade',
              ]"
              v-bind="{ ...inputConfig }"
            />

            <q-select
              v-model="form.categoria_id"
              :options="categorias"
              option-value="id"
              option-label="categoria"
              map-options
              emit-value
              label="Selecione uma categoria"
              :rules="[
                (val) => (val && !!val) || 'Porfavor Selecione uma categoria',
              ]"
              v-bind="{ ...inputConfig }"
            />

            <q-input
              type="numeric"
              v-model="form.salario_base"
              label="Vencimento Base"
              class="col-12"
              :rules="[
                (val) => (val && val.length > 0) || 'Informe o salário base',
              ]"
              v-bind="{ ...inputConfig }"
            />
            <q-input
              v-model="form.salario_liquido"
              label="Vencimento Líquido"
              class="col-12"
              :rules="[
                (val) => (val && val.length > 0) || 'Informe o salário líquido',
              ]"
              v-bind="{ ...inputConfig }"
            />

            <q-select
              v-model="form.escola_id"
              :options="escolas"
              option-value="id"
              option-label="nome"
              map-options
              emit-value
              label="Selecione a escola a que pertence"
              :rules="[
                (val) => (val && !!val) || 'Porfavor a escola a que pertence',
              ]"
              v-bind="{ ...inputConfig }"
            />
            <q-input
              v-model="form.habilitacao"
              label="Habilitação"
              class="col-12"
              :rules="[
                (val) => (val && val.length > 0) || 'Informe a habilitação',
              ]"
              v-bind="{ ...inputConfig }"
            />
            <q-input
              v-model="form.area_formacao"
              label="Área de formação"
              class="col-12"
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Informe a área de formação',
              ]"
              v-bind="{ ...inputConfig }"
            />
            <q-input
              v-model="form.instituto_formacao"
              label="Instituto de formação"
              class="col-12"
              :rules="[
                (val) =>
                  (val && val.length > 0) ||
                  'Informe o nome da instituição onde se formou',
              ]"
              v-bind="{ ...inputConfig }"
            />

            <q-btn
              type="submit"
              :icon="
                isUpdate ? 'mdi-file-edit-outline' : 'mdi-content-save-all'
              "
              class="full-width"
              :label="
                isUpdate
                  ? 'Actualizar dados do funcionário'
                  : 'Cadastrar o funcionário'
              "
              v-bind="{ ...btnConfig }"
            />

            <!-- Btn delete for mobile -->
            <q-btn
              v-if="$q.platform.is.mobile && isUpdate"
              @click="deletarItem(form)"
              outline
              icon="mdi-delete-empty"
              color="negative"
              class="full-width"
              label="Apagar dados do  funcionário"
              no-caps
            />

            <q-btn
              v-if="$q.platform.is.mobile"
              flat
              icon="mdi-format-list-bulleted"
              color="primary"
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
import { ref, onMounted, computed, watch } from "vue";
import usenotification from "src/composible/useNotify";
import userApi from "src/composible/userApi";
import { Loading, useQuasar } from "quasar";
import { useRouter, useRoute } from "vue-router";
import { btnConfig, inputConfig } from "src/utils/inputVisual";

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
    const options = ref(["Masculino", "Femenino"]);
    const categorias = ref([]);
    const escolas = ref([]);
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
      genero: "",
      data_inicio_funcao: "",
      provincia: "",
      municipio: "",
      comuna: "",
      localidade: "",
      categoria_id: "",
      escola_id: "",
      habilitacao: "",
      area_formacao: "",
      instituto_formacao: "",
      img_url: "",
      file_name: "",
      salario_base: "",
      salario_liquido: "",
    });

    watch(() => {});

    onMounted(() => {});

    const isUpdate = computed(() => {
      return route.params.id;
    });

    const listarCategorias = async () => {
      categorias.value = await list("categorias");
    };

    const listarEscolas = async () => {
      escolas.value = await list("escolas");
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
      listarEscolas();
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
      escolas,
      options,
      btnConfig,
      inputConfig,
    };
  },
};
</script>
<style lang="css" scoped>
.margin-bottom {
  margin-bottom: 80px !important;
}
</style>
