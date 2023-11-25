<template>
    <div>
        <TheHeader />
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
import { ref } from 'vue';


type CountriesData = [{
    name: string,
    nativeName: string,
    capital: string,
    continents: string,
    flag: string,
    population: number,
    region: string,
    subregion: string,
    topLevelDomain: string,
    currencies: string,
    borders: string[],
    languages: string[]

}]

const { data, pending, error } = await useFetch<CountriesData>("http://localhost:3000/data.json")




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