const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');

const redirectLegacyServicesLink = () => {
  const routes = { '#servicios': 'servicios.html', '#campaignos': 'campaignos.html', '#metodo': 'como-trabajamos.html', '#preguntas': 'preguntas.html' };
  const destination = routes[window.location.hash];
  if (destination && !window.location.pathname.endsWith('/' + destination)) {
    window.location.replace(destination);
  }
};

redirectLegacyServicesLink();
window.addEventListener('hashchange', redirectLegacyServicesLink);

const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 16);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menu?.classList.toggle('open', !isOpen);
});

menu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('.reveal');

if (reducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
}

document.querySelectorAll('details').forEach((detail) => {
  detail.addEventListener('toggle', () => {
    if (!detail.open) return;
    document.querySelectorAll('details[open]').forEach((other) => {
      if (other !== detail) other.removeAttribute('open');
    });
  });
});

const form = document.querySelector('[data-contact-form]');
const result = document.querySelector('[data-form-result]');

form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const request = [
    'Solicitud desde la web de GISBA',
    `Nombre: ${data.get('nombre')}`,
    `Correo: ${data.get('correo')}`,
    `Interés: ${data.get('interes')}`,
    `Contexto: ${data.get('mensaje') || 'Sin detalles adicionales'}`
  ].join('\n');

  try {
    await navigator.clipboard.writeText(request);
    result.textContent = 'Solicitud preparada y copiada. Falta conectar el canal oficial de GISBA para enviarla directamente.';
  } catch {
    result.textContent = 'Solicitud preparada. Falta conectar el canal oficial de GISBA para enviarla directamente.';
  }
  result.hidden = false;
});

document.querySelector('[data-year]').textContent = new Date().getFullYear();
