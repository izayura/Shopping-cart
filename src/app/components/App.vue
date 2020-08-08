<template>
    <div>
        <div class="container-fluid bg-dark text-white text-center py-3">
            <div class="container">
                <h1>Shopping Cart Interface</h1>
            </div>
        </div>
        <div class="container-fluid  py-3">
            <div class="container">
                <div class="row">
                    <div v-for="item of items" class="col col-sm-6 col-md-4 col-lg-3 col-xl-2 border" >
                        <section class="py-3">
                            <img v-bind:src="item.image" v-bind:alt="item.image" width="100" height="100">
                            <p>{{item.title}}</p>
                            <p>${{item.price}}</p>
                        </section>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            items:[]
        }
    },
    created(){
        this.displayAllItems();
    },
    methods:{
        displayAllItems(){
            console.log("displayAllItems");
            fetch('/api/item')
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                this.items=data;
                console.log(this.items);
            })
        }
    }
}
</script>