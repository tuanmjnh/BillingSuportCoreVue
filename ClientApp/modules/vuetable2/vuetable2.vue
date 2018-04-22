<template>
    <my-vuetable
      api-url="https://vuetable.ratiw.net/api/users"
      :fields="fields"
      :sort-order="sortOrder"
      :append-params="moreParams"
      detail-row-component="my-detail-row">
      <template slot="actions" scope="props">
        <div class="custom-actions">
          <button class="ui basic button"
            @click="onAction('view-item', props.rowData, props.rowIndex)">
            <i class="zoom icon"></i>
          </button>
          <button class="ui basic button"
            @click="onAction('edit-item', props.rowData, props.rowIndex)">
            <i class="edit icon"></i>
          </button>
          <button class="ui basic button"
            @click="onAction('delete-item', props.rowData, props.rowIndex)">
            <i class="delete icon"></i>
          </button>
        </div>
      </template>
    </my-vuetable>
</template>

<script>
import Vue from "vue";
import MyVuetable from "../../components/vuetable2/MyVuetable";
import FieldDefs from "./FieldDefs";
import DetailRow from "./DetailRow";
Vue.component("my-detail-row", DetailRow);
export default {
  components: {
    MyVuetable
  },
  data() {
    return {
      fields: FieldDefs,
      sortOrder: [
        {
          field: "email",
          sortField: "email",
          direction: "asc"
        }
      ],
      moreParams: {}
    };
  },
  methods: {
    onAction(action, data, index) {
      console.log("slot action: " + action, data.name, index);
    }
  }
};
</script>