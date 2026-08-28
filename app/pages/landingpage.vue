<script setup lang="ts">
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
</script>

<template>
  <main class="page-shell">
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Website siap ekspor</p>
        <h1>BerryBloom IoT Farm: Model Pertanian Cerdas  tanaman Herbal  Terpadu Berbasis Internet of Things (IoT) untuk Optimalisasi Budidaya Golden Berry dan Bunga Telang dalam Mendukung Pencapaian Sustainable Development Goals (SDGs)</h1>
        <p class="subtitle">
          Berry Bloom membantu bisnis tumbuh dengan strategi branding, tampilan landing page yang modern,
          dan pengalaman digital yang membuat audiens segera percaya.
        </p>

        <div class="cta-row">
          <a href="#contact" class="btn btn-primary">Jadwalkan konsultasi</a>
          <a href="#features" class="btn btn-secondary">Lihat fitur</a>
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

    <section id="contact" class="cta-panel">
      <div>
        <p class="eyebrow">Siap memulai?</p>
        <h2>Mari buat website yang menonjual tanpa perlu terlalu banyak penjelasan.</h2>
      </div>
      <a href="mailto:hello@berrybloom.id" class="btn btn-primary">hello@berrybloom.id</a>
    </section>
  </main>
</template>

<style scoped>
:global(html) {
  scroll-behavior: smooth;
}

:global(body) {
  margin: 0;
  font-family: 'Inter', 'Segoe UI', sans-serif;
  background: #fffaf9;
  color: #1d1b1a;
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
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 20px 0 28px;
  background: #fffaf9;
  z-index: 20;
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
  background: linear-gradient(135deg, #ff8a75, #d9577d);
  color: #fff;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  box-shadow: 0 12px 24px rgba(217, 87, 125, 0.25);
}

.nav {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav a {
  color: #4d3d39;
  text-decoration: none;
  font-weight: 600;
  background: #f8f4ec;
  border: 1px solid #e5d9c8;
  padding: 8px 16px;
  border-radius: 8px;
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
  background: linear-gradient(135deg, #ff7d73, #d9577d);
  color: #fff;
  box-shadow: 0 18px 35px rgba(217, 87, 125, 0.22);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.7);
  color: #281b19;
  border: 1px solid rgba(130, 74, 67, 0.12);
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
  color: #d9577d;
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(1.6rem, 3.2vw, 2.6rem);
  line-height: 1.3;
  letter-spacing: -0.02em;
  max-width: 900px;
}

.subtitle {
  margin-top: 22px;
  max-width: 560px;
  color: #58423f;
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
  color: #5d4c49;
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
  background: #fff1ee;
  color: #b55568;
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
  background: linear-gradient(135deg, #f9d5d0, #f7bfca);
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
  background: linear-gradient(135deg, #f9d1b8, #f8b5d7);
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
  background: linear-gradient(135deg, #ffe4d9, #ffdce8);
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
  color: #5b4a48;
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
  background: linear-gradient(135deg, #2d1a20, #522f38);
  color: rgba(255, 255, 255, 0.92);
  box-shadow: 0 24px 70px rgba(80, 38, 45, 0.2);
}

.about-panel p {
  margin: 0;
  line-height: 1.8;
  font-size: 1.05rem;
}

.cta-panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-top: 30px;
  padding: 28px 30px;
  border-radius: 32px;
  background: linear-gradient(135deg, #fff3ec, #ffe1ec);
  border: 1px solid rgba(130, 74, 67, 0.08);
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

  .feature-grid {
    grid-template-columns: 1fr;
  }

  .cta-panel {
    text-align: center;
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
}
</style>
