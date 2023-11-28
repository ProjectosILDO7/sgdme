<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <q-form class="row justify-center" @submit.prevent="userLogin">
          <p class="col-12 text-h5 text-center q-mt-lg">Login</p>
          <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-sm">
            <q-input
              v-model="form.email"
              label="E-mail"
              class="col-12"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Porfavor digite seu e-mail',
              ]"
            />

            <q-input
              v-model="form.password"
              label="Senha"
              type="password"
              class="col-12"
              :rules="[
                (val) =>
                  (val !== null && val !== '') || 'Porfavor digite sua senha',
                (val) =>
                  (val > 0 && val >= 6) ||
                  'A sua senha deve ter maior ou igual a 6 caracteres',
              ]"
            ></q-input>

            <q-btn
              type="submit"
              label="Entrar"
              class="full-width q-mt-lg"
              glossy
              color="purple"
              no-caps
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
import useNotification from "src/composible/useNotify";
import { ref } from "vue";
import { Loading, useQuasar } from "quasar";
import { useRouter } from "vue-router";
export default {
  name: "form-login",
  setup() {
    const { login } = userAuth();
    const { notifyError, notifySuccess } = useNotification();
    const $q = useQuasar();
    const router = useRouter();
    const form = ref({
      email: "",
      password: "",
      router,
    });

    const userLogin = async () => {
      try {
        Loading.show({ message: "Porfavor aguarde..." });
        await login(form.value);
        router.push({ name: "admin" });
        notifySuccess("Autorizado com sucesso");
      } catch (error) {
        notifyError(error.message);
      } finally {
        Loading.hide();
      }
    };
    return {
      form,
      userLogin,
    };
  },
};
</script>
<style scoped></style>
