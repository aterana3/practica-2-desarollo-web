# Formulario de Registro - React + Vite

Este proyecto es un formulario de registro con validación en tiempo real desarrollado con React, Vite y Bootstrap.
Incluye campos para nombre, correo electrónico y contraseña con validaciones dinámicas y un diseño responsivo.

## 📋 Validaciones implementadas

- **Nombre**: Mínimo 2 caracteres, obligatorio
- **Correo**: Formato de email válido, obligatorio
- **Contraseña**: Mínimo 8 caracteres, obligatorio

## 🛠️ Instalación

### Prerrequisitos

Asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [npm](https://www.npmjs.com/) o [pnpm](https://pnpm.io/)

### Pasos de instalación

1. **Clona o descarga el proyecto**
   ```bash
   # Si tienes el proyecto en un repositorio
   git clone <url-del-repositorio>
   cd formulario-practica
   ```

2. **Instala las dependencias**
   ```bash
   # Con npm
   npm install
   
   # O con pnpm (recomendado para este proyecto)
   pnpm install
   ```

## 🚀 Ejecución

### Modo desarrollo

Para ejecutar el proyecto en modo desarrollo con hot reload:

```bash
# Con npm
npm run dev

# Con pnpm
pnpm dev
```

El servidor se iniciará en `http://localhost:5173`

## 🔧 Scripts disponibles

- `npm run dev` / `pnpm dev` - Inicia el servidor de desarrollo
- `npm run build` / `pnpm build` - Construye para producción
- `npm run preview` / `pnpm preview` - Previsualiza la construcción
- `npm run lint` / `pnpm lint` - Ejecuta el linter ESLint