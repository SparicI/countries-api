<template>
    <main class="container">
        <div>
            <button
                type="button"
                class="button margin-block-1000"
                @click="goToPreviousPage"
            >
                <span class="margin-inline-end-200">
                    &#8592;
                </span>
                Back
            </button>
            <div class="country-container">
                <div>
                    <NuxtImg
                        :src="`${data?.flags.png}`"
                        :alt="`${data?.flags.alt}`"
                        class="country__flag"
                    />
                </div>
                <div class="padding-block-800">
                    <h1 class="margin-block-800">{{ data?.name }}</h1>
                    <div class="detail-container">
                        <div>
                            <p><span class="font-weight-bold">Native name:</span> <span>{{ data?.nativeName }}</span></p>
                            <p><span class="font-weight-bold">Population:</span> <span>{{ data?.population }}</span></p>
                            <p><span class="font-weight-bold">Region:</span> <span>{{ data?.region }}</span></p>
                            <p><span class="font-weight-bold">Sub Region:</span> <span>{{ data?.subregion }}</span></p>
                            <p><span class="font-weight-bold">Capital:</span> <span>{{ data?.capital }}</span></p>
                        </div>
                        <div>
                            <p><span class="font-weight-bold">Top Level Domain:</span> <span>{{ data?.topLevelDomain[0]
                            }}</span></p>
                            <p><span class="font-weight-bold">Currencies:</span> <span>{{ data?.currencies ?
                                data?.currencies[0]?.name : '' }}</span>
                            </p>
                            <p><span class="font-weight-bold">Languages:</span> <span
                                    v-for="(language, index) in data?.languages"
                                    :key="language?.name"
                                >{{ language?.name }}{{ index !== data?.languages.length - 1 ? ', ' : '' }}</span></p>

                        </div>
                        <div class="grid-column-span-2">
                            <p class="font-weight-bold">Border countries:</p>
                            <div class="borders-wrapper">
                                <NuxtLink
                                    v-for="item in data?.borders"
                                    :to="`/${findCountryName(item)}`"
                                    :key="item"
                                    class="button"
                                >

                                    {{ findCountryName(item) }}
                                </NuxtLink>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
const router = useRouter()

const allCountries = await useCustomFetch()

// Get data for specific country
const id: string | string[] = route.params.id
const data = await useData(id)
// console.log("Data from id page", data)

// Go to previous page
const goToPreviousPage = () => router.go(-1)

// Find specific country name by 'cioc' field

const findCountryName = (countryCode: string) => {
    const country = allCountries?.find(country => country?.alpha3Code === countryCode)
    return country?.name
}

</script>

<style scoped>
.country__flag {
    width: min(100%, 560px);
    height: 100%;
    max-height: 400px;
    object-fit: cover;
}

.detail-container {
    display: grid;
    gap: var(--spacing-1000);
}

.borders-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-200);
    margin-block-start: var(--spacing-600);
}

@media screen and (min-width: 1024px) {
    .country-container {
        display: grid;
        grid-template-rows: 400px;
        grid-template-columns: repeat(2, 1fr);
        gap: 7rem;
    }

    .detail-container {
        grid-template-columns: repeat(2, 1fr);

    }
}
</style>