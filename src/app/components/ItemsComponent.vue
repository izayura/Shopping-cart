<template>
    <div class="container-fluid bg-white text-dark py-3">
        <div class="container">
            <SortComponent/>
            <FilterComponent/>
            <div class="row">
                <div v-for="item of items" v-bind:key="item._id"
                class="col col-sm-6 col-md-4 col-lg-3 col-xl-2 card-deck" >
                    <div class="card">
                        <img v-bind:src="item.image" v-bind:alt="item.image" class="card-img-top" width="100" height="100">
                        <div class="card-body">
                            <h4 class="cart-title">{{item.title}}</h4>
                            <div class="card-text">${{item.price}}</div>
                            <div class="card-text">{{item.category}}</div>
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
import SortComponent from './SortComponent.vue';
import FilterComponent from './FilterComponent.vue';

export default {
    name: 'ItemsComponent',
    components:{
        SortComponent,
        FilterComponent
    },
    created(){
        console.log("created");
        this.getAllItems();
    },
    /*beforeUpdate(){
            console.log("Change filter");
        console.log(this.items);
        let items=this.items;
        switch (this.filterType) {
            case 'electronics':
                console.log('electro');
                console.log(items);
                items.filter((item)=>{
                    let result= item.category.match('electronics');
                    console.log("RESULT: ",result);
                    return result;
                    });
                break;
            case 'jewelery':
                console.log('jewe');            
                items.sort((a,b)=>a.title < b.title);
                break;    
            case 'men clothing':
                console.log('men'); 
                items.sort((a,b)=>a.price > b.price);
                break;  
            case 'women clothing':
                console.log('women'); 
                items.sort((a,b)=>a.price < b.price);
                break;          
            default:
                console.log("no filter");
                break;
        }
    },*/
    computed:{
        ...mapState(['items']),
    },
    methods:{
        ...mapMutations(['displayItems']),
        ...mapActions(['getAllItems'])
    }
}
</script>