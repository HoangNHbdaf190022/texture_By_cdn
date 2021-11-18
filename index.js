var scene, camera, renderer, cube;

function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(73, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({ antialias: true})
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // const texture = new THREE.TextureLoader().load('texture/gaixinh.gif')
    const texture = new THREE.TextureLoader().load('texture/gaixinh2.gif')
    const material = new THREE.MeshBasicMaterial({map: texture})
    // const material = new THREE.MeshBasicMaterial({color: 0x0000ff})
    const geometry = new THREE.BoxGeometry(2,2,2);
    cube = new THREE.Mesh(geometry, material)

    scene.add(cube);
    camera.position.z = 4
}
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.003
    cube.rotation.y += 0.003
    cube.rotation.z += 0.003
    renderer.render(scene, camera)
}

init();
animate();