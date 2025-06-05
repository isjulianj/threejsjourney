# Geometries

All geometries inherit from BufferGeometry


We're going to create triangles using a buffer geom

Using new THREE.BufferGeometry()

we created a triangle by supplying the position attributes directly using a 
Float32Array()

A triangle for example has three vertices (three points) and each vertex has a position value of x, y, z 

so using the Float32Array(), we'll provide the coordinates for each vertex.

The JS float32Array needs either the length of the array as an argument or an initil value that can be provided as an array.

e.g.

```js
    const triangleGeometry = new THREE.BufferGeometry()

    const positionArray = new Float32Array(9) 
    // vertex 1
    positionArray[0] = 0
    positionArray[1] = 0
    positionArray[2] = 0
    // vertex 2
    positionArray[3] = 1
    positionArray[4] = 0
    positionArray[5] = 0
    // vertex 3
    positionArray[6] = 0
    positionArray[7] = 2
    positionArray[8] = 0

 or:

     const positionArray = new Float32Array([
         0,0,0,
         1,0,0,
         0,1,0,
     ]) 

    // Then we can create the positions attribute that we'll set on the geometry, I think this is what's sent to the shader. 
    const positionsAttribute = new THREE.BufferAttribute(positionArray, 3)
    // the second argument defines how the array will be read, so every 3 values defines our position coordinates

    triangleGeometry.setAttribute('positon', positionsAttribute)
    // first arg of 'position' has to be exact this allows the geom to be used in the mesh

    const triangle = new THREE.Mesh(
        triangleGeometry,
        new THREE.MeshBasicMaterial({color: '0xff00ff'})
    )
```

