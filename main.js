let scene, camera,  light, renderer, model, container;

function init() {

    container = document.querySelector(".main");

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
        35,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
    );

    // camera = new THREE.PerspectiveCamera(
    //     35,
    //     window.innerWidth / window.innerHeight,
    //     0.1,
    //     1000
    // );

    camera.position.z = 5;

    // to render 
    renderer = new THREE.WebGLRenderer({antialias: true, alpha:true});

    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;
    
    document.body.appendChild(renderer.domElement);

    // load the model
    let loader = new THREE.GLTFLoader();
    loader.load('3d/scene.gltf', function(gltf) {

        model = gltf.scene;
        scene.add(gltf.scene);
        
        renderer.render(scene,camera);
    });


    //ambient light
    const ambientLight = new THREE.AmbientLight(0xffe8b3)
    scene.add(ambientLight);
   
    // const directLight = new THREE.DirectionalLight( 0xffffff, 2);
    // directLight.position.set( 0, 0, 0.1 );
    // scene.add( directLight );
    // directLight.castShadow = true;
    // directLight.shadowCameraVisible = true;


    const controls = new THREE.OrbitControls( camera, renderer.domElement );
    //controls.update() must be called after any manual changes to the camera's transform
    controls.minDistance = 5;
    controls.maxDistance = 10;

    controls.update();

    // to position the camera
    // camera.position.x = -6;
    // camera.position.y = 2;
    // camera.position.z = 5;

}


function animate() {
    requestAnimationFrame(animate);

    // to rotate the cube
    if(model) {
        model.rotation.y -= 0.008;
    }

    renderer.render(scene, camera);
    // controls.update();
}


function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize,false);

var doc = document.querySelector(".time");
doc.addEventListener("mouseover", function() {
    doc.style.opacity = 0.8;
});
doc.addEventListener("mouseout", function() {
    doc.style.opacity = 1;
});

init();
animate();


    