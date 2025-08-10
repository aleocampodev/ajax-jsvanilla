# Proyecto: AJAX con JavaScript + Materialize

Este es un ejemplo mínimo que muestra cómo realizar una petición AJAX usando `fetch` y presentar el resultado en la interfaz con estilos de Materialize.

## Requisitos
- Navegador moderno (o servir el sitio con un servidor estático)

## Uso
- Abre `index.html` directamente en tu navegador
  - o sirve el directorio con un servidor estático, por ejemplo:

```bash
npx serve /workspace | cat
```

Luego visita la URL que indique el servidor.

## Estructura
- `index.html`: Marcado principal y enlaces a CSS/JS
- `style.css`: Estilos básicos del ejemplo
- `main.js`: Lógica para obtener y mostrar el mensaje con `fetch`

## Mejoras futuras sugeridas
- Añadir pruebas end-to-end (p. ej. Playwright) para validar la interacción del botón
- Configurar un linter (ESLint) y formateador (Prettier)
- Empaquetar con Vite para desarrollo con recarga en caliente
- Añadir un modo offline simple (cachear última respuesta en `localStorage`)