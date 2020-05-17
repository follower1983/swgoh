<template>
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <h1>404 not found</h1>
                <button @click="goBackToList" class="button">home page</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Error",
        data(){
            return {
                id: this.$router.currentRoute.params['id']
            }
        },
        methods:{
            goBackToList(){
                this.$router.push('/')
            }
        },
        watch:{
            $route(toRoute){
                this.id = toRoute.params['id']
            }
        },
    }
</script>

<style scoped>

</style>