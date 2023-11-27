<template>
    <div class="position-relative">
        <select v-model="$colorMode.preference">
            <option value="system">System</option>
            <option value="light">Light Mode</option>
            <option value="dark">Dark Mode</option>
            <option value="sepia">Sepia</option>
        </select>
        <img
            v-if="colorMode.preference === 'dark'"
            src="/icon-moon.svg"
            alt=""
            class="theme-image"
        >
        <img
            v-else
            src="/icon-sun.svg"
            alt=""
            class="theme-image"
        >

    </div>
</template>

<script setup>
const colorMode = useColorMode()
// console.log(colorMode.preference)

</script>

<style scoped>
select {
    background-color: inherit;
    color: inherit;
    border: none;
    padding-block: var(--spacing-200);
    padding-inline: var(--spacing-800);
    -webkit-appearance: none;
}

.theme-image {
    position: absolute;
    width: 20px;
    top: 7px;
    left: 0px;
}
</style>