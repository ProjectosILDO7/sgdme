const columns = [
  {
    name: "nome",
    label: "Nome de escola",
    align: "left",
    field: "nome",
    sortable: true,
  },
  {
    name: "numero",
    label: "Nº da escola",
    right: "left",
    field: "numero",
    sortable: true,
  },
  // {
  //   name: "num_decreto",
  //   label: "Nº do decreto de criação",
  //   right: "left",
  //   field: "num_decreto",
  //   sortable: true,
  // },
  {
    name: "provincia",
    label: "Província",
    right: "left",
    field: "provincia",
    sortable: true,
  },
  {
    name: "municipio",
    label: "Município",
    right: "left",
    field: "municipio",
    sortable: true,
  },
  {
    name: "actions",
    label: "Opções",
    right: "left",
    field: "actions",
    sortable: true,
  },
];

export { columns };
