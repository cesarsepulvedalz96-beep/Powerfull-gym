# Powerfull Gym

Sitio web para un gimnasio, desarrollado con React, Vite y un backend en Node.js/Express.

## Descripción

Powerfull Gym es una aplicación web enfocada en presentar los servicios, clases, planes y beneficios de un gimnasio.

El proyecto incluye una interfaz moderna para usuarios, páginas informativas, carruseles de servicios y planes, sección de contacto y un flujo de compra o inscripción con pago simulado.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- CSS
- Node.js
- Express
- React Router
- ESLint

## Estructura del proyecto

```text
Powerfull-gym/
├── backend/          # Backend Node.js / Express
├── public/           # Imágenes y archivos públicos
├── src/              # Código fuente del frontend
├── package.json      # Dependencias y scripts del frontend
├── vite.config.js    # Configuración de Vite
└── README.md
```

## Instalación

Clonar el repositorio:

```powershell
git clone https://github.com/cesarsepulvedalz96-beep/Powerfull-gym.git
cd Powerfull-gym
```

Instalar dependencias del frontend:

```powershell
npm install
```

Instalar dependencias del backend:

```powershell
cd backend
npm install
cd ..
```

## Ejecutar el proyecto

Ejecutar el frontend:

```powershell
npm run dev
```

Ejecutar el backend en otra terminal:

```powershell
cd backend
npm run dev
```

Por defecto:

```text
Frontend: http://localhost:5173
Backend:  http://localhost:3001
```

## Construcción para producción

Para generar la versión de producción del frontend:

```powershell
npm run build
```

Los archivos generados quedarán en:

```text
dist/
```

## Nota sobre pagos

El proyecto incluye un flujo de pago simulado para pruebas y demostración.
