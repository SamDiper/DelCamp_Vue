import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
// import store from '../store'

const peticion = function (URL) {
    return Vue.http.get(URL)
    .then((response)=> {
        response.json()
    })
    .then((data) => {
        return data;
    })
}

const enviar = function (URL, info) {
    return Vue.http.post(URL, info).then((response) => {
        if (response.error) {
            throw response.error
        }
        return response.body
    })
}

export default {
    peticion,
    enviar
}