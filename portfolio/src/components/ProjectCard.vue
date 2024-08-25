<script>
export default {
  props: {
    imageSrc: String,
    imageAlt: String,
    title: String,
    projectLink: String,
    description: String,
    techIcons: Array,
    reverse: Boolean,
  },
};
</script>
<template>
  <div
    :class="[
      'flex',
      'items-center',
      'py-4',
      'gap-8',
      reverse ? 'flex-row-reverse' : 'flex-row',
    ]"
  >
    <img class="max-w-48 md:max-w-96" :src="imageSrc" :alt="imageAlt" />
    <div class="flex flex-col gap-4">
      <h3 class="text-lime-400 font-bold font-mono text-xl">{{ title }}</h3>
      <a
        class="hover:text-lime-400 border max-w-40 border-slate-400 rounded px-4"
        :href="projectLink"
      >
        Deployed Project
      </a>
      <a
        class="hover:text-lime-400 border max-w-40 border-slate-400 rounded px-4"
        href="https://github.com/Ignotik"
        >GitHub</a
      >
      <p class="font-bold font-mono text-sm md:text-lg">{{ description }}</p>
      <div class="flex gap-2 items-center md:gap-4">
        <p class="font-mono">Стек:</p>
        <img
          v-for="icon in techIcons"
          :key="icon.alt"
          :src="icon.src"
          class="w-4 md:w-10"
          :alt="icon.alt"
        />
      </div>
    </div>
  </div>
</template>
