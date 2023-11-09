<script setup>
import {computed, defineEmits, defineProps} from 'vue';

const props = defineProps({
    input1: String,
    input2: String,
});

const emit = defineEmits(['update:input1', 'update:input2']);

const input1 = computed({
    get() {
        return props.input1
    },
    set(value) {
        emit('update:input1', value)
    }
});

const input2 = computed({
    get() {
        return props.input2
    },
    set(value) {
        emit('update:input2', value)
    }
});
</script>

<template>
    <input v-model="input1"/>
    <input v-model="input2"/>
</template>
