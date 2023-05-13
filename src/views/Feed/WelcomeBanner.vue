<template>
  <!-- <v-card style="background:#624caf;margin:0 30px;">மனோஜ் மாளிகைக்கு நல்வரவு!</v-card> -->
  <v-card class="mx-auto mb-3" color="#624caf" shaped ripple dark max-width="600">
    <v-card-title>
      <v-icon large left>mdi-human-greeting</v-icon>
      <span class="title font-weight-light">வணக்கம்</span>
    </v-card-title>

    <v-card-text
      class="headline font-weight-bold"
      style="color:white"
    >"அன்றாட வாழ்க்கைக்கு தேவையான சமையல் மற்றும் பிற பொருட்களை வாங்கி மகிழவும்!"</v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>- யோபேல்(மனோஜ் மளிகை)</v-list-item-title>
        </v-list-item-content>

        <!-- <v-row align="center" justify="end">
          <v-icon class="mr-1">mdi-heart</v-icon>
          <span class="subheading mr-2">256</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1">mdi-share-variant</v-icon>
          <span class="subheading">45</span>
        </v-row>-->
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "WelcomeBanner"
};
</script>

<style>
</style>