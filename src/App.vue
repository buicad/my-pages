<script setup lang="ts">
import { useScrollReveal } from './composables/useScrollReveal'
import NavBar from './components/NavBar.vue'
import ParticleBackground from './components/ParticleBackground.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'

useScrollReveal()
</script>

<template>
  <ParticleBackground />
  <NavBar />
  <main>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
  </main>
</template>
