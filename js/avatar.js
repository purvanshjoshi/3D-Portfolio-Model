// JARVIS-style Holographic Avatar System
// Creates a futuristic wireframe avatar with glowing neon effects

class HolographicAvatar {
  constructor(scene) {
    this.scene = scene;
    this.avatar = new THREE.Group();
    this.bodyParts = [];
    this.joints = [];
    this.neonMaterial = new THREE.LineBasicMaterial({ color: 0x00FFFF, linewidth: 2, fog: false });
    this.glowMaterial = new THREE.MeshBasicMaterial({ color: 0x00FFFF, emissive: 0x00FFFF, emissiveIntensity: 1.5 });
    this.createWireframeAvatar();
    this.scene.add(this.avatar);
  }

  createWireframeAvatar() {
    // Head sphere with wireframe
    const headGeo = new THREE.SphereGeometry(0.3, 32, 32);
    const head = new THREE.Mesh(headGeo, this.glowMaterial);
    head.position.y = 1.6;
    const headWire = new THREE.LineSegments(
      headGeo,
      this.neonMaterial
    );
    headWire.position.copy(head.position);
    this.avatar.add(head);
    this.avatar.add(headWire);
    this.joints.push({ position: head.position, radius: 0.3 });

    // Torso - central body
    const torsoGeo = new THREE.BoxGeometry(0.4, 0.8, 0.2);
    const torso = new THREE.Mesh(torsoGeo, this.glowMaterial);
    torso.position.y = 0.8;
    const torsoWire = new THREE.LineSegments(
      new THREE.EdgesGeometry(torsoGeo),
      this.neonMaterial
    );
    torsoWire.position.copy(torso.position);
    this.avatar.add(torso);
    this.avatar.add(torsoWire);
    this.joints.push({ position: torso.position, radius: 0.4 });

    // Arms
    this.createLimb(0.15, 0.7, new THREE.Vector3(-0.35, 1.0, 0));
    this.createLimb(0.15, 0.7, new THREE.Vector3(0.35, 1.0, 0));

    // Legs
    this.createLimb(0.12, 0.8, new THREE.Vector3(-0.15, 0, 0));
    this.createLimb(0.12, 0.8, new THREE.Vector3(0.15, 0, 0));
  }

  createLimb(radius, length, position) {
    const geo = new THREE.CylinderGeometry(radius, radius, length, 16);
    const limb = new THREE.Mesh(geo, this.glowMaterial);
    limb.position.copy(position);
    const wire = new THREE.LineSegments(
      new THREE.EdgesGeometry(geo),
      this.neonMaterial
    );
    wire.position.copy(position);
    this.avatar.add(limb);
    this.avatar.add(wire);
    this.joints.push({ position: position, radius: radius * 2 });
  }

  animate(time) {
    this.avatar.rotation.y += 0.002;
    this.avatar.rotation.x = Math.sin(time * 0.0005) * 0.1;
    
    // Pulsing glow effect
    const pulse = 1 + Math.sin(time * 0.005) * 0.3;
    this.glowMaterial.emissiveIntensity = pulse;
  }
}

function createAvatar(scene) {
  return new HolographicAvatar(scene);
}
