<script setup>
import {ref} from 'vue';

const notReactiveList = [1, 2, 3];
const reactiveList = ref([1, 2, 3]);

const pushToList = () => {
    // Если раскомментировать, будет ошибка
    // notReactiveList.push(0);
    reactiveList.value.push(0);
};
</script>

<template>
<h1>Реактивный список</h1>

<span v-for="item in reactiveList" :key="item">
    {{item}}
</span>

<h1>НЕ реактивный список</h1>

<span v-for="item in notReactiveList" :key="item">
    {{item}}
</span>

<br/>

<button @click="pushToList">Добавить в список</button>
</template>
