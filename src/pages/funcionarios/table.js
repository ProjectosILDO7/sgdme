const columns = [
  {
    name: "nome",
    label: "Nome completo",
    align: "left",
    field: "nome",
    sortable: true,
  },
  {
    name: "num_bilhete",
    label: "Nº do bilhete",
    right: "left",
    field: "num_bilhete",
    sortable: true,
  },
  {
    name: "num_agente",
    label: "Nº de agente",
    right: "left",
    field: "num_agente",
    sortable: true,
  },
  {
    name: "habilitacao",
    label: "Habilitação",
    right: "left",
    field: "habilitacao",
    sortable: true,
  },

  {
    name: "actions",
    label: "Opções",
    right: "left",
    field: "actions",
  },
];

export { columns };
