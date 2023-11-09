<script setup>
import {ref} from 'vue';
import MultipleBind from '../components/MultipleBind.vue';

const input = ref('');
const input1 = ref('');
const input2 = ref('');

</script>

<template>
<h3>Input имеет значение {{ input }}</h3>
<input placeholder="Без v-model" :value="input" @input="input = $event.target.value"/>
<input placeholder="С v-model" v-model="input"/>

<h3>Input1 имеет значение {{ input1 }}, Input2 имеет значение {{ input2 }}</h3>
<MultipleBind v-model:input1="input1" v-model:input2="input2"/>
</template>