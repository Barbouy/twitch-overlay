<template>
  <div class="p-10 flex flex-col gap-3 text-stone-800">
      <span class="font-bold text-3xl">
          Home.
      </span>
      <div class="flex gap-5 text-xl font-medium">
          <router-link :to="{ name: 'page' }" class="hover:text-strawberry font-medium transition-colors duration-200 ease-out"> Page </router-link>
      </div>
  </div>
</template>

<script>
export default {
    name: "Home"
}
</script>