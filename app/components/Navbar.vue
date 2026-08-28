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


.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 22px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, #18b57d, #0f8b63);
  color: #fff;
  box-shadow: 0 18px 35px rgba(15, 139, 99, 0.22);
}
</style>
