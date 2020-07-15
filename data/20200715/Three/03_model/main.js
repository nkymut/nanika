
let scene, camera, renderer, cube;


function init() {
    // Our Javascript will go here.
    scene = new THREE.Scene();
    //camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.25, 1000);
    camera.position.set(0, 0, 500);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x808080, 1);
    document.body.appendChild(renderer.domElement);

    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.minZoom = 1;
    controls.maxZoom = 1.5;

    controls.enablePan = false;
    // ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 0.001);
    const hemisphericLight = new THREE.HemisphereLight({
        skyColor: 0xffffbb,
        groundColor: 0x080820,
        intensity: 0.05,
        position: {
            x: 0,
            y: 430,
            z: -2500
        }
    });
    scene.add(ambientLight);
    //scene.add(hemisphericLight);
    

    // let loader = new THREE.GLTFLoader();
    // // Load a glTF resource
    // loader.load(
    //     // resource URL
    //     './gltf/AXE_Box.glb',
    //     // called when the resource is loaded
    //     function (gltf) {

    //         scene.add(gltf.scene);

    //         gltf.animations; // Array<THREE.AnimationClip>
    //         gltf.scene; // THREE.Group
    //         gltf.scenes; // Array<THREE.Group>
    //         gltf.cameras; // Array<THREE.Camera>
    //         gltf.asset; // Object
    //         //render();
    //     },
    //     // called while loading is progressing
    //     function (xhr) {

    //         console.log((xhr.loaded / xhr.total * 100) + '% loaded');

    //     },
    //     // called when loading has errors
    //     function (error) {

    //         console.log('An error happened');

    //     }
    // );

    var loader = new THREE.OBJLoader();

    // load a resource
    loader.load(
        // resource URL
        'obj/AXE_Box.obj',
        // called when resource is loaded
        function (object) {

            scene.add(object);

        },
        // called when loading is in progresses
        function (xhr) {

            console.log((xhr.loaded / xhr.total * 100) + '% loaded');

        },
        // called when loading has errors
        function (error) {

            console.log('An error happened');

        }
    );

    // //var geometry = new THREE.BoxGeometry();
    // var geometry = new THREE.BoxBufferGeometry(32, 25, 92);
    // // var material = new THREE.MeshBasicMaterial( { color: 0x00ffff } );
    // const texture = new THREE.TextureLoader().load('img/AXE_Texture.png');
    // const material = new THREE.MeshBasicMaterial({ map: texture });

    // cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);

    // camera.position.z = 80;


}
function animate() {
    camera.updateMatrixWorld();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false)
init();
animate();