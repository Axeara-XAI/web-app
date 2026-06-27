# Axara XAI — Landing Page & Biomedis Front-End

Axara XAI merupakan repositori kode front-end untuk layanan **Axara**, sebuah sistem analitik biomedis presisi berbasis *Explainable AI* (XAI) yang dirancang khusus untuk mendeteksi dini **Fetal Growth Restriction (FGR)** atau hambatan pertumbuhan janin dalam kandungan. Proyek ini dikembangkan guna mendukung riset dan inovasi medis berbasis data (Program Kreativitas Mahasiswa / PKM).

Aplikasi ini dibangun menggunakan teknologi modern untuk performa tinggi, aksesibilitas premium, serta tampilan visual yang canggih khas dashboard medis.

---

## 🚀 Teknologi Utama (Tech Stack)

Aplikasi ini menggunakan kombinasi pustaka dan kerangka kerja tingkat lanjut:

*   **Framework:** [Next.js v16.2.9](https://nextjs.org/) (App Router) & [React v19.2.4](https://react.dev/)
*   **Komponen UI:** [@fluentui/react-components v9](https://react.fluentui.dev/) (Microsoft Fluent UI) & [@fluentui/react-icons](https://react.fluentui.dev/?path=/docs/concepts-icons--page)
*   **Styling & Animasi:** [TailwindCSS v4](https://tailwindcss.com/) & Vanilla CSS
*   **Bahasa:** [TypeScript](https://www.typescriptlang.org/)

---

## 📂 Struktur File dan Folder

Organisasi kode terstruktur secara modular untuk skalabilitas pengembangan:

```text
landing-app/
├── public/                  # Aset statis (logo, ilustrasi seksi, foto tim)
├── src/
│   ├── app/                 # Halaman dan konfigurasi Next.js App Router
│   │   ├── methodology/     # Rute /methodology (Metodologi Evaluasi FGR)
│   │   ├── research-team/   # Rute /research-team (Tim Riset PKM)
│   │   ├── solution/        # Rute /solution (Teknologi deteksi Axara)
│   │   ├── globals.css      # CSS global & impor TailwindCSS v4
│   │   ├── layout.tsx       # Root layout aplikasi (Metadata & HTML dasar)
│   │   ├── page.tsx         # Beranda utama (Landing page Axara)
│   │   └── providers.tsx    # Penyedia Fluent Provider untuk tema
│   └── components/          # Komponen UI Reusable
│       ├── layout/          # Navbar, Footer, & ChatWidget (AI Assistant)
│       ├── sections/        # Blok seksi halaman spesifik
│       │   ├── home-page/   # Komponen visual halaman beranda
│       │   ├── methodology-pages/
│       │   ├── research-team-pages/
│       │   └── solution-pages/
│       └── theme/           # Konfigurasi skema warna Axara (Fluent UI Theme)
└── package.json             # Manajer dependensi proyek
```

---

## 🗺️ Peta Navigasi Halaman (Routes)

Situs ini membagi fitur-fitur informasinya ke dalam beberapa halaman utama:
1.  **Halaman Beranda (`/`):** Pengenalan umum layanan Axara, fitur utama, workflow deteksi, infrastruktur cloud Azure, dampak, kredibilitas riset, serta asisten AI melayang ([ChatWidget](file:///d:/My%20Project/pkm-site/landing-app/src/components/layout/ChatWidget.tsx)).
2.  **Halaman Solusi (`/solution`):** Penjelasan mendalam mengenai algoritma deteksi FGR, keunggulan diagnostik, dan integrasi workflow klinis.
3.  **Halaman Metodologi (`/methodology`):** Dokumentasi langkah ilmiah, variabel analisis medis, dan evaluasi matematis model XAI yang digunakan.
4.  **Halaman Tim Riset (`/research-team`):** Profil pengembang, peneliti, dan kolaborator program PKM Axara.

---

## 💻 Memulai Pengembangan Lokal

Ikuti langkah-langkah di bawah ini untuk menjalankan server pengembangan lokal:

### 1. Prasyarat
Pastikan Anda sudah menginstal **Node.js** (versi LTS sangat disarankan).

### 2. Instalasi Dependensi
Jalankan perintah berikut di direktori root proyek untuk menginstal seluruh pustaka yang diperlukan:
```bash
npm install
```

### 3. Menjalankan Dev Server
Jalankan server lokal Next.js dengan perintah:
```bash
npm run dev
```
Buka browser Anda dan akses **[http://localhost:3000](http://localhost:3000)**.

### 4. Build untuk Produksi
Untuk melakukan kompilasi kode siap produksi, jalankan:
```bash
npm run build
```
Hasil kompilasi siap saji dapat dijalankan secara lokal menggunakan `npm run start`.
