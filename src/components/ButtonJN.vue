<script>
import Toggle from './Toggle.vue';
export default {
    props: ["mode"],
    components: { Toggle }
}
</script>
<template>
    <section class="btn-container">
    <div id="mybutton">
        <Toggle :mode="mode" @toggle="$emit('toggle')" class="tgl-btn"/>
    </div>
    </section>
</template>
<style>

.btn-container {
    width: 100%;
    height: 10px;
    padding: 2em;
}

.tgl-btn{
    position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
}

#mybutton {
  position: fixed;
  bottom: 1em;
  right: 0em;
}

</style>