'use client';
import React, { useEffect} from 'react'
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
export default function ThreeDBackground() {
  let firstTS = 0
  let timeStamp = 0
  useEffect(()=>{
    const prefersDarkColorScheme = () =>
      window &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    firstTS = Date.now()
    const gltfLoader = new GLTFLoader()
    const scene = new THREE.Scene()
    if(!prefersDarkColorScheme()){
      scene.background = new THREE.Color(0xa8a294);
    }
    const cam = new THREE.PerspectiveCamera(75, screen.width / screen.height, 0.1, 3000);
    const renderer = new THREE.WebGLRenderer({
      antialias:true,
      canvas:document.querySelector('#scene')!
    });
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(screen.width,screen.height);
    const loadCity = async()=>{
      const modelData = await gltfLoader.loadAsync('big_city.glb');

      // Create the wireframe material
      const wireframeMaterial = new THREE.MeshStandardMaterial({
        color: prefersDarkColorScheme() ? 0xF5F5DC : 0xDFD5CC, // White color // Enable wireframe rendering
      });
  
      // Apply material to the model scene
       modelData.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material = wireframeMaterial;
        }
      });
      scene.add(modelData.scene)
       // Use the loaded model (replace with your rendering logic)
    }
    loadCity()
    const light = new THREE.PointLight( 0x404040,prefersDarkColorScheme() ? 1000000 : 10000000,10000 );
    light.position.y = 500
    scene.add(light)
    cam.position.y = 20
    const target = new THREE.Vector3(-40,10,10)
    const animate = ()=>{
      requestAnimationFrame(animate)
      timeStamp = Date.now()
      const seconds = (timeStamp-firstTS) / 100000
      const xDrag = Math.sin(seconds)*40
      const zDrag = Math.cos(seconds)*40
      cam.position.x = xDrag+target.x
      cam.position.z = zDrag+target.z
      cam.lookAt(target)
      renderer.render(scene,cam)
    }
    animate()
  },[])
          
  return (
    <canvas id='scene' className='w-[100vw] h-[100vh]  sticky'>

    </canvas>
  )
}