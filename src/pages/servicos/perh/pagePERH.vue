<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <topo-name-page-vue :titulo="titulo" />
        <btn-back-page-vue />
        <q-separator />

        <div class="row q-gutter-sm q-pa-sm flex-center q-mt-md"></div>
        <div class="row q-gutter-sm q-pa-md flex-center">
          <q-btn
            icon="mdi-view-grid-outline"
            stack
            glossy
            color="purple"
            label="Área do Plano"
            :to="{ name: 'pagePlano' }"
          />
          <q-btn
            icon="mdi-finance"
            stack
            glossy
            color="purple"
            label="Área de Estatística"
          />
          <q-btn
            icon="mdi-account-group"
            stack
            glossy
            color="purple"
            label="Área de Recursos Humanos"
          />
          <q-btn
            icon="mdi-file-document-edit-outline"
            stack
            glossy
            color="purple"
            label="Secretaria Geral"
          />
          <q-btn
            icon="mdi-inbox-full"
            stack
            glossy
            color="purple"
            label="Áres de património"
          />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import btnBackPageVue from "src/components/btnBack/btnBackPage.vue";
import { defineComponent } from "vue";
import topoNamePageVue from "src/components/topoNamePage/topoNamePage.vue";

export default defineComponent({
  name: "Page-Recursos-Humanos",
  components: { btnBackPageVue, topoNamePageVue },
  setup() {
    const titulo =
      "Secção Municipal de Planeamento Estatística e Recursos Humanos";
    const backPage = () => {
      window.history.back();
    };
    return {
      backPage,
      titulo,
    };
  },
});
</script>

<style scoped>
.small-text {
  font-size: 10px; /* Tamanho de fonte menor */
}
</style>
