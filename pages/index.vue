<template>
    <div>
        <main class="container">
            <div class="flex-row-space-between-ld margin-block-start-800">
                <SearchQueryFilter v-model="searchQuery" />
                <SearchByRegionFilter />
            </div>

            <div class="card-container margin-block-1000">
                <BaseCard
                    v-for="country in filteredData"
                    :country=country
                    :key=country?.name
                />
            </div>

        </main>
    </div>
</template>

<script setup lang="ts">
import { useCustomFetch } from '~/composables/useCustomFetch';
import type { CountriesData } from '../types'

const data = await useCustomFetch()
const filteredData = ref<CountriesData[]>([])
const searchQuery = ref('')

filteredData.value = data as CountriesData[]

watch(searchQuery, () => {
    filteredData.value = data?.filter(item => item?.name.toLowerCase().includes(searchQuery?.value?.toLowerCase())) as CountriesData[]
})


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