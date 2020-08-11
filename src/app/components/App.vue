<template>
    <div id="app" class="container-fluid bg-dark text-white text-center py-3">
        <div class="container">
            <h1>Shopping Cart Interface</h1>
        </div>
        <Items/>
    </div>
</template>

<script>
import Items from './ItemsComponent.vue'

export default{
    name:'App',
    components:{
        Items
    }
}
</script>