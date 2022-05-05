<template>
  <div class="p-10 flex flex-col gap-3 text-card">
      <span class="font-bold text-3xl">
          Page.
      </span>
      <div class="flex gap-5 text-xl font-medium">
          <router-link :to="{ name: 'home' }" class="hover:text-strawberry font-medium transition-colors duration-200 ease-out"> Retour </router-link>
      </div>
  </div>
</template>

<script>
export default {
    name: "Page"
}
</script>