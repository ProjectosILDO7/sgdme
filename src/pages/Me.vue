<template>
  <q-layout>
    <q-page-container>
      <q-page padding>Pagina ME </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import userAuthUser from "src/composible/userAuthUser";
export default {
  name: "mePage",
  components: {},
  setup() {
    const { user } = userAuthUser();

    return {
      user,
    };
  },
};
</script>
