<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <p class="text-body1">
          Documento: <i><b>Declaração de serviço</b></i>
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
                  size="sm"
                  icon="mdi-file-document-outline"
                  label="Declaração de serviço"
                  color="primary"
                  @click="OpenModal2(props.row.id)"
                />
              </q-td>
            </template>
          </q-table>
        </div>

        <!-- List for mobile -->
        <q-list bordered v-if="$q.platform.is.mobile && rows != '' && docPdf">
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
                            label="Guia de colocaçao"
                            @click="OpenModal2(funcionario.id)"
                          />
                        </q-item-label>
                      </q-item-section>
                    </q-item>

                    <q-item clickable v-close-popup>
                      <q-item-section>
                        <q-item-label>
                          <q-btn
                            dense
                            flat
                            size="sm"
                            label="Termo de função"
                            icon="mdi-file-document-outline"
                            color="blue-grey-8"
                            @click="OpenModal(funcionario.id)"
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

        <!-- Modal 2 preenchimento da guia de colocaçao -->
        <q-dialog v-model="modal2">
          <q-card style="width: 700px; max-width: 80vw">
            <q-form @submit.prevent="printDoc2">
              <q-card-section>
                <div class="text-h6" v-if="$q.platform.is.desktop">
                  <q-icon name="mdi-cloud-print" /> Documento:
                  <b>DECLARAÇÃO DE SERVIÇO</b>
                </div>
                <div
                  class="text-small col-12 text-center"
                  v-if="$q.platform.is.mobile"
                >
                  <q-icon name="mdi-cloud-print" /> Documento:
                  <p><b>DECLARAÇÃO DE SERVIÇO</b></p>
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="row col-12 text-justify">
                  <q-input
                    class="q-mt-md col-12"
                    label="Provincia a que pertence a direcção"
                    dense
                    v-bind="{ ...inputConfig }"
                    v-model="addInfo.provincia"
                    :rules="[
                      (val) =>
                        (val && !!val) ||
                        'Porfavor informe o nome da província',
                    ]"
                  />
                  <q-input
                    class="q-mt-sm col-12"
                    label="Município a que pertence a Direcçao"
                    dense
                    v-bind="{ ...inputConfig }"
                    v-model="addInfo.municipio"
                    :rules="[
                      (val) => (val && !!val) || 'Porfavor informe o Município',
                    ]"
                  />
                  <q-input
                    class="q-mt-md col-12"
                    label="Nº de conta bancária"
                    dense
                    v-bind="{ ...inputConfig }"
                    v-model="addInfo.conta_bancaria"
                    :rules="[
                      (val) =>
                        (val && !!val) || 'Porfavor o nº de conta bancária',
                    ]"
                  />
                  <q-input
                    class="q-mt-md col-12"
                    label="Efeito da declaração"
                    dense
                    v-bind="{ ...inputConfig }"
                    v-model="addInfo.efeito_da_declaracao"
                    :rules="[
                      (val) =>
                        (val && !!val) || 'Informe o efeito desta declaração',
                    ]"
                    hint="A presente Declaração destina-se para efeito de:"
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
                      v-bind="{ ...inputConfig }"
                      :rules="[
                        (val) =>
                          (val && !!val) ||
                          'Porfavor selecione quem assinará o documento',
                      ]"
                    />
                    <q-input
                      outlined
                      dense
                      v-model="addInfo.directoMunicipal"
                      label="Informe o nome do Director Municipal"
                      class="col-xs-12 col-sm-12 col-md-6 col-lg-6 q-mt-sm"
                      v-if="model == 'Director Municipal'"
                      v-bind="{ ...inputConfig }"
                      :rules="[
                        (val) =>
                          (val && !!val) ||
                          'Porfavor informe o nome do Director Municipal',
                      ]"
                    />
                    <q-input
                      outlined
                      dense
                      v-model="addInfo.directoMunicipal_interino"
                      label="Informe o nome do Director Municipal Interino"
                      class="col-xs-12 col-sm-12 col-md-6 col-lg-6 q-mt-sm"
                      v-if="model == 'Director Interino'"
                      v-bind="{ ...inputConfig }"
                      :rules="[
                        (val) =>
                          (val && !!val) ||
                          'Porfavor informe o nome do Director em Interino',
                      ]"
                    />
                    <q-input
                      outlined
                      dense
                      v-model="addInfo.directoMunicipal_interino_funcao"
                      label="Informe a função do Director Municipal Interino"
                      class="col-xs-12 col-sm-12 col-md-6 col-lg-6 q-mt-sm"
                      v-if="model == 'Director Interino'"
                      v-bind="{ ...inputConfig }"
                      :rules="[
                        (val) =>
                          (val && !!val) ||
                          'Porfavor informe a função do DIrector Interino',
                      ]"
                    />
                  </div>
                </div>
              </q-card-section>

              <q-card-actions align="right" class="bg-white text-teal">
                <q-btn flat icon="mdi-close" label="Cancelar" v-close-popup />
                <q-btn
                  type="submit"
                  flat
                  icon="mdi-cloud-print"
                  label="Gerar declaração de serviço"
                />
              </q-card-actions>
            </q-form>
          </q-card>
        </q-dialog>
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
import moment from "moment";
import { btnConfig, inputConfig } from "src/utils/inputVisual";
export default {
  name: "DocRH",
  components: { btnBackPage },
  setup() {
    const filter = ref("");
    const dataActual = moment();
    const router = useRouter();
    const escola_id = ref();
    const tabela = "funcionarios";
    const { notifyError, notifySuccess } = usenotification();
    const $q = useQuasar();
    const escolas = ref([]);
    const modal = ref(false);
    const model = ref(null);
    const model2 = ref(null);
    const modal2 = ref(false);
    const dados = ref({});
    const modelIntegrante = ref(null);
    const options = ref(["Director Municipal", "Director Interino"]);
    const options2 = ref(["Chefe da Secção do P.E.R.H", "Interino(a)"]);
    const infoFuncionario = ref({});
    const addInfo = ref({
      efeito_da_declaracao: "",
      chef_PERH: "",
      chef_PERH_interino: "",
      chef_PERH_interino_funcao: "",
      directoMunicipal: "",
      directoMunicipal_interino: "",
      directoMunicipal_interino_funcao: "",
      conta_bancaria: "",
      provincia: "",
      municipio: "",
    });
    const docPdf = ref(true);
    const rows = ref([]);
    const data = ref("");
    const idFunc = ref("");
    const {
      getFuncionariosWithCategoriasAndEscolas,
      getFuncionarioWithCategoriasAndEscolas,
      list,
    } = userApi();

    onMounted(() => {
      carregarFuncionarios();
      listarEscolas();
    });

    const listarEscolas = async () => {
      escolas.value = await list("escolas");
    };
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

    const OpenModal = async (id) => {
      modal2.value = false;
      modal.value = true;
      try {
        dados.value = await getFuncionarioWithCategoriasAndEscolas(tabela, id);
      } catch (error) {
        console.log(error.message);
      }
    };

    const OpenModal2 = async (id) => {
      modal.value = false;
      modal2.value = true;
      try {
        dados.value = await getFuncionarioWithCategoriasAndEscolas(tabela, id);
      } catch (error) {
        console.log(error.message);
      }
    };

    const printDoc = async () => {
      if (addInfo.value) {
        if (typeof addInfo.value === "object") {
          router.push({
            name: "docPrint",
            params: {
              dados: JSON.stringify(dados.value),
              addInfo: JSON.stringify(addInfo.value),
              model2: model2.value,
              model: model.value,
            },
          });
        } else {
          console.error("addInfo.value é um array vazio ou não é um array");
        }
      } else {
        console.error("addInfo.value ou idFunc.value está undefined");
      }
    };

    const printDoc2 = async () => {
      if (addInfo.value) {
        if (typeof addInfo.value === "object") {
          router.push({
            name: "docPrintDeclaracao",
            params: {
              dados: JSON.stringify(dados.value),
              addInfo: JSON.stringify(addInfo.value),
              model2: model2.value,
              model: model.value,
            },
          });
        } else {
          console.error("addInfo.value é um array vazio ou não é um array");
        }
      } else {
        console.error("addInfo.value está undefined");
      }
      // console.log(id);
      /* try {
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
      }*/
      //
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
      printDoc2,
      modal,
      modal2,
      listarEscolas,
      docPdf,
      escolas,
      inputConfig,
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
      OpenModal,
      OpenModal2,
      dados,
      escola_id,
    };
  },
};
</script>
