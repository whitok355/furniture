import {createStore} from 'vuex';

const store = createStore({
    state:{
        order:[],
        viewPopUp: false,
    },
    actions:{
        showPopUpA({commit}){
            commit('showPopUpM')
        }
    },
    mutations:{
        showPopUpM(state){
            state.viewPopUp = !state.viewPopUp
        }
    }
})

export default store