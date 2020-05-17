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
                   <button id="show-modal" @click="showModal = true" class="button button-cta">GET ACCOUNT</button>
                   <modal v-if="showModal" @close="showModal = false"></modal>
                </div>
            </div>
            <div class="col-xl-9">
                <div class="block more-pad">
                    <div class="row">
                        <div class="col-xl-6">
                            <div class="detail__infoblock">
                                <div class="detail__title">Shards:</div>
                                <span class="detail__infopart">Han Solo: {{ item.hanSolo.shards  }}</span>
                                <span class="detail__infopart">General Kenobi: {{ item.generalKenobi .shards  }}</span>
                                <span class="detail__infopart">Darth Traya: {{ item.darthTraya.shards  }}</span>
                            </div>
                            <div class="detail__infoblock">
                                <div class="detail__title">Energy:</div>
                                <span class="detail__infopart">Main: {{ item.energy }}</span>
                                <span class="detail__infopart">Cantina: {{ item.cantina }}</span>
                            </div>
                            <div class="detail__infoblock">
                                <div class="detail__title">Premium Currency:</div>
                                <span class="detail__infopart">{{ item.premiumCurrency }}</span>
                            </div>
                            <div class="detail__infoblock">
                                <div class="detail__title">Tickets:</div>
                                <span class="detail__infopart">{{ item.tickets }}</span>
                            </div>
                            <div class="detail__infoblock">
                                <div class="detail__title">Activated units:</div>
                                <span class="detail__infopart">{{ item.activatedUnitsCount  }}</span>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="detail__title">Additional information:</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolores incidunt magni maxime nisi non quam qui tempora. Alias at autem eligendi excepturi itaque maiores non officia placeat soluta sunt!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam beatae cum illum maxime modi quisquam soluta. Necessitatibus qui saepe sequi!</p>
                        </div>
                    </div>
                </div>

                <button @click="goBackToList" class="backlink">Back</button>
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
                id: this.$router.currentRoute.params['id'],
                // id: this.$route.params['id']
                item: null,
                showModal: false
            }
        },
        components:{
            Modal
        },
        methods:{
            goBackToList(){
                this.$router.push('/accounts')
            },
            ...mapActions(['fetchDetail'])
        },
        watch:{
            $route(toRoute){
                this.id = toRoute.params['id']
            }
        },
        computed: {
            ...mapGetters([
                'allItems',
            ])
        },
        created() {

            this.item = this.allItems[this.$route.params.id];
            // eslint-disable-next-line no-console
            console.log(this.fetchDetail)
        },
        async mounted () {
            // this.fetchDetail()
        }
    }
</script>

<style scoped>

</style>