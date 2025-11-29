// 3D Human Avatar System
// Creates a stylized humanoid figure with basic body structure

class HolographicAvatar {
  constructor(scene) {
    this.scene = scene;
    this.avatar = new THREE.Group();
    this.joints = {};
    this.buildHumanAvatar();
    this.scene.add(this.avatar);
  }

  buildHumanAvatar() {
    // Materials
    const skinMaterial = new THREE.MeshPhongMaterial({ color: 0xffdbac });
    const clothMaterial = new THREE.MeshPhongMaterial({ color: 0x2a2a4a });
    const hairMaterial = new THREE.MeshPhongMaterial({ color: 0x1a1a2e });

    // Position avatar
    this.avatar.position.set(3, 0.5, 0);

    // Head
    const headGeometry = new THREE.SphereGeometry(0.3, 32, 32);
    const head = new THREE.Mesh(headGeometry, skinMaterial);
    head.position.y = 2;
    head.castShadow = true;
    this.avatar.add(head);
    this.joints.head = head;

    // Hair/Top of head
    const hairGeometry = new THREE.SphereGeometry(0.32, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.5);
    const hair = new THREE.Mesh(hairGeometry, hairMaterial);
    hair.position.y = 2.25;
    hair.castShadow = true;
    this.avatar.add(hair);

    // Eyes
    const eyeGeometry = new THREE.SphereGeometry(0.08, 16, 16);
    const eyeMaterial = new THREE.MeshPhongMaterial({ color: 0x1a1a1a });
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.1, 2.1, 0.25);
    this.avatar.add(leftEye);
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.1, 2.1, 0.25);
    this.avatar.add(rightEye);

    // Torso
    const torsoGeometry = new THREE.BoxGeometry(0.4, 0.8, 0.25);
    const torso = new THREE.Mesh(torsoGeometry, clothMaterial);
    torso.position.y = 1.2;
    torso.castShadow = true;
    this.avatar.add(torso);
    this.joints.torso = torso;

    // Left Arm
    const armGeometry = new THREE.BoxGeometry(0.15, 0.7, 0.15);
    const leftArm = new THREE.Mesh(armGeometry, skinMaterial);
    leftArm.position.set(-0.35, 1.4, 0);
    leftArm.castShadow = true;
    this.avatar.add(leftArm);
    this.joints.leftArm = leftArm;

    // Right Arm
    const rightArm = new THREE.Mesh(armGeometry, skinMaterial);
    rightArm.position.set(0.35, 1.4, 0);
    rightArm.castShadow = true;
    this.avatar.add(rightArm);
    this.joints.rightArm = rightArm;

    // Left Hand
    const handGeometry = new THREE.SphereGeometry(0.08, 16, 16);
    const leftHand = new THREE.Mesh(handGeometry, skinMaterial);
    leftHand.position.set(-0.35, 0.8, 0);
    leftHand.castShadow = true;
    this.avatar.add(leftHand);

    // Right Hand
    const rightHand = new THREE.Mesh(handGeometry, skinMaterial);
    rightHand.position.set(0.35, 0.8, 0);
    rightHand.castShadow = true;
    this.avatar.add(rightHand);

    // Left Leg
    const legGeometry = new THREE.BoxGeometry(0.15, 0.7, 0.15);
    const leftLeg = new THREE.Mesh(legGeometry, clothMaterial);
    leftLeg.position.set(-0.15, 0.3, 0);
    leftLeg.castShadow = true;
    this.avatar.add(leftLeg);
    this.joints.leftLeg = leftLeg;

    // Right Leg
    const rightLeg = new THREE.Mesh(legGeometry, clothMaterial);
    rightLeg.position.set(0.15, 0.3, 0);
    rightLeg.castShadow = true;
    this.avatar.add(rightLeg);
    this.joints.rightLeg = rightLeg;

    // Left Foot
    const footGeometry = new THREE.BoxGeometry(0.15, 0.15, 0.2);
    const footMaterial = new THREE.MeshPhongMaterial({ color: 0x1a1a1a });
    const leftFoot = new THREE.Mesh(footGeometry, footMaterial);
    leftFoot.position.set(-0.15, -0.2, 0.05);
    leftFoot.castShadow = true;
    this.avatar.add(leftFoot);

    // Right Foot
    const rightFoot = new THREE.Mesh(footGeometry, footMaterial);
    rightFoot.position.set(0.15, -0.2, 0.05);
    rightFoot.castShadow = true;
    this.avatar.add(rightFoot);
  }

  animate(time) {
    const t = time * 0.001;
    
    // Walking animation
    const walkCycle = Math.sin(t * 2) * 0.2;
    if (this.joints.leftLeg) {
      this.joints.leftLeg.rotation.x = Math.sin(t * 2) * 0.3;
    }
    if (this.joints.rightLeg) {
      this.joints.rightLeg.rotation.x = Math.sin(t * 2 + Math.PI) * 0.3;
    }

    // Arm swing animation
    if (this.joints.leftArm) {
      this.joints.leftArm.rotation.x = Math.sin(t * 2 + Math.PI) * 0.25;
    }
    if (this.joints.rightArm) {
      this.joints.rightArm.rotation.x = Math.sin(t * 2) * 0.25;
    }

    // Head rotation
    if (this.joints.head) {
      this.joints.head.rotation.y = Math.sin(t * 0.5) * 0.2;
    }

    // Torso sway
    if (this.joints.torso) {
      this.joints.torso.rotation.x = Math.sin(t * 2) * 0.1;
    }

    // Continuous rotation
    this.avatar.rotation.y += 0.002;
  }
}

function createAvatar(scene) {
  return new HolographicAvatar(scene);
}
