<template>
  <div>
    <WelcomeBanner />
    <FeedCards />
    <BottomSheet />
  </div>
</template>

<script>
import { WelcomeBanner, BottomSheet, FeedCards } from "./Feed/index";

export default {
  name: "Feed",
  components: {
    WelcomeBanner,
    BottomSheet,
    FeedCards
  }
};
</script>

