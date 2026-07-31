# Emma — Mathematics Graduate Portfolio

Portofolio website untuk Emma, seorang lulusan Matematika yang menampilkan profil akademik, pengalaman, penelitian, keterampilan, blog, dan formulir kontak. Dibangun dengan performa tinggi dan animasi modern.

## 🚀 Teknologi

| Teknologi | Kegunaan |
|-----------|----------|
| **Next.js 16** | React framework dengan App Router dan server actions |
| **React 19** | Library UI dengan concurrent features |
| **TypeScript** | Type safety & developer experience |
| **Tailwind CSS v4** | Utility-first styling |
| **GSAP** | Animasi & transisi halus |
| **lucide-react** | Ikon vektor ringan |
| **@tanstack/react-query** | Manajemen state server |
| **tw-animate-css** | Utility animasi Tailwind |

## 📋 Sections

- **Navbar** — Fixed bar dengan hamburger + sidebar mobile
- **Hero** — Grid 3 kolom: GPA stats, foto, kartu student count
- **About** — SVG clipPath image breakout effect
- **Services** — Kartu gelap dengan horizontal scroll di mobile
- **Experience & Research** — Accordion dengan render kondisional
- **Skills** — Programming, Data Visualization, Mathematics
- **Testimonials** — Kartu review mahasiswa
- **Blog** — Kartu artikel
- **Contact** — Form dengan skills marquee
- **Footer** — Copyright dan tautan

Animasi powered by **GSAP**.

---

## 🛠 Development

```bash
npm install        # Install dependencies
npm run dev        # Jalankan di http://localhost:3000
npm run build      # Build production
npm run lint       # Linting & check kode
```

---

## 🌐 Cara Deploy ke Vercel

### 1. Buat Akun GitHub

1. Buka https://github.com
2. Klik tombol **Sign up** (pojok kanan atas)
3. Masukkan **email**, buat **password**, dan pilih **username**
4. Verifikasi email — cek inbox/spam lalu klik link verifikasi dari GitHub
5. Ikuti panduan onboarding (bisa dilewati)

### 2. Buat Repository Baru di GitHub

1. Login ke GitHub, klik icon **+** (pojok kanan atas) → **New repository**
2. Isi **Repository name** dengan `portofolio-04`
3. Biarkan **Public** (jangan centang apapun)
4. Klik **Create repository**
5. Halaman akan muncul dengan perintah-perintah git — jangan tutup

### 3. Push Project ke GitHub

Buka terminal/CMD di folder project lalu jalankan:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username-anda/portofolio-04.git
git push -u origin main
```

> **Catatan:** Ganti `username-anda` dengan username GitHub asli kamu.

### 4. Deploy ke Vercel

1. Buka https://vercel.com
2. Klik **Continue with GitHub** untuk login
3. Klik **Add New…** → **Project**
4. Pilih repository `portofolio-04`
5. Settings framework akan terdeteksi otomatis sebagai **Next.js**
6. Klik **Deploy** — proses build akan berjalan
7. Selesai! URL live akan muncul seperti:
   ```
   https://portofolio-04.vercel.app
   ```

### 5. Custom Domain (Opsional)

1. Di dashboard Vercel, buka project → **Settings → Domains**
2. Masukkan domain kamu (contoh: `emma.my.id`)
3. Atur DNS di penyedia domain:
   - **Tipe:** CNAME
   - **Name:** `www` (atau `@`)
   - **Target:** `cname.vercel-dns.com`
4. Tunggu propagasi DNS (beberapa menit hingga 24 jam)

---

Dibuat dengan ❤️ menggunakan Next.js + Tailwind CSS.
