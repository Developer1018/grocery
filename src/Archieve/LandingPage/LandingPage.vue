<template>
  <div class="img">
    <div class="logo">
      உழவுக்கடை
      <div class="sub-logo">[ விவசாய பொருட்களுக்கான இணைய சந்தை ]</div>
    </div>
    <v-card class="loginCard mx-2">
      <v-toolbar color="primary" dark flat>
        <v-flex class="title" :class="!login?'title-disabled':''" @click="login=true">
          உள்நுழைய
          <span class="subTitle" v-if="!login">(இங்கு அழுத்தவும்)</span>
        </v-flex>
        <v-flex
          d-flex
          align-center
          justify-center
          class="title"
          :class="login?'title-disabled':''"
          @click="login=false"
        >
          பதிவுசெய்ய
          <span class="subTitle" v-if="login">(இங்கு அழுத்தவும்)</span>
        </v-flex>
      </v-toolbar>
      <v-card-text>
        <Login class="content" :login="login" />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
// need to add transition for the dynamic components
import Login from "./Login";
export default {
  components: {
    Login
  },
  data() {
    return {
      login: true
    };
  }
};
</script>
<style lang="scss" scoped>
.title {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem !important;
  line-height: normal;
  flex-direction: column;
  background-color: #4caf50;
  cursor: pointer;
  &-disabled {
    background-color: gray;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
}
.subTitle {
  font-size: 0.7rem;
}
.logo {
  position: absolute;
  color: white;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding-top: 50px;
  font-size: 2rem;
}
.sub-logo {
  font-size: 0.8rem;
}
.loginCard {
  width: 500px;
  height: auto;
}
.img {
  background-size: cover;
  background-image: linear-gradient(#11111187, #1111116b),
    url("../../assets/image1.jpeg");
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
::v-deep .v-toolbar__content,
.v-toolbar__extension {
  justify-content: space-around;
  padding: 0;
}
</style>