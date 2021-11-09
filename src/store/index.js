import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: [],
  },
  mutations: {
    setCharacters(state, newCharacters) {
      state.characters = newCharacters
    }
  },
  actions: {
    async getAllCharacters({ commit }) {
      await axios
      .get('http://test01.varid.pl:4080/api/contacts')
      .then((response) => {
        commit('setCharacters', response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    },
    async removeItem({dispatch}, id) {
      // console.log(commit)
      await axios.delete(`http://test01.varid.pl:4080/api/contact/delete/${id}`)
      dispatch('getAllCharacters')
    },
  },
  modules: {
  }
})
