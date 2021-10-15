import './style.css'

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';





import spaceimg from "./img/space.jpg"
import sunimg from "./img/sun.jpg"
import mercuryimg from "./img/mercury.jpg"
import venusimg from "./img/venus.jpg"
import earthimg from "./img/earth.jpg"







const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight , 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});


//Ferramentas para ajudar a configurar

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50)
// scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement);
//




//Camera


renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);




//Luz


const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5,5,5)

const ambientLight = new THREE.AmbientLight(0xffffff)

scene.add(pointLight, ambientLight)


//Estrelas
function addStar(){
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial({color: 0xffffff})
    const star = new THREE.Mesh (geometry, material);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x, y, z);
    scene.add(star)
}

Array(200).fill().forEach(addStar) 




//Background

const spaceTexture = new THREE.TextureLoader().load(spaceimg);
scene.background = spaceTexture;



//lua

//   const moonTexture = new THREE.TextureLoader().load('moon.jpg');
//   const normalTexture = new THREE.TextureLoader().load('normal.jpg');
//   
//   const moon = new THREE.Mesh(
//    new THREE.SphereGeometry(3, 32, 32),
//    new THREE.MeshStandardMaterial({
//        map: moonTexture,
//        normalMap: normalTexture
//    })
//   );
//   
//   scene.add(moon)
//   
//   moon.position.z = -5;
//   moon.position.setX(3);





//Sol

const sunTexture = new THREE.TextureLoader().load(sunimg);

const sun = new THREE.Mesh(
 new THREE.SphereGeometry(4, 32, 32),
 new THREE.MeshStandardMaterial({
     map: sunTexture,
 })
);

scene.add(sun)

sun.position.z = -1;
sun.position.setX(5);







//Mercúrio


const mercuryTexture = new THREE.TextureLoader().load(mercuryimg);

const mercury = new THREE.Mesh(
 new THREE.SphereGeometry(0.5, 32, 32),
 new THREE.MeshStandardMaterial({
     map: mercuryTexture,
 })
);

scene.add(mercury)

mercury.position.z = 20;
mercury.position.setX(5);



//Vênus


const venusTexture = new THREE.TextureLoader().load(venusimg);

const venus = new THREE.Mesh(
 new THREE.SphereGeometry(3, 32, 32),
 new THREE.MeshStandardMaterial({
     map: venusTexture,
 })
);

scene.add(venus)

venus.position.z = 35;
venus.position.setX(5);



//Terra


const earthTexture = new THREE.TextureLoader().load(earthimg);

const earth = new THREE.Mesh(
 new THREE.SphereGeometry(3.2, 32, 32),
 new THREE.MeshStandardMaterial({
     map: earthTexture,
 })
);

scene.add(earth)

earth.position.z = 55;
earth.position.setX(5);












//Animação ao mover a camera
function moveCamera(){

    const t = document.body.getBoundingClientRect().top;
//    moon.rotation.x += 0.05;
//    moon.rotation.y += 0.075;
//    moon.rotation.z += 0.05;

    sun.rotation.y += 0.05;



    mercury.rotation.y += 0.05;


    venus.rotation.y += 0.05;

    

    earth.rotation.y += 0.05;



    camera.position.z = t * -0.01;
    camera.position.x = t * -0.0002;
    camera.position.y = t * -0.0002;

}

document.body.onscroll = moveCamera;
moveCamera();


//Animação
function animate(){
    requestAnimationFrame(animate);


    //moon.rotation.x += 0.005;
    sun.rotation.y += 0.005;
    mercury.rotation.y += 0.005;
    venus.rotation.y += 0.005;
    earth.rotation.y += 0.005;

    //controls.update();

    renderer.render(scene, camera);
}

animate()