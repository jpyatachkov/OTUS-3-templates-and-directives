<script setup>
import {ref} from 'vue';

const query = ref('');

const sendRequest = () => {
    alert(query.value);
};
</script>

<template>
<form @submit.prevent="sendRequest">
    <input placeholder="query" :value="query" @input="query = $event.target.value"/>
    <button type="submit">Отправить</button>
</form>
</template>
