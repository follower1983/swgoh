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
                    <router-link tag="a" :to="'/accounts/hoard-'+ item.id" class="h3like main-color">
                       Hoard-{{ item.id }}
                    </router-link>
                    Level: {{ item.level }}
                    <div v-if="item.reserved" class="reserved-warning">
                        (Reserved)
                    </div>
                </div>
            </div>
            <div class="col-xl-9">
                <div class="block more-pad">
                    <div class="list__item-infoblock">
                        <div class="list__item-title">Shards:</div>
                        <span class="list__item-infopart" v-if="item.hanSolo.totalShards">
                            Han Solo:
                            <span v-if="item.hanSolo.rarity > 0">Rarity - <span class="main-color">{{item.hanSolo.rarity}}</span>, shards - <span class="main-color">{{item.hanSolo.shards}}</span></span>
                            <span v-else>Shards - <span class="main-color">{{item.hanSolo.totalShards}}</span></span>
                        </span>

                        <span class="list__item-infopart" v-if="item.generalKenobi.totalShards">General Kenobi:
                            <span v-if="item.generalKenobi.rarity > 0">Rarity - <span class="main-color">{{item.generalKenobi.rarity}}</span>, shards - <span class="main-color">{{item.generalKenobi.shards}}</span></span>
                            <span v-else>Shards - <span class="main-color">{{item.generalKenobi.totalShards}}</span></span>
                        </span>

                        <span class="list__item-infopart" v-if="item.darthTraya.totalShards">Darth Traya:
                            <span v-if="item.darthTraya.rarity > 0">Rarity - <span class="main-color">{{item.darthTraya.rarity}}</span>, shards - <span class="main-color">{{item.darthTraya.shards}}</span></span>
                            <span v-else>Shards - <span class="main-color">{{item.darthTraya.totalShards}}</span></span>
                        </span>

                    </div>
                    <div class="list__item-infoblock">
                        <div class="list__item-title">Energy:</div>
                        <span class="list__item-infopart">Main: {{ item.energy.toLocaleString() }}</span>
                        <span class="list__item-infopart">Cantina: {{ item.cantina.toLocaleString() }}</span>
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
        metaInfo: {
            title: 'SWGOH hoard accounts - choose your account',
            titleTemplate: '%s | Hoard accounts list',
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'description',
                    content: 'Hoard accounts , Darth Traya , General Kenobi, Han Solo, lots of resources , cheap price , trusted seller'
                },
            ]
        },
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