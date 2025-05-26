import * as THREE from "three"
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'


const sizes = {
    width: 800,
    height: 600
}

const cursor = {
    x: 0,
    y: 0
}

const canvas: HTMLCanvasElement = document.querySelector("#canvas-webgl")

canvas.addEventListener('mousemove', (event) => {
    cursor.x =  event.clientX / sizes.width - 0.5
    cursor.y =  -(event.clientY / sizes.height - 0.5)

})


// Canvas

const helper = new THREE.AxesHelper();

const scene = new THREE.Scene()

const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1, 4, 4, 4),
    new THREE.MeshBasicMaterial({color: 0xff00ff, wireframe: true})
)
scene.add(cube)
scene.add(helper)

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, .1, 100)
// const aspect = sizes.width / sizes.height;
// const camera = new THREE.OrthographicCamera(-aspect, aspect, 1, -1, 0.1, 100)

// camera.position.z = 2
camera.position.z = 3
// camera.position.y = 2



const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

const clock = new THREE.Clock()

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.dampingFactor = 0.25
controls.enableZoom = true
controls.enablePan = true
controls.enableRotate = true
controls.minDistance = 1
controls.maxDistance = 5
controls.maxPolarAngle = Math.PI / 2
controls.minPolarAngle = 0
function tick() {
    const elapsedTime = clock.getElapsedTime()

    // let xVal = Math.sin(cursor.x * Math.PI * 2) *  3
    // let zVal = Math.cos(cursor.x * Math.PI * 2) *  3
    // // cube.rotation.x = elapsedTime
    // // cube.rotation.y = elapsedTime
    // camera.position.x = xVal
    // camera.position.z = zVal
    // camera.position.y = cursor.y * 5
    // camera.lookAt(cube.position)
    controls.update()
    requestAnimationFrame(tick)
    renderer.render(scene, camera)

}

tick()

