<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <div class="row">
          <q-table
            :rows="categorias"
            flat
            bordered
            :columns="columns"
            row-key="id"
            class="col-12"
            virtual-scroll
          >
            <template v-slot:top>
              <span class="text-h6">Categorias</span>
              <q-space />
              <q-btn
                icon="mdi-plus"
                label="Categorias"
                color="info"
                dense
                :to="{ name: 'form-categoria' }"
              />
            </template>
            <template v-slot:body-cell-actions="props">
              <q-td :props="props" class="q-gutter-x-sm text-center">
                <q-btn icon="mdi-pencil-outline" color="info" dense size="sm">
                  <q-tooltip>Alterar</q-tooltip>
                </q-btn>
                <q-btn
                  icon="mdi-delete-outline"
                  color="negative"
                  dense
                  size="sm"
                  ><q-tooltip>Apagar</q-tooltip></q-btn
                >
              </q-td>
            </template>
          </q-table>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
import { defineComponent } from "vue";
import { ref, onMounted } from "vue";
import userApi from "src/composible/userApi";
import usenotification from "src/composible/useNotify";
import { Loading } from "quasar";
export default {
  setup() {
    const categorias = ref([]);
    const { list } = userApi();
    const { notifyError, notifySuccess } = usenotification();
    const columns = [
      {
        name: "categoria",
        label: "Nome de categoria",
        align: "left",
        field: "categoria",
        sortable: true,
      },
      {
        name: "salario_base",
        label: "Salario Base",
        right: "left",
        field: "salario_base",
        sortable: true,
      },
      {
        name: "salario_liquido",
        label: "Salario Líquido",
        right: "left",
        field: "salario_liquido",
        sortable: true,
      },
      {
        name: "actions",
        label: "Opções",
        right: "left",
        field: "actions",
        sortable: true,
      },
    ];

    const listarCategorias = async () => {
      Loading.show({ message: "Carregado categorias" });
      try {
        categorias.value = await list("categorias");
        console.log(categorias.value);
      } catch (error) {
        notifyError(error.message);
      } finally {
        Loading.hide();
      }
    };

    onMounted(() => {
      listarCategorias();
    });

    return {
      columns,
      categorias,
    };
  },
};
</script>
