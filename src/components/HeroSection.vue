<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const displayedTagline = ref('')
const taglineIndex = ref(0)

onMounted(() => {
  const fullText = t('hero.tagline')
  const interval = setInterval(() => {
    if (taglineIndex.value < fullText.length) {
      displayedTagline.value += fullText[taglineIndex.value]
      taglineIndex.value++
    } else {
      clearInterval(interval)
    }
  }, 80)
})
</script>

<template>
  <section id="hero" class="hero">
    <div class="hero-content">
      <p class="greeting">{{ t('hero.greeting') }}</p>
      <h1 class="name">{{ t('hero.name') }}</h1>
      <p class="tagline">
        <span class="typed">{{ displayedTagline }}</span>
        <span class="cursor">|</span>
      </p>
      <p class="subtitle">{{ t('hero.subtitle') }}</p>
      <a href="#about" class="scroll-hint">
        <span>{{ t('hero.scrollDown') }}</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <path d="M8 4L8 20M8 20L2 14M8 20L14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.hero-content {
  text-align: center;
  padding: 0 24px;
}

.greeting {
  font-family: var(--font-mono);
  font-size: 1.1rem;
  color: var(--secondary);
  margin-bottom: 8px;
  letter-spacing: 2px;
}

.name {
  font-family: var(--font-mono);
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  color: var(--text-bright);
  font-weight: 700;
  margin-bottom: 16px;
  text-shadow: 0 0 30px rgba(0, 240, 255, 0.3);
}

.tagline {
  font-family: var(--font-mono);
  font-size: clamp(0.9rem, 2vw, 1.2rem);
  color: var(--primary);
  margin-bottom: 12px;
  min-height: 1.8em;
}

.cursor {
  animation: blink 1s step-end infinite;
  color: var(--primary);
  font-weight: 200;
}

@keyframes blink {
  50% { opacity: 0; }
}

.subtitle {
  font-size: 1rem;
  color: var(--text-dim);
  max-width: 500px;
  margin: 0 auto 40px;
}

.scroll-hint {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--text-dim);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 2px;
  animation: float 2s ease-in-out infinite;
}

.scroll-hint svg {
  color: var(--primary);
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}
</style>
