# Testimonials Grid Section - Frontend Mentor Challenge

![Project Preview](preview.avif)

## 📝 Description

This project is a solution to the **Testimonials Grid Section** challenge from [Frontend Mentor](https://www.frontendmentor.io/).  
The goal was to build a responsive grid layout displaying graduate testimonials, focusing on:

- **HTML5** & **CSS3** (using Tailwind CSS)
- **React.js** (with Vite as build tool)
- Full responsiveness (Mobile, Tablet, Desktop)
- Performance and accessibility optimization

## 🔍 Project Preview

- **[Live Demo](https://your-deployed-url.com)** (if deployed)
- [Original Frontend Mentor Challenge](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7)

## 🛠️ Technologies Used

- **React.js** - JavaScript library for building UIs
- **Vite** - Fast build tool for web applications
- **Tailwind CSS** - Utility-first CSS framework
- **HTML5 & CSS3** - Core markup and styling
- **Git** - Version control

## 📂 Project Structure
```text
testimonials-grid-section/
├── public/ # Static files
│ ├── images/ # All image assets
│ └── vite.svg # Vite icon
├── src/
│ ├── components/ # React components
│ │ └── Card.jsx # Testimonial card component
│ ├── App.jsx # Main component
│ ├── App.css # Custom styles
│ └── main.jsx # Application entry point
├── index.html # Main HTML file
├── README.md # This file
└── package.json # Project config and dependencies
```


## 🚀 Getting Started

1. **Clone the repository**:
```bash
git clone https://abdulrahmanfrontend.github.io/testimonials-grid-lab/
cd testimonials-grid-lab
```

2. Install dependencies:
```bash
npm install
```
3. Run development server:
```bash
npm run dev
```
Open your browser at http://localhost:5173.

4. Build for production:
```bash
npm run build
```

## 🎨 Design
Color Scheme
| Type	| Color (HSL) |
|-------|-------------|
| Primary (Daniel)	| hsl(263, 55%, 52%) |
| Primary (Jonathan)	| hsl(217, 19%, 35%) |
| Primary (Patrick)	| hsl(219, 29%, 14%) |
| Neutral (White)	| hsl(0, 0%, 100%) |
| Neutral (Light Gray)	| hsl(0, 0%, 81%) |
| Neutral (Gray Blue)	| hsl(217, 19%, 35%) |

Typography
- Barlow Semi Condensed (from Google Fonts):
    - Weights: 500 (Medium), 600 (Semi-bold)

## 📱 Responsiveness
- Mobile: Single column layout
- Tablet: 3-column grid
- Desktop: 4-column grid with featured card spans

## 📜 Key Features
- Implemented lazy loading for images (loading="lazy")
- Enhanced accessibility with role="article" and aria-labelledby
- Optimized contrast ratios for better Lighthouse scores
- Responsive grid layout using CSS Grid

## 🤝 Contributing
Found a bug or have suggestions? Please open an Issue or submit a Pull Request.

## 📜 License
This project is licensed under the [MIT](LICENSE).
