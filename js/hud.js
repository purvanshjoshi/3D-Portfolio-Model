// HUD System - Handles UI elements positioning and interactions
// Includes floating controls panel initialization

class HolographicHUD {
  constructor(scene, avatar) {
    this.scene = scene;
    this.avatar = avatar;
    this.hudElements = [];
    this.initializeControlsPanel();
  }

  initializeControlsPanel() {
    // Initialize floating position for controls panel
    const controlsPanel = document.querySelector('.controls-panel');
    if (controlsPanel) {
      this.setRandomFloatingPosition(controlsPanel);
    }
  }

  setRandomFloatingPosition(element) {
    // Set random starting position for the controls panel
    // Position it within safe boundaries (not too close to edges)
    const minX = 50;  // minimum X distance from left
    const maxX = window.innerWidth - 500;  // safe width for panel
    const minY = 50;  // minimum Y distance from top
    const maxY = window.innerHeight - 250;  // safe height for panel

    const randomX = Math.random() * (maxX - minX) + minX;
    const randomY = Math.random() * (maxY - minY) + minY;

    element.style.left = randomX + 'px';
    element.style.top = randomY + 'px';
  }

  animate(time) {
    // Simple HUD animation placeholder
  }
}

function createHUD(scene, avatar) {
  return new HolographicHUD(scene, avatar);
}

// Initialize controls panel on page load
document.addEventListener('DOMContentLoaded', function() {
  const controlsPanel = document.querySelector('.controls-panel');
  if (controlsPanel) {
    // Create a temporary HUD instance just for initialization
    const tempHUD = new HolographicHUD(null, null);
    tempHUD.setRandomFloatingPosition(controlsPanel);
  }
});
