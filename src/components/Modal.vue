<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        <h4>Write in discord please</h4>
                    </div>
                    <div class="modal-body">
                        <slot name="body">
                            Sorvigolova#9747
                        </slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                            <button class="modal-default-button button button-main" @click="$emit('close')">
                                OK
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "Modal"
    }
</script>

<style scoped>

</style>