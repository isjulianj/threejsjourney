import * as THREE from "three"
import gsap from "gsap"

// Canvas
const canvas: HTMLCanvasElement = document.querySelector("#canvas-webgl")

const helper = new THREE.AxesHelper();

const scene = new THREE.Scene();

const geom = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 0xff00ff, wireframe: false})
const cube = new THREE.Mesh(geom, material)
scene.add(cube)
scene.add(helper)

const sizes = {
    width: 800,
    height: 600
}

const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 7


const renderer = new THREE.WebGLRenderer({
    canvas
    }
)
renderer.setSize(sizes.width, sizes.height)


const clock = new THREE.Clock()
gsap.to(cube.position, {x: 2, duration: 2, delay: 2})
gsap.to(cube.position, {x: 0, duration: 2, delay: 4} )

const tick = () => {

    // clock
    let elapsedTime = clock.getElapsedTime()

    // update object
    cube.rotation.y = Math.cos(elapsedTime)
    cube.rotation.x = Math.sin(elapsedTime)


    // render
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick);
}
tick()

