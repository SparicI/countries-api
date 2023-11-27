<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>


<style>
body {
  --surface-color: hsl(0, 0%, 100%);
  --background-color: hsl(0, 0%, 98%);
  /* (Light Mode Text) */
  --text-color: hsl(200, 15%, 8%);
}

.dark-mode body {
  /* colors */
  /*  (Dark Mode Elements) */
  --surface-color: hsl(208, 23%, 22%);
  /* (Dark Mode Background) */
  --background-color: hsl(207, 26%, 17%);
  --text-color: hsl(0, 0%, 100%);
}

.sepia-mode body {
  --surface-color: hsl(42, 54%, 95%);
  --background-color: hsl(42, 54%, 88%);
  /* background-color: #f1e7d0 !important; */
  --text-color: #433422;
}
</style>