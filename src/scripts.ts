import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls';

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}



const canvas = document.getElementById('canvas-webgl') as HTMLCanvasElement;

const scene = new THREE.Scene();

const geom = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1,10,10,10),
    new THREE.MeshBasicMaterial({color: 0xff00ff, wireframe: true  })
);

scene.add(geom);


const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
scene.add(camera);

camera.position.z = 3;

const renderer = new THREE.WebGLRenderer({
    canvas
})

renderer.setSize(sizes.width, sizes.height);

const clock = new THREE.Clock();

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.dampingFactor = 0.25
controls.enableZoom = true
controls.enablePan = true
controls.enableKeys = true


window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);

})

function tick() {

    const elapsedTime = clock.getElapsedTime();
    console.log(elapsedTime)
    controls.update();
    camera.set

    renderer.render(scene, camera);

    window.requestAnimationFrame(tick);
}
tick()
