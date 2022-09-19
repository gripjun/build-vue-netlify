import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchAskDetail, fetchList } from '../api/index.js';

export default {
    async FETCH_NEWS({ commit }) {
        const response = await fetchNewsList();
        commit('SET_NEWS', response.data);
        return response;
    },
    async FETCH_JOBS({ commit }) {
        try {
            const response = await fetchJobsList()
            commit('SET_JOBS', response.data);
            return response;   
        } catch (error) {
            console.log(error);
        }
    },
    async FETCH_ASKS({ commit }) {
        const response = await fetchAskList()
        commit('SET_ASKS', response.data);
        return response;
    },
    async FETCH_LIST({ commit }, pageName) {
        const response = await fetchList(pageName)
        commit('SET_LIST', response.data);
        return response;
    },
    async FETCH_USER({ commit }, name) {
        const response = await fetchUserInfo(name)
        commit('SET_USER', response.data);
        return response;
    },
    async FETCH_ASK_DETAIL({ commit }, id) {
        const response = await fetchAskDetail(id)
        commit('SET_ASK_DETAIL', response.data);
        return response;
    }
}