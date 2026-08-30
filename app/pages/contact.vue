<script setup lang="ts">
useHead({
  title: "Contact",
});
const contactItems = [
  {
    label: "Email",
    value: "hello@berrybloom.id",
    href: "mailto:hello@berrybloom.id",
  },
  {
    label: "Instagram",
    value: "@berrybloom",
    href: "https://instagram.com/berrybloom",
  },
  {
    label: "WhatsApp",
    value: "+6281914795701",
    href: "https://wa.me/6281914795701?text=Halo%20Berry%20Bloom%2C%20saya%20ingin%20berdiskusi%20mengenai%20kebutuhan%20branding%2C%20landing%20page%2C%20dan%20strategi%20digital%20untuk%20bisnis%20saya.",
  },
];
</script>

<template>
  <main class="contact-page">
    <Navbar />

    <section class="hero-card">
      <p class="eyebrow">Hubungi kami</p>

      <h1>Siap ekspansi brand Anda ke level berikutnya?</h1>

      <p class="subtitle">Mari diskusikan kebutuhan branding, landing page, dan strategi digital yang cocok untuk bisnis Anda.</p>

      <div class="contact-list">
        <a v-for="item in contactItems" :key="item.label" :href="item.href" target="_blank" rel="noopener" class="contact-item">
          <span>{{ item.label }}</span>
          <strong>{{ item.value }}</strong>
        </a>
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

.contact-page {
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
  font-weight: 700;
  letter-spacing: 0.03em;
  color: #1d1b1a;
  text-decoration: none;
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
  max-width: 640px;
  color: #564442;
  font-size: 1.1rem;
  line-height: 1.8;
}

.contact-list {
  margin-top: 30px;
  display: grid;
  gap: 16px;
}

.contact-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  text-decoration: none;
  color: #1d1b1a;
  background: rgba(255, 255, 255, 0.7);
  padding: 20px 22px;
  border-radius: 20px;
  border: 1px solid rgba(130, 74, 67, 0.08);
}

.contact-item span {
  font-weight: 700;
  color: #5b4a48;
}

.contact-item strong {
  font-size: 1.05rem;
}

@media (max-width: 520px) {
  .topbar {
    display: grid;
    justify-content: center;
    text-align: center;
  }

  .nav {
    justify-content: center;
    flex-wrap: wrap;
  }

  .contact-item {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
