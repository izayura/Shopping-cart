import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        items:[],
        sortType:'',
    },
    mutations: {
        displayItems(state, items){
            state.items=items;
            console.log(state.items);
        },
        sortAtoZ(state){
            state.sortType='Sort by Name(A to Z)';
            console.log(state.sortType);
        },
        sortZtoA(state){
            state.sortType='Sort by Name(Z to A)';
            console.log(state.sortType);
        },
        sortLtoH(state){
            state.sortType='Sort by Price(Low to High)';
            console.log(state.sortType);
        },
        sortHtoL(state){
            state.sortType='Sort by Price(High to Low)';
            console.log(state.sortType);
        }
    },
    actions: {
        getAllItems: async function({commit}){
            console.log("displayAllItems");
            fetch('/api/item')
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                commit('displayItems', data);
            })
        }
    }
})
