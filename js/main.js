// Main entry point for the 3D Portfolio Model
// Initialize the scene, camera, and renderer

let scene, camera, renderer, container;
let portfolioModel;
let isAnimating = true;
let isControlsActive = true;
let holographicAvatar;
let holographicHUD;

// Initialize the application
function init() {
  // Initialize scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a0e27);
  
  // Get canvas container
  container = document.getElementById('canvas-container');
  if (!container) {
    console.error('Canvas container not found');
    return;
  }
  
  // Initialize camera
  camera = initCamera(window.innerWidth, window.innerHeight);
  
  // Initialize renderer
  renderer = initRenderer(container, window.innerWidth, window.innerHeight);
  
  // Initialize lights
  setupLighting();
  
  // Create the portfolio model
  createPortfolioModel();
  
  // Setup controls
  setupControls();
  
  // Setup animations
  setupAnimations();

    // Initialize holographic avatar and HUD
  holographicAvatar = createAvatar(scene);
  holographicHUD = createHUD(scene, holographicAvatar);
  
  // Handle window resize
  window.addEventListener('resize', onWindowResize);
  
  // Start animation loop
  animate();
}

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  
  if (isAnimating) {
    updateAnimations();
      
  // Animate holographic avatar and HUD
  if (holographicAvatar) holographicAvatar.animate(Date.now());
  if (holographicHUD) holographicHUD.animate(Date.now());
  }
  
  renderer.render(scene, camera);
}

// Handle window resize
function onWindowResize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  
  renderer.setSize(width, height);
}

// Keyboard controls
window.addEventListener('keydown', (event) => {
  if (event.key === 'R' || event.key === 'r') {
    resetView();
  } else if (event.key === ' ') {
    event.preventDefault();
    isAnimating = !isAnimating;
  }
});

// Initialize the app when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
