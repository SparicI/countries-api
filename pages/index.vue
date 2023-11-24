<template>
    <div>
        <TheHeader />
        <main class="container">
            <HomePageControls />

            <NuxtLink
                v-for="id in ids"
                :to="`${id}`"
                style="paddingInline: 1rem"
            >{{ id }}</NuxtLink>
        </main>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const ids = ref([1, 2, 3, 4, 5, 6, 7, 8, 9])

</script>

<style scoped></style>