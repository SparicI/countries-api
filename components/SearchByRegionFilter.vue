<template>
    <div class="position-relative width-200">
        <label
            for="choose-region"
            class="visually-hidden"
        >Choose Region</label>
        <select
            id="choose-region"
            class="flex-1 controls margin-block-start-800"
            :value="modelValue"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        >
            <option
                value=""
                selected
                disabled
            >Filter by Region</option>
            <option value="all">All regions</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
        <img
            src="/caret-down-white.svg"
            alt=""
            v-if="colorMode.preference === 'dark'"
            class="caret-down"
        >
        <img
            src="/caret-down-dark.svg"
            alt=""
            class="caret-down"
            v-else
        >
    </div>
</template>

<script setup lang="ts">
defineProps(['modelValue'])
defineEmits(['update:modelValue'])

const colorMode = useColorMode()
// console.log(colorMode.preference)

</script>

<style scoped>
select {
    appearance: none;
    width: 200px;
}

.caret-down {
    position: absolute;
    height: 10px;
    top: 53px;
    right: 23px;
    pointer-events: none;
}
</style>