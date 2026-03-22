# 🚀 SoftTech Perú - Landing Page

Landing page profesional y moderna para SoftTech Perú, desarrollada con React, TypeScript, Tailwind CSS y Framer Motion.

## ✨ Características

- ⚡ **React 19** + **TypeScript** para desarrollo robusto
- 🎨 **Tailwind CSS** para estilos modernos y responsivos
- 🎬 **Framer Motion** para animaciones fluidas
- 📱 **Totalmente Responsive** - Se ve perfecto en todos los dispositivos
- 🔔 **Notificaciones Toast** para mejor UX
- 💬 **Botón de WhatsApp** flotante para conversión
- 📝 **Formulario de Contacto** con validación
- ⭐ **Testimonios** de clientes
- ❓ **FAQ** con acordeón animado
- 🔍 **SEO Optimizado** con meta tags
- ♿ **Accesible** siguiendo estándares web

## 📦 Tecnologías

- React 19.2.4
- TypeScript 5.2.2
- Vite 8.0.1
- Tailwind CSS 3.4.19
- Framer Motion 12.38.0
- Lucide React (iconos)
- React Hot Toast

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview
```

## 🎨 Personalización Rápida

### 1. Información de la Empresa

Edita `src/constants/index.ts`:

```typescript
export const COMPANY_INFO = {
  name: 'Tu Empresa',
  address: 'Tu dirección',
  email: 'tu@email.com',
  phone: '+51 999 999 999',
  coverage: ['Ciudad 1', 'Ciudad 2'],
};
```

### 2. Número de WhatsApp

En `src/components/shared/WhatsAppButton.tsx`:

```typescript
const phone = '51999999999'; // Cambia por tu número real
```

### 3. Google Analytics

1. Obtén tu ID en Google Analytics
2. Edita `src/utils/analytics.ts`:
   ```typescript
   export const GA_TRACKING_ID = 'G-TU-ID-AQUI';
   ```
3. Añade el script en `index.html`

### 4. Colores de Marca

Personaliza en `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#tu-color',
    // ...
  }
}
```

## 📧 Conectar Formulario de Contacto

El formulario está listo para conectarse. Opciones recomendadas:

### EmailJS (Más Fácil)

```bash
npm install @emailjs/browser
```

### FormSubmit (Sin código)

Solo cambia la URL del fetch en ContactSection.tsx

### API Propia

Implementa tu endpoint y actualiza el onSubmit

Ver README completo para más detalles.

## 📂 Estructura

```
src/
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Hero, Services, etc.
│   ├── shared/          # WhatsApp, SEO, ScrollToTop
│   └── ui/              # Botones, Cards, Inputs
├── constants/           # Configuración
├── hooks/               # Custom hooks
├── utils/               # Helpers y validaciones
└── types/               # TypeScript types
```

## 🚀 Deploy

**Vercel** (Recomendado)

```bash
npm install -g vercel
vercel
```

**Netlify**
Arrastra la carpeta `dist` después de `npm run build`

## 📝 Próximos Pasos

1. ✅ Cambiar información de empresa en constants
2. ✅ Añadir tu número de WhatsApp
3. ✅ Agregar imágenes reales en `/public`
4. ✅ Conectar formulario con servicio de email
5. ✅ Configurar Google Analytics
6. ✅ Deploy a producción

## 📞 Soporte

¿Preguntas? Revisa `MEJORAS.md` para ver todas las funcionalidades y mejoras disponibles.

Desarrollado con ❤️ por SoftTech Perú
