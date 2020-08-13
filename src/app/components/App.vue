<template>
    <div id="app" class="container-fluid bg-dark text-white text-center py-3">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-9">
                    <h1>Shopping Cart Interface</h1>
                </div>
                <div class="col-3">
                    <Cart/>
                </div>
            </div>
        </div>
        <Items/>
    </div>
</template>

<script>
import Items from './ItemsComponent.vue';
import Cart from './CartComponent.vue';

export default{
    name:'App',
    components:{
        Items,
        Cart
    }
}
</script>