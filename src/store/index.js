import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        asks: [],
        user: {},
        askDetail: {},
        list: []
    },
    getters: {
        fetchedAsks(state) {
            return state.asks;
        },
        fetchedJobs(state) {
            return state.jobs;
        },
        fetchedNews(state) {
            return state.news;
        },
        fetchedUser(state) {
            return state.user;
        },
        fetchedAskDetail(state) {
            return state.askDetail;
        }
    },
    mutations,
    actions
});