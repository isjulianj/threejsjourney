import * as THREE from "three"

// Canvas
const canvas: HTMLCanvasElement = document.querySelector("#canvas-webgl")

const helper = new THREE.AxesHelper();

const scene = new THREE.Scene();

const geom = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 0x0000ff})
const cube = new THREE.Mesh(geom, material)
scene.add(cube)
scene.add(helper)

const sizes = {
    width: 800,
    height: 600
}

const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 5

const renderer = new THREE.WebGLRenderer({
    canvas
    }
)
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)