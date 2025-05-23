import * as THREE from "three"

// Canvas
const canvas: HTMLCanvasElement = document.querySelector("#canvas-webgl")

const axisHelper = new THREE.AxesHelper(3)

// Scene
const scene = new THREE.Scene()


// Geometry
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xffff00, opacity: 0.5 })
const mesh = new THREE.Mesh(geometry, material)

mesh.position.set(0.7, -0.6, 0.5)

scene.add(mesh)
scene.add(axisHelper)

mesh.scale.set(2, 0.5, 1)

// rotation
mesh.rotation.reorder('YXZ')
mesh.rotation.x = Math.PI * 0.25
mesh.rotation.y = Math.PI * 0.25

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
camera.position.z = 6

scene.add(camera)

camera.lookAt(mesh.position)
const renderer = new THREE.WebGLRenderer({
    canvas
})



renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)
