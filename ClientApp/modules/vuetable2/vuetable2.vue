<template>
    <div class="ui container">
      <vuetable ref="vuetable"
        api-url="https://vuetable.ratiw.net/api/users"
        :fields="fields"
        :per-page="5"
        :sort-order="sortOrder"
        :multi-sort="true"
        @vuetable:pagination-data="onPaginationData"
        @vuetable:cell-clicked="onCellClicked"
        track-by="name"
        multi-sort-key="ctrl"
        detail-row-component="my-detail-row"
        pagination-path=""></vuetable>
        <div class="vuetable-pagination ui basic segment grid">
          <vuetable-pagination-info ref="paginationInfo"></vuetable-pagination-info>
          <vuetable-pagination ref="pagination"  :css="css.pagination" @vuetable-pagination:change-page="onChangePage"></vuetable-pagination>
        </div>
    </div>
  </template>

<script>
import Vue from "vue";
import moment from "moment";
import accounting from "accounting";
import Vuetable from "../../components/vuetable2/Vuetable";
import VuetablePagination from "../../components/vuetable2/VuetablePagination";
import VuetablePaginationInfo from "../../components/vuetable2/VuetablePaginationInfo";
import CustomActions from "../../components/vuetable2/CustomActions";

Vue.component("custom-actions", CustomActions);

export default {
  components: {
    Vuetable,
    VuetablePagination,
    VuetablePaginationInfo
  },
  data() {
    return {
      fields: [
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
      ],
      sortOrder: [
        {
          field: "name",
          sortField: "name",
          direction: "asc"
        }
      ],
      css: {
        ascendingIcon: "glyphicon glyphicon-chevron-up",
        descendingIcon: "glyphicon glyphicon-chevron-down",
        pagination: {
          icons: {
            first: "",
            prev: "",
            next: "",
            last: ""
          }
        }
      }
    };
  },
  methods: {
    onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData);
      this.$refs.paginationInfo.setPaginationData(paginationData);
      this.$refs.vuetable.selectedTo
    },
    onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    },
    onAction(action, data, index) {
      console.log("slot) action: " + action, data.name, index);
    },
    onCellClicked(a,b) {
      console.log(a);
    },
    allcap(value) {
      return value.toUpperCase();
    },
    genderLabel(value) {
      return value === "M"
        ? '<span class="ui teal label"><i class="large man icon"></i>Male</span>'
        : '<span class="ui pink label"><i class="large woman icon"></i>Female</span>';
    },
    formatNumber(value) {
      return accounting.formatNumber(value, 2);
    },
    formatDate(value, fmt = "DD/MM/YYYY") {
      return value == null ? "" : moment(value, "YYYY-MM-DD").format(fmt);
    }
  }
};
</script>