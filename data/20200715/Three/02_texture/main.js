
let scene, camera, renderer, cube;


 function init(){
// Our Javascript will go here.
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
//var geometry = new THREE.BoxGeometry();
var geometry = new THREE.BoxBufferGeometry( 32, 25, 92 );
// var material = new THREE.MeshBasicMaterial( { color: 0x00ffff } );
const texture  = new THREE.TextureLoader().load('img/AXE_Texture.png');
const material = new THREE.MeshBasicMaterial({map: texture});

     cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 80;


 }
 function animate() {
     requestAnimationFrame( animate );
     renderer.render( scene, camera );
     cube.rotation.x += 0.01;
     cube.rotation.y += 0.01;
 }

 function onWindowResize() {
     camera.aspect = window.innerWidth / window.innerHeight; 
     camera.updateProjectionMatrix();
     renderer.setSize( window.innerWidth, window.innerHeight );
 }

 window.addEventListener( 'resize', onWindowResize, false)
 init();
 animate();