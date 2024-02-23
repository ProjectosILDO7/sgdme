<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <p class="text-body1">
          Documentos: <i>Termos de Início de funções & Guias de colocações</i>
        </p>
        <btn-back-page />
        <q-separator />
        <div class="q-pa-md" v-if="$q.platform.is.desktop && docPdf">
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
                      @click="printDoc(props.row.id)"
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

        <q-dialog v-model="modal">
          <q-card style="width: 700px; max-width: 80vw">
            <q-card-section>
              <div class="text-h6">
                <q-icon name="mdi-cloud-print" /> Documento:<b
                  >TERMO DE INÍCIO DE FUNÇÕES</b
                >
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div class="row col text-justify">
                <q-radio
                  size="xs"
                  v-model="addInfo.tipoTermo"
                  val=""
                  label="Novo Termo"
                  class="col-6"
                />
                <q-radio
                  size="sm"
                  v-model="addInfo.tipoTermo"
                  val=" - RECONSTITUIÇÃO"
                  label="Actualizar termo"
                  class="col-6"
                />
                <!-- custom size -->
                <b class="col-12 text-center">Asinaturas</b>
                <div class="q-gutter-sm col-12">
                  <q-select
                    outlined
                    dense
                    v-model="model"
                    :options="options"
                    label="Quem assinará o termo ?"
                    class="col-xs-12 col-sm-12 col-md-6 col-lg-6"
                  />
                  <q-input
                    outlined
                    dense
                    v-model="addInfo.directoMunicipal"
                    label="Informe o nome do Director Municipal"
                    class="col-xs-12 col-sm-12 col-md-6 col-lg-6 q-mt-sm"
                    v-if="model == 'Director Municipal'"
                  />
                  <q-input
                    outlined
                    dense
                    v-model="addInfo.directoMunicipal_interino"
                    label="Informe o nome do Director Municipal Interino"
                    class="col-xs-12 col-sm-12 col-md-6 col-lg-6 q-mt-sm"
                    v-if="model == 'Director Interino'"
                  />
                  <q-input
                    outlined
                    dense
                    v-model="addInfo.directoMunicipal_interino_funcao"
                    label="Informe a função do Director Municipal Interino"
                    class="col-xs-12 col-sm-12 col-md-6 col-lg-6 q-mt-sm"
                    v-if="model == 'Director Interino'"
                  />
                  <q-select
                    outlined
                    dense
                    v-model="model2"
                    :options="options2"
                    label="Integrante da assinatura"
                    class="col-xs-12 col-sm-12 col-md-6 col-lg-6"
                  />
                  <q-input
                    outlined
                    dense
                    v-model="addInfo.chef_PERH"
                    label="Informe a função do Director Municipal Interino"
                    class="col-xs-12 col-sm-12 col-md-6 col-lg-6 q-mt-sm"
                    v-if="model2 == 'Chefe da Secção do P.E.R.H'"
                  />
                  <q-input
                    outlined
                    dense
                    v-model="addInfo.chef_PERH_interino"
                    label="Informe o nome do Chefe de Secção Interino"
                    class="col-xs-12 col-sm-12 col-md-6 col-lg-6 q-mt-sm"
                    v-if="model2 == 'Interino(a)'"
                  />
                  <q-input
                    outlined
                    dense
                    v-model="addInfo.chef_PERH_interino_funcao"
                    label="Informe a função do Chefe de Seccão Interino"
                    class="col-xs-12 col-sm-12 col-md-6 col-lg-6 q-mt-sm"
                    v-if="model2 == 'Interino(a)'"
                  />
                </div>
              </div>
            </q-card-section>

            <q-card-actions align="right" class="bg-white text-teal">
              <q-btn flat icon="mdi-close" label="Cancelar" v-close-popup />
              <q-btn
                flat
                icon="mdi-cloud-print"
                label="Documento"
                v-close-popup
                @click="addInfoDoc"
              />
            </q-card-actions>
          </q-card>
        </q-dialog>

        <doc-termo-inicio-funcao
          :item="infoFuncionario"
          :addInfo="addInfo"
          :data="data"
          :model="model"
          :model2="model2"
          v-if="docPdf == false"
        />
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
import docTermoInicioFuncao from "src/pages/servicos/perh/rh/doc/termInicioFuncao.vue";
import moment from "moment";
export default {
  name: "DocRH",
  components: { btnBackPage, docTermoInicioFuncao },
  setup() {
    const filter = ref("");
    const dataActual = moment();
    const router = useRouter();
    const tabela = "funcionarios";
    const { notifyError, notifySuccess } = usenotification();
    const $q = useQuasar();
    const modal = ref(false);
    const model = ref(null);
    const model2 = ref(null);
    const modelIntegrante = ref(null);
    const options = ref(["Director Municipal", "Director Interino"]);
    const options2 = ref(["Chefe da Secção do P.E.R.H", "Interino(a)"]);
    const infoFuncionario = ref({});
    const addInfo = ref({
      tipoTermo: "",
      chef_PERH: "",
      chef_PERH_interino: "",
      chef_PERH_interino_funcao: "",
      directoMunicipal: "",
      directoMunicipal_interino: "",
      directoMunicipal_interino_funcao: "",
    });
    const docPdf = ref(true);
    const rows = ref([]);
    const data = ref("");
    const {
      brand,
      getById,
      getFuncionariosWithCategoriasAndEscolas,
      list,
      getFuncionarioWithCategoriasAndEscolas,
    } = userApi();
    onMounted(() => {
      carregarFuncionarios();
      moment.locale("pt-br", {
        months: [
          "janeiro",
          "Fevereiro",
          "Março",
          "Abril",
          "Maio",
          "Junho",
          "Julho",
          "Agosto",
          "Setembro",
          "Outubro",
          "Novembro",
          "Dezembro",
        ],
      });
      data.value = moment().format("D [de] MMMM [de] YYYY");
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

    const printDoc = async (id) => {
      //router.push({ name: "docPrint", params: { id: id } });
      console.log(id);
      try {
        $q.loading.show("Carregar dados do funcionário...");
        infoFuncionario.value = await getFuncionarioWithCategoriasAndEscolas(
          tabela,
          id
        );
        console.log(infoFuncionario.value[0]);
      } catch (error) {
        console.log(error.message);
      } finally {
        $q.loading.hide();
      }
      modal.value = true;
    };

    const addInfoDoc = () => {
      //modal.value = false;
      docPdf.value = false;
    };

    return {
      columns,
      filter,
      rows,
      printDoc,
      modal,
      docPdf,
      addInfoDoc,
      addInfo,
      options,
      options2,
      model,
      model2,
      modelIntegrante,
      data,
      dataActual,
      infoFuncionario,
    };
  },
};
</script>
