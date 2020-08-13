<template>
    <div>
        <div class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"> 
                <span class="glyphicon glyphicon-shopping-cart"></span>CART<span class="caret"></span></a>
                <div class="dropdown-menu dropdown-cart" role="menu">
                    <button class="btn btn-xs btn-danger d-flex flex-row-reverse bd-highlight">X</button>
                    <div v-for="item of cart"  v-bind:key="item._id">
                        <div class="item">
                            <div class="item-left">
                                <img v-bind:src="item.image" v-bind:alt="item.image" class="card-img-top" width="50" height="50">
                                <div class="item-info">
                                    <p>{{item.title}}</p>
                                    <p>${{item.price}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                <li class="divider"></li>
                <div>
                    <h4>TOTAL: {{total}}</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
    name: 'CartComponent',
    computed:{
        ...mapState(['items','cart','total'])
    },
    methods:{
        ...mapMutations(['itemsInCart'])
    }
}
</script>