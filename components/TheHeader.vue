<template>
    <header>
        <div class="flex-row-space-between container">
            <h1>Where in the world?</h1>
            <ThemeToggle />
        </div>

    </header>
</template>

<script setup lang="ts">


</script>

<style scoped>
header {
    background-color: var(--surface-color);
    box-shadow: var(--box-shadow);
}

header h1 {
    font-size: clamp(var(--font-size-200), 4vw, var(--font-size-600));
}
</style>
