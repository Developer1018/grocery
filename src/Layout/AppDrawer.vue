<template>
  <v-navigation-drawer
    :value="toggleDrawer"
    mobile-breakpoint="400"
    absolute
    style="z-index:5"
    app
    color="#624caf"
    dark
    @input="$emit('toggleDrawer', $event)"
  >
    <v-list dense nav class="py-0">
      <v-list-item two-line :class="miniVariant && 'px-0'">
        <v-list-item-avatar>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Frosemary-icon-flat-style-isolated-white-background-herb-spices-symbol-stock-vector-illustration-90795293.jpg&f=1&nofb=1"
          />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title style="font-weight:bold">மனோஜ் மளிகை</v-list-item-title>
          <v-list-item-subtitle>
            கவுண்டம்பாளயம்
            <v-icon class="mr-1" small>mdi-map-marker</v-icon>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item :to="item.to" v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// @ is an alias to /src

export default {
  name: "AppDrawer",
  components: {
    //
  },
  props: {
    toggleDrawer: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      items: [
        { title: "ஊட்டம்", icon: "mdi-view-dashboard", to: "/feed" },
        // { title: "வாங்க", icon: "mdi-cart-outline" },
        { title: "பதிவேற்றம்", icon: "mdi-image-move", to: "/upload" },
        {
          title: "இச்சேவைப்பற்றி",
          icon: "mdi-information-variant",
          to: "/about"
        },
        { title: "வரைபடம்", icon: "mdi-map", to: "/map" }
      ],
      background: true,
      miniVariant: false
    };
  }
};
</script>

<style lang="scss" scoped>
//
</style>