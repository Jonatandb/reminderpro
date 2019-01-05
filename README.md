## Reminderpro

Basic reminder app - React and Redux

## Preview
[![Jonatandb](preview.png?raw=true "Reminderpro")](https://jonatandb-reminderpro.netlify.com/)

# Pendientes:
- Agregar foco al input, al inicio y luego de clickear el botón Add.
- Hacer que se borre el input al clickear el botón Add.
- Hacer que al presionar enter se agregue el reminder como si se hubiera presionado el botón Add.
- Hacer que al clickear un reminder se tache indicando que está resuelto.
- Hacer que al clickear un reminder tachado se destache.
- Agregar un botón para eliminar un reminder.
- Agregar opciones para filtrado por reminders resueltos, pendientes y todos.
- Agregar opción para exportar la lista de reminders (o enviarla por mail)
- Agregar opción para elegir la fecha.
- Hacer que tengan un estilo resaltado los reminders con fecha igual a la actual. 
- Aplicar diseño con [Ant Design](https://ant.design/) o [Material UI](https://material-ui.com/getting-started/installation/)

# Completado:
- Agregada funcionalidad para publicar en Github pages: ["Building and Deploying a React App"](https://www.taniarascia.com/getting-started-with-react/) Thanks Tania! ;-)
# Pasos para que funcione [Flow](https://flow.org/en/docs/usage/) desde VSCODE:
- 1º Instalar extensión [Flow Language Support](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode)
- 2º Instalar flow desde el raíz del proyecto:
```javascript
            npm install --save-dev flow-bin
```
- 3º Inincializar flow en el proyecto:
```javascript
            {directorio raiz}\node_modelus\flow-bin\flow-winXXXX\flow.exe init
            Esto creará en el directorio raíz el archivo .flowconfig
```
- 4º Desde VSCODE, en la configuración de la extensión en el área de trabajo, establecer el path a flow siguiente:
```javascript
            ${workspaceRoot}\\node_modules\\.bin\\flow
```
- 5º Agregar como primera línea "// @flow" (sin comillas) a los archivos donde se desee que flow haga el chequeo de tipos estático.
- 6º Desde VSCODE, desactivar Javascript > Validate.

# Pasos para que funcione [Netlify](https://.netlify.com):
- 1º Agregar una carpeta vacía en el raíz, llamada: build 
- 2º En caso de que el archivo "packages.json" tenga un linea para "homepage", eliminarla.
- 3º Iniciar sesión en [Netlify](https://.netlify.com) y hacer click en el botón ["New site from Git"](https://app.netlify.com/start)
- 4º En el asistente elegir el servicio donde está repositorio, por ej GitHub, luego elegir el reposito y finalmente clickear en "Deploy site".
- Opcionalmente se puede elegir un dominio personalizado yendo a "Domain settings -> Edit site name".
