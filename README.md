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