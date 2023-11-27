<template>
    <div>
        <main class="container">
            <div class="flex-row-space-between-ld">
                <SearchQueryFilter v-model="searchQuery" />
                <SearchByRegionFilter v-model="selectedRegion" />
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
const selectedRegion = ref('all')

filteredData.value = data as CountriesData[]

watch(searchQuery, () => {
    filterData()
})

watch(selectedRegion, () => {
    filterData()
})

const filterData = () => {
    filteredData.value = data?.filter(item => item?.name.toLowerCase().includes(searchQuery?.value?.toLowerCase())) as CountriesData[]
    if (selectedRegion.value === 'all') {
        return
    } else {
        filteredData.value = filteredData.value.filter(item => item?.region === selectedRegion.value) as CountriesData[]
    }

}


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