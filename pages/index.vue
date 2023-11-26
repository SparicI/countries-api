<template>
    <div>
        <main class="container">
            <HomePageControls />

            <div class="card-container margin-block-1000">
                <BaseCard
                    v-for="country in data"
                    :country=country
                    :key=country?.name
                />
            </div>

        </main>
    </div>
</template>

<script setup lang="ts">
import { useCustomFetch } from '~/composables/useCustomFetch';

const data = await useCustomFetch()

</script>

<style scoped>
.card-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    justify-content: center;
    gap: var(--spacing-1100);
}

@media screen and (min-width: 1200px) {
    .card-container {
        justify-content: space-between;

    }
}
</style>