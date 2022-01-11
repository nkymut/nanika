
let scene, camera, renderer, cube, cube2;


function init() {
    // Our Javascript will go here.
    scene = new THREE.Scene();
    //camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.25, 10000);
    camera.position.set(0, 0, 30);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    //renderer.setClearColor(0x808080, 1);
    //renderer.setClearColor(0xA55BA8, 1);
    //renderer.setClearColor(0x944B96, 1);
    renderer.setClearColor(0x8C6DB4, 1);
    document.body.appendChild(renderer.domElement);

    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.minZoom = 1;
    controls.maxZoom = 1.5;

    controls.enablePan = false;
    // ambient light
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.85);
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
    scene.add(hemisphericLight);

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    let loader = new THREE.GLTFLoader();
    // Load a glTF resource
    loader.load(
        // resource URL
         // './gltf/AXE_Box.glb',
        './gltf/AXE_Box2.gltf',
        // './gltf/scene.gltf',
        //'./gltf/AXE2.gltf',
        // called when the resource is loaded
        function (gltf) {
            cube = gltf.scene.children[0];
            cube.rotation.set(0,-0.5*Math.PI,0);
            cube.rotation.order = "YXZ";
            cube.castShadow = true;
            scene.add(cube);

            gltf.animations; // Array<THREE.AnimationClip>
            gltf.scene; // THREE.Group
            gltf.scenes; // Array<THREE.Group>
            gltf.cameras; // Array<THREE.Camera>
            gltf.asset; // Object
            //render();
        },
        // called while loading is progressing
        function (xhr) {

            console.log((xhr.loaded / xhr.total * 100) + '% loaded');

        },
        // called when loading has errors
        function (error) {

            console.log('An error happened');

        }
    );
    // let materials; 
    // var objLoader = new THREE.OBJLoader();
    // let mtlLoader = new THREE.MTLLoader();

    // mtlLoader.load('obj/AXE_Box.mtl', materials => {
    //     materials.preload();
        
    // });
 

    // // load a resource
    // objLoader.setMaterials(materials);
    // objLoader.load(
    //     // resource URL
    //     'obj/AXE_Box.obj',
    //     // called when resource is loaded
    //     function (object) {
    //         cube2 = object;
    //         scene.add(cube2);

    //     },
    //     // called when loading is in progresses
    //     function (xhr) {

    //         console.log((xhr.loaded / xhr.total * 100) + '% loaded');

    //     },
    //     // called when loading has errors
    //     function (error) {

    //         console.log('An error happened');

    //     }
    // );


    // camera.position.z = 80;
    

}
function animate() {
    camera.updateMatrixWorld();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    //cube.rotation.x += 0.01;
    cube.rotation.x -= 0.02;
   
   
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false)
init();
animate();