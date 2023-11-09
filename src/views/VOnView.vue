<script setup>
import {ref} from 'vue';

const query = ref('');

const sendRequest = () => {
    alert(query.value);
};
</script>

<template> 
<form @submit.prevent="sendRequest">
    <input placeholder="query" v-model="query"/>
    <button type="submit">Отправить</button>
</form>
</template>
