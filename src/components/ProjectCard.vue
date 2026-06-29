<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import type { Project } from '../data/projects'

defineProps<{
  project: Project
}>()

const { t, locale } = useI18n()
const showDemo = ref(false)
</script>

<template>
  <div class="project-card reveal">
    <div class="project-header">
      <span class="project-id">#{{ project.id }}</span>
      <div class="header-links">
        <button v-if="project.demo" class="demo-btn" @click="showDemo = true" :title="t('projects.viewDemo')">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </button>
        <a :href="project.github" target="_blank" rel="noopener" class="github-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.81.945-.015 1.62.87 1.845 1.245 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.245-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.245.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.245 3.3-1.245.66 1.65.24 2.88.12 3.18.78.84 1.245 1.92 1.245 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
      </div>
    </div>

    <h3 class="project-title">
      {{ locale === 'zh' ? project.title.zh : project.title.en }}
    </h3>

    <p class="project-desc">
      {{ locale === 'zh' ? project.description.zh : project.description.en }}
    </p>

    <div class="project-tags">
      <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>

    <div class="project-actions">
      <a :href="project.github" target="_blank" rel="noopener" class="view-btn">
        {{ t('projects.viewGithub') }} →
      </a>
      <button v-if="project.demo" class="view-btn demo-link" @click="showDemo = true">
        {{ t('projects.viewDemo') }} →
      </button>
    </div>

    <Teleport to="body">
      <div v-if="showDemo" class="demo-overlay" @click.self="showDemo = false">
        <div class="demo-modal">
          <button class="demo-close" @click="showDemo = false">✕</button>
          <video controls autoplay :src="project.demo" class="demo-video">
            {{ t('projects.videoNotSupported') }}
          </video>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 32px;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  background: var(--bg-card-hover);
  border-color: var(--primary);
  box-shadow: 0 0 24px var(--primary-dim);
  transform: translateY(-4px);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.project-id {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-dim);
}

.github-link {
  color: var(--text-dim);
  transition: color 0.3s;
}

.github-link:hover {
  color: var(--text-bright);
}

.project-title {
  font-family: var(--font-mono);
  font-size: 1.15rem;
  color: var(--text-bright);
  margin-bottom: 12px;
  line-height: 1.4;
}

.project-desc {
  font-size: 0.88rem;
  color: var(--text-dim);
  line-height: 1.7;
  margin-bottom: 20px;
  flex: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tag {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  padding: 3px 10px;
  border-radius: 4px;
  background: var(--secondary-dim);
  color: var(--secondary);
  border: 1px solid rgba(123, 47, 247, 0.2);
}

.view-btn {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--primary);
  letter-spacing: 1px;
  align-self: flex-start;
  transition: all 0.3s;
}

.view-btn:hover {
  text-shadow: 0 0 12px var(--primary);
  transform: translateX(4px);
}

.header-links {
  display: flex;
  align-items: center;
  gap: 10px;
}

.demo-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-dim);
  transition: color 0.3s;
  padding: 0;
  display: flex;
  align-items: center;
}

.demo-btn:hover {
  color: var(--primary);
}

.project-actions {
  display: flex;
  gap: 16px;
  align-items: center;
}

.demo-link {
  background: none;
  border: none;
  cursor: pointer;
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--secondary);
  letter-spacing: 1px;
  transition: all 0.3s;
  padding: 0;
}

.demo-link:hover {
  text-shadow: 0 0 12px var(--secondary);
  transform: translateX(4px);
}

.demo-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeIn 0.2s ease;
}

.demo-modal {
  position: relative;
  width: 90%;
  max-width: 900px;
}

.demo-close {
  position: absolute;
  top: -36px;
  right: 0;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.4rem;
  cursor: pointer;
  transition: color 0.2s;
}

.demo-close:hover {
  color: var(--primary);
}

.demo-video {
  width: 100%;
  border-radius: 8px;
  outline: none;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
