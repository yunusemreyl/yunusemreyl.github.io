/* Yunus Emre Yılmaz — Shared i18n, Theme, Filter & Mobile Tab Controller */
(() => {
  const T = {
    tr: {
      skip: "İçeriğe geç",
      meta_desc: "Yunus Emre Yılmaz — Elektrik-Elektronik Mühendisliği öğrencisi. Gömülü sistemler, çoklu mobil robotlar, insansız deniz aracı elektroniği ve Linux donanım araçları.",
      n_proj: "Projeler",
      n_work: "Çalışma alanları",
      n_contact: "İletişim",
      m_dept: "EEM · MAKÜ",
      m_tab_about: "Profil",
      m_tab_focus: "Alanlar",
      m_email_btn: "E-posta gönder",
      m_view_projects: "Projeleri gör",
      m_now: "Güncel çalışmalar",
      m_lang_label: "Dil",
      view_mobile: "Mobil",
      view_desktop: "Masaüstü sürüm",
      f_all: "Tümü",
      f_hw: "Robotik & Elektronik",
      f_sw: "Linux & Yazılım",
      st_active: "Aktif",
      st_grad: "Bitirme",
      st_oss: "Açık Kaynak",
      st_arch: "Tamamlandı",
      st_util: "Araç",
      role: "Elektrik-Elektronik Mühendisliği öğrencisi · MAKÜ",
      bio1: "Burdur Mehmet Akif Ersoy Üniversitesi'nde Elektrik-Elektronik Mühendisliği okuyorum. Elektronik tasarım, gömülü sistemler, mobil robotik ve donanımla doğrudan çalışan Linux araçlarıyla ilgileniyorum.",
      bio2: "Şu an üniversitenin 50.000 ₺ desteğiyle yürüttüğüm bitirme projem <b>RAAS</b> üzerinde çalışıyor, aynı zamanda TEKNOFEST'e hazırlanan <b>Automarine</b> insansız otonom deniz aracı ekibinde elektronik sorumlusu olarak görev alıyorum. Boş zamanlarımda Linux kullanan HP OMEN/Victus sahipleri için <b>OMEN Space</b>'i geliştirip bakımını yapıyorum.",
      t_auto_short: "Automarine",
      t_auto: "Automarine — İnsansız Otonom Deniz Aracı",
      m_auto: "TEKNOFEST · Elektronik Sorumlusu",
      p_auto: "TEKNOFEST İnsansız Deniz Aracı yarışmasına hazırlanan proje grubunda elektronik sorumlusu olarak yer alıyorum. Araç içi güç dağıtımı, motor sürücü ve sensör bağlantıları, kablolama ve su geçirmez elektronik yerleşim üzerine çalışıyorum.",
      d_auto: "Güç dağıtımı, sensör & motor sürücü bağlantıları, kablolama, su geçirmez yerleşim",
      t_raas_short: "RAAS Test Platformu",
      t_raas: "RAAS — ArUco Destekli Çoklu Mobil Robot Test Platformu",
      m_raas: "TEKNOFEST Yarı Final · 50.000 ₺ MAKÜ Desteği",
      p_raas: "ArUco görsel konumlama destekli çoklu mobil robot kapsama ve görev paylaşımı test platformu prototipi. Kamera tabanlı konum takibi, robotlar arası görev dağılımı ve gömülü hareket kontrolü üzerine yürüttüğüm bitirme projesi.",
      d_raas: "ArUco görsel konumlama, çoklu robot kapsama & görev paylaşımı, gömülü kontrol",
      m_omen: "Linux · Rust & GTK4",
      p_omen: "HP OMEN ve Victus bilgisayarlar için Linux çekirdek sürücüsü (hp-wmi / hp-omen-extra), Rust arka plan servisi ve GTK4/Libadwaita arayüzü. Fan eğrileri, güç ve batarya şarj limitleri, GPU MUX geçişi ve klavye RGB aydınlatmasını kontrol eder.",
      d_omen: "Rust, C (DKMS), GTK4 / Libadwaita, D-Bus, ACPI/WMI",
      t_drone: "Hassas Tarım Mikrodronu",
      m_drone: "TÜBİTAK Şartlı Kabul",
      p_drone: "Hassas tarım denemeleri için tasarlanan ESP32 tabanlı mikro İHA. TÜBİTAK başvurusunda şartlı kabul aldı; donanım ve teknik kısıtlar sebebiyle bu aşamada sonlandırıldı.",
      d_drone: "ESP32, uçuş kontrolü, mikro İHA",
      p_always: "Windows'ta ekranın ve sistemin uykuya geçmesini tek tıkla engelleyen, sistem tepsisinde çalışan küçük bir yardımcı program.",
      k1: "Donanım",
      v1: "Temel elektronik tasarım, güç dağıtımı, ESP32, sensörler, motor sürücüleri ve kablolama",
      k2: "Alanlar",
      v2: "Çoklu mobil robotlar, insansız deniz aracı elektroniği, mikro İHA, Linux donanım araçları",
      k3: "Süreç",
      v3: "Sorun tanımı, donanım mimarisi, yapay zeka destekli yazılım üretimi, gerçek donanımda test",
      note: "<b>Not:</b> Yazılım tarafında yapay zeka araçlarından aktif olarak yararlanıyorum; sistem mimarisi, donanım entegrasyonu ve gerçek cihazda test/doğrulama süreçlerini kendim yürütüyorum.",
      c_text: "Projelerle ilgili soru, katkı veya iş birliği için e-posta ya da LinkedIn üzerinden ulaşabilirsiniz.",
      loc: "Denizli / Burdur, Türkiye"
    },
    en: {
      skip: "Skip to content",
      meta_desc: "Yunus Emre Yılmaz — Electrical & Electronics Engineering student. Embedded systems, multi-robot platforms, unmanned marine vehicle electronics, and Linux hardware tools.",
      n_proj: "Projects",
      n_work: "Focus areas",
      n_contact: "Contact",
      m_dept: "EEE · MAKÜ",
      m_tab_about: "Profile",
      m_tab_focus: "Focus",
      m_email_btn: "Send email",
      m_view_projects: "View projects",
      m_now: "Current work",
      m_lang_label: "Language",
      view_mobile: "Mobile",
      view_desktop: "Desktop view",
      f_all: "All",
      f_hw: "Robotics & Electronics",
      f_sw: "Linux & Software",
      st_active: "Active",
      st_grad: "Thesis",
      st_oss: "Open Source",
      st_arch: "Concluded",
      st_util: "Utility",
      role: "Electrical & Electronics Engineering student · MAKÜ",
      bio1: "I study Electrical & Electronics Engineering at Burdur Mehmet Akif Ersoy University. I work on practical electronics, embedded systems, mobile robotics, and hardware-facing Linux utilities.",
      bio2: "I am currently working on my graduation project <b>RAAS</b> (supported by a 50,000 TRY university grant) and serve as electronics lead in the <b>Automarine</b> TEKNOFEST unmanned autonomous surface vehicle team. Outside coursework, I maintain <b>OMEN Space</b> for HP OMEN and Victus laptops on Linux.",
      t_auto_short: "Automarine",
      t_auto: "Automarine — Unmanned Autonomous Surface Vehicle",
      m_auto: "TEKNOFEST · Electronics Lead",
      p_auto: "Electronics lead in a student team preparing for the TEKNOFEST Unmanned Marine Vehicle competition. Working on onboard power distribution, motor-driver and sensor wiring, harness layout, and waterproof electronics integration.",
      d_auto: "Power distribution, sensor & motor-driver wiring, waterproof enclosure layout",
      t_raas_short: "RAAS Test Platform",
      t_raas: "RAAS — ArUco-Assisted Multi-Robot Test Platform",
      m_raas: "TEKNOFEST Semi-Final · 50,000 TRY Grant",
      p_raas: "Prototype test platform for multi-mobile-robot area coverage and task allocation assisted by ArUco visual localization. Graduation project covering overhead camera tracking, task distribution, and embedded motion control.",
      d_raas: "ArUco visual localization, multi-robot coverage & task allocation, embedded control",
      m_omen: "Linux · Rust & GTK4",
      p_omen: "Linux kernel driver patches (hp-wmi / hp-omen-extra), a Rust daemon, and a GTK4/Libadwaita desktop app for HP OMEN and Victus machines. Controls fan curves, power and battery charge limits, GPU MUX switching, and keyboard RGB.",
      d_omen: "Rust, C (DKMS), GTK4 / Libadwaita, D-Bus, ACPI/WMI",
      t_drone: "Precision Agriculture Micro-Drone",
      m_drone: "TÜBİTAK Conditional Acceptance",
      p_drone: "An ESP32-based micro UAV designed for precision agriculture experiments. Received conditional acceptance from TÜBİTAK and was concluded at that stage due to hardware and technical constraints.",
      d_drone: "ESP32, flight control, micro UAV",
      p_always: "A small Windows tray utility that keeps the display awake on demand via Windows power management APIs.",
      k1: "Hardware",
      v1: "Practical electronics design, power distribution, ESP32, sensors, motor drivers, wiring",
      k2: "Domains",
      v2: "Multi-robot platforms, unmanned marine electronics, micro UAVs, Linux hardware utilities",
      k3: "Workflow",
      v3: "Problem definition, hardware architecture, AI-assisted software development, real-hardware testing",
      note: "<b>Note:</b> I actively use AI tools on the software side while handling system architecture, hardware integration, and real-device testing myself.",
      c_text: "For questions, collaboration, or project enquiries, feel free to reach out by email or on LinkedIn.",
      loc: "Denizli / Burdur, Turkey"
    },
    de: {
      skip: "Zum Inhalt springen",
      meta_desc: "Yunus Emre Yılmaz — Student der Elektrotechnik. Embedded Systems, Multi-Roboter-Plattformen, Elektronik für autonome Wasserfahrzeuge und Linux-Hardwaretools.",
      n_proj: "Projekte",
      n_work: "Schwerpunkte",
      n_contact: "Kontakt",
      m_dept: "ET · MAKÜ",
      m_tab_about: "Profil",
      m_tab_focus: "Fokus",
      m_email_btn: "E-Mail senden",
      m_view_projects: "Projekte ansehen",
      m_now: "Aktuelle Projekte",
      m_lang_label: "Sprache",
      view_mobile: "Mobil",
      view_desktop: "Desktop-Ansicht",
      f_all: "Alle",
      f_hw: "Robotik & Elektronik",
      f_sw: "Linux & Software",
      st_active: "Aktiv",
      st_grad: "Abschluss",
      st_oss: "Open Source",
      st_arch: "Beendet",
      st_util: "Tool",
      role: "Student der Elektrotechnik · MAKÜ",
      bio1: "Ich studiere Elektrotechnik an der Burdur Mehmet Akif Ersoy Universität. Meine Schwerpunkte liegen bei praktischer Elektronik, Embedded Systems, mobiler Robotik und hardwarenahen Linux-Werkzeugen.",
      bio2: "Derzeit arbeite ich an meinem von der Universität mit 50.000 TRY geförderten Abschlussprojekt <b>RAAS</b> und bin im TEKNOFEST-Team <b>Automarine</b> (unbemanntes autonomes Wasserfahrzeug) für die Elektronik verantwortlich. Neben dem Studium entwickle und pflege ich <b>OMEN Space</b> für HP OMEN und Victus unter Linux.",
      t_auto_short: "Automarine",
      t_auto: "Automarine — Unbemanntes autonomes Wasserfahrzeug",
      m_auto: "TEKNOFEST · Elektronik-Verantwortlicher",
      p_auto: "Verantwortlich für die Elektronik im TEKNOFEST-Team für unbemannte Wasserfahrzeuge. Schwerpunkte sind die Stromverteilung an Bord, Sensor- und Motortreiber-Verkabelung sowie die wasserdichte Elektronikintegration.",
      d_auto: "Stromverteilung, Sensor- & Treiberverkabelung, wasserdichte Elektronikintegration",
      t_raas_short: "RAAS Testplattform",
      t_raas: "RAAS — ArUco-gestützte Multi-Roboter-Testplattform",
      m_raas: "TEKNOFEST Halbfinale · 50.000 TRY Förderung",
      p_raas: "Prototyp einer Testplattform für Flächenabdeckung und Aufgabenverteilung mehrerer mobiler Roboter mit ArUco-basierter visueller Lokalisierung. Abschlussprojekt zu kamerabasierter Positionsverfolgung, Aufgabenverteilung und Embedded-Steuerung.",
      d_raas: "ArUco-Lokalisierung, Multi-Roboter-Abdeckung & Aufgabenverteilung, Embedded-Steuerung",
      m_omen: "Linux · Rust & GTK4",
      p_omen: "Linux-Kerneltreiber (hp-wmi / hp-omen-extra), Rust-Daemon und GTK4/Libadwaita-Oberfläche für HP OMEN und Victus. Steuert Lüfterkurven, Leistungs- und Akkuladelimits, GPU-MUX-Switch und Tastatur-RGB.",
      d_omen: "Rust, C (DKMS), GTK4 / Libadwaita, D-Bus, ACPI/WMI",
      t_drone: "Präzisionslandwirtschafts-Mikrodrohne",
      m_drone: "TÜBİTAK Bedingte Zusage",
      p_drone: "ESP32-basierte Mikro-Drohne für Versuche in der Präzisionslandwirtschaft. Erhielt eine bedingte Zusage bei TÜBİTAK und wurde aufgrund technischer Einschränkungen in dieser Phase beendet.",
      d_drone: "ESP32, Flugsteuerung, Mikro-UAV",
      p_always: "Kleines Windows-Tray-Tool, das den Bildschirm bei Bedarf über die Windows-Energieverwaltung wachhält.",
      k1: "Hardware",
      v1: "Elektronikaufbau, Stromverteilung, ESP32, Sensoren, Motortreiber & Verkabelung",
      k2: "Bereiche",
      v2: "Multi-Roboter-Plattformen, Wasserfahrzeug-Elektronik, Mikro-UAV, Linux-Hardwaretools",
      k3: "Arbeitsweise",
      v3: "Problemdefinition, Hardwarearchitektur, KI-gestützte Softwareentwicklung, Tests auf realer Hardware",
      note: "<b>Hinweis:</b> Für die Softwareentwicklung nutze ich KI-Werkzeuge; Systemarchitektur, Hardware-Integration und Tests auf realen Geräten übernehme ich selbst.",
      c_text: "Für Fragen, Zusammenarbeit oder Projektanfragen am besten per E-Mail oder über LinkedIn melden.",
      loc: "Denizli / Burdur, Türkei"
    },
    ar: {
      skip: "انتقل إلى المحتوى",
      meta_desc: "يونس إمره يلماز — طالب هندسة كهربائية وإلكترونية. الأنظمة المدمجة، الروبوتات المتعددة، إلكترونيات المركبات البحرية وأدوات لينكس.",
      n_proj: "المشاريع",
      n_work: "مجالات العمل",
      n_contact: "التواصل",
      m_dept: "هندسة كهربائية · MAKÜ",
      m_tab_about: "الملف",
      m_tab_focus: "المجالات",
      m_email_btn: "إرسال بريد",
      m_view_projects: "عرض المشاريع",
      m_now: "الأعمال الحالية",
      m_lang_label: "اللغة",
      view_mobile: "جوال",
      view_desktop: "نسخة سطح المكتب",
      f_all: "الكل",
      f_hw: "الروبوتات والإلكترونيات",
      f_sw: "لينكس والبرمجيات",
      st_active: "نشط",
      st_grad: "تخرج",
      st_oss: "مفتوح المصدر",
      st_arch: "منتهٍ",
      st_util: "أداة",
      role: "طالب هندسة كهربائية وإلكترونية · <bdi>MAKÜ</bdi>",
      bio1: "أدرس الهندسة الكهربائية والإلكترونية في جامعة بوردور محمد عاكف أرسوي. أعمل على الإلكترونيات العملية، الأنظمة المدمجة، الروبوتات المتنقلة وأدوات لينكس المرتبطة بالعتاد.",
      bio2: "أعمل حالياً على مشروع تخرجي <b><bdi>RAAS</bdi></b> المدعوم بمنحة جامعية قدرها 50,000 ليرة تركية، كما أتولى مسؤولية الإلكترونيات في فريق <b><bdi>Automarine</bdi></b> للمركبة البحرية ذاتية القيادة المشارك في <bdi>TEKNOFEST</bdi>. وخارج الدراسة أطوّر وأصون مشروع <b><bdi>OMEN Space</bdi></b> لأجهزة <bdi>HP OMEN</bdi> و <bdi>Victus</bdi> على لينكس.",
      t_auto_short: "<bdi>Automarine</bdi>",
      t_auto: "<bdi>Automarine</bdi> — مركبة بحرية ذاتية القيادة",
      m_auto: "<bdi>TEKNOFEST</bdi> · مسؤول الإلكترونيات",
      p_auto: "مسؤول الإلكترونيات في فريق طلابي مشارك بمسابقة <bdi>TEKNOFEST</bdi> للمركبات البحرية غير المأهولة. أعمل على توزيع الطاقة داخل المركبة، توصيل المستشعرات ومشغلات المحركات، تنظيم الأسلاك والترتيب الإلكتروني المقاوم للماء.",
      d_auto: "توزيع الطاقة، توصيل المستشعرات والمشغلات، التمديدات، العزل المائي للإلكترونيات",
      t_raas_short: "منصة <bdi>RAAS</bdi>",
      t_raas: "<bdi>RAAS</bdi> — منصة اختبار للروبوتات المتعددة بدعم <bdi>ArUco</bdi>",
      m_raas: "نصف نهائي <bdi>TEKNOFEST</bdi> · دعم 50,000 ليرة",
      p_raas: "نموذج أولي لمنصة اختبار لتغطية المساحة وتوزيع المهام بين عدة روبوتات متنقلة بمساعدة التموضع البصري عبر علامات <bdi>ArUco</bdi>. يشمل المشروع تتبع الموقع بالكاميرا وتوزيع المهام والتحكم المدمج بالحركة.",
      d_raas: "التموضع البصري <bdi>ArUco</bdi>، تغطية المساحة وتوزيع المهام، التحكم المدمج",
      m_omen: "لينكس · <bdi>Rust & GTK4</bdi>",
      p_omen: "تعريفات نواة لينكس (<bdi>hp-wmi</bdi> / <bdi>hp-omen-extra</bdi>) وخدمة <bdi>Rust</bdi> وواجهة <bdi>GTK4/Libadwaita</bdi> لأجهزة <bdi>HP OMEN</bdi> و <bdi>Victus</bdi> للتحكم بمنحنيات المراوح وحدود الطاقة وشحن البطارية ومفتاح <bdi>GPU MUX</bdi> وإضاءة لوحة المفاتيح.",
      d_omen: "<bdi>Rust, C (DKMS), GTK4 / Libadwaita, D-Bus, ACPI/WMI</bdi>",
      t_drone: "طائرة مسيّرة صغيرة للزراعة الدقيقة",
      m_drone: "قبول مشروط من <bdi>TÜBİTAK</bdi>",
      p_drone: "طائرة مسيّرة صغيرة مبنية على <bdi>ESP32</bdi> لتجارب الزراعة الدقيقة. حصلت على قبول مشروط من <bdi>TÜBİTAK</bdi> وتوقفت عند تلك المرحلة بسبب قيود تقنية وعتادية.",
      d_drone: "<bdi>ESP32</bdi>، التحكم بالطيران، طائرة مسيّرة صغيرة",
      p_always: "أداة خفيفة لنظام ويندوز تعمل في شريط المهام لإبقاء الشاشة نشطة عند الحاجة عبر واجهة إدارة الطاقة.",
      k1: "العتاد",
      v1: "تصميم الإلكترونيات العملية، توزيع الطاقة، <bdi>ESP32</bdi>، المستشعرات ومشغلات المحركات",
      k2: "المجالات",
      v2: "منصات الروبوتات المتعددة، إلكترونيات المركبات البحرية، الطائرات المسيّرة الصغيرة، أدوات لينكس",
      k3: "أسلوب العمل",
      v3: "تحديد المشكلة، هندسة العتاد، التطوير بمساعدة الذكاء الاصطناعي، الاختبار على عتاد حقيقي",
      note: "<b>ملاحظة:</b> أستعين بأدوات الذكاء الاصطناعي في كتابة البرمجيات، بينما أتولى بنفسي التصميم المعماري ودمج العتاد والاختبار الفعلي على الأجهزة.",
      c_text: "للاستفسارات أو التعاون يمكنك التواصل عبر البريد الإلكتروني أو <bdi>LinkedIn</bdi>.",
      loc: "دنيزلي / بوردور، تركيا"
    }
  };

  const LANG_ORDER = ['tr', 'en', 'de', 'ar'];
  const descMeta = document.querySelector('meta[name="description"]');
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  let currentLang = 'tr';

  function detectLang() {
    const saved = localStorage.getItem('lang');
    if (saved && T[saved]) return saved;
    const nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return T[nav] ? nav : 'en';
  }

  function setLang(l, persist) {
    currentLang = T[l] ? l : 'en';
    if (persist) localStorage.setItem('lang', currentLang);
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i]').forEach((el) => {
      const val = T[currentLang][el.dataset.i];
      if (val !== undefined) el.innerHTML = val;
    });

    if (descMeta && T[currentLang].meta_desc) {
      descMeta.setAttribute('content', T[currentLang].meta_desc);
    }

    document.querySelectorAll('.lang button').forEach((btn) => {
      const active = btn.dataset.l === currentLang;
      btn.classList.toggle('on', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    const cycleBtn = document.getElementById('mLangBtn');
    if (cycleBtn) cycleBtn.textContent = currentLang.toUpperCase();
  }

  function setTheme(theme, persist) {
    document.documentElement.dataset.theme = theme;
    if (persist) localStorage.setItem('theme', theme);
    if (themeMeta) {
      themeMeta.setAttribute('content', theme === 'dark' ? '#0d1318' : '#f3f5f7');
    }
  }

  // Language buttons & mobile cycle button
  document.querySelectorAll('.lang button').forEach((btn) => {
    btn.addEventListener('click', () => setLang(btn.dataset.l, true));
  });

  const cycleBtn = document.getElementById('mLangBtn');
  if (cycleBtn) {
    cycleBtn.addEventListener('click', () => {
      const next = LANG_ORDER[(LANG_ORDER.indexOf(currentLang) + 1) % LANG_ORDER.length];
      setLang(next, true);
    });
  }

  // Theme buttons
  document.querySelectorAll('.theme-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      setTheme(next, true);
    });
  });

  // Project category filter (both desktop & mobile)
  const filterBtns = [...document.querySelectorAll('.filter-btn')];
  const projectItems = [...document.querySelectorAll('[data-cat]')];
  if (filterBtns.length && projectItems.length) {
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const cat = btn.dataset.filter;
        filterBtns.forEach((b) => {
          const on = b === btn;
          b.classList.toggle('on', on);
          b.setAttribute('aria-selected', String(on));
        });
        projectItems.forEach((item) => {
          item.classList.toggle('hidden', cat !== 'all' && item.dataset.cat !== cat);
        });
      });
    });
  }

  // Desktop scrollspy for sticky rail nav
  const railLinks = [...document.querySelectorAll('.rail-nav a[data-sec]')];
  if (railLinks.length && 'IntersectionObserver' in window) {
    const sections = railLinks.map((a) => document.getElementById(a.dataset.sec)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          railLinks.forEach((a) => a.classList.toggle('on', a.dataset.sec === e.target.id));
        }
      });
    }, { rootMargin: '-20% 0px -60% 0px' });
    sections.forEach((s) => observer.observe(s));
  }

  // Mobile bottom tab navigation
  const mobileTabs = [...document.querySelectorAll('.m-tab[data-tab]')];
  const mobileViews = [...document.querySelectorAll('.m-view[data-tab]')];
  function openMobileTab(name) {
    if (!mobileTabs.length) return;
    mobileTabs.forEach((t) => t.classList.toggle('on', t.dataset.tab === name));
    mobileViews.forEach((v) => v.classList.toggle('on', v.dataset.tab === name));
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
  mobileTabs.forEach((btn) => {
    btn.addEventListener('click', () => openMobileTab(btn.dataset.tab));
  });
  document.querySelectorAll('[data-go-tab]').forEach((btn) => {
    btn.addEventListener('click', () => openMobileTab(btn.dataset.goTab));
  });

  setLang(detectLang(), false);
  setTheme(document.documentElement.dataset.theme || 'light', false);
})();
