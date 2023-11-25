<template>
    <div>
        <h1>{{ route.params.name }}</h1>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

</script>

<style scoped></style>