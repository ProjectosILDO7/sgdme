<template>
  <div>
    <q-btn @click="gerarPDF">Gerar o documento</q-btn>
    <div ref="docRef">Ildo Documento</div>
    <iframe
      v-if="pdfSrc"
      :src="pdfSrc"
      style="width: 100%; height: 500px"
    ></iframe>
  </div>
</template>

<script>
import html2pdf from "html2pdf.js";
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import useApi from "src/composible/userApi";
import { useQuasar } from "quasar";
import usenotification from "src/composible/useNotify";
import { document } from "postcss";
export default {
  setup() {
    const tabela = "funcionarios";
    const pdfSrc = ref(null);
    const route = useRoute();
    const docRef = ref();
    const $q = useQuasar();
    const { getById } = useApi();
    const dados = ref([]);

    const gerarPDF = () => {
      const doc = docRef.value;
      html2pdf()
        .from(doc)
        .toPdf()
        .output("datauristring")
        .then((src) => {
          console.log(src);
          pdfSrc.value = src;
        });
    };

    onMounted(() => {
      carregarFuncionario();
      console.log(idFuncionario.value);
    });

    const idFuncionario = computed(() => {
      return route.params.id;
    });

    const carregarFuncionario = async () => {
      try {
        $q.loading.show("Carregar dados...");
        dados.value = await getById(tabela, idFuncionario.value);
      } catch (error) {
        console.log(error.message);
      } finally {
        $q.loading.hide();
      }
    };

    return {
      pdfSrc,
      gerarPDF,
    };
  },
};
</script>
