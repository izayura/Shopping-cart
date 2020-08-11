<template>
    <div class="container-fluid bg-white text-dark py-3">
        <div class="container">
            <div class="row row-cols-2">
                <div @click="sortAtoZ" class="col col-sm-6 col-md-3">
                    <button class="btn btn-info">By Name(A to Z)</button>
                </div>
                <div @click="sortZtoA" class="col col-sm-6 col-md-3">
                    <button class="btn btn-info">By Name(Z to A)</button>
                </div>
                <div @click="sortLtoH" class="col col-sm-6 col-md-3">
                    <button class="btn btn-success">By Price(Low to High)</button>
                </div>
                <div @click="sortHtoL" class="col col-sm-6 col-md-3">
                    <button class="btn btn-success">By Price(High to Low)</button>
                </div>
            </div>
            <div class="row">
                <h4>{{sortType}}</h4>
            </div>
            <div class="row">
                <div v-for="item of items" v-bind:key="item._id"
                class="col col-sm-6 col-md-4 col-lg-3 col-xl-2" >
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

export default {
    name: 'ItemsComponents',
    created(){
        console.log("created");
        this.getAllItems();
    },
    beforeUpdate(){
        console.log("There was a change");
        let items=this.items;
        switch (this.sortType) {
            case 'Sort by Name(A to Z)':
                console.log('AtoZ');
                items.sort((a,b)=>a.title > b.title);
                break;
            case 'Sort by Name(Z to A)':
                console.log('ZtoA');            
                items.sort((a,b)=>a.title < b.title);
                break;    
            case 'Sort by Price(Low to High)':
                console.log('LtoH'); 
                items.sort((a,b)=>a.price > b.price);
                break;  
            case 'Sort by Price(High to Low)':
                console.log('HtoL'); 
                items.sort((a,b)=>a.price < b.price);
                break;          
            default:
                console.log("error");
                break;
        }
    },
    computed:{
        ...mapState(['items','sortType'])
    },
    methods:{
        ...mapMutations(['displayItems','sortAtoZ','sortZtoA',
        'sortLtoH','sortHtoL']),
        ...mapActions(['getAllItems'])
    }
}
</script>