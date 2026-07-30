# Emma — Mathematics Graduate Portfolio

Portfolio website built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## Sections

- **Navbar** — Fixed bar with hamburger + sidebar on mobile
- **Hero** — 3-column grid: GPA stats, photo, student count card
- **About** — SVG `clipPath` image breakout effect
- **Services** — Dark cards with horizontal scroll on mobile
- **Experience & Research** — Accordion with conditional render
- **Skills** — Programming, Data Visualization, Mathematics
- **Testimonials** — Student review cards
- **Blog** — Article post cards
- **Contact** — Form with skills marquee
- **Footer** — Copyright and links

Animations powered by **GSAP**.

---

## Deploy to Vercel

### 1. Buat Akun GitHub

1. Buka https://github.com
2. Klik **Sign up** dan ikuti pendaftaran (email, password, username)
3. Verifikasi email dari GitHub

### 2. Buat Repository GitHub

```bash
# Di terminal, masuk ke folder project
cd D:\BUSINNES\contoh\Portofolio\portofolio-04

# Init git
git init

# Tambah semua file
git add .

# Commit pertama
git commit -m "Initial commit"

# Buat repo di GitHub (via website) lalu hubungkan
git remote add origin https://github.com/username/portofolio-04.git
git push -u origin main
```

### 3. Deploy ke Vercel

1. Buka https://vercel.com
2. Login dengan akun GitHub
3. Klik **Add New → Project**
4. Pilih repository `portofolio-04`
5. Biarkan semua default — Vercel auto-detect Next.js
6. Klik **Deploy**

Setelah selesai, kamu akan mendapat URL seperti `https://portofolio-04.vercel.app`

### 4. Custom Domain (opsional)

1. Di dashboard Vercel, buka project → **Settings → Domains**
2. Masukkan domain kamu (contoh: `emma.my.id`)
3. Ikuti petunjuk untuk mengatur DNS (biasanya tambah CNAME ke `cname.vercel-dns.com`)

---

## Development

```bash
npm install      # Install dependencies
npm run dev      # Jalankan di http://localhost:3000
npm run build    # Build production
npm run lint     # Linting
```

## Tech Stack

- Next.js 16.2.12
- React 19.2.4
- TypeScript
- Tailwind CSS v4
- GSAP (animasi)
- lucide-react (icons)
- @tanstack/react-query (state)
- tw-animate-css (animasi Tailwind)
