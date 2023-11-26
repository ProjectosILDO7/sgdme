const routes = [
  {
    path: "/admin",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", name: "admin", component: () => import("pages/Me.vue") },
    ],
    meta: { requiresAuth: true },
  },

  {
    path: "/",
    component: () => import("layouts/MainLayoutHome.vue"),
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
