# Marco Montecillo — React Portfolio

A personal portfolio website built with React and Vite, showcasing projects, skills, and work experience as a Full Stack Developer based in the Philippines.

## Live Demo

> Coming soon / deploy link here

---

## Features

- **Dark / Light Mode** — Theme toggle with OS preference detection and localStorage persistence
- **Scroll Reveal Animations** — Intersection Observer-based fade-in animations with staggered delays
- **Responsive Design** — Mobile-first layout with hamburger menu and adaptive grid
- **Dynamic Experience Counter** — Automatically calculates and formats years of experience from a start date
- **Contact Form** — Sends messages via a PHP mailer backend with loading, success, and error states
- **Downloadable CV** — One-click CV download with a toast notification
- **Data-Driven Content** — All site content (projects, skills, experience) managed from a single `constants.js` file

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Introduction, profile picture, CTA buttons, and CV download |
| **About** | Personal bio, dynamic stats (experience, projects, systems), and tech highlights |
| **Skills** | Frontend, Backend, and Tools & Others — each with FontAwesome icons |
| **Projects** | Project cards with tech tags, live demo links, and GitHub links |
| **Experience** | Vertical timeline of work history with role details and accomplishments |
| **Contact** | Contact info, social links, and a functional contact form |
| **Footer** | Navigation links and dynamic copyright year |

---

## Tech Stack

- **React** 18.2.0
- **Vite** 5.0.0
- **CSS Modules** — Scoped component styling
- **FontAwesome** — Icons via CDN
- **PHP** — Contact form backend (`/mailer.php`)

---

## Project Structure

```
portfolio/
├── public/
│   ├── img/               # Project and profile images
│   └── files/             # CV PDF
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Projects/
│   │   ├── Experience/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── hooks/
│   │   ├── useTheme.js          # Dark/light mode management
│   │   ├── useScrollReveal.js   # Intersection Observer animations
│   │   └── useExperienceYears.js # Dynamic experience calculation
│   ├── utils/
│   │   └── constants.js         # All site content and configuration
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

---

## Getting Started

### Prerequisites

- Node.js v16 or higher
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/MFrncM/React-Portfolio.git
cd React-Portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The dev server runs on `http://localhost:3000` and opens automatically.

### Build for Production

```bash
npm run build
```

Output is in the `dist/` folder.

---

## Customization

All site content is centralized in [`src/utils/constants.js`](src/utils/constants.js). To personalize the portfolio, update:

- `SITE` — Name, title, tagline, email, phone, location, social links, CV path, and career start date
- `NAV_LINKS` — Navigation menu items
- `SKILLS` — Skill categories and individual skills
- `PROJECTS` — Project cards (title, description, tech stack, links, status)
- `EXPERIENCE` — Work history entries

---

## Custom Hooks

### `useTheme`
Manages dark/light theme. Reads OS preference on first load, persists to `localStorage`, and sets `data-theme` on the root element for CSS variable switching.

### `useScrollReveal`
Attaches an `IntersectionObserver` to all `.reveal` elements. Adds a `.visible` class when an element enters the viewport (12% threshold), triggering CSS animations. Unobserves after the first trigger.

### `useExperienceYears`
Calculates the time elapsed since `careerStartDate` in `constants.js` and returns a human-readable label (e.g., `"10mo"`, `"1+"`, `"1.5+"`). Updates daily.

---

## Contact

**Marco Montecillo**
- GitHub: [@MFrncM](https://github.com/MFrncM)
- Portfolio: *(this site)*
