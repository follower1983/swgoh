<template>
    <div class="container detail">
        <div class="row">
            <div class="col-xl-12 more-pad">
                <h2>ACCOUNT: HOARD-{{ item.id }}</h2>
            </div>
        </div>
        <div class="row more-neg-margin">
            <div class="col-xl-3 ">
                <div class="block more-pad">
                   <h3>Hoard-{{ item.id }}</h3>
                   Level: {{ item.level }}
                   <button id="show-modal" @click="showModal = true" class="button button-cta">BOOK ACCOUNT</button>
                   <modal v-if="showModal" @close="showModal = false"></modal>
                    <button @click="goBackToList" class="backlink">Back</button>
                </div>
            </div>
            <div class="col-xl-9">
                <div class="block more-pad">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="detail__infoblock">
                                <div class="detail__title">Shards:</div>
                                <!-- solo -->
                                <span class="detail__infopart">Han Solo:
                                    <span v-if="item.hanSolo.rarity > 0">Rarity - <span class="main-color">{{item.hanSolo.rarity}}</span>,
                                        <span v-if="item.hanSolo.shards !==0"> shards - <span class="main-color">{{item.hanSolo.shards}}</span></span>
                                    </span>
                                    <span v-else>Shards - <span class="main-color">{{item.hanSolo.totalShards}}</span></span>
                                </span>
                                <!-- gk -->
                                <span class="detail__infopart">General Kenobi:
                                    <span v-if="item.generalKenobi.rarity > 0">Rarity - <span class="main-color">{{item.generalKenobi.rarity}}</span>,
                                        <span v-if="item.generalKenobi.shards !==0">shards - <span class="main-color">{{item.generalKenobi.shards}}</span></span>
                                    </span>
                                    <span v-else>Shards - <span class="main-color">{{item.generalKenobi.totalShards}}</span></span>
                                </span>
                                <!-- traya -->
                                <span class="detail__infopart">Darth Traya:
                                    <span v-if="item.darthTraya.rarity > 0">Rarity - <span class="main-color">{{item.darthTraya.rarity}}</span>,
                                        <span v-if="item.darthTraya.shards !==0">shards - <span class="main-color">{{item.darthTraya.shards}}</span></span>
                                    </span>
                                    <span v-else>Shards - <span class="main-color">{{item.darthTraya.totalShards}}</span></span>
                                </span>
                            </div>
                            <div class="detail__infoblock">
                                <div class="detail__title">Energy:</div>
                                <span class="detail__infopart">Main: {{ item.energy.toLocaleString() }}</span>
                                <span class="detail__infopart">Cantina: {{ item.cantina.toLocaleString() }}</span>
                            </div>
                            <div class="detail__infoblock">
                                <div class="detail__title">Crystals:</div>
                                <span class="detail__infopart">{{ item.premiumCurrency.toLocaleString() }}</span>
                            </div>
                            <div class="detail__infoblock">
                                <div class="detail__title">Tickets:</div>
                                <span class="detail__infopart">{{ item.tickets.toLocaleString() }}</span>
                            </div>
                            <div class="detail__infoblock">
                                <div class="detail__title">Activated units:</div>
                                <span class="detail__infopart">{{ item.activatedUnitsCount  }}</span>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="detail__infoblock">
                                <div class="detail__title">Credits:</div>
                                <span class="detail__infopart">{{ detailItem.grindCurrency.toLocaleString() }}</span>
                            </div>
                            <div class="detail__infoblock">
                                <div class="detail__title">Guild Currency:</div>
                                <span class="detail__infopart">{{ detailItem.guildCurrency.toLocaleString() }}</span>
                            </div>
                            <div class="detail__infoblock">
                                <div class="detail__title">Units:</div>
                                <span class="detail__infopart" v-for="(unit, index) in detailItem.units" :key="index">
                                    <span v-if="unit.totalShards > 10">
                                        <span class="main-color">{{capitalizeFirstLetter(unit.name)}}</span>:
                                        <span v-if="unit.rarity > 0">Rarity - {{unit.rarity}}
                                            <span v-if="unit.shards !==0">, shards - <span class="main-color">{{unit.shards}}</span></span>
                                        </span>
                                        <span v-else>Shards - <span class="main-color">{{unit.totalShards}}</span></span>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import Modal from '../components/Modal'
    export default {
        // name: "Item",
        data(){
            return {
                // id: this.$router.currentRoute.params.id,
                id: this.$route.params.id,  // dont necessary ?
                item: null,
                showModal: false
            }
        },
        components:{
            Modal
        },
        methods:{
            ...mapActions(['fetchDetail']),
            goBackToList(){
                this.$router.push('/accounts')
            },
            capitalizeFirstLetter(string) {
                string = string.toLowerCase();
                return string.charAt(0).toUpperCase() + string.slice(1);
            }
        },
        watch:{
            $route(toRoute){
                this.id = toRoute.params.id
            }
        },
        computed: {
            ...mapGetters([
                'allItems', 'detailItem'
            ])
        },
        created() {
            for(let key in this.allItems){
                if(parseInt(this.allItems[key].id) === parseInt(this.$route.params.id)){
                    this.item = this.allItems[key];
                }
            }
        },
        async mounted () {
            this.fetchDetail(this.$route.params.id);
        }
    }
</script>

<style scoped>

</style>