# Fullscreen and resizing

added a resize event listener

1. after resizing I updated the mutable object sizes
2. Then we need to update the aspect of the camera
   1.
         ```
         camera.aspect = sizes.width / sizes.height;
         camera.updateProjectionMatrix()
         ```
3. Then we update the renderer size
   1. ```   
       renderer.setSize(sizes.width, sizes.height);
      

We had to apply some styles to the css to eliminate standard browser padding and margin, and scrolling especially noticable on phones and laptops using track pads

<code>

    * {
        margin: 0;
        padding: 0;
    }
    
    html,
        body {
        overflow: hidden;
    }
    
    #canvas-webgl {
        position: absolute;
        top: 0;
        left: 0;
    }
</code>

## pixel ratio

Modern devices like retina displays can increase pixel ratios, so it's best to set the pixel ratio in the renderer
   ```
   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
   ```
It's nice to add this to the resize event, as use might move from one screen to another each screen might have a different ratio. 

## Handling fullscreen

