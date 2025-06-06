import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import GUI from 'lil-gui'
import gsap from "gsap"

const gui = new GUI({
    title: 'My WebGL Scene',
})
const debugObject = {
    active: true,
    boxColor: '#756ba8',
    boxPositionY: 0,
    spinGeometry: function() {
        gsap.to(box.rotation, { y: box.rotation.y + Math.PI * 2, duration: 1 });
    }
}


const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
}

const canvas = document.getElementById("canvas-webgl");
const axisHelper = new THREE.AxesHelper()

// scene
const scene = new THREE.Scene();
scene.add(axisHelper);

const box = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 2, 2, 2),
    new THREE.MeshBasicMaterial({color: debugObject.boxColor, wireframe: true}),
);

scene.add(box)

gui.add(
    box.position,
    'y'
).min(-3)
    .max(3)
    .step(0.01)
    .name('Box Y Position');


gui.add(box.material, 'wireframe')
gui.addColor(debugObject, 'boxColor')
    .onChange((value) => box.material.color.set(value));

gui.add(debugObject, 'spinGeometry')

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 100)
camera.position.z = 3;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
    canvas,
})
renderer.setSize(sizes.width, sizes.height)


renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.dampingFactor = 0.25
controls.enableZoom = true
controls.enablePan = true
controls.enableKeys = true


window.addEventListener('resize', () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width, sizes.height)
    renderer.render(scene, camera);
})

window.addEventListener('dblclick', async () => {
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullscreenElement || document.msFullscreenElement;
    if (!canvas) {
        throw new Error('Can\'t find canvas element');
    }

    if (!fullscreenElement) {
        if (canvas.requestFullscreen) {
            await canvas.requestFullscreen().catch((err) => {
                alert(
                    `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`,
                );
            });
        } else if (canvas.webkitRequestFullscreen) {
            console.log('hi')
            await canvas.webkitRequestFullscreen().catch((err) => {
                alert(
                    `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`,
                );
            });
        }

    } else {
        if (document.exitFullscreen) {
            await document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            await document.webkitExitFullscreen()
        }
    }

})


function tick() {
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
}

tick()