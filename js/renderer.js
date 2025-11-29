// Renderer initialization
function initRenderer(container, width, height) {
  const rend = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  rend.setSize(width, height);
  rend.setPixelRatio(window.devicePixelRatio);
  rend.shadowMap.enabled = true;
  container.appendChild(rend.domElement);
  return rend;
}
