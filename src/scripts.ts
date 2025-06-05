import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";



const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
}

const canvas = document.getElementById("canvas-webgl");
const axisHelper = new THREE.AxesHelper()

// scene
const scene = new THREE.Scene();
scene.add(axisHelper);


const geometry = new THREE.BufferGeometry()

const count = 5;
const positions = new Float32Array(count * 3 * 3)

for (let i = 0 ; i < count * 3 * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 4
}

const positionsAttribute = new THREE.BufferAttribute(positions, 3)

geometry.setAttribute('position', positionsAttribute)

const geom = new THREE.Mesh(
    geometry,
    new THREE.MeshBasicMaterial({color: 0xffe333, wireframe: true}),
)

scene.add(geom)

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