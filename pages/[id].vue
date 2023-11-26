<template>
    <main>
        <div>
            <button type="button">
                Back
            </button>
            <div class="flex">
                <div>
                    <img
                        src=""
                        alt=""
                    >
                </div>
                <div>
                    <h1>{{ data?.name }}</h1>
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
                        <p><span class="font-weight-bold">Currencies:</span> <span>{{ data?.currencies[0]?.name }}</span>
                        </p>
                        <p><span class="font-weight-bold">Languages:</span> <span
                                v-for="language in data?.languages"
                                :key="language?.name"
                            >{{ data?.name }}</span></p>

                    </div>
                    <div>
                        <p class="font-weight-bold">Border countries:</p>

                    </div>

                </div>
            </div>
        </div>

    </main>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()

const id: string | string[] = route.params.id

const data = await useData(id)
console.log("Data from id page", data)

</script>

<style scoped></style>