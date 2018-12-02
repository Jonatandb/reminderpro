# reminderpro
Basic reminder app - React and Redux

Nota Mental:
    Para que funcione flow desde VSCODE:
        1º Instalar extensión Flow Language Support
        2º Instalar flow desde el raíz del proyecto:
            npm install --save-dev flow-bin
        3º Inincializar flow en el proyecto:
            {directorio raiz}\node_modelus\flow-bin\flow-winXXXX\flow.exe
            (Esto creará en el directorio raíz el archivo .flowconfig)
        4º Desde VSCODE, en la configuración de la extensión en el área de trabajo, establecer el path a flow siguiente:
            ${workspaceRoot}\\node_modules\\.bin\\flow
        5º Agregar como primera línea "// @flow" (sin comillas) a los archivos donde se desee que flow haga el chequeo de tipos estático.
        6º Desde VSCODE, desactivar Javascript > Validate.

Pendientes:
    -   Agregar foco al input, al inicio y luego de clickear el botón Add.
    -   Hacer que se borre el input al clickear el botón Add.
    -   Hacer que al presionar enter se agregue el reminder como si se hubiera presionado el botón Add.
    -   Hacer que al clickear un reminder se tache indicando que está resuelto.
    -   Hacer que al clickear un reminder tachado se destache.
    -   Agregar un botón para eliminar un reminder.
    -   Agregar opciones para filtrado por reminders resueltos, pendientes y todos.
    -   Agregar estilos ;-)
    -   Agregar opción para exportar la lista de reminders.
    -   Agregar opción para elegir la fecha.
    -   Hacer que tengan un estilo resaltado los reminders con fecha igual a la actual. 