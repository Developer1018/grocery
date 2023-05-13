<template>
  <v-bottom-sheet v-model="sheet" inset>
    <template v-slot:activator="{ on, attrs }">
      <v-bottom-navigation class="align-center" color="pink" value="types" fixed>
        <v-btn value="types" v-bind="attrs" v-on="on">
          <span class="font-weight-bold">மற்ற பொருட்கள்</span>
          <v-icon>mdi-format-list-bulleted-type</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </template>
    <v-list>
      <v-subheader>தேர்வு செய்க :</v-subheader>
      <v-list-item-group :value="feedItem" color="#624caf" @change="setFeedItem($event)">
        <v-list-item v-for="tile in tiles" :key="tile.title" @click="sheet = false">
          <v-list-item-avatar>
            <v-avatar size="32px" tile>
              <img :src="tile.img" :alt="tile.title" />
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-title>{{ tile.title }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-bottom-sheet>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "BottomSheet",
  data() {
    return {
      sheet: false
    };
  },
  computed: {
    ...mapState("feed", ["tiles", "feedItem"])
  },
  methods: {
    ...mapMutations("feed", ["setFeedItem"])
  }
};
</script>
