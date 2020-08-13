import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        items:[],
        cart:[],
        total:0,
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
        },
        itemsInCart(state, item){
            console.log("Inside itemsInCart");
            state.cart.push(item);
            state.total+=item.price;
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
        },
        addToCart(context, item){
            context.commit('itemsInCart',item);
        }
        /*getAllCarts: async function({commit}){
            fetch('/api/cart')
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                commit('displayCarts', data);
            })
        }*/
    }
})
