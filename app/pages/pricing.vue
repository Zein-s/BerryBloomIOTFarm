<script setup lang="ts">
const plans = [
  {
    name: 'Starter',
    price: 'Rp1.5jt',
    features: ['Brand audit', 'Landing page satu halaman', 'Desain visual dasar'],
    highlight: false,
  },
  {
    name: 'Growth',
    price: 'Rp3.5jt',
    features: ['Brand identity lengkap', 'Landing page premium', 'Copywriting ringan'],
    highlight: true,
  },
  {
    name: 'Scale',
    price: 'Rp6jt',
    features: ['Strategy marketing', 'Campaign creative', 'Support konsultasi rutin'],
    highlight: false,
  },
]
</script>

<template>
  <main class="page-shell">
    <header class="topbar">
      <NuxtLink to="/" class="brand-wrap">
        <div class="brand-mark">B</div>
        <span>Berry Bloom</span>
      </NuxtLink>

      <nav class="nav">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/services">Services</NuxtLink>
        <NuxtLink to="/pricing">Pricing</NuxtLink>
        <NuxtLink to="/contact">Kontak</NuxtLink>
      </nav>

      <NuxtLink to="/contact" class="btn btn-primary">Mulai proyek</NuxtLink>
    </header>

    <section class="hero-card">
      <p class="eyebrow">Pricing</p>
      <h1>Pilih paket yang paling sesuai dengan kebutuhan brand Anda.</h1>

      <div class="pricing-grid">
        <article v-for="plan in plans" :key="plan.name" :class="['plan-card', { highlight: plan.highlight }]">
          <p class="plan-name">{{ plan.name }}</p>
          <h2>{{ plan.price }}</h2>
          <ul>
            <li v-for="feature in plan.features" :key="feature">{{ feature }}</li>
          </ul>
          <NuxtLink to="/contact" class="btn">Pilih paket</NuxtLink>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
:global(body) {
  margin: 0;
  font-family: 'Inter', 'Segoe UI', sans-serif;
  background: #f3faf5;
  color: #123127;
}

* { box-sizing: border-box; }

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

.pricing-grid {
  margin-top: 28px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.plan-card {
  padding: 26px 20px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(130, 74, 67, 0.08);
}

.plan-card.highlight {
  background: linear-gradient(135deg, #ecfff4, #d8f9e9);
  border-color: rgba(14, 125, 86, 0.22);
  transform: translateY(-4px);
}

.plan-name {
  margin: 0 0 12px;
  color: #6d514d;
  font-weight: 700;
}

.plan-card h2 {
  margin: 0 0 16px;
  font-size: 2rem;
  letter-spacing: -0.04em;
}

.plan-card ul {
  margin: 0 0 20px;
  padding-left: 18px;
  color: #4f3d3b;
  line-height: 2;
}

.btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 14px 20px;
  border-radius: 999px;
  background: linear-gradient(135deg, #18b57d, #0f8b63);
  color: white;
  text-decoration: none;
  font-weight: 700;
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

  .pricing-grid {
    grid-template-columns: 1fr;
  }
}
</style>
