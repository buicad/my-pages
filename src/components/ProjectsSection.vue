<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import projects from '../data/projects'
import ProjectCard from './ProjectCard.vue'

const { t } = useI18n()
</script>

<template>
  <section id="projects" class="section">
    <h2 class="section-title reveal">{{ t('projects.title') }}</h2>

    <div class="projects-grid">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </section>
</template>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
