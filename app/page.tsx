'use client';

import { type KeyboardEvent as ReactKeyboardEvent, useEffect, useRef, useState } from 'react';

const phoneNumberDisplay = '+56 9 8350 9065';
const phoneNumberHref = 'tel:+56983509065';
const phoneNumberClipboard = '+56983509065';
const whatsappHref =
  'https://api.whatsapp.com/send/?phone=%2B56983509065&text=Hola%2C+necesito+ayuda+para+encontrar+repuestos+para+mi+mi+veh%C3%ADculo.&type=phone_number&app_absent=0';

const speedLines = [
  { top: '12%', width: '210px', delay: '0.1s', duration: '3.1s' },
  { top: '23%', width: '290px', delay: '1.4s', duration: '3.7s' },
  { top: '34%', width: '180px', delay: '0.8s', duration: '2.8s' },
  { top: '46%', width: '320px', delay: '2.2s', duration: '3.3s' },
  { top: '58%', width: '230px', delay: '0.4s', duration: '2.9s' },
  { top: '67%', width: '280px', delay: '1.8s', duration: '3.8s' },
  { top: '76%', width: '170px', delay: '2.7s', duration: '2.6s' },
  { top: '86%', width: '260px', delay: '1.1s', duration: '3.4s' },
];

const heroSlides = [
  {
    src: '/ts-landing.webp',
    alt: 'Entrega de repuestos TurboShop en taller',
    loading: 'eager' as const,
  },
  {
    src: '/ts-landing-2.webp',
    alt: 'Repartidor TurboShop con mochila térmica',
    loading: 'lazy' as const,
  },
];

const steps = [
  {
    number: '1',
    icon: '📋',
    title: 'Inscríbete',
    body: 'Déjanos tu número de contacto y te damos acceso a la plataforma de forma gratuita en minutos.',
  },
  {
    number: '2',
    icon: '🛒',
    title: 'Accede y Compra',
    body: 'Navega miles de repuestos compatibles con tu flota. Encuentra exactamente lo que necesitas.',
  },
  {
    number: '3',
    icon: '⚡',
    title: 'Modo Nitro',
    body: 'Recibe tu pedido directo en el taller en 90 minutos. Cero pérdida de tiempo, máxima productividad.',
  },
];

const features = [
  {
    icon: '⚡',
    title: 'Entrega en 90 minutos',
    body: 'Nuestro sistema logístico garantiza que el repuesto llegue a tu taller en tiempo récord, sin importar la urgencia.',
  },
  {
    icon: '🏷️',
    title: 'Precios imbatibles',
    body: 'Acceso directo a proveedores con precios mayoristas. Ahorra en cada pedido y maximiza el margen de tu negocio.',
  },
  {
    icon: '🕐',
    title: 'Atención 24/7',
    body: 'Nuestro equipo está disponible a cualquier hora. Da igual si es de madrugada, siempre encontrarás respuesta.',
  },
  {
    icon: '🔧',
    title: 'Miles de repuestos',
    body: 'Catálogo completo de repuestos para todas las marcas. Desde filtros hasta piezas de motor, todo en un solo lugar.',
  },
  {
    icon: '🤝',
    title: 'Un aliado confiable, no solo un proveedor',
    body: 'TurboShop no solo vende repuestos. Somos el socio estratégico que ayuda a tu taller a operar más eficientemente, con soporte real, precios justos y logística de élite. Resolveremos contigo incluso los casos más difíciles de encontrar.',
    wide: true,
  },
];

const brands = ['Toyota', 'Chevrolet', 'Nissan', 'Hyundai', 'Kia', 'Ford', 'Volkswagen', 'BMW', 'Mercedes', 'Honda', 'Mazda', 'Mitsubishi'];

const testimonials = [
  {
    initials: 'JG',
    name: 'José Tomás González',
    company: 'Kenner Motorsport',
    title: 'No más cachos',
    body: 'En Chile siempre ha sido un enredo comprar repuestos. Con TurboShop tengo todo en un solo lugar, con entregas rápidas. Nos enfocamos en rentabilizar el taller.',
  },
  {
    initials: 'AI',
    name: 'Alejandro Inostroza',
    company: 'La Reina Garage',
    title: 'Siempre disponibles',
    body: 'Lo mejor es que nos atienden a cualquier hora. Da igual si es temprano o tarde, siempre encontramos respuesta y podemos seguir trabajando sin parar.',
  },
  {
    initials: 'NP',
    name: 'Nicolás Providel',
    company: 'Argomedo Performance',
    title: 'Nuestros partners',
    body: 'Al principio teníamos dudas, pero ahora compramos todo ahí, hasta la silicona. El tiempo de entrega y los precios son imbatibles. 100% recomendado.',
  },
  {
    initials: 'TA',
    name: 'Tobías Abalos',
    company: 'Kavak',
    title: 'Un aliado confiable',
    body: 'Resuelven casos donde parecía imposible encontrar repuestos. No solo venden, ofrecen un servicio completo de confianza. Los recomendamos totalmente.',
  },
  {
    initials: 'RM',
    name: 'Reynan Moreno',
    company: 'AutoPro',
    title: 'La alianza perfecta',
    body: 'Todo en un solo lugar: repuestos, respuestas rápidas y entregas puntuales directo al taller. Se nota que piensan en facilitarle la vida a los talleres.',
  },
  {
    initials: 'MP',
    name: 'Mario Pérez',
    company: 'AutoTech Santiago',
    title: 'Precios imbatibles',
    body: 'Gracias a TurboShop redujimos nuestros tiempos de reparación a la mitad. El equipo es profesional, rápido y siempre tienen lo que necesitamos.',
  },
];

function BoltIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" fill="white" />
    </svg>
  );
}

function DownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v8M8 12l4 4 4-4" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20.52 3.48A11.79 11.79 0 0012.08 0C5.53 0 .2 5.32.2 11.86c0 2.09.55 4.14 1.59 5.95L.1 24l6.34-1.66a11.88 11.88 0 005.64 1.43h.01c6.54 0 11.87-5.32 11.87-11.86 0-3.17-1.23-6.15-3.44-8.43z"
        fill="currentColor"
        opacity="0.18"
      />
      <path
        d="M12.09 21.77h-.01a9.86 9.86 0 01-5.03-1.38l-.36-.21-3.76.99 1-3.67-.24-.38a9.78 9.78 0 01-1.5-5.25C2.2 6.43 6.63 2 12.08 2a9.8 9.8 0 016.98 2.9 9.78 9.78 0 012.89 6.96c0 5.45-4.43 9.91-9.86 9.91zm5.42-7.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.88.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z"
        fill="currentColor"
      />
    </svg>
  );
}

function PhoneIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.12.9.33 1.77.62 2.61a2 2 0 01-.45 2.11L8.01 9.71a16 16 0 006.28 6.28l1.27-1.27a2 2 0 012.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0122 16.92z" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

type Particle = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  a: number;
};

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [counts, setCounts] = useState({ workshops: 0, brands: 0, minutes: 90 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselPaused, setCarouselPaused] = useState(false);
  const [carouselResetKey, setCarouselResetKey] = useState(0);
  const [contactWidgetOpen, setContactWidgetOpen] = useState(false);
  const [phoneModalOpen, setPhoneModalOpen] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const points: Particle[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;

    const seedParticles = () => {
      points.length = 0;
      for (let i = 0; i < 55; i += 1) {
        points.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 1.5 + 0.4,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          a: Math.random() * 0.4 + 0.1,
        });
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedParticles();
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, width, height);
      points.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139,69,255,${particle.a})`;
        ctx.fill();

        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;
      });
      frame = requestAnimationFrame(drawParticles);
    };

    resize();
    window.addEventListener('resize', resize);
    frame = requestAnimationFrame(drawParticles);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('[data-a], [data-a-stagger]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const element = statsRef.current;
    if (!element) return;

    let counted = false;
    const frames: number[] = [];

    const animateCount = (key: 'workshops' | 'brands', target: number, duration = 2000) => {
      let start = 0;
      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCounts((previous) => ({ ...previous, [key]: Math.floor(eased * target) }));
        if (progress < 1) {
          frames.push(requestAnimationFrame(step));
        }
      };
      frames.push(requestAnimationFrame(step));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !counted) {
            counted = true;
            animateCount('workshops', 500);
            animateCount('brands', 40);
            setCounts((previous) => ({ ...previous, minutes: 90 }));
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      frames.forEach((frameId) => cancelAnimationFrame(frameId));
    };
  }, []);

  useEffect(() => {
    if (carouselPaused) return;

    const timer = window.setInterval(() => {
      setCurrentSlide((previous) => (previous + 1) % heroSlides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [carouselPaused, carouselResetKey]);

  useEffect(() => {
    if (!phoneModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') setPhoneModalOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [phoneModalOpen]);

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const selectSlide = (index: number) => {
    setCurrentSlide((index + heroSlides.length) % heroSlides.length);
    setCarouselResetKey((previous) => previous + 1);
  };

  const onCarouselKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') selectSlide(currentSlide - 1);
    if (event.key === 'ArrowRight') selectSlide(currentSlide + 1);
  };

  const openPhoneModal = () => {
    setCopiedPhone(false);
    setPhoneModalOpen(true);
  };

  const copyPhoneNumber = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumberClipboard);
      setCopiedPhone(true);
      window.setTimeout(() => setCopiedPhone(false), 1800);
    } catch {
      setCopiedPhone(false);
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 z-[999] w-full border-b border-[var(--brd)] bg-[rgba(7,7,16,0.85)] backdrop-blur-[20px] transition duration-300 ${
          navScrolled ? 'bg-[rgba(7,7,16,0.97)] shadow-glow' : ''
        }`}
      >
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-[auto_auto] items-center justify-between gap-4 px-5 py-3 md:grid-cols-[auto_1fr_auto] md:px-8">
          <a href="#inicio" className="flex shrink-0 items-center" aria-label="TurboShop inicio">
            <img src="/logo-with-text.svg" alt="TurboShop" className="h-9 w-auto" width="160" height="38" />
          </a>

          <ul className="hidden list-none items-center justify-center gap-5 md:flex min-[1025px]:gap-8">
            <li>
              <a href="#como-funciona" className="nav-link">
                ¿Cómo funciona?
              </a>
            </li>
            <li>
              <a href="#marcas" className="nav-link">
                Marcas
              </a>
            </li>
            <li>
              <a href="#opiniones" className="nav-link">
                Opiniones
              </a>
            </li>
            <li>
              <a href="https://turboshop.cl/about-us" target="_blank" rel="noreferrer" className="nav-link">
                Nosotros
              </a>
            </li>
          </ul>

          <div className="flex shrink-0 items-center justify-end gap-3">
            <button
              type="button"
              className="relative flex cursor-pointer items-center justify-center rounded-lg border-0 bg-transparent p-1.5 text-turbo-muted transition duration-300 hover:bg-[rgba(107,33,232,0.1)] hover:text-turbo-purpleLight"
              aria-label="Ver carrito"
            >
              <CartIcon />
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-turbo-green px-1 text-[0.6rem] font-bold leading-none text-white" aria-label="0 productos">
                0
              </span>
            </button>
            <a href="https://turboshop.cl/login" className="btn-login max-md:hidden" aria-label="Iniciar sesión">
              Iniciar sesión
            </a>
            <button
              type="button"
              className="flex cursor-pointer flex-col gap-1.5 border-0 bg-transparent p-1 md:hidden"
              aria-label="Menú"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
            >
              <span className="block h-0.5 w-6 rounded bg-turbo-text transition duration-300" />
              <span className="block h-0.5 w-6 rounded bg-turbo-text transition duration-300" />
              <span className="block h-0.5 w-6 rounded bg-turbo-text transition duration-300" />
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mob-menu"
        className={`${mobileOpen ? 'flex' : 'hidden'} fixed left-0 right-0 top-16 z-[998] flex-col gap-5 border-b border-[var(--brd)] bg-[rgba(7,7,16,0.98)] px-8 py-6 backdrop-blur-[20px] md:hidden`}
      >
        <button type="button" className="text-left font-medium text-turbo-muted transition hover:text-turbo-text" onClick={() => scrollToId('como-funciona')}>
          ¿Cómo funciona?
        </button>
        <button type="button" className="text-left font-medium text-turbo-muted transition hover:text-turbo-text" onClick={() => scrollToId('marcas')}>
          Marcas
        </button>
        <button type="button" className="text-left font-medium text-turbo-muted transition hover:text-turbo-text" onClick={() => scrollToId('opiniones')}>
          Opiniones
        </button>
        <a href="https://turboshop.cl/about-us" target="_blank" rel="noreferrer" className="font-medium text-turbo-muted transition hover:text-turbo-text" onClick={() => setMobileOpen(false)}>
          Nosotros
        </a>
        <div className="mt-1 flex flex-col gap-3">
          <a href="https://turboshop.cl/login" className="btn-login justify-center text-center">
            Iniciar sesión
          </a>
          <button type="button" className="btn-primary w-full" onClick={() => scrollToId('cta')}>
            Inscribir mi Taller
          </button>
        </div>
      </div>

      <main>
        <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden bg-heroGradient px-8 pb-16 pt-28">
          <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            {speedLines.map((line, index) => (
              <span
                key={index}
                className="speed-line"
                style={{ top: line.top, width: line.width, animationDelay: line.delay, animationDuration: line.duration }}
              />
            ))}
          </div>

          <div className="relative z-[1] mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-16 text-center min-[1025px]:grid-cols-2 min-[1025px]:text-left">
            <div>
              <div data-a="" className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(107,33,232,0.5)] bg-[rgba(107,33,232,0.15)] px-4 py-1.5 text-sm font-semibold text-turbo-purpleLight">
                <span className="pulse-dot h-[7px] w-[7px] rounded-full bg-turbo-green" />
                Plataforma activa en Chile
              </div>

              <h1 data-a="" className="mb-5 font-display text-[clamp(2.4rem,5vw,4.2rem)] font-black leading-[1.08] tracking-[-0.03em]">
                Tus repuestos en
                <br />
                <span className="nitro-text">90 minutos.</span>
                <br />
                <span className="gradient-text">Modo Nitro.</span>
              </h1>

              <p data-a="" className="mx-auto mb-8 max-w-[480px] text-[1.1rem] leading-7 text-turbo-muted min-[1025px]:mx-0">
                La plataforma B2B que conecta talleres con proveedores de repuestos automotrices. Miles de productos, entrega ultra rápida, sin perder tiempo.
              </p>

              <div data-a="" className="mb-10 flex flex-wrap justify-center gap-4 min-[1025px]:justify-start">
                <button type="button" className="btn-primary" onClick={() => scrollToId('cta')}>
                  <BoltIcon />
                  Inscribir mi Taller
                </button>
                <button type="button" className="btn-secondary" onClick={() => scrollToId('como-funciona')}>
                  <DownIcon />
                  Ver cómo funciona
                </button>
              </div>

              <div data-a="" ref={statsRef} className="flex flex-col justify-center gap-4 md:flex-row md:gap-8 min-[1025px]:justify-start">
                <div className="flex flex-col">
                  <span className="gradient-text font-display text-3xl font-black">{counts.workshops}+</span>
                  <span className="text-xs font-medium text-turbo-muted">Talleres activos</span>
                </div>
                <div className="flex flex-col">
                  <span className="gradient-text font-display text-3xl font-black">{counts.brands}+</span>
                  <span className="text-xs font-medium text-turbo-muted">Marcas disponibles</span>
                </div>
                <div className="flex flex-col">
                  <span className="gradient-text font-display text-3xl font-black">{counts.minutes}</span>
                  <span className="text-xs font-medium text-turbo-muted">Minutos de entrega</span>
                </div>
              </div>
            </div>

            <div className="hero-visual-mobile-hidden relative flex items-center justify-center">
              <div className="glow-ring pointer-events-none absolute z-0 h-[340px] w-[340px] rounded-full" />
              <div
                className="hero-carousel relative z-[1] aspect-video w-full max-w-[480px] overflow-hidden rounded-[28px] bg-turbo-surface2 min-[1025px]:max-w-[640px]"
                aria-label="Imágenes TurboShop"
                onMouseEnter={() => setCarouselPaused(true)}
                onMouseLeave={() => setCarouselPaused(false)}
                onKeyDown={onCarouselKeyDown}
                tabIndex={0}
              >
                <div className="relative h-full w-full">
                  {heroSlides.map((slide, index) => (
                    <div key={slide.src} className={`carousel-slide ${currentSlide === index ? 'active' : ''}`} aria-hidden={currentSlide !== index}>
                      <img src={slide.src} alt={slide.alt} loading={slide.loading} className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2" role="tablist" aria-label="Diapositivas">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`carousel-dot ${currentSlide === index ? 'active' : ''}`}
                      role="tab"
                      aria-selected={currentSlide === index}
                      aria-label={`Imagen ${index + 1}`}
                      onClick={() => selectSlide(index)}
                    />
                  ))}
                </div>

                <div className="absolute left-5 top-5 z-10 flex items-center gap-2 rounded-full border border-white/10 bg-[rgba(15,15,26,0.85)] px-4 py-2 text-sm font-bold tracking-[0.02em] text-white shadow-[0_8px_24px_rgba(0,0,0,0.3)] backdrop-blur-2xl">
                  <span className="pulse-dot h-1.5 w-1.5 shrink-0 rounded-full bg-turbo-green" />
                  Entrega en 90 min ⚡
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="bg-turbo-surface px-8 py-20">
          <div className="mx-auto w-full max-w-[1200px]">
            <div data-a="" className="text-center">
              <span className="section-tag">¿Cómo funciona?</span>
              <h2 className="section-title">
                Tres pasos para el <span className="gradient-text">repuesto perfecto</span>
              </h2>
              <p className="section-sub mx-auto">Sin vueltas, sin esperas. Así de simple es operar con TurboShop.</p>
            </div>

            <div className="mt-16 grid grid-cols-1 items-center gap-8 min-[1025px]:grid-cols-[1.2fr_1fr] min-[1025px]:gap-16">
              <div data-a-stagger="" className="flex flex-col gap-6">
                {steps.map((step) => (
                  <div key={step.number} className="step-card flex items-start gap-6 rounded-[20px] border border-[var(--brd)] bg-turbo-surface2 p-8 text-left">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-turboGradient font-display text-lg font-black text-white shadow-glow">
                      {step.number}
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="mb-1 text-2xl">{step.icon}</div>
                      <h3 className="font-display text-lg font-bold">{step.title}</h3>
                      <p className="text-[0.95rem] leading-6 text-turbo-muted">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div data-a="" className="flex items-center justify-center max-[1024px]:order-2">
                <div className="guaranteed-wrap relative w-full max-w-[340px] shrink-0 overflow-hidden rounded-[28px] md:max-w-[380px] min-[1025px]:max-w-[440px]">
                  <img
                    src="/guaranteed-delivery-in.webp"
                    alt="Entrega garantizada en 90 minutos — TurboShop"
                    loading="lazy"
                    className="h-auto w-full rounded-[28px] border border-white/5 transition duration-[600ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_0%,transparent_50%,rgba(107,33,232,0.15)_100%)]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="ventajas" className="px-8 py-20">
          <div className="mx-auto w-full max-w-[1200px]">
            <div data-a="">
              <span className="section-tag">Ventajas</span>
              <h2 className="section-title">
                Todo lo que tu taller <span className="gradient-text">necesita</span>
              </h2>
            </div>

            <div data-a-stagger="" className="mt-12 grid grid-cols-1 gap-8 min-[1025px]:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className={`feature-card relative overflow-hidden rounded-[20px] border border-[var(--brd)] bg-turbo-surface p-8 ${feature.wide ? 'min-[1025px]:col-span-2' : ''}`}
                >
                  <div className="relative z-[1] mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--brd)] bg-[rgba(107,33,232,0.15)] text-xl">
                    {feature.icon}
                  </div>
                  <h3 className="relative z-[1] mb-2 font-display text-lg font-bold">{feature.title}</h3>
                  <p className="relative z-[1] text-[0.9rem] leading-6 text-turbo-muted">{feature.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="marcas" className="bg-turbo-surface px-8 py-20">
          <div className="mx-auto w-full max-w-[1200px]">
            <div data-a="" className="text-center">
              <span className="section-tag">Marcas</span>
              <h2 className="section-title">
                Repuestos para <span className="gradient-text">todas las marcas</span>
              </h2>
              <p className="section-sub mx-auto">Manejamos repuestos originales y alternativos para las marcas más populares del mercado chileno.</p>
            </div>

            <div data-a-stagger="" className="mt-10 grid grid-cols-2 gap-4 min-[480px]:grid-cols-3 md:grid-cols-4 min-[1025px]:grid-cols-6">
              {brands.map((brand) => (
                <div key={brand} className="brand-pill flex cursor-default items-center justify-center rounded-xl border border-[var(--brd)] bg-turbo-surface2 px-4 py-3.5 text-sm font-bold text-turbo-subtle grayscale">
                  {brand}
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-turbo-muted">
              ¡Y <span className="font-semibold text-turbo-purpleLight">muchas más!</span> Si no encuentras tu marca, contáctanos directamente.
            </p>
          </div>
        </section>

        <section id="opiniones" className="px-8 py-20">
          <div className="mx-auto w-full max-w-[1200px]">
            <div data-a="" className="text-center">
              <span className="section-tag">Opiniones</span>
              <h2 className="section-title">
                Lo que dicen <span className="gradient-text">nuestros talleres</span>
              </h2>
            </div>

            <div data-a-stagger="" className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 min-[1025px]:grid-cols-3">
              {testimonials.map((testimonial) => (
                <article key={`${testimonial.name}-${testimonial.company}`} className="testimonial-card relative rounded-[20px] border border-[var(--brd)] bg-turbo-surface p-7">
                  <div className="mb-3 font-display text-5xl leading-[0.8] text-turbo-purple opacity-60">&quot;</div>
                  <div className="mb-1 text-sm text-[#FFB800]">★★★★★</div>
                  <h3 className="mb-3 font-display font-bold text-turbo-purpleLight">{testimonial.title}</h3>
                  <p className="text-[0.88rem] leading-6 text-turbo-muted">{testimonial.body}</p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-turboGradient text-sm font-bold text-white">{testimonial.initials}</div>
                    <div>
                      <div className="text-sm font-semibold">{testimonial.name}</div>
                      <div className="text-xs text-turbo-muted">{testimonial.company}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="px-8 py-16">
          <div className="mx-auto w-full max-w-[1200px]">
            <div data-a="" className="cta-banner relative mx-auto max-w-[900px] overflow-hidden rounded-[28px] border border-[rgba(107,33,232,0.5)] bg-[linear-gradient(135deg,#0F0A20,#1A0A30)] px-6 py-10 text-center md:px-12 md:py-16">
              <div className="relative z-[1]">
                <span className="section-tag">¿Listo para el Modo Nitro?</span>
                <h2 className="mb-3 font-display text-[clamp(1.8rem,4vw,2.8rem)] font-black">
                  Inscribe tu taller <span className="gradient-text">hoy mismo</span>
                </h2>
                <p className="mb-8 text-[1.05rem] text-turbo-muted">Únete a los talleres que ya operan más rápido, más barato y sin estrés con TurboShop.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="https://turboshop.cl/" target="_blank" rel="noreferrer" className="btn-primary">
                    <BoltIcon />
                    Inscribirme como Taller
                  </a>
                  <a href="https://turboshop.cl/" target="_blank" rel="noreferrer" className="btn-secondary">
                    Soy Proveedor →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--brd)] bg-turbo-surface px-8 pb-8 pt-16">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 md:grid-cols-2 min-[1025px]:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <h3 className="font-display text-xl font-black">
              Turbo<span className="gradient-text">Shop</span>
            </h3>
            <p className="mt-3 max-w-[260px] text-[0.88rem] leading-6 text-turbo-muted">La plataforma que conecta talleres con proveedores de repuestos. Entrega en 90 minutos en toda Chile.</p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.linkedin.com/company/turbo-shop/"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--brd)] bg-turbo-surface2 text-sm text-turbo-muted transition duration-300 hover:border-turbo-purpleLight hover:text-turbo-purpleLight hover:shadow-[0_0_12px_rgba(107,33,232,0.4)]"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-bold text-turbo-text">Productos</h4>
            <ul className="flex list-none flex-col gap-2.5">
              <li>
                <a href="https://turboshop.cl/" className="text-sm text-turbo-muted transition hover:text-turbo-purpleLight">
                  Repuestos
                </a>
              </li>
              {['Neumáticos', 'Baterías', 'Lubricantes'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-turbo-muted transition hover:text-turbo-purpleLight">
                    {item} <span className="ml-1.5 rounded-full border border-[rgba(34,197,94,0.3)] bg-[rgba(34,197,94,0.1)] px-2 py-0.5 text-xs font-bold text-turbo-green">Pronto</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-bold text-turbo-text">Empresa</h4>
            <ul className="flex list-none flex-col gap-2.5">
              <li>
                <a href="https://turboshop.cl/about-us" className="text-sm text-turbo-muted transition hover:text-turbo-purpleLight">
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a href="https://turboshop.cl/terms" className="text-sm text-turbo-muted transition hover:text-turbo-purpleLight">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="https://turboshop.cl/" className="text-sm text-turbo-muted transition hover:text-turbo-purpleLight">
                  Inscribir Taller
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-bold text-turbo-text">Contacto</h4>
            <ul className="flex list-none flex-col gap-2.5">
              <li>
                <a href="mailto:ventas@turboshop.cl" className="text-sm text-turbo-muted transition hover:text-turbo-purpleLight">
                  ventas@turboshop.cl
                </a>
              </li>
              <li>
                <a href={phoneNumberHref} className="text-sm text-turbo-muted transition hover:text-turbo-purpleLight">
                  {phoneNumberDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-[1200px] flex-wrap items-center justify-between gap-3 border-t border-[var(--brd)] pt-6">
          <p className="text-xs text-turbo-subtle">© 2026 TurboShop. Todos los derechos reservados.</p>
          <p className="text-xs text-turbo-subtle">Hecho con ⚡ en Chile</p>
        </div>
      </footer>

      <div className="fixed bottom-5 right-0 z-[1000] sm:bottom-8" aria-label="Opciones de contacto rápido">
        {contactWidgetOpen ? (
          <div className="mr-4 flex flex-col items-end gap-3 transition duration-300 sm:mr-8">
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white text-turbo-subtle shadow-[0_10px_30px_rgba(0,0,0,0.24)] transition hover:text-turbo-purple focus:outline-none focus:ring-2 focus:ring-turbo-purpleLight focus:ring-offset-2 focus:ring-offset-turbo-bg"
              aria-label="Cerrar opciones de contacto"
              onClick={() => setContactWidgetOpen(false)}
            >
              <CloseIcon />
            </button>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex min-w-[118px] items-center justify-between gap-3 rounded-full bg-[#48B75C] py-3 pl-5 pr-3 text-sm font-bold text-white shadow-[0_14px_34px_rgba(0,0,0,0.32)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#40A955] focus:outline-none focus:ring-2 focus:ring-[#48B75C] focus:ring-offset-2 focus:ring-offset-turbo-bg"
            >
              WhatsApp
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white">
                <WhatsAppIcon />
              </span>
            </a>

            <button
              type="button"
              className="flex min-w-[118px] items-center justify-between gap-3 rounded-full bg-turboGradient py-3 pl-5 pr-3 text-sm font-bold text-white shadow-[0_14px_34px_rgba(0,0,0,0.32)] transition duration-300 hover:-translate-y-0.5 hover:shadow-glowStrong focus:outline-none focus:ring-2 focus:ring-turbo-purpleLight focus:ring-offset-2 focus:ring-offset-turbo-bg"
              onClick={openPhoneModal}
            >
              Hablemos
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white">
                <PhoneIcon />
              </span>
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="flex min-h-[92px] w-11 flex-col items-center justify-center gap-2 rounded-l-lg bg-[#48B75C] py-3 text-white shadow-[0_12px_34px_rgba(0,0,0,0.28)] transition duration-300 hover:bg-[#40A955] focus:outline-none focus:ring-2 focus:ring-[#48B75C] focus:ring-offset-2 focus:ring-offset-turbo-bg sm:w-12"
            aria-expanded="false"
            aria-label="Abrir opciones de contacto"
            onClick={() => setContactWidgetOpen(true)}
          >
            <span className="[writing-mode:vertical-rl] rotate-180 text-xs font-bold leading-none tracking-wide">¿Ayuda?</span>
            <WhatsAppIcon />
          </button>
        )}
      </div>

      {phoneModalOpen ? (
        <div
          className="fixed inset-0 z-[1100] flex items-center justify-center bg-black/65 px-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="phone-modal-title"
          onMouseDown={() => setPhoneModalOpen(false)}
        >
          <div
            className="w-full max-w-[360px] rounded-lg border border-white/10 bg-white p-5 text-[#111827] shadow-[0_24px_90px_rgba(0,0,0,0.45)]"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id="phone-modal-title" className="font-display text-base font-bold leading-tight text-[#111827]">
                  Contáctanos por teléfono
                </h2>
                <p className="mt-1 text-xs font-medium text-[#667085]">Llámanos para recibir ayuda inmediata con tus repuestos</p>
              </div>
              <button type="button" className="rounded-full p-1 text-[#667085] transition hover:bg-black/5 hover:text-[#111827]" aria-label="Cerrar modal" onClick={() => setPhoneModalOpen(false)}>
                <CloseIcon />
              </button>
            </div>

            <a
              href={phoneNumberHref}
              className="mt-7 flex w-full items-center justify-center gap-3 rounded-lg border border-[#CBEBD2] bg-[#E7F5EA] px-4 py-4 font-mono text-sm font-bold tracking-[0.08em] text-[#2C8D47] transition hover:border-[#8BD19A] hover:bg-[#DDF1E2]"
            >
              <PhoneIcon size={17} />
              {phoneNumberDisplay}
            </a>

            <button
              type="button"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-md border border-[#4CAF61] bg-white px-4 py-2.5 text-sm font-medium text-[#2C8D47] transition hover:bg-[#F2FBF4]"
              onClick={copyPhoneNumber}
            >
              <CopyIcon />
              {copiedPhone ? 'Número copiado' : 'Copiar número'}
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
