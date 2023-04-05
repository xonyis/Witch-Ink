<script>
export default {
    props: ['mode']
}
</script>
<template>
    <div class="toogle-warpper">
        <label class="toogle">
            <input 
            type="checkbox" 
        :checked="(mode === 'dark') ? 'checked' : false" 
        @change="$emit('toggle')"
            >
            <span class="toggler round"></span>
        </label>
    </div>
</template>
<style>
.toogle {
    position: relative;
    display: inline-block;
    width: 4.5em;
    height: 2em;
}

.toogle input {
    
    opacity: 0;
    width: 0;
    height: 0;
}

.toggler {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: var(--black-soft);
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

.toggler::before {
    position: absolute;
    content: "";
    height: 1.6em;
    width: 1.6em;
    left: 5px;

    background: var(--white-soft);
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

input:checked + .toggler {
    background: blue;
}

input:focus + .toggler {
    box-shadow: 0 0 2px blue;
}

input:checked + .toggler::before {
    -webkit-transform: translateX(30px);
    -ms-transform: translateX(34px);
    transform: translateX(34px);
}

.toggler.round {
    border-radius: 25px;
    display: flex;
    align-items: center;
}

.toggler.round:before {
    border-radius: 50%;
}

</style>