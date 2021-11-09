import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: [],
    character: {
      address: null,
      city: null,
      country: null,
      email: null,
      last_name: null,
      name: null,
      phone_number: null
    },
  },
  mutations: {
  setCharacters(state, newCharacters) {
    state.characters = newCharacters
  },
  setCharacter(state, newCharacter) {
    state.character = newCharacter
  }
},
  actions: {
  async getAllCharacters({ commit }) {
    await axios
      .get('http://test01.varid.pl:4080/api/contacts')
      .then((response) => {
        commit('setCharacters', response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  async removeItem({ dispatch }, id) {
    // console.log(commit)
    await axios.delete(`http://test01.varid.pl:4080/api/contact/delete/${id}`)
    dispatch('getAllCharacters')
  },
  async getSingleCharacter({ commit }, id) {
    commit('setCharacter', await axios.get(`http://test01.varid.pl:4080/api/contact/${id}`))
  }
},
  modules: {
}
})
