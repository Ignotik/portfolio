<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header
    class="max-w-screen-xl mx-auto mt-4 pb-4 px-4 border-b-4 border-slate-500"
  >
    <ul class="flex font-mono gap-8 justify-between">
      <li class="hover:text-lime-400">
        <RouterLink class="text-xs md:text-base" to="/">Главная</RouterLink>
      </li>
      <li class="hover:text-lime-400">
        <RouterLink class="text-xs md:text-base" to="/stack">Стек</RouterLink>
      </li>
      <li class="hover:text-lime-400">
        <RouterLink class="text-xs md:text-base" to="/commercial"
          >Коммерческий опыт</RouterLink
        >
      </li>
      <li class="hover:text-lime-400">
        <RouterLink class="text-xs md:text-base" to="/projects"
          >Проекты</RouterLink
        >
      </li>
    </ul>
  </header>
  <RouterView />
</template>
