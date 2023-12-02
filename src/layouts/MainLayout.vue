<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Header for mobile -->
    <q-header bordered class="bg-primary-3 text-white">
      <q-toolbar>
        <q-toolbar-title class="text-center">
          <q-avatar
            color="white"
            text-color="brown-5"
            icon="mdi-school-outline"
          />
          D.M.E
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- Header for Desktop -->
    <q-header elevated v-if="$q.platform.is.desktop">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> D.M.E </q-toolbar-title>

        <q-btn flat icon="person" v-if="user && $q.platform.is.desktop">
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

    <!-- Footer com tabs para os mobile -->
    <q-footer
      bordered
      class="bg-grey-3 text-primary"
      v-if="$q.platform.is.mobile"
    >
      <q-tabs
        no-caps
        active-color="primary"
        indicator-color="transparent"
        class="text-primary-8"
        v-model="tab"
        narrow-indicator
        align="justify"
        dense
      >
        <q-route-tab
          name="home"
          label="Home"
          icon="mdi-home"
          :to="{ name: 'admin' }"
        />

        <q-route-tab
          name="services"
          label="serviços"
          icon="mdi-widgets"
          :to="{ name: 'services-page' }"
        />
      </q-tabs>
    </q-footer>
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
    title: "Escolas",
    caption: "nformações gerais de escolas",
    icon: "mdi-school",
    routeName: "escolas",
  },
  {
    title: "Funcionários",
    caption: "dados de funcionários",
    icon: "mdi-account-tie",
    routeName: "funcionarios",
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
    const tab = ref("home");
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
      tab,
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
