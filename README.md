<h1 align="center">🔐 clientvault</h1>
<h3 align="center">ClientVault is a lightweight, in-page web security tool that lets you inspect, analyze, and manage all client-side storage used by a website — including cookies, localStorage, sessionStorage, and more. Built for developers, pentesters, and bug bounty hunters.</h3>

---

## 📋 QUICK START

You can either paste **ClientVault** directly into DevTools
(**F12 → Console → Ctrl+V → Enter**)
**OR** install it as a persistent userscript so it runs automatically on every site.

The recommended way is using **Tampermonkey**, so you don’t have to keep pasting the script every time.

### Using Tampermonkey:

1. **Copy the ClientVault script**
2. **Open Tampermonkey**
3. Click **Create new script** (`+`)
4. **Paste the code**
5. **Save** (Ctrl+S)
6. **Enable the script**
7. **Reload any page** (F5)
8. **Done!** ClientVault UI appears automatically

---

## 🚀 INSTALLATION INSTRUCTIONS

### Step-by-Step

### **1. Install Tampermonkey**

* Chrome
  [https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
* Firefox
  [https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)

---

### **2. Create New Script**

* Click the **Tampermonkey icon**
* Click **Create a new script**
* Delete all default content

---

### **3. Paste this header**

```javascript
// ==UserScript==
// @name         ClientVault – Storage & Cookie Inspector
// @namespace    https://urdev.carrd.co/
// @version      1.0
// @description  Inspect, analyze and manage cookies, localStorage and sessionStorage in real time
// @author       URDev
// @match        *://*/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

// PASTE THE ENTIRE ClientVault SCRIPT BELOW THIS LINE
```

Paste your full ClientVault code under that.

---

### **4. Save & Enable**

* Press **Ctrl+S**
* Make sure the toggle is **ON**
* Reload any webpage

---

## 🎯 HOW TO USE

Once installed:

1. **Open any website**
2. ClientVault UI appears in the **top-right corner**
3. Use the sidebar to switch between:
   * **Local Vault** (localStorage)
     <img width="801" height="580" alt="image" src="https://github.com/user-attachments/assets/68386be5-fe0c-4edf-b21e-689eda34bc7d" />

   * **Session Vault** (sessionStorage)
     <img width="809" height="582" alt="image" src="https://github.com/user-attachments/assets/307bfaa6-c379-4fc1-9715-dfdd29c6ff22" />

   * **Cookie Jar** (cookies)
     <img width="808" height="582" alt="image" src="https://github.com/user-attachments/assets/985f73df-9147-4089-82ef-d94e774ada57" />

4. Click **👁 View** to inspect any value
   (JSON is auto-formatted and highlighted)
   
    <img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/e6713f82-7952-4dc7-9049-8cf9c6dbf965" />

5. Click **🗑️** to delete a specific entry
   
   <img width="435" height="174" alt="image" src="https://github.com/user-attachments/assets/7cc5f6cf-69ec-4054-944b-9e98fe3eee8e" />

6. Click **🗑️ Clear All** to wipe everything and kill the session
   
   <img width="428" height="304" alt="image" src="https://github.com/user-attachments/assets/4f2b5237-608b-461d-9f71-6e90ede1ad16" />

   <img width="431" height="182" alt="image" src="https://github.com/user-attachments/assets/7348c93f-c4d3-4029-aa97-045adf8f1c35" />


---

## 🔍 WHAT YOU CAN SEE

ClientVault lets you inspect:

* Cookies accessible by JavaScript
* localStorage keys & values
* sessionStorage keys & values
* Storage size per item
* Total storage usage per site

Perfect for:

* JWTs
* Session IDs
* Feature flags
* Tracking tokens
* App state objects

---

## 🧠 SMART JSON VIEWER

ClientVault automatically detects JSON values and:

* Formats them with indentation
* Applies syntax highlighting
* Makes large tokens readable (JWTs, auth objects, etc.)

If the value is not JSON, it is shown as raw text.

---

## ⚙️ KEYBOARD SHORTCUTS

| Shortcut           | Action                  |
| ------------------ | ----------------------- |
| `ESC`              | Close the detail viewer |
| `Ctrl + R`         | Refresh current vault   |
| `Ctrl + Shift + X` | Close ClientVault       |

---

## 🔄 LIVE REFRESH

ClientVault automatically refreshes the active vault every **5 seconds**, so:

* Tokens changing
* Sessions expiring
* Cookies updating

…are reflected in real time.

---

## ⚠️ LIMITATIONS

* **HttpOnly cookies cannot be accessed** (browser security)
* Some data may live in:

  * IndexedDB
  * Cache API
  * Service Workers
    (planned for future versions)

---

## 🛣️ ROADMAP

Planned features:

* 🔍 IndexedDB inspector
* 🗃️ Cache & Service Worker storage
* 🔐 Automatic detection of auth tokens
* 📤 Export & copy storage snapshots
* 📊 Session & token analysis
* 🧪 Advanced JSON tree viewer

---

## 🛡️ PRIVACY

ClientVault runs **entirely inside your browser**.
No data is sent anywhere.
No servers.
No tracking.
No logging.

---

## ⚖️ DISCLAIMER

ClientVault is for:

* Development
* Security research
* Debugging
* Educational use

Only use it on sites you own or have permission to test.

---

Made with <3 by **URDev**.
