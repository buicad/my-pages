<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section id="contact" class="section contact-section">
    <h2 class="section-title reveal">{{ t('contact.title') }}</h2>

    <div class="contact-content reveal">
      <p class="contact-desc">{{ t('contact.desc') }}</p>
      <div class="contact-links">
        <a href="https://github.com/buicad" target="_blank" rel="noopener" class="contact-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.81.945-.015 1.62.87 1.845 1.245 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.245-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.245.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.245 3.3-1.245.66 1.65.24 2.88.12 3.18.78.84 1.245 1.92 1.245 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          {{ t('contact.github') }}
        </a>
        <a href="tel:19188146126" class="contact-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.24 1.01l-2.2 2.2z"/>
          </svg>
          {{ t('contact.phone') }}
        </a>
        <a href="mailto:2514501018@qq.com" class="contact-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="M22 4L12 13 2 4"/>
          </svg>
          {{ t('contact.email') }}
        </a>
      </div>
    </div>

    <footer class="footer">
      <p>&copy; {{ new Date().getFullYear() }} Yang Haoxiang. Built with Vue 3 + Vite.</p>
    </footer>
  </section>
</template>

<style scoped>
.contact-section {
  text-align: center;
}

.contact-desc {
  color: var(--text-dim);
  margin-bottom: 24px;
  font-size: 0.95rem;
}

.contact-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
}

.contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  padding: 12px 24px;
  border: 1px solid var(--primary);
  border-radius: var(--radius);
  color: var(--primary);
  background: transparent;
  transition: all 0.3s;
  letter-spacing: 1px;
}

.contact-btn:hover {
  background: var(--primary);
  color: var(--bg);
  box-shadow: 0 0 20px var(--primary);
  text-shadow: none;
}

.footer {
  margin-top: 80px;
  padding-top: 24px;
  border-top: 1px solid var(--border);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-dim);
}
</style>
