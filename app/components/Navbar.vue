<template>
  <header class="topbar">
    <!-- Brand -->
    <div class="brand-wrap">
      <div class="brand-mark">B</div>
      <span>Berry Bloom</span>
    </div>

    <!-- Desktop Navigation -->
    <nav class="nav-menu desktop-nav">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/services">Services</NuxtLink>
      <NuxtLink to="/pricing">Pricing</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </nav>

    <!-- Desktop CTA -->
    <NuxtLink to="/contact" class="btn btn-primary desktop-cta"> Mulai proyek </NuxtLink>

    <!-- Hamburger Mobile -->
    <button class="hamburger" type="button" aria-label="Open navigation" :aria-expanded="isMenuOpen" @click="isMenuOpen = true">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </header>

  <!-- Overlay -->
  <Transition name="overlay">
    <div v-if="isMenuOpen" class="menu-overlay" @click="isMenuOpen = false"></div>
  </Transition>

  <!-- Mobile Menu -->
  <aside class="mobile-menu" :class="{ open: isMenuOpen }">
    <!-- Mobile Brand -->
    <div class="mobile-menu-header">
      <!-- Close Button -->
      <button class="menu-close" type="button" aria-label="Close navigation" @click="isMenuOpen = false">
        <span></span>
        <span></span>
      </button>
      <div class="brand-wrap">
        <div class="brand-mark">B</div>
        <span>Berry Bloom</span>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <nav class="mobile-nav">
      <NuxtLink to="/" @click="isMenuOpen = false"> Home </NuxtLink>

      <NuxtLink to="/about" @click="isMenuOpen = false"> About </NuxtLink>

      <NuxtLink to="/services" @click="isMenuOpen = false"> Services </NuxtLink>

      <NuxtLink to="/pricing" @click="isMenuOpen = false"> Pricing </NuxtLink>

      <NuxtLink to="/contact" @click="isMenuOpen = false"> Contact </NuxtLink>
    </nav>

    <!-- Mobile CTA -->
    <NuxtLink to="/contact" class="btn btn-primary mobile-cta" @click="isMenuOpen = false"> Mulai proyek </NuxtLink>
  </aside>
</template>

<script setup>
const isMenuOpen = ref(false);
</script>

<style scoped>
.topbar {
  position: relative;
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 24px;

  padding: 20px 0 28px;
}

/* BRAND */

.brand-wrap {
  display: inline-flex;
  align-items: center;

  gap: 10px;

  font-weight: 700;
  letter-spacing: 0.03em;
}

.brand-mark {
  width: 40px;
  height: 40px;

  border-radius: 12px;

  background: linear-gradient(135deg, #1bbf8a, #0d8f60);

  color: #fff;

  display: grid;
  place-items: center;

  font-size: 1.2rem;

  box-shadow: 0 12px 24px rgba(16, 143, 96, 0.25);
}

/* DESKTOP NAVIGATION */

.nav-menu {
  display: flex;
  align-items: center;

  gap: 20px;
}

.nav-menu a {
  position: relative;

  display: flex;
  align-items: center;

  padding: 4px 2px;

  color: #214f41;

  text-decoration: none;

  font-weight: 600;

  transition:
    color 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease;
}

.nav-menu a:hover,
.nav-menu a:focus {
  color: #0f7a5a;

  background-color: rgba(15, 122, 90, 0.08);
}

.nav-menu a:active {
  background-color: rgba(15, 122, 90, 0.12);
}

.nav-menu a:focus-visible {
  outline: 2px solid rgba(15, 122, 90, 0.8);

  outline-offset: 3px;
}

.nav-menu a::after {
  content: "";

  position: absolute;

  left: 0;
  bottom: -4px;

  width: 0;
  height: 2px;

  background-color: currentColor;

  transition: width 0.2s ease;
}

.nav-menu a:hover::after,
.nav-menu a:focus::after {
  width: 100%;
}

/* BUTTON */

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 14px 22px;

  border-radius: 999px;

  text-decoration: none;

  font-weight: 700;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, #18b57d, #0f8b63);

  color: #fff;

  box-shadow: 0 18px 35px rgba(15, 139, 99, 0.22);
}

/* HAMBURGER */

.hamburger {
  display: none;

  width: 44px;
  height: 44px;

  padding: 0;

  border: none;
  border-radius: 10px;

  background: transparent;

  cursor: pointer;

  align-items: center;
  justify-content: center;

  flex-direction: column;

  gap: 5px;

  transition: background-color 0.2s ease;
}

.hamburger:hover {
  background-color: rgba(15, 122, 90, 0.08);
}

.hamburger span {
  display: block;

  width: 24px;
  height: 2px;

  border-radius: 999px;

  background-color: #214f41;

  transition: width 0.2s ease;
}

/* MOBILE MENU */

.mobile-menu {
  position: fixed;

  top: 0;
  right: 0;
  left: auto;

  width: min(82vw, 340px);
  height: 100vh;

  z-index: 150;

  padding: 28px 24px;

  background: #ffffff;

  box-shadow: -15px 0 40px rgba(0, 0, 0, 0.12);

  transform: translateX(105%);

  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);

  display: flex;
  flex-direction: column;
}

.mobile-menu.open {
  transform: translateX(0);
}

/* CLOSE BUTTON */

.menu-close {
  position: absolute;

  top: 20px;
  right: 20px;

  width: 40px;
  height: 40px;

  border: none;

  border-radius: 10px;

  background: rgba(15, 122, 90, 0.08);

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transition:
    background-color 0.2s ease,
    transform 0.25s ease;
}

.menu-close:hover {
  background: rgba(15, 122, 90, 0.15);

  transform: rotate(90deg);
}

.menu-close span {
  position: absolute;

  width: 20px;
  height: 2px;

  border-radius: 999px;

  background-color: #214f41;
}

.menu-close span:first-child {
  transform: rotate(45deg);
}

.menu-close span:last-child {
  transform: rotate(-45deg);
}

/* MOBILE MENU HEADER */

.mobile-menu-header {
  display: flex;
  align-items: center;
}

/* MOBILE NAV */

.mobile-nav {
  display: flex;

  flex-direction: column;

  gap: 4px;

  margin-top: 25px;
}

.mobile-nav a {
  position: relative;

  display: flex;
  align-items: center;

  padding: 14px 12px;

  color: #214f41;

  text-decoration: none;

  font-size: 1rem;

  font-weight: 600;

  border-radius: 10px;

  transition:
    color 0.2s ease,
    background-color 0.2s ease,
    padding-left 0.2s ease;
}

.mobile-nav a:hover {
  color: #0f7a5a;

  background-color: rgba(15, 122, 90, 0.08);

  padding-left: 18px;
}

/* MOBILE CTA */

.mobile-cta {
  width: 100%;

  margin-top: auto;
}

/* OVERLAY */

.menu-overlay {
  position: fixed;

  inset: 0;

  z-index: 120;

  background: rgba(15, 35, 29, 0.35);

  backdrop-filter: blur(2px);
}

/* OVERLAY ANIMATION */

.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.3s ease;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

/* RESPONSIVE */

@media (max-width: 768px) {
  .topbar {
    padding: 16px 0 20px;
  }

  .desktop-nav,
  .desktop-cta {
    display: none;
  }

  .hamburger {
    display: flex;
  }
}

/* SMALL MOBILE */

@media (max-width: 400px) {
  .brand-wrap span {
    font-size: 0.95rem;
  }

  .brand-mark {
    width: 36px;
    height: 36px;

    border-radius: 10px;
  }

  .hamburger {
    width: 40px;
    height: 40px;
  }

  .mobile-menu {
    width: 85vw;

    padding: 24px 20px;
  }
}
</style>
