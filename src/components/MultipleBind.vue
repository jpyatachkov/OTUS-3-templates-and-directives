<script setup>
import {computed, defineEmits, defineProps} from 'vue';

const props = defineProps({
    input1: String,
    input2: String,
});

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

const emit = defineEmits(['update:input1', 'update:input2']);
</script>

<template>
    <input :value="input1" @input="input1 = $event.target.value"/>
    <input :value="input2" @input="input2 = $event.target.value"/>
</template>
