import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

let _api = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/jobs",
  timeout: 3000
});

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jobs: [],
    activeJob: {}
  },
  mutations: {
    setJobs(state, payload) {
      state.jobs = payload;
    },
    addJob(state, payload) {
      state.jobs.push(payload);
    },
    removeJob(state, id) {
      state.jobs = state.jobs.filter(j => j._id != id);
    },
    setActiveJob(state, payload) {
      state.activeJob = payload;
    }
  },
  actions: {
    async getJobs({ commit }) {
      try {
        let res = await _api.get("");
        commit("setJobs", res.data.data)
      } catch (error) {
        console.error(error);
      }
    },
    async createJob({ commit, dispatch }, newJob) {
      try {
        let res = await _api.post("", newJob);
        // dispatch("getJobs");
        commit("addJob", res.data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteJob({ commit, dispatch }, jobId) {
      try {
        let res = await _api.delete(jobId);
        // dispatch("getJobs");
        commit("removeJob", jobId);
        commit("setActiveJob", {});
      } catch (error) {
        console.error(error);
      }
    },
    setActiveJob({ commit }, job) {
      commit("setActiveJob", job);
    }
  }
});
