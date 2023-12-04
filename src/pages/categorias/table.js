import { formatCurrency } from "src/utils/formatCurrency";
const columns = [
  {
    name: "categoria",
    label: "Nome de categoria",
    align: "left",
    field: "categoria",
    sortable: true,
  },
  {
    name: "salario_base",
    label: "Salario Base",
    right: "left",
    field: "salario_base",
    sortable: true,
    format: (val) => formatCurrency(val),
  },
  {
    name: "salario_liquido",
    label: "Salario Líquido",
    right: "left",
    field: "salario_liquido",
    sortable: true,
    format: (val) => formatCurrency(val),
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
