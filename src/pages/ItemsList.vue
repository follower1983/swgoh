<template>
    <div class="container">
        <div class="row">
            <div class="col-xl-12 more-pad">
                <h2>ACCOUNTS</h2>
            </div>
        </div>
        <div class="row list__item more-neg-margin" v-for="(item, index) in allItemsLimited" :key="index">
            <div class="col-xl-3">
                <div class="block more-pad">
                    <router-link tag="h3" :to="'/accounts/hoard-'+ item.id" class="">
                        <a>Hoard-{{ item.id }}</a>
                    </router-link>
                    Level: {{ item.level }}
                </div>
            </div>
            <div class="col-xl-9">
                <div class="block more-pad">
                    <div class="list__item-infoblock">
                        <div class="list__item-title">Shards:</div>
                        <span class="list__item-infopart" v-if="item.hanSolo.shards">Han Solo: {{ item.hanSolo.shards  }}</span>
                        <span class="list__item-infopart" v-if="item.generalKenobi.shards">General Kenobi: {{ item.generalKenobi .shards  }}</span>
                        <span class="list__item-infopart" v-if="item.darthTraya.shards">Darth Traya: {{ item.darthTraya.shards  }}</span>
                    </div>
                    <div class="list__item-infoblock">
                        <div class="list__item-title">Energy:</div>
                        <span class="list__item-infopart">Main: {{ item.energy }}</span>
                        <span class="list__item-infopart">Cantina: {{ item.cantina }}</span>
                    </div>
                    <router-link tag="a" :to="'/accounts/hoard-'+ item.id" class="more-link">
                        More info
                    </router-link>
                </div>
            </div>
        </div>
        <button v-if="getLoadMoreBtn === true" class="button button-main button-load-more button-bottom"
                @click="loadMoreItems"
        >
            Load more
        </button>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name: "ItemsList",
        methods :{
            ...mapActions(['loadMoreItems'])
        },
        computed: {
            ...mapGetters([
                'allItems',
                'allItemsLimited',
                'getLoadMoreBtn'
            ])
        },
    }
</script>

<style>

</style>