import React, { useEffect } from "react";
import * as THREE from "three";
 



const Flag = () => {

  const w = 1920;
const h = 1080;

 useEffect(() => {
   var scene = new THREE.Scene();
   var camera = new THREE.PerspectiveCamera(
     75,
     window.innerWidth / window.innerHeight,
     0.1,
     1000
   );
 
   var renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);
  const loader = new THREE.TextureLoader();
   var geometry = new THREE.PlaneGeometry(4,6,16,16);
   var material = new THREE.MeshBasicMaterial({ 
       
    map:loader.load('./images/bannerport.jpg')

});
   var flag = new THREE.Mesh(geometry, material);
   scene.add(flag);
    flag.rotation.set(0,0,0)
   camera.position.z = 5;
 const clock = new THREE.Clock()

   var animate = function () {
     requestAnimationFrame(animate);
 
     const t = clock.getElapsedTime()
    flag.geometry.vertices.map(v=>{
        const waveX1 = 0.2 *Math.sin(v.x * 2 + t)
        
        const waveY2 = 0.18 *Math.sin(v.x * 1 + t *3)
        v.z = waveX1  + waveY2 
    })

    flag.geometry.verticesNeedUpdate= true
 
     renderer.render(scene, camera);
   };
   window.addEventListener( 'resize', onWindowResize, true );
   function onWindowResize(w,h){
   camera.aspect = window.innerWidth / window.innerHeight;
   camera.updateProjectionMatrix();
   renderer.setSize( window.innerWidth, window.innerHeight );
   }
   animate();
 }, []);
 
 return (
   <>
     <div></div>
   </>
 );
};
 
export default Flag;