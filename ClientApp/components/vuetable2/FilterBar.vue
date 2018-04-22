<template>
  <div class="filter-bar ui basic segment grid">
    <div class="ui form">
      <div class="inline field">
        <div class="float-right input-group mb-3 col-4">
        <input type="text" v-model="filterText" class="form-control" @keyup="doFilter" placeholder="name, nickname, or email">
          <div class="input-group-append">
          <span class="input-group-text btn" id="basic-addon2" @click="doFilter"><icon :icon="['fas', 'search']"/></span>
          </div>
        <!-- <div class="col-6 inline float-left">
        <button class="btn btn-primary" @click="doFilter">Go</button>
        <button class="btn btn-default" @click="resetFilter">Reset</button>
        </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterText: ""
    };
  },
  methods: {
    doFilter() {
      this.$events.fire("filter-set", this.filterText);
    },
    resetFilter() {
      this.filterText = "";
      this.$events.fire("filter-reset");
    }
  }
};
</script>