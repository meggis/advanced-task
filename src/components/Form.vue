<template>
  <b-container>
    <b-form>
      <b-row class="form-group-style">
        <b-col>
          <h4>Name:</h4>
          <b-form-group id="input-group-2" label-for="input-2">
            <b-form-input
              type="text"
              placeholder="Put some name"
              required
              :value="character.name"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <h4>Last name:</h4>
          <b-form-group id="input-group-3" label-for="input-3">
            <b-form-input
              type="text"
              placeholder="Put some last name"
              required
              :value="character.last_name"
            ></b-form-input>
            <div class="description-style">In Fable Dollars (FBD)</div>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="form-group-style">
        <b-col>
          <h4>Phone number:</h4>
          <b-form-group id="input-group-2" label-for="input-2">
            <b-form-input
              type="number"
              placeholder="Type some number"
              required
              :value="character.phone_number"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <h4>Email:</h4>
          <b-form-group id="input-group-3" label-for="input-3">
            <b-form-input
              type="text"
              placeholder="Type some email"
              required
              :value="character.email"
            ></b-form-input>
            <div class="description-style">In Fable Dollars (FBD)</div>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="form-group-style">
        <b-col>
          <h4>Country:</h4>
          <b-form-group id="input-group-2" label-for="input-2">
            <b-form-input
              type="text"
              placeholder="Type country"
              required
              :value="character.country"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <h4>City:</h4>
          <b-form-group id="input-group-3" label-for="input-3">
            <b-form-input
              type="text"
              placeholder="Type city"
              required
              :value="character.city"
            ></b-form-input>
            <div class="description-style"></div>
          </b-form-group>
        </b-col>
        <b-col>
          <h4>Address:</h4>
          <b-form-group id="input-group-3" label-for="input-3">
            <b-form-input
              type="text"
              placeholder="Type address"
              required
              :value="character.address"
            ></b-form-input>
            <div class="description-style"></div>
          </b-form-group>
        </b-col>
        <b-button-group class="mt-5">
          <b-button v-if="!character">Add new item</b-button>
          <b-button v-if="character">Modify item</b-button>
        </b-button-group>
      </b-row>
    </b-form>
  </b-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      // id: this.$route.params.id,
    };
  },
    computed: {
    ...mapState(["character"]),
  },
  //   async mounted() {
  //   await this.$store.dispatch("getSingleCharacter", this.id);
  // },
};
</script>