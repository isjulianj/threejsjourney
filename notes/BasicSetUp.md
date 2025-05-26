# **Three JS**

Setting up a file, things you need

Things I need, a scene, a renderer some objects to go in it. And a Camera to view it.

Object is made of geom, and a material added to a mesh




1. Instantiate a axesHelper, so you can see the Axis
2. I think next is to create a scene
3. Then create a geom - BoxGeometry(args = size eg. 1,1,1)
4. Create a material - MeshBasicMatgerial({color: 0x:hex}: options)
5. Create a Mesh(Geom, Material)
6. Add this to the scene
7. Add the camera? Smile perspective camera needs args field of view, aspect ratio(should learn more about the maths here), near and far ( I think these are max zoom levels.. not really near seems to be from the screen and then the space from near to far is the world you’re viewing from the screen, the 3d world.  )
8. Set camera position, set positive z axis so it moves back in three js
9. Now we create a renderer and give it the canvas, WebGLRenderer({canvas})
10. Set the size of the renderer renderer.setSize(width, height)
11. Then add the scene and the camera in this order:  renderer.render(scene, camera)
12. Set a resize listener, remember to update aspect ratio on camera ( camera.updateProjectionMatrix()) and renderer size
    1. also it's goot to set renderer pixel ratio, just in case user has screens with different types (  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));_)