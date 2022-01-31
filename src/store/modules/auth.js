import axios from "axios";
import router   from "@/router";


const state = {
    token: localStorage.getItem("token_control_personal") || null,
}

const getters = {
    isAuthenticated: state => !!state.token,
}

const actions = {
    async login({commit,rootState}, credentials) {
        try {
            const {data} = await axios.post( rootState.url_api +"/auth/login", credentials);
            localStorage.setItem("token_control_personal", data.token);
            commit("setToken", data.token);
            await router.push("/");
        } catch (error) {
            console.log(error);
        }
    },

    async logout({commit}) {
        localStorage.removeItem('token_control_personal');
        commit('clearToken')
        await router.push("/login")
    },
}

const mutations = {
    setToken(state, token) {
        state.token = token
    },
    clearToken(state) {
        state.token = null
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}