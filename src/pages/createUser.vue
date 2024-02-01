<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <q-form class="row justify-center" @submit.prevent="createUser">
          <p class="col-12 text-h5 text-center q-mt-lg">Cadastro de DME</p>
          <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-sm">
            <q-input
              v-model="form.name"
              label="Nome"
              class="col-12"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Porfavor digite seu nome',
              ]"
            />
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
              v-model="form.phone"
              label="Telemovel"
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
              label="Criar conta"
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
              :to="{ name: 'loginPage' }"
              flat
              label="Já tenho uma conta"
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
import userAuth from "src/composible/userAuthUser";
import useNotification from "src/composible/useNotify";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useQuasar, Loading, Notify } from "quasar";
export default {
  name: "form-login",
  setup() {
    const { register } = userAuth();
    const { notifyError, notifySuccess } = useNotification();
    const router = useRouter();
    const form = ref({
      email: "",
      password: "",
      name: "",
      phone: "",
      photoURL: "",
    });

    const createUser = async () => {
      try {
        Loading.show({ message: "Criando conta" });
        await register(form.value);
        router.push({
          name: "email-confirmation",
          query: { email: form.value.email },
        });
        notifySuccess("conta criada com sucesso");
      } catch (error) {
        notifyError(error.message);
      } finally {
        Loading.hide();
      }
    };
    return {
      form,
      createUser,
    };
  },
};
</script>
<style scoped></style>
