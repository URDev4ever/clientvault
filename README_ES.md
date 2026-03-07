<h1 align="center">🔐 ClientVault</h1>
<p align="center">
  🇺🇸 <a href="README.md"><b>English</b></a> |
  🇪🇸 <a href="README_ES.md">Español</a>
</p>
<h3 align="center">
ClientVault es una herramienta ligera de seguridad web que se ejecuta dentro de la página y te permite inspeccionar, analizar y gestionar todo el almacenamiento del lado del cliente usado por un sitio web — incluyendo cookies, localStorage, sessionStorage y más. Pensada para desarrolladores, pentesters y bug bounty hunters.
</h3>

---

## 📋 INICIO RÁPIDO

Podés pegar **ClientVault** directamente en DevTools
(**F12 → Consola → Ctrl+V → Enter**)
**O** instalarlo como un userscript persistente para que se ejecute automáticamente en todos los sitios.

La forma recomendada es usar **Tampermonkey**, así no tenés que pegar el script cada vez.

### Usando Tampermonkey:

1. **Copiá el script de ClientVault**
2. **Abrí Tampermonkey**
3. Click en **Crear nuevo script** (`+`)
4. **Pegá el código**
5. **Guardá** (Ctrl+S)
6. **Activá el script**
7. **Recargá cualquier página** (F5)
8. **¡Listo!** La UI de ClientVault aparece automáticamente

---

## 🚀 INSTRUCCIONES DE INSTALACIÓN

### Paso a paso

### **1. Instalar Tampermonkey**

* Chrome
  [https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
* Firefox
  [https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)

---

### **2. Crear un nuevo script**

* Click en el **icono de Tampermonkey**
* Click en **Crear un nuevo script**
* Eliminá todo el contenido por defecto

---

### **3. Pegá este encabezado**

```javascript
// ==UserScript==
// @name         ClientVault – Inspector de Storage y Cookies
// @namespace    https://urdev.carrd.co/
// @version      1.0
// @description  Inspecciona, analiza y gestiona cookies, localStorage y sessionStorage en tiempo real
// @author       URDev
// @match        *://*/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

// PEGÁ EL SCRIPT COMPLETO DE ClientVault DEBAJO DE ESTA LÍNEA
```

Pegá tu código completo de ClientVault debajo de eso.

---

### **4. Guardar y activar**

* Presioná **Ctrl+S**
* Asegurate de que el interruptor esté en **ON**
* Recargá cualquier página web

---

## 🎯 CÓMO USARLO

Una vez instalado:

1. **Abrí cualquier sitio web**

2. La UI de ClientVault aparece en la **esquina superior derecha**

3. Usá la barra lateral para cambiar entre:

   * **Local Vault** (localStorage) <img width="801" height="580" alt="image" src="https://github.com/user-attachments/assets/68386be5-fe0c-4edf-b21e-689eda34bc7d" />

   * **Session Vault** (sessionStorage) <img width="809" height="582" alt="image" src="https://github.com/user-attachments/assets/307bfaa6-c379-4fc1-9715-dfdd29c6ff22" />

   * **Cookie Jar** (cookies) <img width="808" height="582" alt="image" src="https://github.com/user-attachments/assets/985f73df-9147-4089-82ef-d94e774ada57" />

4. Click en **👁 Ver** para inspeccionar cualquier valor
   (JSON se formatea y resalta automáticamente)

   <img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/e6713f82-7952-4dc7-9049-8cf9c6dbf965" />

5. Click en **🗑️** para borrar una entrada específica

   <img width="435" height="174" alt="image" src="https://github.com/user-attachments/assets/7cc5f6cf-69ec-4054-944b-9e98fe3eee8e" />

6. Click en **🗑️ Limpiar todo** para borrar todo y matar la sesión

   <img width="428" height="304" alt="image" src="https://github.com/user-attachments/assets/4f2b5237-608b-461d-9f71-6e90ede1ad16" />

   <img width="431" height="182" alt="image" src="https://github.com/user-attachments/assets/7348c93f-c4d3-4029-aa97-045adf8f1c35" />

---

## 🔍 QUÉ PODÉS VER

ClientVault te permite inspeccionar:

* Cookies accesibles por JavaScript
* Claves y valores de localStorage
* Claves y valores de sessionStorage
* Tamaño de almacenamiento por item
* Uso total de almacenamiento por sitio

Perfecto para:

* JWTs
* IDs de sesión
* Feature flags
* Tokens de tracking
* Objetos de estado de la app

---

## 🧠 VISOR INTELIGENTE DE JSON

ClientVault detecta automáticamente valores JSON y:

* Los formatea con indentación
* Aplica resaltado de sintaxis
* Hace legibles tokens grandes (JWTs, objetos de auth, etc.)

Si el valor no es JSON, se muestra como texto plano.

---

## ⚙️ ATAJOS DE TECLADO

| Atajo              | Acción                      |
| ------------------ | --------------------------- |
| `ESC`              | Cerrar el visor de detalles |
| `Ctrl + R`         | Refrescar el vault actual   |
| `Ctrl + Shift + X` | Cerrar ClientVault          |

---

## 🔄 ACTUALIZACIÓN EN VIVO

ClientVault refresca automáticamente el vault activo cada **5 segundos**, por lo que:

* Tokens que cambian
* Sesiones que expiran
* Cookies que se actualizan

…se reflejan en tiempo real.

---

## ⚠️ LIMITACIONES

* **Las cookies HttpOnly no pueden ser accedidas** (seguridad del navegador)
* Algunos datos pueden vivir en:

  * IndexedDB
  * Cache API
  * Service Workers
    (planeado para versiones futuras)

---

## 🛣️ ROADMAP

Funciones planeadas:

* 🔍 Inspector de IndexedDB
* 🗃️ Cache y storage de Service Workers
* 🔐 Detección automática de tokens de autenticación
* 📤 Exportar y copiar snapshots de storage
* 📊 Análisis de sesiones y tokens
* 🧪 Visor avanzado de árbol JSON

---

## 🛡️ PRIVACIDAD

ClientVault se ejecuta **completamente dentro de tu navegador**.
No se envían datos a ningún lado.
Sin servidores.
Sin tracking.
Sin logs.

---

## ⭐ Contribuir

Las pull requests son bienvenidas si:

* Mejoran la **interfaz o experiencia de usuario** del inspector
* Agregan soporte para **otros mecanismos de almacenamiento del navegador** (IndexedDB, Cache API, Service Workers)
* Mejoran la **visualización de JSON y la lectura de tokens**
* Añaden funciones útiles para **pentesting o debugging**
* Mantienen el proyecto **ligero, local y respetuoso con la privacidad**

Antes de enviar una PR:

1. Mantener el script **sin dependencias externas**
2. Preservar la **compatibilidad entre navegadores**
3. Evitar funciones que requieran **servidores externos o recolección de datos**

---

## ⚖️ DISCLAIMER

ClientVault es para:

* Desarrollo
* Investigación en seguridad
* Debugging
* Uso educativo

Usalo solo en sitios que sean tuyos o para los que tengas permiso.

---

Hecho con <3 por **URDev**.
