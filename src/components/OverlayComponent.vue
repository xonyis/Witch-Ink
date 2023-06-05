<script>
export default {
    props: ['modalActive'],
    setup(props, {emit}) {
        const close = () => {
            emit("close")
        };

        return { close }
    }
}
</script>

<template>
    <transition name="modal-animation">
        <div v-show="modalActive" class="modal">
            <transition name="modal-animation-inner">
                <div v-show="modalActive" class="modal-inner">
                    <font-awesome-icon @click="close" class="faIcon" icon="fa-solid fa-x" />
                    <!-- modal content -->
                    <slot />
                    <button type="button" @click="close">close</button>
                </div>
            </transition>
        </div>
    </transition>
</template>

<style scoped>
.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background: #00000070;
    z-index: 2;

}

.modal-inner {
    position: relative;
    max-width: 640px;
    width: 80%;
    background: var(--white-soft);
    border-radius: 10px;
    padding: 64px 16px;
}

.faIcon {
    position: absolute;
    top: 15px;
    right: 20px;
    cursor: pointer;
}

.faIcon:hover {
    transition: all 0.4s ease;
    color: rgb(225, 41, 41);
}

.modal-animation-enter-active,
.modal-animation-leave-active {
    transition: opacity .4s cubic-bezier(.52, .02, .19, 1.02);
}
.modal-animation-enter-from,
.modal-animation-leave-to {
    opacity: 0;
}

.modal-animation-inner-enter-active {
    transition: all .4s cubic-bezier(.52, .02, .19, 1.02) 0.2s;
}
.modal-animation-inner-leave-active {
    transition: all .4s cubic-bezier(.52, .02, .19, 1.02) 0.2s;
}

.modal-animation-inner-enter-from {
    opacity: 0;
    transform: scale(0.8);
}

.modal-animation-inner-leave-to {
    transform: scale(0.8);
}


</style>