---
layout: default
title: SolarWind – Panouri Fotovoltaice
---

<!-- Include CSS personalizat -->
<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/style.css" />

<!-- HERO -->
<section class="hero">
  <div class="hero-overlay">
    <h1>SolarWind</h1>
    <p>Soluții profesionale pentru panouri fotovoltaice și automatizări inteligente</p>
    <a class="cta-btn" href="#contact">Solicită ofertă</a>
  </div>
</section>

---

# ⚡ De ce SolarWind?

Oferim soluții complete pentru sisteme fotovoltaice destinate locuințelor, firmelor și instalațiilor industriale:

- Consultanță energetică  
- Proiectare completă  
- Instalare certificată  
- Automatizări și monitorizare  
- Mentenanță & service  

---

# 🌞 Proiecte realizate

<div class="carousel-container">
  <div class="carousel-slide">
    <img src="{{ site.baseurl }}/assets/img/p1.jpg" alt="Proiect fotovoltaic 1" />
    <img src="{{ site.baseurl }}/assets/img/p2.png" alt="Proiect fotovoltaic 2" />
    <img src="{{ site.baseurl }}/assets/img/p3.jpg" alt="Proiect fotovoltaic 3" />
  </div>

  <button class="carousel-btn prev" aria-label="Imaginea anterioară">‹</button>
  <button class="carousel-btn next" aria-label="Imaginea următoare">›</button>
</div>

---

# 📞 Contact

<div id="contact"></div>

<form action="https://formsubmit.co/EMAILUL_TAU" method="POST" class="contact-form">
  <input type="text" name="name" placeholder="Nume complet" required>
  <input type="email" name="email" placeholder="Email" required>
  <textarea name="message" placeholder="Mesajul tău" rows="5" required></textarea>

  <!-- opțional: telefon -->
  <!-- <input type="tel" name="phone" placeholder="Telefon"> -->

  <button type="submit">Trimite mesajul</button>

  <!-- FormSubmit parameters -->
  <input type="hidden" name="_captcha" value="false">
  <input type="hidden" name="_template" value="table">
  <!-- redirect după submit (opțional) -->
  <!-- <input type="hidden" name="_next" value="https://ilascamarius.github.io/solarwind/thanks.html"> -->
</form>

<!-- Include JS carusel (pune-l la final, după marcajele HTML) -->
<script src="{{ site.baseurl }}/assets/js/carousel.js"></script>
