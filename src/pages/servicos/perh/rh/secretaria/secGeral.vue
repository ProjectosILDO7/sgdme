<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <p class="text-body1">Secretaria Geral</p>
        <btn-back-page />
        <q-separator />

        <div class="row col flex-center q-col-gutter-sm">
          <div
            class="col-xs-12 col-sm-12 col-md-3 col-lg-3 text-center q-mt-lg"
          >
            <q-btn
              stack
              label="Declarações de serviço"
              color="primary"
              icon="mdi-folder"
              class="full-width"
              :to="{ name: 'dservico' }"
            ></q-btn>
          </div>
          <div
            class="col-xs-12 col-sm-12 col-md-3 col-lg-3 text-center q-mt-lg"
          >
            <q-btn
              stack
              label="Guia de féria"
              color="primary"
              icon="mdi-folder"
              class="full-width"
            ></q-btn>
          </div>
          <div
            class="col-xs-12 col-sm-12 col-md-3 col-lg-3 text-center q-mt-lg"
          >
            <q-btn
              stack
              label="Guia médica"
              color="primary"
              icon="mdi-folder"
              class="full-width"
            ></q-btn>
          </div>
          <div
            class="col-xs-12 col-sm-12 col-md-3 col-lg-3 text-center q-mt-lg"
          >
            <q-btn
              stack
              label="Ordem de serviço"
              color="primary"
              icon="mdi-folder"
              class="full-width"
            ></q-btn>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
import btnBackPage from "src/components/btnBack/btnBackPage.vue";
export default {
  name: "pageSecretaria",
  components: { btnBackPage },
  setup() {},
};
</script>
