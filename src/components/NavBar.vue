<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const scrolled = ref(false)
const mobileOpen = ref(false)

const navItems = [
  { key: 'nav.about', href: '#about' },
  { key: 'nav.skills', href: '#skills' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.contact', href: '#contact' },
]

function toggleLang() {
  locale.value = locale.value === 'zh' ? 'en' : 'zh'
  localStorage.setItem('lang', locale.value)
}

function onScroll() {
  scrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <nav class="navbar" :class="{ scrolled }">
    <div class="navbar-inner">
      <a href="#" class="logo">&lt;YHX/&gt;</a>

      <button class="mobile-toggle" @click="mobileOpen = !mobileOpen" aria-label="Menu">
        <span :class="{ open: mobileOpen }"></span>
      </button>

      <div class="nav-links" :class="{ open: mobileOpen }">
        <a v-for="item in navItems" :key="item.key" :href="item.href" @click="mobileOpen = false">
          {{ t(item.key) }}
        </a>
        <button class="lang-btn" @click="toggleLang">
          {{ locale === 'zh' ? 'EN' : '中' }}
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 16px 24px;
  transition: background 0.3s, backdrop-filter 0.3s;
}

.navbar.scrolled {
  background: rgba(10, 10, 26, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.navbar-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-family: var(--font-mono);
  font-size: 1.3rem;
  color: var(--primary);
  font-weight: 700;
  letter-spacing: 1px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav-links a {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--text-dim);
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: var(--primary);
  text-shadow: 0 0 8px var(--primary);
}

.lang-btn {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  padding: 4px 12px;
  border: 1px solid var(--primary);
  border-radius: 6px;
  background: transparent;
  color: var(--primary);
  cursor: pointer;
  transition: all 0.3s;
  letter-spacing: 1px;
}

.lang-btn:hover {
  background: var(--primary);
  color: var(--bg);
  box-shadow: 0 0 12px var(--primary);
}

.mobile-toggle {
  display: none;
  background: none;
  border: none;
  width: 28px;
  height: 20px;
  position: relative;
  cursor: pointer;
}

.mobile-toggle span,
.mobile-toggle span::before,
.mobile-toggle span::after {
  display: block;
  width: 28px;
  height: 2px;
  background: var(--primary);
  position: absolute;
  transition: all 0.3s;
}

.mobile-toggle span::before,
.mobile-toggle span::after {
  content: '';
}

.mobile-toggle span { top: 9px; }
.mobile-toggle span::before { top: -8px; }
.mobile-toggle span::after { top: 8px; }

.mobile-toggle span.open { background: transparent; }
.mobile-toggle span.open::before { top: 0; transform: rotate(45deg); }
.mobile-toggle span.open::after { top: 0; transform: rotate(-45deg); }

@media (max-width: 768px) {
  .mobile-toggle { display: block; }

  .nav-links {
    position: fixed;
    top: 0;
    right: -280px;
    width: 280px;
    height: 100vh;
    background: rgba(10, 10, 26, 0.97);
    flex-direction: column;
    justify-content: center;
    padding: 24px;
    gap: 24px;
    transition: right 0.3s;
    border-left: 1px solid var(--border);
  }

  .nav-links.open { right: 0; }

  .nav-links a { font-size: 1rem; }
}
</style>
