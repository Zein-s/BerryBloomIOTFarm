<script setup lang="ts">
useHead({
  title: "Products",
});
const products = [
  { name: 'Botanical Serum', tag: 'Skincare', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80' },
  { name: 'Glow Lotion', tag: 'Hydration', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80' },
  { name: 'Rose Mist', tag: 'Mist', image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80' },
  { name: 'Herbal Cleanser', tag: 'Cleanser', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80' },
  { name: 'Night Cream', tag: 'Night Care', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80' },
  { name: 'Sunscreen', tag: 'Sun Protection', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80' },
  { name: 'Body Oil', tag: 'Body Care', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80' },
  { name: 'Hair Tonic', tag: 'Hair Care', image: 'https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=800&q=80' },
  { name: 'Essence Water', tag: 'Essence', image: 'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=800&q=80' },
  { name: 'Recovery Mask', tag: 'Mask', image: 'https://images.unsplash.com/photo-1556228720-6d0d6f0e783b?auto=format&fit=crop&w=800&q=80' },
]
</script>

<template>
  <main class="products-page">
    <header class="topbar">
      <div class="brand-wrap">
        <div class="brand-mark">B</div>
        <span>Berry Bloom</span>
      </div>

      <nav class="nav">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/services">Services</NuxtLink>
        <NuxtLink to="/pricing">Pricing</NuxtLink>
        <NuxtLink to="/contact">Kontak</NuxtLink>
      </nav>

      <NuxtLink to="/contact" class="btn btn-primary">Mulai proyek</NuxtLink>
    </header>

    <section class="hero">
      <div>
        <p class="eyebrow">Katalog produk</p>
        <h1>Semua produk yang siap menghadirkan pengalaman brand lebih premium.</h1>
      </div>
      <NuxtLink to="/" class="btn btn-secondary">Kembali ke home</NuxtLink>
    </section>

    <section class="product-grid">
      <article v-for="item in products" :key="item.name" class="product-card">
        <img :src="item.image" :alt="item.name" />
        <div class="product-info">
          <strong>{{ item.name }}</strong>
          <span>{{ item.tag }}</span>
        </div>
      </article>
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

* {
  box-sizing: border-box;
}

img {
  display: block;
  max-width: 100%;
}

.products-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 20px 80px;
}

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

.nav {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav a {
  color: #214f41;
  text-decoration: none;
  font-weight: 600;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 22px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
}

.btn-primary {
  background: linear-gradient(135deg, #18b57d, #0f8b63);
  color: #fff;
  box-shadow: 0 18px 35px rgba(15, 139, 99, 0.22);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.7);
  color: #123127;
  border: 1px solid rgba(20, 96, 72, 0.12);
}

.hero {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 24px;
  padding: 20px 0 32px;
}

.eyebrow {
  margin: 0 0 18px;
  font-size: 0.79rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #1a9b73;
}

.hero h1 {
  margin: 0;
  font-size: clamp(2.2rem, 4vw, 3.8rem);
  line-height: 1.08;
  letter-spacing: -0.05em;
  max-width: 720px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 18px;
  margin-top: 12px;
}

.product-card {
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(20, 96, 72, 0.08);
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 14px 34px rgba(16, 60, 48, 0.05);
}

.product-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
}

.product-info {
  padding: 14px 14px 18px;
}

.product-info strong {
  display: block;
  font-size: 0.95rem;
  margin-bottom: 4px;
}

.product-info span {
  color: #51786e;
  font-size: 0.78rem;
}

@media (max-width: 860px) {
  .topbar,
  .hero {
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
  }

  .nav {
    justify-content: center;
    flex-wrap: wrap;
  }

  .product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 520px) {
  .products-page {
    padding-left: 14px;
    padding-right: 14px;
  }

  .nav {
    gap: 12px;
    font-size: 0.92rem;
  }

  .btn {
    width: 100%;
  }

  .product-grid {
    grid-template-columns: 1fr;
  }
}
</style>
