# App Agente de Tránsito RD

Esta aplicación móvil está diseñada para facilitar las tareas diarias de un agente de tránsito en la República Dominicana. A continuación, se describen las principales características y funcionalidades de la aplicación.

## Funcionalidades

### 1. Inicio de Sesión

Antes de acceder a las funcionalidades de la aplicación, el agente debe iniciar sesión para garantizar la seguridad y privacidad de los datos.

### 2. Tarifario de Multas

El agente puede consultar el tarifario completo de multas, que incluye todos los tipos de multas existentes junto con sus detalles. Esta función proporciona al agente información actualizada sobre las sanciones de tránsito.

### 3. Consulta de Vehículo por Placa

Permite al agente ingresar la placa de un vehículo y obtener detalles sobre el mismo, como modelo, color y otras características relevantes.

### 4. Consulta de Conductor por Licencia

Esta función permite al agente buscar información detallada sobre un conductor ingresando su número de licencia. Los detalles incluyen la foto del conductor, nombre, apellido, fecha de nacimiento, dirección y número de teléfono.

### 5. Aplicar Multa

El agente puede registrar una multa de tránsito utilizando esta función. Deberá ingresar la cédula del infractor, la placa del vehículo (si aplica), el motivo de la multa (consultando el API correspondiente), adjuntar una foto como evidencia, agregar comentarios y registrar una nota de voz. También se registrarán automáticamente la latitud, longitud, fecha y hora.

### 6. Multas Registradas

Permite al agente consultar la lista de multas que ha registrado con la aplicación. Al seleccionar una multa específica, se mostrarán los detalles completos de la infracción.

### 7. Mapa de Multas

Visualiza un mapa interactivo que muestra las ubicaciones geográficas de las multas registradas por el agente. Al hacer clic en una ubicación específica, se accede a los detalles de la multa correspondiente.

### 8. Noticias

Proporciona noticias relevantes para el agente según la Dirección General de Seguridad de Tránsito y Transporte Terrestre (DIGESET). La información se obtiene a través de la API de noticias (https://remolacha.net/wp-json/wp/v2/posts?search=digeset).

### 9. Estado del Clima

Envía la latitud y longitud de la ubicación del agente para mostrar información actualizada sobre el estado del clima en esa zona. Esta función utiliza un API externo para obtener datos meteorológicos.

### 10. Horóscopo

Muestra el horóscopo diario personalizado para el agente, proporcionándole información sobre aspectos a tener en cuenta durante el día.

## Tecnologías Utilizadas

La aplicación utiliza tecnologías modernas y confiables para garantizar un rendimiento óptimo y una experiencia de usuario fluida.

- **Frontend:** Ionic Framework
- **Backend:** Node.js con Express
- **Base de Datos:** MongoDB
- **APIs Externos:** Consulta de motivos de multas, noticias y estado del clima.

## Instrucciones de Instalación

1. Clona el repositorio desde GitHub.
2. Instala las dependencias ejecutando `npm install` en el directorio del proyecto.
3. Configura la conexión a la base de datos MongoDB y las claves de las API externas en los archivos correspondientes.
4. Ejecuta la aplicación con `ionic serve` para probarla en tu navegador.

¡Disfruta de la App Agente de Tránsito RD!
