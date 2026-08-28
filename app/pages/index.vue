<script setup lang="ts">
import Navbar from '../components/Navbar.vue'

const features = [
  {
    title: 'Branding yang konsisten',
    description: 'Buat identitas visual yang kuat dan terlihat profesional di setiap kanal digital.',
  },
  {
    title: 'Landing page yang cepat',
    description: 'Desain dibuat ringan, responsif, dan optimal untuk kecepatan loading di desktop maupun mobile.',
  },
  {
    title: 'Siap untuk ekspor',
    description: 'Struktur halaman dibuat agar mudah dipindah ke proyek lain atau dipublikasikan sebagai landing page statis.',
  },
]

const metrics = [
  { value: '4.9/5', label: 'Rating klien' },
  { value: '2.4x', label: 'Peningkatan engagement' },
  { value: '24/7', label: 'Ketersediaan brand' },
]

const testimonials = [
  {
    name: 'Nadia',
    role: 'Owner Brand',
    quote: 'Desain yang terasa premium dan mudah dicerna. Brand kami langsung lebih dipercaya setelah landing page baru dibuat.',
  },
  {
    name: 'Rizky',
    role: 'Founder Startup',
    quote: 'Prosesnya cepat, hasilnya rapi, dan benar-benar membantu conversion. Kami merasa lebih siap untuk scale.',
  },
  {
    name: 'Salsa',
    role: 'Marketing Lead',
    quote: 'Semua elemen terasa konsisten. Tim kami lebih mudah menjelaskan value proposition dengan tampilan yang kuat.',
  },
]

const team = [
  {
    name: 'Muhammad Eko Annur Fajar A',
    role: 'IoT Developer',
    image:
      '/images/masaan.jpg',
  },
  {
    name: 'Zainur Roziqin',
    role: 'Business Development',
    image:
      '/images/maszain.jpg',
  },
]

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
  <main class="page-shell">

    <Navbar />
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Website siap ekspor</p>
        <h1>BerryBloom IoT Farm: Model Pertanian Cerdas  tanaman Herbal  Terpadu Berbasis Internet of Things (IoT) untuk Optimalisasi Budidaya Golden Berry dan Bunga Telang dalam Mendukung Pencapaian Sustainable Development Goals (SDGs)</h1>
        <p class="subtitle">
          Berry Bloom membantu bisnis tumbuh dengan strategi branding, tampilan landing page yang modern,
          dan pengalaman digital yang membuat audiens segera percaya.
        </p>

        <div class="cta-row">
          <NuxtLink to="/contact" class="btn btn-primary">Jadwalkan konsultasi</NuxtLink>
          <NuxtLink to="#features" class="btn btn-secondary">Lihat fitur</NuxtLink>
        </div>

        <div class="stats">
          <div v-for="item in metrics" :key="item.label" class="stat-card">
            <strong>{{ item.value }}</strong>
            <span>{{ item.label }}</span>
          </div>
        </div>
      </div>

      <div class="hero-visual" aria-label="Preview brand showcase">
        <div class="visual-card main-card">
          <span class="chip">Campaign</span>
          <h3>Spring Collection</h3>
          <div class="product-showcase">
            <div class="product product-one" />
            <div class="product product-two" />
          </div>
          <div class="mini-row">
            <span>+18.4%</span>
            <span>Brand Reach</span>
          </div>
        </div>
        <div class="visual-card floating-card">
          <p>Conversion</p>
          <strong>7.8%</strong>
          <small>+2.1% dibanding bulan lalu</small>
        </div>
      </div>
    </section>

    <section id="features" class="features">
      <div class="section-heading">
        <p class="eyebrow">Kenapa pilih kami</p>
        <h2>Solusi yang dibuat untuk pertumbuhan brand.</h2>
      </div>

      <div class="feature-grid">
        <article v-for="feature in features" :key="feature.title" class="feature-card">
          <div class="feature-icon">✦</div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </article>
      </div>
    </section>

    <section id="about" class="about">
      <div class="about-copy">
        <p class="eyebrow">Tentang Berry Bloom</p>
        <h2>Branding yang terasa premium dan jauh lebih mudah dicerna audiens.</h2>
      </div>

      <div class="about-panel">
        <p>
          Kami menggabungkan strategi visual, storytelling, dan pengalaman pengguna agar tiap halaman mampu
          menonjembatani bisnis dengan target audiens dengan cara yang lebih elegan dan efektif.
        </p>
      </div>
    </section>

    <section class="team-section">
      <div class="section-heading">
        <p class="eyebrow">Tim kami</p>
        <h2>Orang-orang di balik produk yang tumbuh bersama brand.</h2>
      </div>

      <div class="team-layout">
        <article class="team-card featured">
          <img :src="team[0].image" :alt="team[0].name" />
          <div class="team-info">
            <strong>{{ team[0].name }}</strong>
            <span>{{ team[0].role }}</span>
          </div>
        </article>

        <article v-for="member in team.slice(1)" :key="member.name" class="team-card">
          <img :src="member.image" :alt="member.name" />
          <div class="team-info">
            <strong>{{ member.name }}</strong>
            <span>{{ member.role }}</span>
          </div>
        </article>
      </div>
    </section>

    <section class="product-showcase-section">
      <div class="section-heading product-header">
        <div>
          <p class="eyebrow">Produk kami</p>
          <h2>10 produk yang siap menghadirkan nilai lebih untuk pelanggan.</h2>
        </div>
        <NuxtLink to="/products" class="btn btn-secondary">Lihat semua</NuxtLink>
      </div>

      <div class="product-grid">
        <article v-for="item in products" :key="item.name" class="product-card">
          <img :src="item.image" :alt="item.name" />
          <div class="product-info">
            <strong>{{ item.name }}</strong>
            <span>{{ item.tag }}</span>
          </div>
        </article>
      </div>
    </section>

    <section class="testimonials">
      <div class="section-heading">
        <p class="eyebrow">Testimoni</p>
        <h2>Klien merasa lebih percaya sejak brand mereka terlihat lebih kuat.</h2>
      </div>

      <div class="testimonial-grid">
        <article v-for="item in testimonials" :key="item.name" class="testimonial-card">
          <div class="stars">★★★★★</div>
          <p>“{{ item.quote }}”</p>
          <div class="person">
            <strong>{{ item.name }}</strong>
            <span>{{ item.role }}</span>
          </div>
        </article>
      </div>
    </section>

    <section class="cta-panel">
      <div>
        <p class="eyebrow">Siap memulai?</p>
        <h2>Mari buat website yang menonjual tanpa perlu terlalu banyak penjelasan.</h2>
      </div>
      <NuxtLink to="/contact" class="btn btn-primary">hello@berrybloom.id</NuxtLink>
    </section>

    <footer class="site-footer">
      <div class="brand-wrap">
        <div class="brand-mark">B</div>
        <span>Berry Bloom</span>
      </div>

      <div class="footer-links">
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/services">Services</NuxtLink>
        <NuxtLink to="/pricing">Pricing</NuxtLink>
        <NuxtLink to="/contact">Kontak</NuxtLink>
      </div>

      <p>© 2026 Berry Bloom. Semua hak dilindungi.</p>
    </footer>
  </main>
</template>

<style scoped>
:global(html) {
  scroll-behavior: smooth;
}

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
  max-width: 100%;
  display: block;
}

.page-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 20px 80px;
}

.topbar,
.hero,
.features,
.about,
.cta-panel {
  width: min(100%, 1120px);
  margin: 0 auto;
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
  gap: 20px;
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

.btn-secondary {
  background: rgba(255, 255, 255, 0.7);
  color: #123127;
  border: 1px solid rgba(20, 96, 72, 0.12);
}

.hero {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 40px;
  padding: 40px 0 56px;
}

.eyebrow {
  margin: 0 0 18px;
  font-size: 0.79rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #1a9b73;
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(1.2rem, 2.2vw, 2rem);
  line-height: 1.3;
  letter-spacing: -0.02em;
  max-width: 900px;
}

.subtitle {
  margin-top: 22px;
  max-width: 560px;
  color: #355a4f;
  font-size: 1.08rem;
  line-height: 1.8;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.stats {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 34px;
}

.stat-card {
  min-width: 140px;
  padding: 18px 20px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.76);
  border: 1px solid rgba(130, 74, 67, 0.08);
  box-shadow: 0 18px 50px rgba(20, 12, 11, 0.04);
}

.stat-card strong {
  display: block;
  font-size: 1.6rem;
  margin-bottom: 8px;
}

.stat-card span {
  color: #3d655d;
  font-size: 0.9rem;
}

.hero-visual {
  position: relative;
  min-height: 520px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.visual-card {
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(130, 74, 67, 0.08);
  backdrop-filter: blur(14px);
  box-shadow: 0 24px 80px rgba(30, 16, 15, 0.08);
}

.main-card {
  width: min(100%, 420px);
  border-radius: 30px;
  padding: 26px;
}

.chip {
  display: inline-block;
  padding: 8px 12px;
  background: #eafaf3;
  color: #0e7e5a;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.main-card h3 {
  margin: 18px 0 22px;
  font-size: 2rem;
  letter-spacing: -0.04em;
}

.product-showcase {
  display: flex;
  gap: 18px;
  margin-bottom: 24px;
}

.product {
  flex: 1;
  height: 180px;
  border-radius: 22px;
  background: linear-gradient(135deg, #dff7ee, #b8efdb);
  position: relative;
  overflow: hidden;
}

.product::before {
  content: '';
  position: absolute;
  inset: 18px 18px auto auto;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
}

.product-two {
  background: linear-gradient(135deg, #c3f0d8, #9adcb3);
}

.mini-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  color: #2d2020;
}

.floating-card {
  position: absolute;
  right: 12px;
  bottom: 24px;
  width: 210px;
  border-radius: 24px;
  padding: 18px 20px;
}

.floating-card p,
.floating-card small {
  margin: 0;
  color: #63514f;
}

.floating-card strong {
  display: block;
  margin: 8px 0;
  font-size: 2rem;
  letter-spacing: -0.04em;
}

.features,
.about {
  padding-top: 34px;
}

.section-heading {
  max-width: 620px;
  margin-bottom: 28px;
}

.section-heading h2,
.about-copy h2,
.cta-panel h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.1;
  letter-spacing: -0.04em;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.feature-card {
  padding: 24px;
  border-radius: 26px;
  background: #fff;
  border: 1px solid rgba(130, 74, 67, 0.08);
  box-shadow: 0 18px 36px rgba(18, 12, 11, 0.04);
}

.feature-icon {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #dff8ec, #c6f0dd);
  font-size: 1.4rem;
  margin-bottom: 18px;
}

.feature-card h3 {
  margin: 0 0 10px;
  font-size: 1.35rem;
}

.feature-card p {
  margin: 0;
  line-height: 1.7;
  color: #456f60;
}

.team-section,
.product-showcase-section {
  padding-top: 32px;
}

.team-layout {
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr;
  gap: 22px;
  margin-top: 18px;
}

.team-card {
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(20, 96, 72, 0.08);
  border-radius: 26px;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(16, 60, 48, 0.06);
}

.team-card img {
  width: 100%;
  height: 260px;
  object-fit: contain;
  display: block;
  padding: 12px;
}

.team-card.featured img {
  height: 340px;
}

.team-info {
  padding: 18px 18px 20px;
}

.team-info strong {
  display: block;
  font-size: 1.15rem;
  margin-bottom: 4px;
}

.team-info span {
  color: #4d7065;
  font-size: 0.9rem;
}

.product-header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 18px;
  margin-top: 18px;
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

.about {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 22px;
  align-items: center;
  padding-bottom: 40px;
}

.about-panel {
  padding: 28px 26px;
  border-radius: 28px;
  background: linear-gradient(135deg, #0f4d3f, #1b7f60);
  color: rgba(255, 255, 255, 0.92);
  box-shadow: 0 24px 70px rgba(16, 92, 70, 0.2);
}

.about-panel p {
  margin: 0;
  line-height: 1.8;
  font-size: 1.05rem;
}

.testimonials {
  padding-top: 42px;
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.testimonial-card {
  padding: 24px 22px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(20, 96, 72, 0.08);
  box-shadow: 0 14px 36px rgba(15, 62, 49, 0.05);
}

.stars {
  color: #f4b740;
  letter-spacing: 0.18em;
  font-size: 0.9rem;
  margin-bottom: 14px;
}

.testimonial-card p {
  margin: 0;
  color: #456f60;
  line-height: 1.8;
}

.person {
  margin-top: 18px;
}

.person strong,
.person span {
  display: block;
}

.person strong {
  margin-bottom: 4px;
}

.person span {
  color: #5d7b70;
  font-size: 0.82rem;
}

.cta-panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-top: 30px;
  padding: 28px 30px;
  border-radius: 32px;
  background: linear-gradient(135deg, #ebfff5, #dff7ed);
  border: 1px solid rgba(20, 96, 72, 0.08);
}

.site-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-top: 28px;
  padding-top: 22px;
  border-top: 1px solid rgba(20, 96, 72, 0.1);
  color: #456f60;
}

.site-footer p {
  margin: 0;
}

.footer-links {
  display: flex;
  align-items: center;
  gap: 20px;
}

.footer-links a {
  color: #214f41;
  text-decoration: none;
  font-weight: 600;
}

@media (max-width: 860px) {
  .topbar,
  .hero,
  .about,
  .cta-panel {
    grid-template-columns: 1fr;
    display: grid;
  }

  .topbar {
    justify-content: center;
    text-align: center;
  }

  .nav {
    justify-content: center;
    flex-wrap: wrap;
  }

  .hero {
    padding-top: 10px;
  }

  .feature-grid,
  .testimonial-grid {
    grid-template-columns: 1fr;
  }

  .team-layout {
    grid-template-columns: 1fr;
  }

  .product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .cta-panel,
  .site-footer {
    text-align: center;
    display: grid;
  }

  .footer-links {
    justify-content: center;
    flex-wrap: wrap;
  }
}

@media (max-width: 520px) {
  .page-shell {
    padding-left: 14px;
    padding-right: 14px;
  }

  .topbar {
    padding-top: 10px;
  }

  .nav {
    gap: 12px;
    font-size: 0.92rem;
  }

  .btn {
    width: 100%;
  }

  .cta-row {
    flex-direction: column;
  }

  .hero-visual {
    min-height: 420px;
  }

  .floating-card {
    width: 180px;
    right: 4px;
    bottom: 6px;
  }

  .product-header {
    display: grid;
    align-items: start;
  }

  .product-grid {
    grid-template-columns: 1fr;
  }
}
</style>
