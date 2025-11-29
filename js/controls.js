// Control system
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };

function setupControls() {
  // Mouse controls for rotation
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mousedown', onMouseDown);
  document.addEventListener('mouseup', onMouseUp);
  
  // Scroll controls for zoom
  document.addEventListener('wheel', onMouseWheel, false);
}

function onMouseDown(e) {
  isDragging = true;
  previousMousePosition = { x: e.clientX, y: e.clientY };
}

function onMouseUp(e) {
  isDragging = false;
}

function onMouseMove(e) {
  if (isDragging && scene.children.length > 0) {
    const deltaX = e.clientX - previousMousePosition.x;
    const deltaY = e.clientY - previousMousePosition.y;
    scene.rotation.y += deltaX * 0.01;
    scene.rotation.x += deltaY * 0.01;
    previousMousePosition = { x: e.clientX, y: e.clientY };
  }
}

function onMouseWheel(e) {
  e.preventDefault();
  if (e.deltaY > 0) {
    camera.position.z += 0.5;
  } else {
    camera.position.z -= 0.5;
  }
}
