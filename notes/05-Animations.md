# Animations

What is request Animation frame

Purpose is to call a function on the next frame once. 
we can use it recursively 

we can fix the frame rate of request animation frame.. 
using the time.

    delta = difference between current time and previous time


<code>

    const currentTime = Date.now()
    let time = Date.now()
    const tick = () => {
    
        // Times
        const currentTime = Date.now()
        const delta = currentTime - time
        time = currentTime
        console.log(delta)
    
        // update object
        cube.rotation.x += 0.001 * delta
        cube.rotation.y += 0.001 * delta
    
        // render
        renderer.render(scene, camera)
        window.requestAnimationFrame(tick);
    }
    tick()
</code>
"Here, 0.001 is your “radians per millisecond” speed. If one frame took 16 ms you rotate by 0.016 rad per frame; if it took 20 ms you rotate by 0.020 rad — so overall you average out to 1 rad/s regardless of frame rate.

### Three js clock
You can use the built-in class within three to get the elapsed time in seconds.

1. Instantiate the clock class new THREE.Clock()
2. within your tick function you can get the elapsed time since instantiation, clock.getElapsedTime()
3. Then animate by that time against postion or rotation. 
4. Something to get into a little deeper would be trigonometry 
   5. 
      <code>
      cube.rotation.y = Math.cos(elapsedTime)
      cube.rotation.x = Math.sin(elapsedTime)
       </code>
    this makes the cube spin in a circle

You can also use libraries like GSAP that use there own tick, animation timer. you just need your own to trigger the re-render on each frame.



