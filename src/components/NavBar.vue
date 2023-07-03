<template>
    <div class="nav">
        <div class="links">
            <ul>
                <li v-for="(page,index) in pages" :key="index">
                    <a
                    :class="{active:activePage==index}"
                    :id="page.link.title"
                    :title="page.link.title" 
                    :href="'#'+page.link.url"
                    v-on:click="navLinkClick(index)"
                    v-if="page.link.url != ''">
                    {{ page.link.title }}
                    </a>
                    <div class="titleBar" :key="index"
                    v-if="page.link.url == ''">
                        {{ page.link.title }}
                    </div>
                </li>
            </ul>
        </div>
        <div class="search">
            <input type="text" id="tempSearch" />
            <div class="searchIcon" id="btnC" v-on:click="searchClick(searchVal)">
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" 
                size="2x"/>
            </div>
        </div> 
    </div>
</template>

<script>
import '../assets/styles/style.css';

export default{
props:["pages","activePage","navLinkClick","searchClick"],
data(){
    return{
        searchVal:''
    }
},
mounted(){
    const btn = document.getElementById("btnC");
    btn.addEventListener("click",()=>{
        this.searchVal = tempSearch.value;
        console.log(this.searchVal);
    })
}
}

</script>