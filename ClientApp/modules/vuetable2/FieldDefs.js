export default [
  {
    name: "__checkbox",
    titleClass: "center aligned",
    dataClass: "center aligned"
  },
  {
    name: "name",
    sortField: "name"
  },
  {
    name: "email",
    sortField: "email"
  },
  {
    name: "birthdate",
    sortField: "birthdate",
    titleClass: "center aligned",
    dataClass: "center aligned",
    callback: "formatDate|DD-MM-YYYY"
  },
  {
    name: "nickname",
    sortField: "nickname",
    callback: "allcap"
  },
  {
    name: "gender",
    sortField: "gender",
    titleClass: "center aligned",
    dataClass: "center aligned",
    callback: "genderLabel"
  },
  {
    name: "salary",
    sortField: "salary",
    titleClass: "center aligned",
    dataClass: "right aligned",
    callback: "formatNumber"
  },
  {
    name: "__component:custom-actions",
    title: "Actions",
    titleClass: "center aligned",
    dataClass: "center aligned"
  }
];