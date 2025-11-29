// Simplified JARVIS-style Avatar placeholder
// This is a simple wrapper that doesn't require complex rendering

class HolographicAvatar {
  constructor(scene) {
    this.scene = scene;
    this.avatar = new THREE.Group();
    this.joints = [];
  }

  animate(time) {
    // Simple rotation animation
    this.avatar.rotation.y += 0.002;
  }
}

function createAvatar(scene) {
  return new HolographicAvatar(scene);
}
