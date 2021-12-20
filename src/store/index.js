import Vue from 'vue'
import Vuex from 'vuex'
import { getInitiativesSheet } from "../api/sheets";
import { initiativeTypeOne, initiativeTypeTwo, mapper } from "../../config"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    initiativeTypeOne: [], // food deals
    initiativeTypeTwo: [], // recycling
  },
  mutations: {
    updateTypeOne(state, payload) {
      state.initiativeTypeOne = payload.filter(load => load['type'] == initiativeTypeOne)
    },
    updateTypeTwo(state, payload) {
      state.initiativeTypeTwo = payload.filter(load => load['type'] == initiativeTypeTwo)
    }
  },
  actions: {
    async updateData(context) {
      const sheet = await getInitiativesSheet();
      // this.headers = sheet.headerValues;
      sheet.getRows().then((rows) => {
        const updatedRows = rows.map((row) => renameKeys(mapper, row)) // map keys based on configuration
        context.commit('updateTypeOne', updatedRows)
        context.commit('updateTypeTwo', updatedRows)
        // this.cards = rows;
      });
    },
  },
  modules: {
  }
})

const renameKeys = (keysMap, object) =>
  Object.keys(object).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: object[key] },
    }),
    {}
  );