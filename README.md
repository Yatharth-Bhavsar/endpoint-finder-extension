# 🔍 Endpoint Finder Chrome Extension

A lightweight Chrome Extension that **automatically detects and lists all discovered URL/API endpoints** from the currently opened website. Perfect for reconnaissance, bug bounty hunting, or just exploring a site's hidden corners.

---

## 📸 Demo

<img width="1919" height="1014" alt="image" src="https://github.com/user-attachments/assets/22c818dd-54f4-4786-9ee3-ace8707a9e30" />

---

## 🛠️ Tech Stack

| Technology | Used For |
|------------|----------|
| ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white) | Popup and UI |
| ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&logoColor=white) | Styling the popup |
| ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Parsing and logic |
| ![Chrome Extension](https://img.shields.io/badge/-Chrome_Extension-4285F4?style=flat&logo=google-chrome&logoColor=white) | Browser integration |

---

## 🚀 Features

-  Automatically detects all URLs (internal, external, APIs) loaded on the site.
-  Clickable URL list that opens in a new tab.
-  Real-time search bar to filter endpoints.
-  Sleek and user-friendly popup interface.
-  No external dependencies or permissions required.

---

## 🧪 How It Works

1. When you open a new tab and navigate to any site, the extension parses the current DOM.
2. It collects:
   - `<a href>`
   - `<script src>`
   - `<link href>`
   - XHR/fetch requests (where possible)
3. It filters, de-duplicates, and shows a neat list in the popup.
4. Click any URL to open it in a **new tab**.
5. Use the search bar to quickly find endpoints by keywords like `login`, `api`, `user`, etc.

---

## 📦 Installation & Usage

### 👉 For Developers

1. Clone or download this repo and unzip it : 
`git clone https://github.com/Yatharth-Bhavsar/endpoint-finder-extension.git`
 
2. Open Chrome and go to: 
`chrome://extensions/`
   
3. Enable **Developer Mode** (toggle in the top-right).

4. Click **Load unpacked** and select the unzipped folder.

5. Pin the extension. Navigate to any website and click the icon!

---

## 🙋🏻‍♂️ Contribute

You're welcome to fork this repo, suggest improvements, or add features like:
- Exporting URLs as `.txt` or `.json`
- Integrating with tools like OWASP ZAP
- Supporting more dynamic requests (XHR, WebSocket, etc.)

---

## 🪪 License

This project currently does not use any license. Feel free to modify for personal or educational use. For commercial/redistribution, please seek consent.

---

## ✉️ Contact

Built with ❤️ by [Yatharth Bhavsar](https://github.com/Yatharth-Bhavsar).  
Feel free to connect or raise an issue for any help!


