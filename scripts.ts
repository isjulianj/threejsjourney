import * as THREE from "three"

// Canvas
const canvas: HTMLCanvasElement = document.querySelector("#canvas-webgl")

// Scene
const scene = new THREE.Scene()


// Geometry
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const cube = new THREE.Mesh(geometry, material)

scene.add(cube)

const sizes = {
    width: 800,
    height: 600,
}


/**#
 * Camera
 * @type {THREE.PerspectiveCamera}
 * @description A camera that uses perspective projection.
 * @see {@link https://threejs.org/docs/#api/en/cameras/PerspectiveCamera}
 */
const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000)
camera.position.z = 3

scene.add(camera)
const renderer = new THREE.WebGLRenderer({
    canvas
})



renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)
