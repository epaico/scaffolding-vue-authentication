import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "@/views/auth/Login";
import store from "@/store";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {requiresAuth: true},
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {

    let isrutaProtegida = to.matched.some(item => item.meta.requiresAuth);

    if (isrutaProtegida) {
        if (store.getters.isAuthenticated) {
            next();
        } else {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            });
        }
    } else {
        //verificar si ruta es login
        if (to.name === 'Login') {
            if (store.getters.isAuthenticated) {
                next({
                    path: '/'
                });
            } else {
                next();
            }
        } else {
            next();
        }

    }

});

export default router
