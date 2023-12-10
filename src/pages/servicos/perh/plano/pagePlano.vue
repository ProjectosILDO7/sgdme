<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <div class="q-gutter-x-md">
          <topo-name-page-vue :titulo="titulo" />
          <btn-back-page-vue />
        </div>
        <q-separator />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import btnBackPageVue from "src/components/btnBack/btnBackPage.vue";
import { defineComponent } from "vue";
import topoNamePageVue from "src/components/topoNamePage/topoNamePage.vue";

export default defineComponent({
  name: "page-plano",
  components: { btnBackPageVue, topoNamePageVue },
  setup() {
    const titulo = "Área do plano";
    return {
      titulo,
    };
  },
});
</script>
