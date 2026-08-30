<script setup lang="ts">
useHead({
  title: "About",
});
const values = ["Branding yang konsisten dari awal sampai akhir funnel.", "Desain premium yang mudah dipahami audiens.", "Proses kerja yang jelas, cepat, dan terstruktur."];
</script>

<template>
  <main class="page-shell">
    <Navbar />
    <section class="hero-card">
      <p class="eyebrow">Tentang kami</p>
      <h1>Branding yang terasa premium, sekaligus mudah dipahami.</h1>
      <p class="subtitle">Berry Bloom hadir untuk membantu brand tumbuh lewat visual yang lebih kuat, strategi yang lebih tajam, dan pengalaman digital yang membuat bisnis lebih dipercaya pelanggan.</p>

      <div class="value-grid">
        <div v-for="item in values" :key="item" class="value-card">
          <span class="check">✓</span>
          <p>{{ item }}</p>
        </div>
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
  box-shadow: 0 24px 80px rgba(18, 83, 62, 0.06);
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
  font-size: clamp(2.2rem, 4vw, 4rem);
  line-height: 1.06;
  letter-spacing: -0.05em;
  max-width: 760px;
}

.subtitle {
  margin-top: 20px;
  max-width: 700px;
  color: #564442;
  font-size: 1.1rem;
  line-height: 1.8;
}

.value-grid {
  margin-top: 28px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.value-card {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 20px 18px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(130, 74, 67, 0.08);
}

.check {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #dff8ec;
  color: #0d7d5d;
  display: grid;
  place-items: center;
  font-weight: 800;
}

.value-card p {
  margin: 0;
  line-height: 1.7;
  color: #4f3d3b;
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

  .value-grid {
    grid-template-columns: 1fr;
  }
}
</style>
