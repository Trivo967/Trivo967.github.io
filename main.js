const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(500, 400); // Match this to your canvas-container size
document.getElementById('canvas-container').appendChild(renderer.domElement);

scene.background = new THREE.Color(0xdddddd); // Light gray background
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5).normalize();
scene.add(light);

const loader = new THREE.GLTFLoader();
loader.load(
    'assets/model.gltf', // Path to your model
    function (gltf) {
        scene.add(gltf.scene);
        gltf.scene.scale.set(2, 2, 2); // Adjust size if needed
        gltf.scene.position.set(0, 0, 0); // Center it
    },
    undefined,
    function (error) {
        console.error('Error loading model:', error);
    }
);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();