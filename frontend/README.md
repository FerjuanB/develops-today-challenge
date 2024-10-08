
# Country Info App

## Descripción
La Country Info App es una aplicación web que permite visualizar información sobre diferentes países, incluyendo datos históricos de población y detalles sobre fronteras. Utiliza React en el frontend y Express en el backend.

## Requisitos Previos
Antes de comenzar, asegúrate de tener instalados los siguientes programas en tu máquina:

- [Node.js](https://nodejs.org/) (v16 o superior)
- [npm](https://www.npmjs.com/get-npm) (generalmente se instala junto con Node.js)

## Descarga del Proyecto

Para descargar el proyecto, sigue estos pasos:

1. Abre una terminal.
2. Clona el repositorio usando git:

   ```bash
   git clone https://github.com/FerjuanB/develops-today-challenge.git
   ```
   
3. Navega al directorio del proyecto:

   ```bash
   cd develops-today-challenge
   ```

## Instalación

### 1. Configuración del Backend

1. Navega al directorio del backend:

   ```bash
   cd api
   ```

2. Instala las dependencias del backend:

   ```bash
   npm install
   ```

3. Crea un archivo `.env` en el directorio `api` y define la URL de tu API:

   ```plaintext
   VITE_API_URL=http://localhost:3000/api/countries
   ```

4. Inicia el servidor backend:

   ```bash
   npm run server
   ```

### 2. Configuración del Frontend

1. Abre otra terminal y navega al directorio del frontend:

   ```bash
   cd frontend
   ```

2. Instala las dependencias del frontend:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo del frontend:

   ```bash
   npm run dev
   ```

## Uso

- Una vez que ambos servidores (frontend y backend) estén en funcionamiento, abre tu navegador y visita [http://localhost:5173](http://localhost:5173) para ver la aplicación en acción.

## Estructura del Proyecto

- **frontend**: Contiene el código fuente del frontend, construido con React y Vite.
- **api**: Contiene el código fuente del backend, construido con Express.

## Comandos Útiles

### Backend
- `npm run server`: Inicia el servidor backend con nodemon.

### Frontend
- `npm run dev`: Inicia el servidor de desarrollo frontend con Vite.
- `npm run build`: Crea una versión optimizada para producción.
- `npm run preview`: Previsualiza la aplicación construida.

## Dependencias
### Frontend
- `axios`: Para realizar solicitudes HTTP.
- `chart.js`: Para visualizar datos de población en gráficos.
- `react`: Biblioteca para construir interfaces de usuario.
- `react-router-dom`: Para manejar la navegación entre diferentes vistas.
- `vite`: Herramienta de construcción de frontend.

### Backend
- `axios`: Para realizar solicitudes HTTP.
- `cors`: Middleware para habilitar CORS.
- `dotenv`: Para manejar variables de entorno.
- `express`: Framework para construir aplicaciones web.
- `morgan`: Middleware para registrar solicitudes HTTP.

## Contribución
Si deseas contribuir al proyecto, por favor envía un pull request o abre un issue para discutir mejoras.

## Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
