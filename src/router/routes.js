const routes = [
  {
    path: "/admin",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", name: "admin", component: () => import("pages/Me.vue") },
      {
        path: "/categorias",
        name: "categorias",
        component: () => import("src/pages/categorias/listPage.vue"),
      },
      {
        path: "/form/:id?",
        name: "form-categoria",
        component: () => import("src/pages/categorias/FormCategoria.vue"),
      },
      {
        path: "/form/:id?",
        name: "form-escola",
        component: () => import("src/pages/escolas/FormItem.vue"),
      },
      {
        path: "/form/:id?",
        name: "form-funcionario",
        component: () => import("src/pages/funcionarios/FormItem.vue"),
      },
      {
        path: "/escolas",
        name: "escolas",
        component: () => import("src/pages/escolas/listPage.vue"),
      },
      {
        path: "/funcionarios",
        name: "funcionarios",
        component: () => import("pages/funcionarios/listPage.vue"),
      },
      {
        path: "/services",
        name: "services-page",
        component: () => import("pages/servicos/servicesPage.vue"),
      },
      {
        path: "/services-geral",
        name: "page-service",
        component: () => import("pages/servicos/servicesGeral.vue"),
      },
      {
        path: "/secCTI",
        name: "ctiPage",
        component: () => import("pages/servicos/cti/pageCTI.vue"),
      },
      {
        path: "/secPERH",
        name: "perh",
        component: () => import("pages/servicos/perh/pagePERH.vue"),
      },
      {
        path: "/secEdEnsino",
        name: "edEnsino",
        component: () => import("pages/servicos/edEnsino/pageEdEnsino.vue"),
      },
      {
        path: "/secInspecao",
        name: "inspencao",
        component: () => import("pages/servicos/inspencao/pageInspecao.vue"),
      },
      {
        path: "areaDoPlano",
        name: "pagePlano",
        component: () => import("pages/servicos/perh/plano/pagePlano.vue"),
      },
      {
        path: "/configuarações",
        name: "form-config",
        component: () => import("pages/config/FormConfig.vue"),
      },
      {
        path: "/ver-orcamentos",
        name: "orcamentos",
        component: () => import("pages/orcamentos/list-orcamentos.vue"),
      },
      {
        path: "/area-estatistica",
        name: "areaEstatistica",
        component: () =>
          import("pages/servicos/perh/estatistica/areaEstatistica.vue"),
      },
    ],
    meta: { requiresAuth: true },
  },

  {
    path: "/",
    component: () => import("layouts/HomeLayout.vue"),
    children: [
      {
        path: "",
        name: "loginPage",
        component: () => import("pages/loginPage.vue"),
      },
      {
        path: "/login",
        name: "loginDefault",
        component: () => import("pages/loginPage.vue"),
      },
      {
        path: "/count",
        name: "createUser",
        component: () => import("pages/createUser.vue"),
      },
      {
        path: "/email-confirmation",
        name: "email-confirmation",
        component: () => import("pages/registrationConfirme.vue"),
      },
      {
        path: "/reset",
        name: "resetPassword",
        component: () => import("pages/resetPassword.vue"),
      },
      {
        path: "/reset-password",
        name: "reset-password",
        component: () => import("pages/resetUpdatePassword.vue"),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    name: "404",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
