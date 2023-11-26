<template>
    <article class="card">
        <NuxtLink :to="`/${country.name}`">
            <NuxtImg
                :src="`${country?.flags?.png}`"
                :alt="`${country?.flags?.alt}`"
                class="card__image"
            />
        </NuxtLink>

        <div class="card__description">
            <h2 class="card__heading">{{ country.name }}</h2>
            <div class="card__detils margin-block-start-800 margin-block-end-400">
                <p><span class="font-weight-bold">Population:</span> <span>{{ country?.population }}</span></p>
                <p><span class="font-weight-bold">Region:</span> <span>{{ country?.region }}</span></p>
                <p><span class="font-weight-bold">Capital:</span> <span>{{ country?.capital }}</span></p>
            </div>

        </div>

    </article>
</template>

<script setup lang="ts">

defineProps({
    country: {
        type: Object,
        // Object or array defaults must be returned from
        // a factory function. The function receives the raw
        // props received by the component as the argument.
        default() {
            return []
        }
    }
})

</script>

<style scoped>
.card {
    background-color: var(--surface-color);
    border-radius: var(--border-radius-soft);
    overflow: hidden;
    box-shadow: var(--box-shadow-card);
}

.card__image {
    height: 160px;
    width: 100%;
    object-fit: cover;
    box-shadow: var(--box-shadow-card);
}

.card__description {
    padding-block: var(--spacing-800);
    padding-inline: var(--spacing-800);
}
</style>