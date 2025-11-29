hud.js// JARVIS HUD System - Floating UI elements and data rings

class HolographicHUD {
  constructor(scene, avatar) {
    this.scene = scene;
    this.avatar = avatar;
    this.hudElements = [];
    this.dataRings = [];
    this.createHUDCircles();
    this.createDataRings();
  }

  createHUDCircles() {
    // Create glowing circles around avatar joints
    const hudMaterial = new THREE.LineBasicMaterial({ color: 0x00FFFF, linewidth: 1 });
    const jointPositions = this.avatar.joints || [
      { position: new THREE.Vector3(0, 1.6, 0) },
      { position: new THREE.Vector3(0, 0.8, 0) },
      { position: new THREE.Vector3(-0.35, 1.0, 0) },
      { position: new THREE.Vector3(0.35, 1.0, 0) }
    ];

    jointPositions.forEach((joint, idx) => {
      const circleGeo = new THREE.CircleGeometry(0.25, 32);
      const circle = new THREE.LineSegments(
        new THREE.EdgesGeometry(circleGeo),
        hudMaterial
      );
      circle.position.copy(joint.position);
      circle.rotation.x = Math.random() * Math.PI;
      circle.rotation.y = Math.random() * Math.PI;
      this.scene.add(circle);
      this.hudElements.push({ object: circle, baseRotation: circle.rotation.clone() });
    });
  }

  createDataRings() {
    // Create rotating data rings around the avatar
    const ringMaterial = new THREE.LineBasicMaterial({ color: 0x0099FF, linewidth: 1 });
    for (let i = 0; i < 3; i++) {
      const ringGeo = new THREE.TorusGeometry(0.5 + i * 0.3, 0.02, 16, 32);
      const ring = new THREE.LineSegments(
        new THREE.EdgesGeometry(ringGeo),
        ringMaterial
      );
      ring.position.y = 0.8;
      ring.rotation.x = (i * Math.PI) / 3;
      this.scene.add(ring);
      this.dataRings.push({ object: ring, speed: 0.001 * (i + 1), axis: i % 3 });
    }
  }

  animate(time) {
    // Rotate HUD circles
    this.hudElements.forEach((elem, idx) => {
      elem.object.rotation.x += 0.003;
      elem.object.rotation.z += 0.002 * (idx + 1);
    });

    // Rotate data rings
    this.dataRings.forEach((ring, idx) => {
      if (ring.axis === 0) ring.object.rotation.x += ring.speed;
      if (ring.axis === 1) ring.object.rotation.y += ring.speed;
      if (ring.axis === 2) ring.object.rotation.z += ring.speed;
    });
  }
}

function createHUD(scene, avatar) {
  return new HolographicHUD(scene, avatar);
}
