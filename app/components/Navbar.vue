<template>
  <header class="topbar">
    <div class="brand-wrap">
      <div class="brand-mark">B</div>
      <span>Berry Bloom</span>
    </div>

    <nav class="nav-menu">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/services">Services</NuxtLink>
      <NuxtLink to="/pricing">Pricing</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </nav>

    <a href="#contact" class="btn btn-primary">Mulai proyek</a>
  </header>
</template>

<style scoped>
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 20px 0 28px;
}

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

.nav-menu {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-menu a {
  display: flex;
  align-items: center;
  position: relative;
  padding: 4px 2px;
  transition:
    color 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease;
  color: #214f41;
  text-decoration: none;
  font-weight: 600;
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
</style>

<!-- <template>
  <nav class="navbar">
    <div class="navbar-container">
  
      <NuxtLink to="/" class="logo"> My Website </NuxtLink>
      <div class="nav-menu">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/services">Services</NuxtLink>
        <NuxtLink to="/pricing">Pricing</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  width: 100%;
  background: white;
  border-bottom: 1px solid #eee;
}

.navbar-container {
  max-width: 1200px;
  margin: auto;
  padding: 16px 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 22px;
  font-weight: 700;
  text-decoration: none;
  color: #111;
}

.nav-menu {
  display: flex;
  gap: 24px;
}

.nav-menu a {
  color: #555;
  text-decoration: none;
}

.nav-menu a.router-link-active {
  color: #000;
  font-weight: 600;
}
</style> -->
