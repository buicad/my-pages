<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const categories = [
  { key: 'computer', icon: '💻' },
  { key: 'engineering', icon: '🔧' },
  { key: 'ai', icon: '🤖' },
] as const

function getItems(key: string): string[] {
  const raw = tm(`skills.${key}.items`)
  return Array.isArray(raw) ? raw as string[] : []
}
</script>

<template>
  <section id="skills" class="section">
    <h2 class="section-title reveal">{{ t('skills.title') }}</h2>

    <div class="skills-grid reveal">
      <div v-for="cat in categories" :key="cat.key" class="skill-card">
        <div class="skill-icon">{{ cat.icon }}</div>
        <h3>{{ t(`skills.${cat.key}.title`) }}</h3>
        <ul class="skill-list">
          <li v-for="(item, i) in getItems(cat.key)" :key="i">
            <span class="skill-tag">{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.skill-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 32px;
  transition: all 0.3s;
}

.skill-card:hover {
  background: var(--bg-card-hover);
  border-color: var(--primary);
  box-shadow: 0 0 20px var(--primary-dim);
  transform: translateY(-4px);
}

.skill-icon {
  font-size: 2.2rem;
  margin-bottom: 12px;
}

h3 {
  font-family: var(--font-mono);
  color: var(--primary);
  font-size: 1rem;
  margin-bottom: 20px;
  letter-spacing: 1px;
}

.skill-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tag {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  padding: 5px 14px;
  border-radius: 20px;
  background: var(--primary-dim);
  color: var(--primary);
  border: 1px solid rgba(0, 240, 255, 0.15);
  transition: all 0.3s;
}

.skill-tag:hover {
  background: var(--primary);
  color: var(--bg);
  box-shadow: 0 0 8px var(--primary);
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
