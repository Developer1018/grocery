<template>
  <v-card>
    <v-card-subtitle class="font-weight-bold">{{tiles[feedItem].title}} :</v-card-subtitle>
    <v-container fluid>
      <v-row style="padding-bottom:40px" :class="screenWidth > 500 ? 'mx-5' : ''" dense>
        <v-col v-for="(card, i) in cards[feedItem]" :key="i" :cols="screenWidth < 500 ? 6 : 4">
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title
                :style="screenWidth < 500 ? 'font-size: 0.8rem' : ''"
                v-text="card.title"
              ></v-card-title>
            </v-img>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon
                  :color="card.selected ? 'primary' : ''"
                  @click="addItem(card)"
                >mdi-cart-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import {
  vegetables,
  pulses,
  masalas,
  fruits,
  otherProducts
} from "./datas/data";

export default {
  data() {
    return {
      cards: [vegetables, pulses, masalas, fruits, otherProducts]
    };
  },
  computed: {
    ...mapState("feed", ["tiles", "feedItem"]),
    screenWidth() {
      return window.innerWidth;
    }
  },
  methods: {
    ...mapMutations("feed", ["addSelected", "removeSelected"]),
    addItem(card) {
      card.selected = !card.selected;
      if (card.selected) this.addSelected(card);
      else this.removeSelected(card);
    }
  }
};
</script>
