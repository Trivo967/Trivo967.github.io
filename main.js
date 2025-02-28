javascript
Copy
// ---------- THREE.JS SETUP ----------
let scene, camera, renderer, geometry, material, mesh;

function init() {
  // 1. Create scene (like a container for 3D objects)
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x1a1a1a); // Dark background

  // 2. Create camera (your "eyes" to see the scene)
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5; // Move camera back

  // 3. Create renderer (draws the 3D scene onto the canvas)
  renderer = new THREE.WebGLRenderer({ antialias: true, canvas: document.querySelector('#canvas3d') });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // 4. Create a shape (an icosahedron)
  geometry = new THREE.IcosahedronGeometry(1, 0); // Radius = 1
  material = new THREE.MeshPhongMaterial({ 
    color: 0xff3366, // Pink color
    shininess: 100 
  });
  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // 5. Add lights
  const light = new THREE.PointLight(0xffffff, 1);
  light.position.set(5, 5, 5);
  scene.add(light);
  scene.add(new THREE.AmbientLight(0x404040)); // Soft ambient light
}

// ---------- ANIMATION LOOP ----------
function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.005; // Slow rotation
  mesh.rotation.y += 0.005;
  renderer.render(scene, camera);
}

// ---------- INTERACTIONS ----------
// Make the shape spin faster on button click
document.getElementById('spinButton').addEventListener('click', () => {
  mesh.rotation.x += 0.5; // Big rotation jump
});

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start everything!
init();
animate();