# AFAF Badawy - Portfolio

Portfolio profesional de Afaf Badawy Fernández, Arquitecta especializada en gestión municipal y desarrollo territorial.

## Configuración del Proyecto

Este proyecto utiliza:

- **React 18** con TypeScript
- **Vite** como bundler
- **Tailwind CSS** para estilos
- **Lucide React** para iconos

## Instalación

```bash
npm install
```

## Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

## Construcción

Para generar la versión de producción:

```bash
npm run build
```

## Cargar Imágenes

### Estructura de carpetas

Las imágenes deben colocarse en la carpeta `public/images/`:

```
proyecto/
├── public/
│   └── images/
│       ├── plaza-urbana.jpg
│       ├── anfiteatro.jpg
│       ├── interior.jpg
│       └── centro-cultural.jpg
```

### Cómo actualizar las imágenes del carrusel

En el archivo `afaf-portfolio.tsx`, busca la sección de `filmStripImages`:

```typescript
const filmStripImages: FilmStripImage[] = [
  {
    id: 1,
    title: "PLAZA URBANA",
    subtitle: "Espacios públicos",
    color: "from-stone-600 to-stone-800",
    imagePath: "/images/plaza-urbana.jpg", // ← Ruta de la imagen
  },
  // ... más imágenes
];
```

### Sistema de carga de imágenes

El componente ya está preparado para cargar imágenes. Si la propiedad `imagePath` está definida, mostrará la imagen. Si no, mostrará un placeholder con gradiente:

```tsx
{item.imagePath ? (
  <img
    src={item.imagePath}
    alt={item.title}
    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
  />
) : (
  // Mostrar placeholder con gradiente
)}
```

## Cambios Realizados

✅ **Errores Corregidos:**

- Instalado TypeScript y configuración (`tsconfig.json`)
- Agregado `package.json` con todas las dependencias necesarias
- Creado `vite.config.ts` para configuración de Vite
- Agregado `tailwind.config.js` para Tailwind CSS
- Creado `index.html` como punto de entrada
- Creados archivos de entrada (`src/main.tsx`, `src/index.css`)
- Añadidos tipos TypeScript para componentes y state
- Corregido error en la propiedad `rows` del textarea
- Creada carpeta `public/images/` para las imágenes

✅ **Mejoras de Tipado:**

- Agregada interfaz `Project` para proyectos
- Agregada interfaz `FilmStripImage` para imágenes del carrusel
- Tipado correcto de estados con genéricos
- Parámetros tipados en funciones

## Próximos Pasos

1. Copiar tus imágenes JPG/PNG a `public/images/`
2. Actualizar los nombres de archivos en la propiedad `imagePath` si es necesario
3. Ejecutar `npm run dev` para probar localmente
4. Ejecutar `npm run build` para producción

## Notas Importantes

- Las imágenes del carrusel se cargarán automáticamente cuando coloque archivos en `public/images/`
- El sistema de fallback con gradientes se mostrará si `imagePath` no existe o la imagen no se puede cargar
- Todas las rutas de imagen comienzan con `/images/` (ruta pública)
