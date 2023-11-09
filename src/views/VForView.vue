<script setup>
import {ref} from 'vue';

const notReactiveList = [1, 2, 3];
const reactiveList = ref([1, 2, 3]);

const pushToList = () => {
    // Если раскомментировать, будет ошибка
    notReactiveList.push(0);
    reactiveList.value.push(0);
};

</script>

<template>
<h1>Реактивный список</h1>

<ul>
    <li v-for="item in reactiveList" :key="item">
        {{item}}
    </li>
</ul>

<h1>НЕ реактивный список</h1>

<ul>
    <li v-for="item in notReactiveList" :key="item">
        {{item}}
    </li>
</ul>

<br/>

<button @click="pushToList">Добавить в список</button>
</template>
