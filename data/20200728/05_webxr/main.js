
let scene, camera, renderer, cube, light, light1, meshFloor;
import { ARButton } from './js/ARButton.js';

function init() {
    // Our Javascript will go here.
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.xr.enabled = true;
    renderer.setAnimationLoop(animate);

    //renderer.shadowMap.type = THREE.BasicShadowMap;
    document.body.appendChild(ARButton.createButton(renderer));

    document.body.appendChild(renderer.domElement);
    //var geometry = new THREE.BoxGeometry();
    var geometry = new THREE.BoxBufferGeometry(32, 25, 92);
    // var material = new THREE.MeshBasicMaterial( { color: 0x00ffff } );
    var loader = new THREE.TextureLoader();
    // const texture = new THREE.TextureLoader().load('img/AXE_Texture.png');
    var sphere = new THREE.SphereBufferGeometry(0.5, 16, 8);

    let ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    // //light = new THREE.PointLight(0xff0040, 1, 0, 5);
    // light = new THREE.PointLight(0xffffff, 1, 200,2);
    // light.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xff0040 })));
    // light.castShadow = true;
    // light.shadow.camera.near = 0.1;
    // light.shadow.camera.far = 1000;
    // light.position.set(20, 20, 20);
    // light.shadowCameraVisible = true;
    // //light1 = new THREE.PointLight(0x4000ff, 1, 200, 2);
    // light1 = new THREE.PointLight(0xffffff, 1, 200,2);
    // light1.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0x4000ff })));
    // light1.castShadow = true;
    // light1.shadow.camera.near = 0.1;
    // light1.shadow.camera.far = 1000;
    // light1.position.set(20, 20, -20);

    // const controls = new THREE.OrbitControls(camera, renderer.domElement);
    // controls.minZoom = 1;
    // controls.maxZoom = 1.5;

    // controls.enablePan = false;

    function onSelect() {
        console.log("onSelect");
        // var material = new THREE.MeshPhongMaterial( { color: 0xffffff * Math.random() } );
        // var mesh = new THREE.Mesh( geometry, material );
        // mesh.position.set( 0, 0, - 0.3 ).applyMatrix4( controller.matrixWorld );
        // mesh.quaternion.setFromRotationMatrix( controller.matrixWorld );
        // scene.add( mesh );

    }

    let controller = renderer.xr.getController(0);
    controller.addEventListener('select', onSelect);
    scene.add(controller);

    // meshFloor = new THREE.Mesh(new THREE.PlaneGeometry(100, 100, 100, 100), new THREE.MeshPhongMaterial({ color: 0xffffff }));
    // meshFloor.material.side = THREE.DoubleSide;
    // meshFloor.receiveShadow = true;
    // //meshFloor.castShadow = true;
    // scene.add(meshFloor);

    // const textureCube = loader.load('img/1.png', 'img/2.png',
    //                                 'img/3.png', 'img/4.png',
    //                                 'img/5.png', 'img/6.png')
    // const materialArray = [
    //     new THREE.MeshBasicMaterial({ map: loader.load("img/1.png") }),
    //     new THREE.MeshBasicMaterial({ map: loader.load("img/2.png") }),
    //     new THREE.MeshBasicMaterial({ map: loader.load("img/3.png") }),
    //     new THREE.MeshBasicMaterial({ map: loader.load("img/4.png") }),
    //     new THREE.MeshBasicMaterial({ map: loader.load("img/5.png") }),
    //     new THREE.MeshBasicMaterial({ map: loader.load("img/6.png") }),
    // ]
    const materialArray = [
        new THREE.MeshBasicMaterial({ map: loader.load("img/1.png") }),
        new THREE.MeshBasicMaterial({ map: loader.load("img/2.png") }),
        new THREE.MeshBasicMaterial({ map: loader.load("img/3.png") }),
        new THREE.MeshBasicMaterial({ map: loader.load("img/4.png") }),
        new THREE.MeshBasicMaterial({ map: loader.load("img/5.png") }),
        new THREE.MeshBasicMaterial({ map: loader.load("img/6.png") }),
    ]
    cube = new THREE.Mesh(geometry, materialArray);
    cube.receiveShadow = true;
    cube.castShadow = true;
    scene.add(cube);
    // scene.add(light);
    // scene.add(light1);

    //Create a plane that receives shadows (but does not cast them)
    // var planeGeometry = new THREE.PlaneBufferGeometry(20, 20, 32, 32);
    // var planeMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
    // var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    // plane.receiveShadow = true;
    // scene.add(plane);

    camera.position.z = 80;
    cube.rotation.x -= 0.25 * Math.PI;
    cube.rotation.y += 1 * Math.PI;
    cube.rotation.z -= 0.75 * Math.PI;
   // cube.position.z = 250;
    mesh.position.set( 0, 0, - 100 ).applyMatrix4( controller.matrixWorld );

}
function animate() {
    //requestAnimationFrame(animate);

    var time = Date.now() * 0.0005;
    // light.position.x = Math.sin(time * 0.5) * 60;
    // light.position.y = Math.cos(time * 0.5) * 60;
    // // light.position.z = Math.cos( time * 0.3 ) * 30+20;
    // light.position.z = 50;

    // light1.position.x = Math.sin(time * 0.5 + Math.PI) * 60;
    // light1.position.y = Math.cos(time * 0.5 + Math.PI) * 60;
    // // light.position.z = Math.cos( time * 0.3 ) * 30+20;
    // light1.position.z = 50;
    cube.rotation.x += 0.01;
    cube.rotation.z += 0.01;
    renderer.render(scene, camera);
    // cube.rotation.x += 0.01;
    // cube.rotation.z += 0.01;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false)
init();
// animate();