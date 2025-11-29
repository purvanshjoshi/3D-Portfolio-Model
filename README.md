# 3D Portfolio Model

> Interactive 3D visualization of my portfolio website using Three.js. This project renders my web page in a 3D environment with smooth animations and interactive controls.

## ✨ Features

- **3D Rendering**: Uses Three.js to render 3D scenes and geometries
- **Interactive Controls**: Mouse and keyboard controls for rotation and zoom
- **Smooth Animations**: CSS-in-JS animations and GSAP for smooth transitions
- **Responsive Design**: Works on desktop browsers
- **WebGL Optimization**: Efficient rendering with proper shader usage
- **Portfolio Integration**: Displays key portfolio sections in 3D

## 🚀 Tech Stack

- **Frontend Framework**: HTML5, CSS3, JavaScript (Vanilla)
- **3D Library**: [Three.js](https://threejs.org/) v140+
- **Animation**: GSAP (GreenSock Animation Platform)
- **Build Tool**: Webpack/Vite (optional)
- **Package Manager**: npm

## 📁 Project Structure

```
3D-Portfolio-Model/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── scene.js
│   ├── camera.js
│   ├── renderer.js
│   ├── models.js
│   ├── animations.js
│   └── controls.js
├── assets/
│   ├── models/
│   ├── textures/
│   └── images/
├── package.json
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 14+ and npm
- A modern web browser with WebGL support

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/purvanshjoshi/3D-Portfolio-Model.git
   cd 3D-Portfolio-Model
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The application will open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎮 Usage

### Controls
- **Mouse Drag**: Rotate the 3D scene
- **Mouse Wheel**: Zoom in/out
- **Arrow Keys**: Navigate through different portfolio sections
- **SPACE**: Toggle animation mode
- **R**: Reset to default view

## 📦 Dependencies

```json
{
  "dependencies": {
    "three": "^r140",
    "gsap": "^3.12.0"
  },
  "devDependencies": {
    "webpack": "^5.0.0",
    "webpack-cli": "^4.0.0"
  }
}
```

## 🎨 Features in Development

- [ ] Add more complex 3D models
- [ ] Implement particle systems
- [ ] Add audio visualization
- [ ] Mobile touch controls
- [ ] Performance optimizations
- [ ] Multiple scene environments

## 📚 Resources

- [Three.js Documentation](https://threejs.org/docs/)
- [GSAP Documentation](https://greensock.com/gsap/)
- [WebGL Best Practices](https://www.khronos.org/webgl/)

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Purvansh Joshi**
- Portfolio: [purvanshjoshi.tech](https://purvanshjoshi.tech)
- GitHub: [@purvanshjoshi](https://github.com/purvanshjoshi)
- LinkedIn: [purvansh-joshi](https://linkedin.com/in/purvansh-joshi)

## ⭐ Show Your Support

If you find this project interesting, please consider giving it a star! Your support motivates me to continue improving and adding new features.

---

**Last Updated**: November 2025
