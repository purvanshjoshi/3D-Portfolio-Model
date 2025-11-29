// Scene setup and lighting

function setupLighting() {
  // Ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  // Directional light
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(5, 10, 7);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 2048;
  directionalLight.shadow.mapSize.height = 2048;
  scene.add(directionalLight);

  // Point light for accent
  const pointLight = new THREE.PointLight(0x6699ff, 0.5);
  pointLight.position.set(-5, 5, 5);
  scene.add(pointLight);
}

function createPortfolioModel() {
  // Create a simple portfolio representation using geometric shapes
  const group = new THREE.Group();

  // Create central cube
  const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
  const cubeMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff88, emissive: 0x004d2d });
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.castShadow = true;
  group.add(cube);

  // Create rotating spheres around the cube
  const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
  const sphereMaterial = new THREE.MeshPhongMaterial({ color: 0xff6699, emissive: 0x4d001a });
  
  for (let i = 0; i < 3; i++) {
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    const angle = (i / 3) * Math.PI * 2;
    sphere.position.set(Math.cos(angle) * 4, 0, Math.sin(angle) * 4);
    sphere.castShadow = true;
    group.add(sphere);
  }

  // Create floor/platform
  const planeGeometry = new THREE.PlaneGeometry(20, 20);
  const planeMaterial = new THREE.MeshPhongMaterial({ color: 0x1a1a2e });
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = -Math.PI / 2;
  plane.position.y = -3;
  plane.receiveShadow = true;
  group.add(plane);

  scene.add(group);
  return group;
}

function resetView() {
  // Reset camera to initial position
  camera.position.set(0, 5, 8);
  camera.lookAt(scene.position);
}
