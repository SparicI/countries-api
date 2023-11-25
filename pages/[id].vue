<template>
    <div>
        <h1>{{ route.params.id }}</h1>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
console.log("Route", route)

</script>

<style scoped></style>