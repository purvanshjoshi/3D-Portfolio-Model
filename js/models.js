// Model management
// This file manages model loading and manipulation

let models = [];

function loadModels() {
  // Models are created in scene.js
}

function updateModels(delta) {
  // Update model states
  models.forEach(model => {
    if (model.animation) {
      model.rotation.y += delta * 0.5;
    }
  });
}
