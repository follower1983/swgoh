<template>
    <div class="content">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 more-pad">
                    <h2>Information</h2>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-xl-12 more-pad block d-flex block__index">
                    <div class="text">
                        <h3>Hi. Am Sorvigolova and i am the best seller in </h3>
                        <p>This project is for people who don’t want to waste the time on account upgrade. You can buy bla bla bla. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam consequuntur cupiditate, dicta dolorem doloremque doloribus ea earum eius ipsa iure mollitia natus necessitatibus nobis obcaecati qui quia quidem reiciendis reprehenderit sint suscipit, tempora voluptatem voluptatibus?</p>
                    </div>
                    <div class="pic">
                        <img src="../assets/photo.png" alt="photo">
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-xl-12 more-pad">
                    <h2>Reviews</h2>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row more-neg-margin">
                <carousel :perPageCustom="[[320, 1], [768, 2], [992, 3]]">
                    <slide class="col-xl-4">
                        <div class="block more-pad">
                            <h3>Hakeem Olajuwon</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut corporis cupiditate ea iure natus, officia sapiente.  similique </p>
                        </div>
                    </slide>
                    <slide class="col-xl-4">
                        <div >
                            <div class="block more-pad">
                                <h3>Rey Allen</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut corporis cupiditate ea iure natus, officia sapiente.  similique </p>
                            </div>
                        </div>
                    </slide>
                    <slide class="col-xl-4">
                        <div class="block more-pad">
                            <h3>James Harden</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.  </p>
                        </div>
                    </slide>
                    <slide class="col-xl-4">
                        <div class="block more-pad">
                            <h3>Stephen Curry</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.  </p>
                        </div>
                    </slide>
                    <slide class="col-xl-4">
                        <div class="block more-pad">
                            <h3>Derrik Rose</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. dipisicing elit dipisicing elit  </p>
                        </div>
                    </slide>
                    <slide class="col-xl-4">
                        <div class="block more-pad">
                            <h3>Kevin Durant</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. dipisicing elit dipisicing elit  </p>
                        </div>
                    </slide>
                    <slide class="col-xl-4">
                        <div class="block more-pad">
                            <h3>Clyde Drexler</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. dipisicing elit dipisicing elit  </p>
                        </div>
                    </slide>
                </carousel>

            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="terms">
                    <h3>Terms and conditions</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam consequuntur cupiditate, dicta dolorem doloremque doloribus ea earum eius ipsa iure mollitia natus necessitatibus nobis obcaecati qui quia quidem reiciendis reprehenderit sint suscipit, tempora voluptatem voluptatibus? Cumque nihil odit tempora? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt doloremque earum, eum in inventore, itaque iusto labore modi nulla, officiis qui quibusdam similique voluptatem! Accusantium adipisci consectetur dignissimos necessitatibus veniam!</p>
                    <router-link tag="button" class="button button-main button-bottom" to="/accounts/" active-class="active">
                        <a>ACCOUNTS</a>
                    </router-link>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Home",
        data(){
            return{

            }
        },
    }
</script>

<style scoped>

</style>