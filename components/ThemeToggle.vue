<template>
    <!-- <p>Color mode: {{ $colorMode.value }}</p> -->
    <select v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light Mode</option>
        <option value="dark">Dark Mode</option>
        <option value="sepia">Sepia</option>
    </select>
</template>

<script setup>
const colorMode = useColorMode()
console.log(colorMode.preference)

</script>

<style scoped>
select {
    background-image: url(/icon-sun.svg);
    background-repeat: no-repeat;
    background-size: 0.75rem;
    background-position: left center;
    background-color: inherit;
    color: inherit;
    border: none;
    padding: var(--spacing-200) var(--spacing-400);
}

.dark-mode select {
    background-image: url(/icon-moon.svg);
}
</style>