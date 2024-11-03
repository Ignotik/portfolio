<script setup>
import {
  languages,
  FrontEndStack,
  BackEndStack,
  DB,
} from "../consts/consts.js";
</script>

<template>
  <section class="mb-40 mx-auto px-10 md:flex-row md:max-w-7xl">
    <h2 class="text-center font-bold font-mono md:text-4xl">Стек</h2>

    <article class="flex gap-2 mb-8 items-center flex-wrap">
      Языки программирования:
      <div
        v-for="lang in languages"
        :key="lang.alt"
        class="flex items-center gap-1"
      >
        <img :src="lang.src" class="w-8" :alt="lang.alt" /> -
        <span>{{ lang.alt }}</span>
      </div>
    </article>

    <article class="flex gap-2 mb-8 items-center flex-wrap">
      Front-end:
      <div
        v-for="framework in FrontEndStack"
        :key="framework.alt"
        class="flex items-center gap-1"
      >
        <img :src="framework.src" class="w-8" :alt="framework.alt" /> -
        <span>{{ framework.alt }}</span>
      </div>
    </article>
    <article class="flex gap-2 mb-8 items-center flex-wrap">
      Back-end:
      <div
        v-for="framework in BackEndStack"
        :key="framework.alt"
        class="flex items-center gap-1"
      >
        <img :src="framework.src" class="w-8" :alt="framework.alt" /> -
        <span>{{ framework.alt }}</span>
      </div>
    </article>
    <article class="flex gap-2 mb-8 items-center flex-wrap">
      Data-base:
      <div v-for="data in DB" :key="data.alt" class="flex items-center gap-1">
        <img :src="data.src" class="w-8" :alt="data.alt" /> -
        <span>{{ data.alt }}</span>
      </div>
    </article>
  </section>
</template>

<style scoped>
.relative {
  position: relative;
}
</style>
