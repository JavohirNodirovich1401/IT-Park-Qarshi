 const translations = {
      uz: {
        home: "Bosh sahifa",
        about: "Biz haqimizda",
        services: "Xizmatlar",
        contact: "Aloqa",
        title: "IT Park Qarshiga xush kelibsiz!",
        desc: "Biz innovatsion texnologiyalar va startaplarni rivojlantiramiz.",
        register: "Startapingizni ro‘yxatdan o‘tkazing",
      },
      ru: {
        home: "Главная",
        about: "О нас",
        services: "Услуги",
        contact: "Контакты",
        title: "Добро пожаловать в IT Park Карши!",
        desc: "Мы развиваем инновационные технологии и стартапы.",
        register: "Зарегистрируйте свой стартап",
      },
      en: {
        home: "Home",
        about: "About Us",
        services: "Services",
        contact: "Contact",
        title: "Welcome to IT Park Qarshi!",
        desc: "We develop innovative technologies and startups.",
        register: "Register Your Startup",
      },
      de: {
        home: "Startseite",
        about: "Über uns",
        services: "Dienstleistungen",
        contact: "Kontakt",
        title: "Willkommen im IT Park Qarshi!",
        desc: "Wir entwickeln innovative Technologien und Startups.",
        register: "Registriere dein Startup",
      },
      kr: {
        home: "홈",
        about: "회사 소개",
        services: "서비스",
        contact: "연락처",
        title: "IT Park 카르시에 오신 것을 환영합니다!",
        desc: "우리는 혁신적인 기술과 스타트업을 개발합니다.",
        register: "스타트업 등록하기",
      },
    };

    const flags = {
      uz: "https://flagcdn.com/w20/uz.png",
      ru: "https://flagcdn.com/w20/ru.png",
      en: "https://flagcdn.com/w20/gb.png",
      de: "https://flagcdn.com/w20/de.png",
      kr: "https://flagcdn.com/w20/kr.png",
    };

    const langSelect = document.getElementById("langSelect");
    const elements = document.querySelectorAll("[data-key]");
    const flagImg = document.getElementById("flag");

    langSelect.addEventListener("change", (e) => {
      const lang = e.target.value;
      elements.forEach((el) => {
        const key = el.getAttribute("data-key");
        el.textContent = translations[lang][key];
      });
      flagImg.src = flags[lang];
    });