<template>
  <v-row class="my-1 mx-2">
    <v-col cols="2">
      <v-icon medium @click="$emit('toggleDrawer', true)">mdi-menu</v-icon>
    </v-col>
    <v-col cols="8" class="toolbar-title">{{routeName}}</v-col>
    <v-col cols="2" style="text-align:center">
      <v-badge :value="selected.length" offset-y="12" color="red" :content="selected.length">
        <v-icon>mdi-cart-variant</v-icon>
      </v-badge>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "AppToolBar",
  computed: {
    ...mapState("feed", ["selected"]),
    routeName() {
      return this.$route.name;
    }
  }
};
</script>

<style lang="scss" scoped>
.toolbar-title {
  text-align: center;
  font-weight: bold;
  color: #3e3e3e;
}
</style>