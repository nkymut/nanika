
let scene, camera, renderer, cube;


function init() {
    // Our Javascript will go here.
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    //var geometry = new THREE.BoxGeometry();
    var geometry = new THREE.BoxBufferGeometry(32, 25, 92);
    // var material = new THREE.MeshBasicMaterial( { color: 0x00ffff } );
    var loader = new THREE.TextureLoader();
   // const texture = new THREE.TextureLoader().load('img/AXE_Texture.png');

   const controls = new THREE.OrbitControls(camera, renderer.domElement);
   controls.minZoom = 1;
   controls.maxZoom = 1.5;

   controls.enablePan = false;
    // const textureCube = loader.load('img/1.png', 'img/2.png',
    //                                 'img/3.png', 'img/4.png',
    //                                 'img/5.png', 'img/6.png')
    const materialArray =  [
        new THREE.MeshBasicMaterial( { map: loader.load("img/1.png") } ),
        new THREE.MeshBasicMaterial( { map: loader.load("img/2.png") } ),
        new THREE.MeshBasicMaterial( { map: loader.load("img/3.png") } ),
        new THREE.MeshBasicMaterial( { map: loader.load("img/4.png") } ),
        new THREE.MeshBasicMaterial( { map: loader.load("img/5.png") } ),
        new THREE.MeshBasicMaterial( { map: loader.load("img/6.png") } ),
    ]
    cube = new THREE.Mesh(geometry, materialArray);
    scene.add(cube);

    camera.position.z = 80;


}
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    cube.rotation.x += 0.01;
    cube.rotation.z += 0.01;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false)
init();
animate();