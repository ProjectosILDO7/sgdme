<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <q-form class="row justify-center" @submit.prevent="addCategoria">
          <p class="col-12 text-h5 text-center q-mt-lg">
            Registo de categorias
          </p>
          <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-sm">
            <q-input
              v-model="form.categoria"
              label="Categoria"
              class="col-12"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) ||
                  'Porfavor digite o nome da categoria',
              ]"
            />
            <q-input
              v-model="form.salario_base"
              label="Salário base"
              class="col-12"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Porfavor digite o salário base',
              ]"
            />
            <q-input
              v-model="form.salario_liquido"
              label="Salário líquido"
              class="col-12"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) ||
                  'Porfavor digite o salário liquido',
              ]"
            />

            <q-btn
              type="submit"
              icon="mdi-content-save-all"
              color="info"
              class="full-width"
              label="Cadastrar categoria"
            />
          </div>
        </q-form>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import usenotification from "src/composible/useNotify";
import userApi from "src/composible/userApi";
import { Loading } from "quasar";
import { useRouter } from "vue-router";

export default {
  name: "form-categoria",
  setup() {
    const { post } = userApi();
    const { notifyError, notifySuccess } = usenotification();
    const table = "categorias";
    const router = useRouter();
    const form = ref({
      categoria: "",
      salario_base: "",
      salario_liquido: "",
    });

    const addCategoria = async () => {
      try {
        Loading.show({ message: "Cadastro em processamento" });
        await post(table, form.value);
        router.push({ name: "categorias" });
        notifySuccess("Categoria cadastrada com sucesso");
      } catch (error) {
        notifyError(error.message);
      } finally {
        Loading.hide();
      }
    };

    return {
      form,
      table,
      addCategoria,
    };
  },
};
</script>
