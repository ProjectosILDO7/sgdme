<template>
  <div>
    <q-btn @click="gerarPDF">Gerar o documento</q-btn>
    <iframe
      v-if="pdfSrc"
      :src="pdfSrc"
      style="width: 100%; height: 500px"
    ></iframe>
    <div id="elemento-para-pdf" class="StyleFontDocument alignTextJustify">
      <div class="row" style="line-height: 1.5">
        <div class="col-12 text-center">República de Angola</div>
        <div class="col-12 text-center">Governo Provincial da Huíla</div>
        <div class="col-12 text-center">
          Administração Municipal do Chipindo
        </div>
        <div class="col-12 text-center">Direcção Municipal da Educação</div>
        <div class="col-12 text-center">
          <p>_________________________________________________</p>
          <p>
            <b style="font-size: 11px">(GABINETE DO DIRECTOR MUNICIPAL)</b>
          </p>
          <br />
          <b>TERMO DE INÍCIO DE FUNÇÕES</b>
          <br />
          <br />
        </div>
      </div>

      <div class="row">
        <div class="col-12" style="line-height: 1.5">
          No dia 30 de Janeiro de 2024, compareceu no Gabinete do Senhor Manuel
          Fernandes, Director Municipal da Educação, a Senhora Josina Cassova
          Vitato, filha de Albino Tchihongo e de Laurinda Tchionga, natural da
          comuna do Chipindo, Município do Chipindo, Província da Huíla, nascida
          aos 16 de Julho de 1968, portadora do B.I. nº 004784774HA045, emitido
          pelo sector de Identificação Civil de Luanda a 25 de Novembro de 2013,
          habilitada com a 12ª Classe, feita na Escola Secundária do II ciclo
          Nº. 1097 ex. N.º 3030 - Ingombota “Luanda”. A fim de reconstituir o
          seu termo de inicio de funções como docente, com a categoria de
          Professora do Ensino Primário e Secundário do 10º Grau, com inicio de
          funções a 10 de Janeiro de 1993.
        </div>

        <div class="col-12" style="line-height: 1.5">
          <br />
          Não havendo mais nada a tratar, lavrou-se o presente
          <b>TERMO DE INÍCIO DE FUNÇÕES</b>, que vai ser assinado por todos
          quanto nele intervêm.
        </div>

        <div class="col-12 text-center" style="line-height: 1.5">
          <br />
          <br />
          <br />
          <br />
          <b>O Docente</b>
          <p>______________________________</p>
        </div>

        <div class="col-6 text-center" style="line-height: 1.5">
          <br />
          <br />
          <br />
          <br />
          <br />
          <b>O Chefe da Secção do P.E.R.H</b>
          <p>________________________________</p>
        </div>

        <div class="col-6 text-center" style="line-height: 1.5">
          <br />
          <br />
          <br />
          <br />
          <br />
          <b>O Director Municipal</b>
          <p>________________________________</p>
        </div>
      </div>
    </div>
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
      $q.loading.show();
      const element = window.document.getElementById("elemento-para-pdf");
      //const element = document.getElementById("elemento-para-pdf");
      html2pdf()
        .from(element)
        .set({
          margin: 0.89,
          filename: "Testificação.pdf",
          html2canvas: { scale: 2 },
          jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        })
        .toPdf()
        .get("pdf")
        .then((pdf) => {
          const totalPages = pdf.internal.getNumberOfPages();
          for (let i = 1; i <= totalPages; i++) {
            pdf.setPage(i);
            const pageWidth = pdf.internal.pageSize.width;
            const imageTopWidth = 0.81; // Largura da imagem no topo
            const imageTopHeight = 0.81; // Altura da imagem no topo
            const imageTopX = (pageWidth - imageTopWidth) / 2; // Posição X da imagem no topo (centralizada)
            const imageTopY = 0.1; // Posição Y da imagem no topo
            const imageFooterWidth = 8; // Largura da imagem no rodapé
            const imageFooterHeight = 0.51; // Altura da imagem no rodapé
            const imageFooterX = pageWidth - imageFooterWidth - 0.1; // Posição X da imagem no rodapé (alinhada à direita)
            const imageFooterY = pdf.internal.pageSize.height - 0.6; // Posição Y da imagem no rodapé (altura da página - altura da imagem - margem inferior)

            pdf.addImage(
              "../../../../../../public/icons/ensigna.png",
              "PNG",
              //imageX,
              // 0.25,
              //imageWidth,
              // 0.52
              imageTopX,
              imageTopY,
              imageTopWidth,
              imageTopHeight
            );
            pdf.setFontSize(10);
            pdf.setTextColor(150);
            /*pdf.text(
              "Sistema Integrado DME",
              1,
              pdf.internal.pageSize.height - 0.5
            );*/
            pdf.addImage(
              "../../../../../../public/icons/RodapeIMG.png",
              "PNG",
              imageFooterX,
              imageFooterY,
              imageFooterWidth,
              imageFooterHeight
            );
          }
          const blob = new Blob([pdf.output("blob")], {
            type: "application/pdf",
          });
          const url = URL.createObjectURL(blob);
          pdfSrc.value = url;
        });
      $q.loading.hide();
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
<style scoped>
.StyleFontDocument {
  font-family: "Century Gothic", Arial, sans-serif;
}
.alignTextJustify {
  text-align: justify;
}
p {
  margin-top: -8px !important;
}
</style>
