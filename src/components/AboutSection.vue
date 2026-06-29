<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

function getEducations() {
  const raw = tm('about.educations')
  if (!Array.isArray(raw)) return []
  return raw as { school: string; major: string; period: string }[]
}
</script>

<template>
  <section id="about" class="section">
    <h2 class="section-title reveal">{{ t('about.title') }}</h2>

    <div class="about-grid reveal">
      <div class="about-card">
        <div class="card-icon">🎓</div>
        <h3>{{ t('about.education') }}</h3>
        <div v-for="(edu, i) in getEducations()" :key="i" class="edu-item" :class="{ 'edu-item +': i > 0 }">
          <p class="school">{{ edu.school }}</p>
          <p class="major">{{ edu.major }}</p>
          <p class="period">{{ edu.period }}</p>
        </div>
      </div>

      <div class="about-card">
        <div class="card-icon">💼</div>
        <h3>{{ t('about.experience') }}</h3>
        <p class="company">{{ t('about.expCompany') }}</p>
        <p class="role">{{ t('about.expRole') }}</p>
        <p class="period">{{ t('about.expPeriod') }}</p>
        <p class="project-name">{{ t('about.expProject') }}</p>
        <p class="exp-desc">{{ t('about.expDesc') }}</p>
      </div>
    </div>

    <div class="intro reveal">
      <p>{{ t('about.intro') }}</p>
    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 40px;
}

.about-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 32px;
  transition: all 0.3s;
}

.about-card:hover {
  background: var(--bg-card-hover);
  border-color: var(--primary);
  box-shadow: 0 0 20px var(--primary-dim);
  transform: translateY(-4px);
}

.card-icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

h3 {
  font-family: var(--font-mono);
  color: var(--primary);
  font-size: 1rem;
  margin-bottom: 16px;
  letter-spacing: 1px;
}

.school, .company {
  color: var(--text-bright);
  font-weight: 600;
  font-size: 1.05rem;
  margin-bottom: 4px;
}

.major, .role {
  color: var(--text);
  margin-bottom: 4px;
}

.period {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-dim);
  margin-bottom: 12px;
}

.project-name {
  color: var(--primary);
  font-weight: 600;
  margin-bottom: 8px;
}

.edu-item + .edu-item {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
}

.exp-desc {
  font-size: 0.9rem;
  color: var(--text-dim);
  line-height: 1.6;
}

.intro {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px 32px;
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--text);
  border-left: 3px solid var(--primary);
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>
