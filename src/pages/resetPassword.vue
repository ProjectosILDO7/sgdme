<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <q-form class="row justify-center" @submit.prevent="resetPassword">
          <p class="col-12 text-h5 text-center q-mt-lg">Redefinir senha</p>
          <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-sm">
            <p class="text-body1">
              Esqueceu sua senha? sem problema vamos resolver. Informe-nos seu
              E-mail de seguida inviarémos um link de redefinição da sua senha
            </p>
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

            <q-btn
              icon="send"
              type="submit"
              label="Enviar"
              class="full-width q-mt-lg"
              glossy
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
import { Loading, QSpinnerGears, useQuasar } from "quasar";
export default {
  name: "form-login",
  setup() {
    const { sendEmailResetPassword } = userAuth();
    const $q = useQuasar();
    const form = ref({
      email: "",
    });

    const resetPassword = async () => {
      try {
        $q.loading.show({ message: "Porfavor aguarde..." });
        await sendEmailResetPassword(form.value);
        $q.notify({
          type: "positive",
          message:
            "Solicitou uma nova senha, porfavor verifique sua caixa de email",
        });
      } catch (error) {
        console.log(error.code);
        switch (error.code) {
          case "auth/too-many-requests":
            $q.notify({
              type: "negative",
              message: "Enviou muitas requisições, porfavor tente mais tarde",
            });
            break;

          default:
            $q.notify({
              type: "negative",
              message: error.message,
            });
            break;
        }
      } finally {
        $q.loading.hide();
      }
    };
    return {
      form,
      sendEmailResetPassword,
      resetPassword,
    };
  },
};
</script>
<style scoped></style>
src/boot/supabase
