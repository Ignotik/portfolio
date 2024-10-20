<script setup>
import ProjectCard from "../components/ProjectCard.vue";
import PromStroi from "../assets/images/PromStroi.png";
import Portfolio from "../assets/images/portfolio.png";
import { techIcons1, techIcons2 } from "@/consts/consts";
</script>

<template>
  <section
    class="max-w-xs mx-auto flex-1 mb-8 px-20 flex flex-col items-center md:max-w-7xl"
  >
    <h2 class="text-center font-bold font-mono md:text-4xl">
      Список моих проектов:
    </h2>
    <ProjectCard
      :imageSrc="PromStroi"
      imageAlt="ПромСтройСнаб"
      title="ПромСтройСнаб"
      projectLink="https://pet-project-gamma.vercel.app"
      description="(В данном проекте хотел показать только свои умения работы с инструментами, вёртска была не главной)
      Компания по перевозки угля, щебня, песка и пиломатериалов"
      :techIcons="techIcons1"
      :reverse="false"
    />
    <ProjectCard
      :imageSrc="Portfolio"
      imageAlt="Портфолио"
      title="Портфолио"
      projectLink="/"
      description="Моё личное портфолио"
      :techIcons="techIcons2"
      :reverse="true"
    />
  </section>
</template>
