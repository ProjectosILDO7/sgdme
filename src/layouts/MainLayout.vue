<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> DME </q-toolbar-title>

        <q-btn flat icon="person" v-if="user">
          Ola {{ user.user_metadata.name }}</q-btn
        >
        <q-btn color="deep-white" icon="logout" round flat @click="logoutPage">
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Menu </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import userAuthUser from "src/composible/userAuthUser";
import { useQuasar, Loading } from "quasar";
import { useRouter } from "vue-router";

const linksList = [
  {
    title: "Home",
    caption: "painel de controle",
    icon: "mdi-home",
    routeName: "admin",
  },
  {
    title: "Categorias",
    caption: "informações de categorias de funcionários",
    icon: "mdi-shape",
    routeName: "categorias",
  },

  {
    title: "Funcionários",
    caption: "dados de funcionários",
    icon: "mdi-account-tie",
    routeName: "funcionarios",
  },
  {
    title: "Escolas",
    caption: "nformações gerais de escolas",
    icon: "mdi-school",
    routeName: "escolas",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const { logout, user } = userAuthUser();
    const $q = useQuasar();
    const router = useRouter();

    const logoutPage = async () => {
      try {
        $q.dialog({
          title: "SAIR",
          message: "Você realmente deseja saír?",
          cancel: true,
          persistent: true,
        }).onOk(async () => {
          Loading.show({ message: "Sair da aplicação ..." });
          await logout().finally(() => Loading.hide());
          router.replace({ path: "/login" });
        });
      } catch (error) {
        console.log(error.message);
      } finally {
        Loading.hide();
      }
    };

    return {
      logout,
      logoutPage,
      user,
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
