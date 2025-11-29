// Camera initialization
function initCamera(width, height) {
  const fov = 75;
  const aspect = width / height;
  const near = 0.1;
  const far = 1000;
  const cam = new THREE.PerspectiveCamera(fov, aspect, near, far);
  cam.position.set(0, 5, 8);
  cam.lookAt(new THREE.Vector3(0, 0, 0));
  return cam;
}
