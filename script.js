(() => {
  'use strict';

  /* ============================================================
     i18n
     ============================================================ */

  const translations = {
    id: {
      'a11y.skip': 'Langsung ke konten',
      'nav.about': 'Tentang', 'nav.skills': 'Keahlian', 'nav.experience': 'Pengalaman',
      'nav.achievements': 'Penghargaan',
      'nav.projects': 'Proyek', 'nav.contact': 'Kontak', 'nav.cta': 'Hubungi Saya',

      'projectsPage.back': 'Kembali ke Beranda',
      'projectsPage.heading': 'Semua Proyek',
      'projectsPage.lead': 'Kumpulan lengkap studi kasus dan eksplorasi desain saya — dari kompetisi, magang, sampai proyek pribadi.',

      'hero.badge': 'Terbuka untuk Peluang Kerja',
      'hero.title': 'UI/UX Designer & Front-end Web Developer',
      'hero.tagline': 'Setiap produk yang hebat selalu dimulai dengan satu pertanyaan sederhana: "Bagaimana jika dibuat lebih baik?"',
      'hero.cta.primary': 'Lihat Proyek',
      'hero.cta.secondary': 'Unduh CV',
      'hero.stat.years': 'Tahun Pengalaman',
      'hero.stat.disciplines': 'Disiplin',
      'hero.scroll': 'Gulir',

      'about.heading': 'Tentang Saya',
      'about.body1': 'Perjalanan saya dimulai dari dunia visual — lulusan SMK Multimedia yang sempat bekerja sebagai Editor dan Kameramen di sebuah stasiun televisi lokal. Dari sana saya belajar bagaimana komposisi, gambar, dan cerita membentuk persepsi orang dalam hitungan detik. Ketertarikan itu membawa saya ke <span class="em">UI/UX Design</span> dan <span class="em">Front-end Web Development</span> saat kuliah Teknik Informatika, bidang yang saya tekuni lewat berbagai kompetisi nasional bersama tim.',
      'about.body2': 'Saya percaya latar belakang visual ini jadi modal tersendiri — desainer yang paham gambar akan paham antarmuka. Sekarang saya sedang memperluas kemampuan ke pengembangan aplikasi mobile dengan <span class="hl">Flutter</span>, karena desainer yang memahami cara kerja implementasinya akan selalu menghasilkan keputusan desain yang lebih baik.',
      'about.facts.location': 'Lokasi', 'about.facts.locationValue': 'Palangka Raya, Kalimantan Tengah',
      'about.facts.education': 'Pendidikan', 'about.facts.educationValue': 'Universitas Palangka Raya',
      'about.facts.focus': 'Fokus',
      'about.facts.status': 'Status', 'about.facts.statusValue': 'Terbuka untuk kerja penuh waktu',

      'quote.text': 'Kamera, desain, lalu kode — tiga bahasa berbeda yang kupelajari dengan cara yang sama: <span class="hl">coba dulu, salah, lalu paham</span>.',

      'skills.heading': 'Keahlian',
      'skills.lead': 'Empat disiplin, satu cara berpikir yang sama: presisi dari ide sampai eksekusi.',
      'skills.uiux.title': 'UI/UX Design',
      'skills.uiux.desc': 'Merancang alur dan antarmuka yang jelas, teruji, dan enak dipakai.',
      'skills.web.title': 'Front-end & Full-stack Web',
      'skills.web.desc': 'Menerjemahkan desain jadi kode yang rapi — dari tampilan sampai basis data.',
      'skills.media.title': 'Videografi & Fotografi',
      'skills.media.desc': 'Bekal profesional dari dunia broadcast — mengenal gambar sebelum mendesain layar.',
      'skills.media.tag.video': 'Videografi',
      'skills.media.tag.photo': 'Fotografi',
      'skills.mobile.title': 'Flutter & Mobile',
      'skills.mobile.badge': 'Sedang Berkembang',
      'skills.mobile.desc': 'Memperluas kemampuan desain ke pengalaman native di Android.',
      'skills.soft.label': 'Keterampilan Lunak',
      'skills.soft.communication': 'Komunikasi Tim',
      'skills.soft.collaboration': 'Kolaborasi',
      'skills.soft.problemSolving': 'Pemecahan Masalah',
      'skills.soft.english': 'Bahasa Inggris (Pemula–Menengah)',

      'experience.heading': 'Pengalaman & Pendidikan',
      'experience.lead': 'Perjalanan dari studio broadcast ke UI/UX — lima langkah, satu arah yang jelas.',
      'experience.type.work': 'Pengalaman Kerja',
      'experience.type.internship': 'Magang',
      'experience.type.education': 'Pendidikan',
      'experience.item1.date': '2022 — Sekarang',
      'experience.item1.role': 'S1 Teknik Informatika',
      'experience.item1.org': 'Universitas Palangka Raya',
      'experience.item1.point1': 'Mendalami UI/UX Design dan Front-end Web Development.',
      'experience.item1.point2': 'Aktif mengikuti kompetisi teknologi tingkat nasional (lihat bagian Penghargaan).',
      'experience.item2.date': 'Agu 2025 — Des 2025 · 5 bulan',
      'experience.item2.role': 'Fullstack Web Developer',
      'experience.item2.org': 'Dinas Kominfo Kabupaten Katingan',
      'experience.item2.point1': 'Membangun dan memelihara aplikasi web pemerintahan menggunakan Laravel.',
      'experience.item2.point2': 'Mengerjakan 3 website instansi: Dinas PUPR, Dinas DKUKMP, dan Sekretariat Daerah.',
      'experience.item3.date': 'Des 2021 — Jun 2022 · 6 bulan',
      'experience.item3.role': 'Editor & Kameramen',
      'experience.item3.org': 'PT. Shinta Buana Vision (SBTV), Pangkalan Bun',
      'experience.item3.point1': 'Mengoperasikan kamera untuk produksi program televisi.',
      'experience.item3.point2': 'Mengedit video tayangan menggunakan Adobe Premiere Pro.',
      'experience.item4.date': 'Jul 2021 — Okt 2021 · 4 bulan',
      'experience.item4.role': 'Magang Editor & Kameramen',
      'experience.item4.org': 'PT. Shinta Buana Vision (SBTV), Pangkalan Bun',
      'experience.item4.point1': 'Belajar dasar pengoperasian kamera dan teknik pengambilan gambar.',
      'experience.item4.point2': 'Membantu proses editing video untuk tayangan harian.',
      'experience.item5.date': '2019 — 2022',
      'experience.item5.role': 'SMK — Jurusan Multimedia',
      'experience.item5.org': 'SMK Muhammadiyah Pangkalan Bun',
      'experience.item5.point1': 'Mendalami desain grafis menggunakan Adobe Photoshop.',
      'experience.item5.point2': 'Mempelajari dasar fotografi dan videografi, termasuk camera angle dan positioning.',

      'achievements.heading': 'Penghargaan',
      'achievements.lead': 'Rekam jejak dari kompetisi teknologi tingkat nasional, sebagai UI/UX Designer dalam tim.',
      'achievements.finalist': 'Finalis',
      'achievements.item1.rank': 'Juara 3',
      'achievements.item1.name': 'Hackathon Permikomnas',
      'achievements.item1.desc': 'Kategori E-Government Tech — berkolaborasi dalam tim sebagai UI/UX Designer.',
      'achievements.item2.name': 'MTQMN',
      'achievements.item2.desc': 'Desain aplikasi "Quranku" — berperan sebagai UI/UX Designer dalam tim.',
      'achievements.item3.name': 'GEMASTIK XVI',
      'achievements.item3.desc': 'Kategori Pengembangan Perangkat Lunak — berperan sebagai UI/UX Designer dalam tim.',

      'projects.heading': 'Proyek Terpilih',
      'projects.lead': 'Studi kasus nyata dari kompetisi, magang, dan eksplorasi pribadi.',
      'projects.zeflow.category': 'Flutter & Mobile',
      'projects.zeflow.title': 'ZeFlow',
      'projects.zeflow.desc': 'Aplikasi pencatatan pengeluaran dan manajemen keuangan pribadi — mencatat pemasukan, pengeluaran, dan anggaran bulanan, dengan notifikasi bank yang otomatis mencatat setiap transaksi. Dirancang dan dibangun sendiri dengan Flutter.',
      'projects.expertSystem.category': 'Web App · Sistem Pakar',
      'projects.expertSystem.title': 'Zeez Expert System',
      'projects.expertSystem.desc': 'Sistem pakar diagnosis awal kerusakan laptop, PC, dan printer menggunakan algoritma Hybrid Forward & Backward Chaining, untuk brand Cellcom Tronic.',
      'projects.expertSystem.tag2': 'Sistem Pakar',
      'projects.expertSystem.tag3': 'Forward Chaining',
      'projects.datangBulan.category': 'Flutter & Mobile',
      'projects.datangBulan.title': 'Datang Bulan Tracker',
      'projects.datangBulan.desc': 'Aplikasi Flutter untuk melacak siklus haid, masa subur, dan prakiraan kedatangan bulan berikutnya.',
      'projects.gojek.category': 'UI/UX Case Study · Redesain',
      'projects.gojek.title': 'Redesain Aplikasi Gojek',
      'projects.gojek.desc': 'Eksplorasi desain ulang untuk pengalaman pemesanan makanan dan transportasi yang lebih mulus — dari halaman utama, checkout, sampai pelacakan pesanan.',
      'projects.moreHeading': 'Proyek Lainnya',
      'projects.viewMore': 'Lihat Lebih Banyak Proyek',
      'projects.zepresent.title': 'ZePresent',
      'projects.zepresent.desc': 'Dashboard manajemen presensi karyawan — rekap kehadiran, jadwal shift, dan laporan presensi.',
      'projects.sirtuin.title': 'SIRTUIN',
      'projects.sirtuin.desc': 'Aplikasi edukasi dan monitoring gizi ibu dan anak untuk mencegah stunting. Dirancang bersama tim untuk GEMASTIK 2024.',
      'projects.visitSite': 'Kunjungi Situs',
      'projects.govPupr.title': 'Website Dinas PUPR',
      'projects.govPupr.desc': 'Website resmi Dinas Pekerjaan Umum dan Penataan Ruang Kabupaten Katingan, dibangun dengan Laravel.',
      'projects.govDkukmp.title': 'Website Dinas DKUKMP',
      'projects.govDkukmp.desc': 'Website resmi Dinas Koperasi, UKM, dan Perdagangan Kabupaten Katingan, dibangun dengan Laravel.',
      'projects.govSetda.title': 'Website Sekretariat Daerah',
      'projects.govSetda.desc': 'Website resmi Sekretariat Daerah Kabupaten Katingan, dibangun dengan Laravel.',
      'projects.designCards.title': 'Eksplorasi Desain Kartu UI',
      'projects.designCards.desc': 'Studi komponen: kartu login, registrasi, profil, dan konten.',
      'projects.shopee.title': 'Redesain Aplikasi Shopee',
      'projects.shopee.desc': 'Eksplorasi desain ulang untuk pengalaman belanja yang lebih segar dan modern.',
      'projects.adanest.title': 'ADANEST',
      'projects.adanest.desc': 'Website mendukung pemulihan diri dari kecanduan PMO, menawarkan pemantauan kebiasaan, artikel motivasi, konsultasi, dan chat bot. GEMASTIK 2023',
      'projects.adaapi.title': 'ADAAPI',
      'projects.adaapi.desc': 'Platform akselerasi dan notifikasi darurat kebakaran terintegrasi dengan BPBD, menampilkan sistem peringatan real-time dan deteksi visual otomatis.',

      'contact.heading': 'Mari Terhubung',
      'contact.lead': 'Sedang mencari UI/UX Designer atau Front-end Developer? Saya siap ngobrol.',
      'contact.emailValue': 'budiaat25@gmail.com',

      'footer.credit': 'Dirancang & dikembangkan oleh Budi Aulyansyah.'
    },
    en: {
      'a11y.skip': 'Skip to content',
      'nav.about': 'About', 'nav.skills': 'Skills', 'nav.experience': 'Experience',
      'nav.achievements': 'Achievements',
      'nav.projects': 'Projects', 'nav.contact': 'Contact', 'nav.cta': 'Get in Touch',

      'projectsPage.back': 'Back to Home',
      'projectsPage.heading': 'All Projects',
      'projectsPage.lead': 'The complete collection of my case studies and design explorations — from competitions, internships, to personal projects.',

      'hero.badge': 'Open to Work',
      'hero.title': 'UI/UX Designer & Front-end Web Developer',
      'hero.tagline': 'Every great product always starts with one simple question: "What if it were made better?"',
      'hero.cta.primary': 'View Projects',
      'hero.cta.secondary': 'Download CV',
      'hero.stat.years': 'Years of Experience',
      'hero.stat.disciplines': 'Disciplines',
      'hero.scroll': 'Scroll',

      'about.heading': 'About Me',
      'about.body1': "My journey started in the visual world — a Multimedia graduate who worked as an Editor and Cameraman at a local TV station. That's where I learned how composition, imagery, and story shape perception in seconds. That curiosity led me to <span class=\"em\">UI/UX Design</span> and <span class=\"em\">Front-end Web Development</span> during my Informatics Engineering degree, a field I've sharpened through several national competitions with a team.",
      'about.body2': "I believe that visual background is an asset in itself — a designer who understands imagery understands interfaces. I'm now expanding into mobile app development with <span class=\"hl\">Flutter</span>, because a designer who understands implementation always makes better design decisions.",
      'about.facts.location': 'Location', 'about.facts.locationValue': 'Palangka Raya, Central Kalimantan',
      'about.facts.education': 'Education', 'about.facts.educationValue': 'Universitas Palangka Raya',
      'about.facts.focus': 'Focus',
      'about.facts.status': 'Status', 'about.facts.statusValue': 'Open to full-time roles',

      'quote.text': 'Camera, design, then code — three different languages I learned the same way: <span class="hl">try first, fail, then understand</span>.',

      'skills.heading': 'Skills',
      'skills.lead': 'Four disciplines, one way of thinking: precision from idea to execution.',
      'skills.uiux.title': 'UI/UX Design',
      'skills.uiux.desc': 'Designing flows and interfaces that are clear, tested, and a pleasure to use.',
      'skills.web.title': 'Front-end & Full-stack Web',
      'skills.web.desc': 'Turning design into clean code — from the interface down to the database.',
      'skills.media.title': 'Videography & Photography',
      'skills.media.desc': 'Professional broadcast experience — understanding the frame before designing the screen.',
      'skills.media.tag.video': 'Videography',
      'skills.media.tag.photo': 'Photography',
      'skills.mobile.title': 'Flutter & Mobile',
      'skills.mobile.badge': 'Growing',
      'skills.mobile.desc': 'Extending design skills into native Android experiences.',
      'skills.soft.label': 'Soft Skills',
      'skills.soft.communication': 'Team Communication',
      'skills.soft.collaboration': 'Collaboration',
      'skills.soft.problemSolving': 'Problem Solving',
      'skills.soft.english': 'English (Beginner–Intermediate)',

      'experience.heading': 'Experience & Education',
      'experience.lead': 'A journey from the broadcast studio to UI/UX — five steps, one clear direction.',
      'experience.type.work': 'Work Experience',
      'experience.type.internship': 'Internship',
      'experience.type.education': 'Education',
      'experience.item1.date': '2022 — Present',
      'experience.item1.role': 'B.Sc. Informatics Engineering',
      'experience.item1.org': 'Universitas Palangka Raya',
      'experience.item1.point1': 'Focused on UI/UX Design and Front-end Web Development.',
      'experience.item1.point2': 'Actively competed in national tech competitions (see Achievements).',
      'experience.item2.date': 'Aug 2025 — Dec 2025 · 5 months',
      'experience.item2.role': 'Fullstack Web Developer',
      'experience.item2.org': 'Dinas Kominfo Kabupaten Katingan',
      'experience.item2.point1': 'Built and maintained government web applications using Laravel.',
      'experience.item2.point2': 'Worked on 3 agency websites: Dinas PUPR, Dinas DKUKMP, and the Regional Secretariat.',
      'experience.item3.date': 'Dec 2021 — Jun 2022 · 6 months',
      'experience.item3.role': 'Editor & Cameraman',
      'experience.item3.org': 'PT. Shinta Buana Vision (SBTV), Pangkalan Bun',
      'experience.item3.point1': 'Operated cameras for television program production.',
      'experience.item3.point2': 'Edited broadcast footage using Adobe Premiere Pro.',
      'experience.item4.date': 'Jul 2021 — Oct 2021 · 4 months',
      'experience.item4.role': 'Editor & Cameraman Intern',
      'experience.item4.org': 'PT. Shinta Buana Vision (SBTV), Pangkalan Bun',
      'experience.item4.point1': 'Learned camera operation basics and shot composition techniques.',
      'experience.item4.point2': 'Assisted with video editing for daily broadcasts.',
      'experience.item5.date': '2019 — 2022',
      'experience.item5.role': 'Vocational High School — Multimedia',
      'experience.item5.org': 'SMK Muhammadiyah Pangkalan Bun',
      'experience.item5.point1': 'Studied graphic design using Adobe Photoshop.',
      'experience.item5.point2': 'Learned photography and videography fundamentals, including camera angle and positioning.',

      'achievements.heading': 'Achievements',
      'achievements.lead': 'A track record from national tech competitions, as a UI/UX Designer within a team.',
      'achievements.finalist': 'Finalist',
      'achievements.item1.rank': '3rd Place',
      'achievements.item1.name': 'Hackathon Permikomnas',
      'achievements.item1.desc': 'E-Government Tech category — collaborated within a team as UI/UX Designer.',
      'achievements.item2.name': 'MTQMN',
      'achievements.item2.desc': 'Designed the "Quranku" application — served as UI/UX Designer within the team.',
      'achievements.item3.name': 'GEMASTIK XVI',
      'achievements.item3.desc': 'Software Development category — served as UI/UX Designer within the team.',

      'projects.heading': 'Selected Projects',
      'projects.lead': 'Real case studies from competitions, internships, and personal exploration.',
      'projects.zeflow.category': 'Flutter & Mobile',
      'projects.zeflow.title': 'ZeFlow',
      'projects.zeflow.desc': 'An expense-tracking and personal finance management app — logging income, spending, and monthly budgets, with bank notifications that automatically record each transaction. Designed and built solo with Flutter.',
      'projects.expertSystem.category': 'Web App · Expert System',
      'projects.expertSystem.title': 'Zeez Expert System',
      'projects.expertSystem.desc': 'An expert system for initial diagnosis of laptop, PC, and printer issues using a Hybrid Forward & Backward Chaining algorithm, built for the Cellcom Tronic brand.',
      'projects.expertSystem.tag2': 'Expert System',
      'projects.expertSystem.tag3': 'Forward Chaining',
      'projects.datangBulan.category': 'Flutter & Mobile',
      'projects.datangBulan.title': 'Datang Bulan Tracker',
      'projects.datangBulan.desc': "A Flutter app for tracking menstrual cycles, fertile windows, and predicting the next period.",
      'projects.gojek.category': 'UI/UX Case Study · Redesign',
      'projects.gojek.title': 'Gojek App Redesign',
      'projects.gojek.desc': 'A redesign exploration for a smoother food-ordering and ride-hailing experience — from the home screen and checkout to order tracking.',
      'projects.moreHeading': 'More Projects',
      'projects.viewMore': 'View More Projects',
      'projects.zepresent.title': 'ZePresent',
      'projects.zepresent.desc': 'An employee attendance management dashboard — attendance logs, shift scheduling, and presence reports.',
      'projects.sirtuin.title': 'SIRTUIN',
      'projects.sirtuin.desc': 'An education and nutrition-monitoring app for mothers and children to help prevent stunting. Designed with a team for GEMASTIK 2024.',
      'projects.visitSite': 'Visit Site',
      'projects.govPupr.title': 'Dinas PUPR Website',
      'projects.govPupr.desc': 'Official website for the Katingan Regency Public Works and Spatial Planning Office, built with Laravel.',
      'projects.govDkukmp.title': 'Dinas DKUKMP Website',
      'projects.govDkukmp.desc': 'Official website for the Katingan Regency Cooperatives, SME, and Trade Office, built with Laravel.',
      'projects.govSetda.title': 'Regional Secretariat Website',
      'projects.govSetda.desc': 'Official website for the Katingan Regency Regional Secretariat, built with Laravel.',
      'projects.designCards.title': 'UI Card Design Exploration',
      'projects.designCards.desc': 'Component study: login, registration, profile, and content cards.',
      'projects.shopee.title': 'Shopee App Redesign',
      'projects.shopee.desc': 'A redesign exploration for a fresher, more modern shopping experience.',
      'projects.adanest.title': 'ADANEST',
      'projects.adanest.desc': 'A website supporting self-recovery from PMO addiction, offering habit tracking, motivational articles, consultations, and a chatbot. GEMASTIK 2023',
      'projects.adaapi.title': 'ADAAPI',
      'projects.adaapi.desc': 'An integrated platform for fire emergency acceleration and notifications with BPBD, featuring real-time alerts and automatic visual detection.',
      
      'contact.heading': "Let's Connect",
      'contact.lead': "Looking for a UI/UX Designer or Front-end Developer? I'd love to talk.",
      'contact.emailValue': 'budiaat25@gmail.com',

      'footer.credit': 'Designed & built by Budi Aulyansyah.'
    }
  };

  const STORAGE_KEY = 'budi-portfolio-lang';
  const langToggle = document.getElementById('langToggle');

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.id;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] === undefined) return;
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    });
    document.documentElement.setAttribute('lang', lang);
    if (langToggle) langToggle.setAttribute('data-active', lang);
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage unavailable */ }
  }

  function getInitialLanguage() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'id' || stored === 'en') return stored;
    } catch (e) { /* storage unavailable */ }
    return 'id';
  }

  let currentLang = getInitialLanguage();
  applyLanguage(currentLang);

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'id' ? 'en' : 'id';
      applyLanguage(currentLang);
    });
  }

  /* ============================================================
     Hash scroll — belt-and-suspenders fallback. Some browsers skip
     the native scroll-to-fragment step when the page is still
     settling (web fonts, images), so re-assert it once things load.
     scroll-margin-top on section[id] handles the fixed-nav offset.
     ============================================================ */

  const prefersReducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  function scrollToHash() {
    if (!location.hash) return;
    const target = document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView({ behavior: prefersReducedMotionQuery.matches ? 'auto' : 'smooth', block: 'start' });
  }
  window.addEventListener('load', scrollToHash);
  window.addEventListener('hashchange', scrollToHash);

  /* ============================================================
     Nav: scroll state + mobile menu
     ============================================================ */

  const nav = document.getElementById('nav');
  const navBurger = document.getElementById('navBurger');
  const navMobile = document.getElementById('navMobile');

  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 12);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (navBurger && navMobile) {
    navBurger.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      navBurger.setAttribute('aria-expanded', String(isOpen));
    });

    navMobile.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        navBurger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ============================================================
     Scroll reveal (Intersection Observer)
     ============================================================ */

  const revealEls = document.querySelectorAll('[data-reveal]');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if ('IntersectionObserver' in window && !prefersReducedMotion && revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ============================================================
     Footer year
     ============================================================ */

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ============================================================
     Custom cursor + magnetic buttons + glass spotlight
     Fine pointer with hover support only — touch devices never run
     any of this, and never pay for the mousemove listeners either.
     ============================================================ */

  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  if (canHover) {
    const cursorDot = document.getElementById('cursorDot');
    const cursorRing = document.getElementById('cursorRing');

    if (cursorDot && cursorRing) {
      let targetX = window.innerWidth / 2, targetY = window.innerHeight / 2;
      let ringX = targetX, ringY = targetY;
      let rafId = null;

      // Reduced motion: snap the ring to the dot instantly, skip the trailing lag.
      const ringEase = prefersReducedMotion ? 1 : 0.18;

      const tick = () => {
        ringX += (targetX - ringX) * ringEase;
        ringY += (targetY - ringY) * ringEase;
        cursorDot.style.transform = `translate(${targetX}px, ${targetY}px) translate(-50%, -50%)`;
        cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
        rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);

      window.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
        document.body.classList.add('cursor-ready');
        cursorDot.classList.remove('is-hidden');
        cursorRing.classList.remove('is-hidden');
      }, { passive: true });

      document.addEventListener('mouseleave', () => {
        cursorDot.classList.add('is-hidden');
        cursorRing.classList.add('is-hidden');
      });

      const hoverTargets = 'a, button:not(:disabled), input, textarea, [role="button"]';
      document.addEventListener('mouseover', (e) => {
        if (e.target.closest(hoverTargets)) cursorRing.classList.add('is-hovering');
      });
      document.addEventListener('mouseout', (e) => {
        if (e.target.closest(hoverTargets)) cursorRing.classList.remove('is-hovering');
      });

      window.addEventListener('pagehide', () => { if (rafId) cancelAnimationFrame(rafId); });
    }

    // Magnetic pull on primary CTAs — subtle, capped, and skipped under
    // reduced motion since it's motion the user didn't directly ask for.
    if (!prefersReducedMotion) {
      const MAX_PULL = 8;
      document.querySelectorAll('.btn--primary:not(:disabled), .btn--ghost:not(:disabled)').forEach((btn) => {
        btn.addEventListener('mousemove', (e) => {
          const r = btn.getBoundingClientRect();
          const relX = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
          const relY = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
          btn.style.transform = `translate(${relX * MAX_PULL}px, ${relY * MAX_PULL}px)`;
        });
        btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
      });
    }
  }
})();
