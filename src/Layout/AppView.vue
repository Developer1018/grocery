<template>
  <div>
    <AppToolbar @toggleDrawer="drawer = $event" />
    <AppDrawer :toggleDrawer="drawer" @toggleDrawer="drawer=$event" />
    <v-main transition="slide-x-transition">
      <router-view class="app-view" />
    </v-main>
  </div>
</template>

<script>
import AppToolbar from "./AppToolbar";
import AppDrawer from "./AppDrawer";

export default {
  name: "AppView",
  components: {
    AppToolbar,
    AppDrawer
  },
  data() {
    return {
      drawer: true
    };
  }
};
</script>

<style lang="scss" scoped>
.app-view {
  margin: 0 15px 0 15px;
  height: 90vh;
  overflow-y: scroll;
}
</style>