<template>
    <div class="flex-1 position-relative">

        <img
            v-if="colorMode.preference === 'dark'"
            class="search__icon"
            src="/magnifier-search-white.svg"
            alt=""
        >
        <img
            v-else
            class="search__icon"
            src="/magnifier-search-dark.svg"
            alt=""
        >


        <input
            class="controls"
            type="text"
            id="search-country"
            placeholder="Search for a country ..."
            :value="modelValue"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        >
        <label
            class="visually-hidden"
            for="search-country"
        >
            Search for a country ...
        </label>
    </div>
</template>

<script setup lang="ts">
defineProps(['modelValue'])
defineEmits(['update:modelValue'])

const colorMode = useColorMode()

</script>

<style scoped>
.search__icon {
    width: 20px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 30px;
}
</style>