<template>
  <q-dialog
    :full-width="$q.platform.mobile"
    :model-value="show"
    @click="handClose"
  >
    <q-card>
      <q-card-section> Imagen </q-card-section>
      <q-card-section> Nome </q-card-section>
      <q-card-section> Conteudo </q-card-section>
      <q-card-actions>
        <q-btn
          label="cancelar"
          color="secondary"
          icon="mdi-close"
          v-close-popup
        />
        <q-btn label="Ok" color="positive" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
export default {
  name: "modalDetail",
  props: {
    itens: {
      type: Object,
    },
    show: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    const funcionarios = ref([]);
    const $q = useQuasar();

    const handClose = () => {
      emit("closeModal");
    };

    return {
      handClose,
      $q,
      funcionarios,
    };
  },
};
</script>
