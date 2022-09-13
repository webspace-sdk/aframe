var registerComponent = require('../core/component').registerComponent;

function stubComponent (name) {
  registerComponent(name, {
    init () {
      console.warn(`The ${name} aframe component no longer exists.`);
    }
  });
}

require('./animation');
require('./camera');
require('./cursor');
require('./geometry');
require('./generic-tracked-controller-controls');
stubComponent('./gltf-model');
stubComponent('./hand-controls');
require('./laser-controls');
require('./light');
require('./line');
require('./link');
require('./look-controls');
require('./material');
stubComponent('./obj-model');
require('./position');
require('./raycaster');
require('./rotation');
require('./scale');
require('./shadow');
require('./sound');
require('./visible');
require('./wasd-controls');

require('./scene/background');
require('./scene/debug');
require('./scene/device-orientation-permission-ui');
require('./scene/embedded');
require('./scene/inspector');
require('./scene/fog');
require('./scene/keyboard-shortcuts');
require('./scene/pool');
require('./scene/screenshot');
require('./scene/stats');
require('./scene/vr-mode-ui');
