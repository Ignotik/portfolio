<script setup>
import ProjectCard from "../components/ProjectCard.vue";
import PromStroi from "../assets/images/PromStroi.png";
import Portfolio from "../assets/images/Portfolio.png";
import { techIcons1, techIcons2 } from "@/consts/consts";
</script>

<template>
  <section
    class="max-w-screen-xl mx-auto px-20 mb-4 flex flex-col items-center"
  >
    <h2 class="text-center font-bold font-mono text-2xl">
      Список моих проектов:
    </h2>
    <ProjectCard
      :imageSrc="PromStroi"
      imageAlt="ПромСтройСнаб"
      title="ПромСтройСнаб"
      projectLink="https://pet-project-gamma.vercel.app"
      description="Компания по перевозки угля, щебня, песка и пиломатериалов"
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
