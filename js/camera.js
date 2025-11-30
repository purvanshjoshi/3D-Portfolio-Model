// Camera initialization
function initCamera(width, height) {
  const fov = 75;
  const aspect = width / height;
  const near = 0.1;
  const far = 1000;
  const cam = new THREE.PerspectiveCamera(fov, aspect, near, far);
  cam.position.set(0, 3, 10);
  return cam;
}
