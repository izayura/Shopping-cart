<template>
    <div class="container-fluid bg-white text-dark py-3">
        <div class="container">
            <Sort/>
            <div class="row">
                <div v-for="item of items" v-bind:key="item._id"
                class="col col-sm-6 col-md-4 col-lg-3 col-xl-2 card-deck" >
                    <div class="card">
                        <img v-bind:src="item.image" v-bind:alt="item.image" class="card-img-top" width="100" height="100">
                        <div class="card-body">
                            <h4 class="cart-title">{{item.title}}</h4>
                        <div class="card-text">${{item.price}}</div>
                            <div class="row justify-content-end">
                                <button class="btn btn-primary">Add to card</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div> 
    </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex';
import Sort from './SortComponent.vue';

export default {
    name: 'ItemsComponent',
    components:{
        Sort
    },
    created(){
        console.log("created");
        this.getAllItems();
    },
    computed:{
        ...mapState(['items'])
    },
    methods:{
        ...mapMutations(['displayItems']),
        ...mapActions(['getAllItems'])
    }
}
</script>