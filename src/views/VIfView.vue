<script setup>
import {ref} from 'vue';

const counter = ref(0);

const increment = () => {
    counter.value++;
};
</script>

<template>
<button @click="increment">Увеличить счетчик</button>

<span v-if="counter === 0">
Счетчик обнулен
</span>
<span v-else-if="counter < 3">
Счетчик не добрался до трех
</span>
<span v-else>
Счетчик больше или равен трем
</span>

<div v-show="counter > 3">
Появится в разметке, если counter > 3
</div>
</template>
