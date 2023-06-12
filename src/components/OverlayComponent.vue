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
                    <h1>Contact</h1>
                    <font-awesome-icon @click="close" class="faIcon" icon="fa-solid fa-x" />
                    <!-- modal content -->
                    <div class="modal-content">
                        <div class="modal-item">
                            <div class="fa-icon">
                                <font-awesome-icon icon="fa-brands fa-instagram" />
                            </div>
                            <div class="modal-text">
                                <p>Envie de discuter de votre prochaine création ?</p>
                               <p>Envoyez nous un message sur <a target="_blank" href="https://www.instagram.com/witch.inktattoo/">notre instagram</a></p> 
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="modal-content">
                        <div class="modal-item">
                            <div class="fa-icon">
                                <font-awesome-icon icon="fa-solid fa-phone"/>
                            </div>
                            <div class="modal-text">
                                <p>Vous souhaiter plutôt échanger par téléphone ?</p>
                                
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="modal-content">
                        <div class="modal-item">
                            <div class="fa-icon">
                                <font-awesome-icon  icon="fa-solid fa-shop" />
                            </div>
                            <div class="modal-text">
                                <p>N'hésitez pas a passer nous voir au salon</p>
                                <p>Adresse : 13 rue du Pont des morts, Metz, 57000 </p> 
                            </div>
                        </div>
                        <hr>
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>

<style scoped>

.close-btn {
    padding: 5px;
    font-family: var(--main-font);
    font-size: 1.2em;
    border: none;
    border-radius: 2px;
    background: #d8d8d8;
    transition: all ease .3s;
}
.close-btn:hover {
    background-color: rgb(225, 41, 41);
    color: white;
    border: none;
}
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
    padding: 40px 30px;
}

.modal-content {
    display: flex;
    flex-direction: column;
}

.modal-item {
    width: 100%;
    display: flex;
    align-items: center;
}

.fa-icon {
    display: flex;
    width: 10%;
    font-size: 2.5em;
    color: var(--black-soft);
}

hr {
    margin-top: 1em;
    margin-bottom: 1em;
}

.faIcon {
    position: absolute;
    top: 15px;
    right: 20px;
    cursor: pointer;
    font-size: 1.2em;
}

h1 {
    margin-top: -45px;
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

@media screen and (max-width: 600px) {
    .modal-text {
        font-size: .7em;
    }

    .modal-item {
        justify-content: space-around;
    }
}
</style>