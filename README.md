# 🏄 Surfing in Canggu

Marketing website for Surfing in Canggu.

Built with:

* **Next.js 16** (App Router)
* **React 19**
* **TypeScript**
* **Tailwind CSS**
* **pnpm**

---

## 🚀 Development

Install dependencies:

```bash
pnpm install
```

Run development server:

```bash
pnpm dev
```

Open:

```
http://localhost:3000
```

---

## 🏗 Production Build

Build the project:

```bash
pnpm build
```

Start production server:

```bash
pnpm start
```

---

## ⚙️ Architecture Notes

* Fully **static site (SSG)**
* No backend
* No database
* No authentication
* No payment system
* External redirect to **Clipdays**

This project is intentionally lightweight and optimized for fast static delivery.

---

## 📦 Project Structure

```
app/            → App Router pages & layout
components/     → UI sections & reusable components
lib/            → Static data & utilities
public/         → Static assets (images, favicon, etc.)
```

---

## 🚀 Deployment

Recommended platform:

**Vercel**

The project builds as a fully static site and is optimized for CDN deployment.

