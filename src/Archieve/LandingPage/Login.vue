<template>
  <div>
    <v-form ref="form" v-model="valid">
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="மின்னஞ்சல் முகவரி"
        prepend-icon="mdi-account"
        autocomplete="username"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        class="pt-1"
        :rules="passwordRules"
        single-line
        label="கடவுச்சொல்"
        prepend-icon="mdi-lock"
        type="password"
        :autocomplete="login?'current-password':'new-password'"
        required
      ></v-text-field>
      <v-text-field
        v-if="!login"
        v-model="newPassword"
        class="pt-1"
        :rules="newPasswordRules"
        single-line
        label="மறுமுறை கடவுச்சொல் உள்ளிடவும்"
        prepend-icon="mdi-lock"
        type="password"
        required
      ></v-text-field>
      <div class="form-footer">
        <v-checkbox
          v-if="login"
          v-model="checkbox"
          color="green"
          label="நான் ஒரு வியாபாரி"
          required
        ></v-checkbox>
        <v-tooltip v-else right>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              style="margin-left:50px"
              v-bind="attrs"
              v-on="on"
              color="info"
            >mdi-alert-circle-outline</v-icon>
          </template>
          <span>
            இப்பக்கம் பொது பயனாளிகள் பதிவிற்கு மட்டும்,
            வியாபாரியாக பதிவு செய்ய எங்களை தொடர்பு கொள்ளவும்.
          </span>
        </v-tooltip>
        <v-btn
          :disabled="!valid"
          class="login-button"
          color="success"
          type="submit"
          @click="loginHandler"
        >
          {{login?'உள்நுழைக':'பதிவுசெய்க'}}
          <v-icon small>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  props: {
    login: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      password: "",
      newPassword: "",
      passwordRules: [
        v => !!v || "உள்ளீடு தேவை",
        v => (v && v.length <= 10) || "10 எழுத்துகளுக்கு குறைவாக தேவை"
      ],
      newPasswordRules: [
        v => !!v || "உள்ளீடு தேவை",
        v => (v && v === this.password) || "சரியாக உள்ளிடவும்"
      ],
      email: "",
      emailRules: [
        v => !!v || "உள்ளீடு தேவை",
        v => /.+@.+\..+/.test(v) || "முறையான முகவரியை உள்ளிடவும்"
      ],
      checkbox: false,
      valid: false
    };
  },
  watch: {
    login() {
      this.$refs.form.reset();
    }
  },
  methods: {
    loginHandler() {
      if (!this.login) return;
      localStorage.setItem("ULAVUKKADAI_ID", this.email);
      localStorage.setItem("ULAVUKKADAI_PASS", this.password);
      setTimeout(() => {
        this.$router.push({ path: "about" });
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep.v-input--selection-controls .v-input__slot > .v-label,
.v-input--selection-controls .v-radio > .v-label {
  font-size: 0.9rem;
}
::v-deep.v-input {
  .v-messages__message {
    font-size: 0.6rem !important;
  }
}
::v-deep.theme--light.v-input input,
.theme--light.v-input textarea {
  font-size: 0.9rem;
}
::v-deep.v-input .v-label {
  font-size: 0.85rem;
}
.form-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.login-button {
  border-radius: 0px;
  font-size: 0.75rem;
  margin-right: 0px !important;
}
::v-deep.v-tooltip__content {
  width: 180px;
}
</style>