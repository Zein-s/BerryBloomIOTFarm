<script setup lang="ts">
useHead({
  title: "Services",
});
const services = [
  {
    title: "Brand Identity",
    text: "Membuat identitas visual yang konsisten mulai dari logo, warna, hingga tone komunikasi brand.",
  },
  {
    title: "Landing Page",
    text: "Desain landing page yang fokus pada konversi, storytelling, dan pengalaman pengguna yang jelas.",
  },
  {
    title: "Marketing Creative",
    text: "Siapkan materi promosi, konten visual, dan strategi campaign yang siap dipakai di berbagai channel.",
  },
];
</script>

<template>
  <main class="page-shell">
    <Navbar />

    <section class="hero-card">
      <p class="eyebrow">Layanan</p>
      <h1>Solusi digital yang dibuat untuk tumbuh lebih cepat.</h1>

      <div class="service-grid">
        <article v-for="service in services" :key="service.title" class="service-card">
          <div class="icon">✦</div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.text }}</p>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
:global(body) {
  margin: 0;
  font-family: "Inter", "Segoe UI", sans-serif;
  background: #f3faf5;
  color: #123127;
}

* {
  box-sizing: border-box;
}

.page-shell {
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px 20px 80px;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  background: #f3faf5;
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
  letter-spacing: 0.03em;
  color: #1d1b1a;
  text-decoration: none;
  font-weight: 700;
}

.brand-mark {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(135deg, #1bbf8a, #0d8f60);
  color: #fff;
  display: grid;
  place-items: center;
}

.nav {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}

.nav a {
  color: #214f41;
  text-decoration: none;
  font-weight: 600;
}

.hero-card {
  background: linear-gradient(135deg, #ebfff5, #dff7ed);
  border: 1px solid rgba(20, 96, 72, 0.08);
  border-radius: 32px;
  padding: 48px 32px;
}

.eyebrow {
  margin: 0 0 18px;
  font-size: 0.79rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #1a9b73;
}

.hero-card h1 {
  margin: 0;
  font-size: clamp(2.2rem, 4vw, 3.5rem);
  line-height: 1.08;
  letter-spacing: -0.05em;
}

.service-grid {
  margin-top: 28px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.service-card {
  padding: 24px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.74);
  border: 1px solid rgba(130, 74, 67, 0.08);
}

.icon {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #dff8ec, #c6f0dd);
  font-size: 1.3rem;
  margin-bottom: 16px;
}

.service-card h3 {
  margin: 0 0 10px;
  font-size: 1.35rem;
}

.service-card p {
  margin: 0;
  color: #456f60;
  line-height: 1.7;
}

@media (max-width: 640px) {
  .topbar {
    display: grid;
    justify-content: center;
    text-align: center;
  }

  .nav {
    justify-content: center;
  }

  .service-grid {
    grid-template-columns: 1fr;
  }
}
</style>
