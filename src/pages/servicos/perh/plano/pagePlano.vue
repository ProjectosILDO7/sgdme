<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <div class="q-gutter-x-md">
          <topo-name-page-vue :titulo="titulo" />
          <btn-back-page-vue />
        </div>
        <q-separator />

        <div class="row q-pt-sm flex-center">
          <p class="text-sm">Criar orçamento</p>

          <q-form class="col-12" @submit.prevent="addOrcamento">
            <q-input
              type="text"
              label="Nome do projecto"
              v-model="form.project_name"
              :rules="[(val) => !!val || 'Porfavor informe o nome do projecto']"
            />
            <q-input
              type="text"
              label="Area de actuação"
              v-model="form.area_actuacao"
              :rules="[(val) => !!val || 'Porfavor informe a área de actuação']"
            />

            <div class="q-gutter-md q-mt-md flex flex-center">
              <div>
                <p class="text-sm">Inicio da execução do projecto</p>
                <q-date
                  type="text"
                  class="q-mt-sm"
                  v-model="form.data_inicio"
                  :rules="[
                    (val) => !!val || 'Porfavor informe a data de início',
                  ]"
                />
              </div>

              <div>
                <p class="text-sm">Previsão de término da execução</p>
                <q-date
                  type="text"
                  class="q-mt-sm"
                  v-model="form.data_fim"
                  :rules="[
                    (val) =>
                      !!val || 'Porfavor informe a data do fim do programa',
                  ]"
                />
              </div>
            </div>

            <div class="q-pa-md q-gutter-sm">
              <p class="text-body1">Descrição do projecto</p>
              <q-editor
                :rules="[(val) => !!val || 'Porfavor informe a descrição']"
                v-model="form.descricao"
                :dense="$q.screen.lt.md"
                :toolbar="[
                  [
                    {
                      label: $q.lang.editor.align,
                      icon: $q.iconSet.editor.align,
                      fixedLabel: true,
                      list: 'only-icons',
                      options: ['left', 'center', 'right', 'justify'],
                    },
                    {
                      label: $q.lang.editor.align,
                      icon: $q.iconSet.editor.align,
                      fixedLabel: true,
                      options: ['left', 'center', 'right', 'justify'],
                    },
                  ],
                  [
                    'bold',
                    'italic',
                    'strike',
                    'underline',
                    'subscript',
                    'superscript',
                  ],
                  ['token', 'hr', 'link', 'custom_btn'],
                  ['print', 'fullscreen', 'upload', 'save'],
                  [
                    {
                      label: $q.lang.editor.formatting,
                      icon: $q.iconSet.editor.formatting,
                      list: 'no-icons',
                      options: [
                        'p',
                        'h1',
                        'h2',
                        'h3',
                        'h4',
                        'h5',
                        'h6',
                        'code',
                      ],
                    },
                    {
                      label: $q.lang.editor.fontSize,
                      icon: $q.iconSet.editor.fontSize,
                      fixedLabel: true,
                      fixedIcon: true,
                      list: 'no-icons',
                      options: [
                        'size-1',
                        'size-2',
                        'size-3',
                        'size-4',
                        'size-5',
                        'size-6',
                        'size-7',
                      ],
                    },
                    {
                      label: $q.lang.editor.defaultFont,
                      icon: $q.iconSet.editor.font,
                      fixedIcon: true,
                      list: 'no-icons',
                      options: [
                        'default_font',
                        'arial',
                        'arial_black',
                        'comic_sans',
                        'courier_new',
                        'impact',
                        'lucida_grande',
                        'times_new_roman',
                        'verdana',
                      ],
                    },
                    'removeFormat',
                  ],
                  ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

                  ['undo', 'redo'],
                  ['viewsource'],
                ]"
                :fonts="{
                  arial: 'Arial',
                  arial_black: 'Arial Black',
                  comic_sans: 'Comic Sans MS',
                  courier_new: 'Courier New',
                  impact: 'Impact',
                  lucida_grande: 'Lucida Grande',
                  times_new_roman: 'Times New Roman',
                  verdana: 'Verdana',
                }"
              />
            </div>

            <q-input
              type="text"
              label="Valor do custo"
              suffix="Kz"
              v-model="form.custo"
              :rules="[
                (val) => !!val || 'Porfavor informe o custo do projecto',
              ]"
            />

            <div class="q-pa-md q-gutter-sm">
              <q-btn
                icon="mdi-content-save"
                label="Criar orçamento"
                class="q-mt-sm full-width"
                color="secondary"
                type="submit"
              />
            </div>
          </q-form>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import btnBackPageVue from "src/components/btnBack/btnBackPage.vue";
import { defineComponent, ref } from "vue";
import topoNamePageVue from "src/components/topoNamePage/topoNamePage.vue";
import useNotification from "src/composible/useNotify";
import useApi from "src/composible/userApi";
import { Loading } from "quasar";

export default defineComponent({
  name: "page-plano",
  components: { btnBackPageVue, topoNamePageVue },
  setup() {
    const table = "orcamento_project";
    const date = new Date();

    const titulo = "Área do plano";
    const { notifyError, notifySuccess } = useNotification();
    const { post } = useApi();
    const form = ref({
      project_name: "",
      area_actuacao: "",
      data_inicio:
        date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate(),
      data_fim:
        date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate(),
      descricao: "",
      custo: "",
    });

    const addOrcamento = async () => {
      try {
        Loading.show({ message: "Criar orçamento" });
        await post(table, form.value);
        notifySuccess("Orçamento criado com sucesso");
      } catch (error) {
        notifyError(error.message);
      } finally {
        Loading.hide();
      }
    };

    return {
      addOrcamento,
      titulo,
      table,
      form,
    };
  },
});
</script>
