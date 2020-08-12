<template>
    <div class="container-fluid bg-white text-dark py-3">
        <div class="container">
            <div class="row row-cols-2">
                <div class="dropdown">
                    <button class="btn btn-warning dropdown-toggle" 
                    type="button" id="dropdownMenuButton" data-toggle="dropdown" 
                    aria-haspopup="true" aria-expanded="false">
                        Filter By Category
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button class="dropdown-item" type="button" 
                        @click="filterElectronics">Electronics</button>
                        <button class="dropdown-item" type="button"
                        @click="filterJewelery">Jewelery</button>
                        <button class="dropdown-item" type="button"
                        @click="filterMenClothing">Men Clothing</button>
                        <button class="dropdown-item" type="button"
                        @click="filterWomenClothing">Women Clothing</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <h4>{{filterType}}</h4>
            </div>
        </div> 
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
    name: 'FilterComponent',
    computed:{
        ...mapState(['items','filterType'])
    },
    beforeUpdate(){
        console.log("Change filter");
        console.log(this.items);
        let items=this.items;
        switch (this.filterType) {
            case 'electronics':
                console.log('electro');
                console.log(items);
                items.filter((item)=>item.category ==='electronics');
                console.log(items.filter((item)=>item.category ==='electronics'));
                break;
            case 'jewelery':
                console.log('jewe');            
                let result2= items.filter((item)=>item.category === 'jewelery');
                console.log("RESULTADO:",result2);
                break;    
            case 'men clothing':
                console.log('men'); 
                let result3= items.filter((item)=>item.category === 'men clothing');
                console.log("RESULTADO:",result3);
                break;  
            case 'women clothing':
                console.log('women'); 
                let result4= items.filter((item)=>item.category === 'women clothing');
                console.log("RESULTADO:",result4);
                break;          
            default:
                console.log("no filter");
                break;
        }
    },
    methods:{
        ...mapMutations(['filterElectronics', 'filterJewelery', 'filterMenClothing', 'filterWomenClothing'])
    }
}
</script>