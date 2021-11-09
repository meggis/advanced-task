<template>
<b-container>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Phone number</th>
          <th scope="col">Email</th>
          <th scope="col">Country</th>
          <th scope="col">City</th>
          <th scope="col">Address</th>
        </tr>
      </thead>
      <tbody v-for="character in characters" :key="character.id">
        <tr>
          <td>{{ character.name }}</td>
          <td>{{ character.last_name }}</td>
          <td>{{ character.phone_number }}</td>
          <td>{{ character.email }}</td>
          <td>{{ character.country }}</td>
          <td>{{ character.city }}</td>
          <td>{{ character.address }}</td>
          <td>
            <button @click="removeItem(character)">Remove</button>
            <button @click="modifyItem(character)">Modify</button>
          </td>
        </tr>
      </tbody>
    </table>
</b-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["characters"]),
  },
  async mounted() {
    await this.$store.dispatch("getAllCharacters");
  },
  methods: {
    async removeItem({ id }) {
      await this.$store.dispatch("removeItem", id);
    },
    modifyItem(character) {
      this.$store.commit('setCharacter', character)
      this.$router.push(`/form`);
    },
  },
};
</script>