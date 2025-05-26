# **Cameras**

We're going to look at perspective and orthographic camera

```const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, .1, 100)```

## Perspective camera args - cone like view, similar to eye
1. **FOV**: field of view, normally between 45 - 75 it's a measurement in degrees and it's the vertical 
    75 is quite large 
   1. it;s worth thinking about FOV early on
2. **Aspect ratio**: aspect ration is width / height of render
3. **near**: how close can the camera be and still see the object
4. **far**: how far can the camera be to still see if you zoom out

notes: having extreme differences of near and far and causes the GPU to get confused and cause z fighting 
it's not sure which render is in front of which, and you'll get weird flashes 

```const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, .000001, 999999)```


## Orthographic - parallel render so imagine a rectangle zooming in and out, without distorting its shape. 
<code>

    const aspect = sizes.width / sizes.height;
    const camera = new THREE.OrthographicCamera(-aspect, aspect, 1, -1, 0.1, 100)

</code>


We used custom built orbital control using mouse move event and some maths on cos and sin.. 

within a mouse move event we grab the coords of the mouse:
<code>
    
    canvas.addEventListener('mousemove', (event) => {
        cursor.x =  event.clientX / sizes.width - 0.5
        cursor.y =  -(event.clientY / sizes.height - 0.5)
    })


</code>

And then update the render on drag:
<code>
    
    // θ goes from –π to +π as cursor.x goes from –0.5 to +0.5
    const θ = cursor.x * Math.PI * 2;
    // radius of the orbit
    const radius = 3;
    
    // standard circle equations
    const xVal = Math.sin(θ) * radius;
    const zVal = Math.cos(θ) * radius;
    
    camera.position.x = xVal;
    camera.position.z = zVal;
    camera.position.y = cursor.y * 5; // up/down
    camera.lookAt(cube.position);
</code>

Three.js ships with OrbitControls (part of the examples) that does exactly this — plus damping, zoom, pan, and more — so you can just wire that up and not think about θ at all.
<code>

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
        controls.update()
        requestAnimationFrame(tick)
        renderer.render(scene, camera)
        
    }
    tick()

</code>