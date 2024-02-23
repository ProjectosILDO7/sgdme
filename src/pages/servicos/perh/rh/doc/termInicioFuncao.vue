<template>
  <div>
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
          No dia {{ data }}, compareceu no Gabinete do Senhor
          {{ addInfo.directoMunicipal }}, Director Municipal da Educação,
          <span v-if="item[0].genero == 'Masculino'">o</span
          ><span v-if="item[0].genero == 'Femenino'">a</span> Senhor<span
            v-if="item[0].genero == 'Masculino'"
            >o</span
          ><span v-if="item[0].genero == 'Femenino'">a</span>
          {{ item[0].nome }}, filh<span v-if="item[0].genero == 'Masculino'"
            >o</span
          ><span v-if="item[0].genero == 'Femenino'">a</span> de
          {{ item[0].nome_pai }} e de {{ item[0].nome_mae }}, natural de
          {{ item[0].municipio }} comuna de {{ item[0].comuna }}, Município de
          {{ item[0].municipio }}, Província de {{ item[0].provincia }},
          nascid<span v-if="item[0].genero == 'Femenino'">a</span
          ><span v-if="item[0].genero == 'Masculino'">o</span> aos
          {{ item[0].data_nascimento }}, portadora do B.I. nº
          {{ item[0].num_bilhete }}, emitido pelo sector de Identificação Civil
          de Luanda aos {{ item[0].data_emissao }}, habilitada com
          {{ item[0].habilitacao }}, feita na {{ item[0].instituto_formacao }}.
          A fim de
          <span v-if="addInfo.tipoTermo == ''">
            iniciar as suas funções como docente com a categoria de
            {{ item[0].categorias.categoria }} cargo para qual foi contratado,
            dia {{ item[0].data_inicio_funcao }}</span
          ><spna v-else
            >reconstituir o seu termo de inicio de funções como docente, com a
            categoria de {{ item[0].categorias.categoria }}, com inicio de
            funções a {{ item[0].data_inicio_funcao }}.</spna
          >
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
          <b
            ><span v-if="item[0].genero == 'Masculino'">o</span
            ><span v-if="item[0].genero == 'Femenino'">a</span> Docente</b
          >
          <p>______________________________</p>
          {{ item[0].nome }}
        </div>

        <div class="col-6 text-center" style="line-height: 1.5">
          <br />
          <br />
          <br />
          <br />
          <br />
          <b
            ><span v-if="model2 == 'Chefe da Secção do P.E.R.H'">
              Chefe da Secção do P.E.R.H
            </span></b
          ><b
            ><span v-if="model2 == 'Interno(a)'">
              Na Ausencia do Chefe de Sec. do P.E.R.H
            </span></b
          >
          <p>________________________________</p>
          <span v-if="model2 == 'Chefe da Secção do P.E.R.H'">
            {{ addInfo.chef_PERH }}
          </span>
          <b
            ><span v-if="model2 == 'Interno(a)'">
              {{ addIfon.chef_PERH_interino }}
            </span></b
          >
          <b
            ><span v-if="model2 == 'Interno(a)'">
              ({{ addIfon.chef_PERH_interino_funcao }})
            </span></b
          >
        </div>

        <div class="col-6 text-center" style="line-height: 1.5">
          <br />
          <br />
          <br />
          <br />
          <br />
          <b
            ><span v-if="model == 'Director Municipal'">
              Chefe da Secção do P.E.R.H
            </span></b
          ><b
            ><span v-if="model == 'Director Interino'">
              Na Ausencia do Director Municipal
            </span></b
          >
          <p>________________________________</p>
          <span v-if="model == 'Director Municipal'">
            {{ addInfo.directoMunicipal }}
          </span>
          <b
            ><span v-if="model2 == 'Director Interino'">
              {{ addIfon.directoMunicipal_interino }}
            </span></b
          >
          <b
            ><span v-if="model2 == 'Director Interino'">
              ({{ addIfon.directoMunicipal_interino_funcao }})
            </span></b
          >
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
  props: {
    item: {
      type: Object,
      required: true,
    },
    addInfo: {
      type: Object,
      required: true,
    },
    data: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    model2: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const tabela = "funcionarios";
    const pdfSrc = ref(null);
    const route = useRoute();
    const docRef = ref();
    const $q = useQuasar();
    const { getById, getFuncionariosWithCategoriasAndEscolas } = useApi();
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
      gerarPDF();
    });

    const idFuncionario = computed(() => {
      return route.params.id;
    });

    const carregarFuncionario = async () => {
      try {
        $q.loading.show("Carregar dados...");
        dados.value = await getFuncionariosWithCategoriasAndEscolas(
          tabela,
          idFuncionario.value
        );
        console.log(dados.value);
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
