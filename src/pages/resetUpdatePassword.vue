<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <q-form class="row justify-center" @submit.prevent="updatePassword">
          <p class="col-12 text-h5 text-center q-mt-lg">Redefinição de senha</p>
          <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-sm">
            <q-input
              v-model="password"
              label="Senha"
              class="col-12"
              type="password"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length >= 6) ||
                  'Porfavor digite a sua nova senha',
              ]"
            />

            <q-btn
              type="submit"
              label="Enviar nova senha"
              class="full-width q-mt-lg"
              glossy
              color="purple"
              no-caps
              icon="lock"
            />

            <q-btn
              :to="{ name: 'resetPassword' }"
              flat
              label="Esqueci minha senha"
              class="full-width q-mt-md"
              color="purple"
              no-caps
            />
            <q-btn
              :to="{ name: 'createUser' }"
              flat
              label="Criar uma conta"
              class="full-width q-mt-md"
              color="purple"
              no-caps
            />
          </div>
        </q-form>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import userAuth from "../composible/userAuthUser";
import { ref } from "vue";
import { Loading, QSpinnerGears, Notify, useQuasar } from "quasar";
import { useRouter, useRoute } from "vue-router";
export default {
  name: "form-login",
  setup() {
    const { resetPassword } = userAuth();
    const $q = useQuasar();
    const router = useRouter();
    const route = useRoute();
    const token = route.query.token;
    const password = ref("");

    const updatePassword = async () => {
      try {
        Loading.show({ message: "Porfavor aguarde..." });
        await resetPassword(token, password.value);
        router.push({ name: "loginPage" });
        $q.notify({
          type: "positive",
          message: "Senha alterada com sucesso",
        });
      } catch (error) {
        $q.notify({
          type: "negative",
          message: "Não foi possível alterar a sua palavra chave.",
        });
      } finally {
        Loading.hide();
      }
    };
    return {
      password,
      updatePassword,
    };
  },
};
</script>
<style scoped></style>
