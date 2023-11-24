<template>
  <div>
    <NuxtPage />
  </div>
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
  --surface-color: #2b3945;
  /* (Dark Mode Background) */
  --background-color: hsl(207, 26%, 17%);
  --text-color: hsl(0, 0%, 100%);
}

.sepia-mode body {
  background-color: #f1e7d0 !important;
  color: #433422;
}
</style>