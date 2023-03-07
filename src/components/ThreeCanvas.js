import { useRef, useEffect } from "react";
import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import imageEarth from "../images/earth_clouds_8k.jpg";

export function ThreeCanvas() {
  const style = {
    threeJsCanvas: {
      width: "100%",
      height: "100%",
      position: "fixed",
      top: 0,
      zIndex: "-2",
      // background: "linear-gradient(to right, aqua, black, aqua)",
      pointerEvents: "none",
    },
  };

  const threeJsCanvasRef = useRef(null);

  useEffect(() => {
    // CANVAS, CAMERAS, SCENES, AND RENDERER ////////////
    let canvas, camera, cameraOrtho, scene, sceneOrtho, renderer;

    let torusCenter, torusLeft1, torusLeft2, torusLeft3, torusRight1, torusRight2, torusRight3;

    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas = threeJsCanvasRef.current;

    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 20;

    cameraOrtho = new THREE.OrthographicCamera(-width / 2, width / 2, height / 2, -height / 2, 1, 10);
    cameraOrtho.position.z = 10;

    scene = new THREE.Scene();
    scene.fog = new THREE.Fog("white", 10, 45);
    sceneOrtho = new THREE.Scene();

    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height + 56);
    renderer.setClearColor(0xffffff, 0);
    document.body.appendChild(renderer.domElement);

    // LIGHTING /////////////////
    // const ambientLight = new THREE.AmbientLight(0xff0000, 0.5);
    // ambientLight.castShadow = true;

    // const spotLight = new THREE.SpotLight(0xff0000, 1);
    // spotLight.castShadow = true;
    // spotLight.position.set(0, 64, 32);

    const directionalLight = new THREE.DirectionalLight();
    directionalLight.position.set(0, 0, 20);

    scene.add(directionalLight);

    // const lightHelper = new THREE.SpotLightHelper(spotLight);
    // const gridHelper = new THREE.GridHelper(200, 50);
    // scene.add(gridHelper);

    // const controls = new OrbitControls(camera, renderer.domElement);

    // SCENE OBJECTS ///////////
    function createObjects() {
      torusCenter = new THREE.Mesh(new THREE.TorusGeometry(2, 0.1, 3, 4), new THREE.MeshStandardMaterial({ color: "aqua" }));

      torusLeft1 = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.1, 3, 4), new THREE.MeshStandardMaterial({ color: "red" }));
      torusLeft1.position.x = -1;

      torusRight1 = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.1, 3, 4), new THREE.MeshStandardMaterial({ color: "red" }));
      torusRight1.position.x = 1;

      torusLeft2 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.1, 3, 4), new THREE.MeshStandardMaterial({ color: "aqua" }));
      torusLeft2.position.x = -2;
      torusLeft2.position.y = 13;

      torusRight2 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.1, 3, 4), new THREE.MeshStandardMaterial({ color: "aqua" }));
      torusRight2.position.x = 2;

      torusLeft3 = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.1, 3, 4), new THREE.MeshStandardMaterial({ color: "red" }));
      torusLeft3.position.x = -3;

      torusRight3 = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.1, 3, 4), new THREE.MeshStandardMaterial({ color: "red" }));
      torusRight3.position.x = 3;
    }

    createObjects();

    const threeJsObjects = [torusCenter, torusLeft1, torusRight1, torusLeft2, torusRight2, torusLeft3, torusRight3];

    const earthNightTexture = new THREE.TextureLoader().load(imageEarth);

    const earthObject = new THREE.Mesh(new THREE.SphereGeometry(15, 32, 16), new THREE.MeshStandardMaterial({ map: earthNightTexture }));
    earthObject.position.y = -8;

    earthObject.rotation.x = -1;
    earthObject.rotation.y = -0.7;
    earthObject.rotation.z = -1.4;

    for (let i = 0; i < threeJsObjects.length; i++) {
      scene.add(earthObject, threeJsObjects[i]);
      if (window.innerWidth < 700) {
        threeJsObjects[i].position.y = 12;
      } else {
        threeJsObjects[i].position.y = 13;
      }
    }

    // ANIMATION FUNCTION ///////////////
    // const start = Date.now();

    const animate = () => {
      // CAMERA MOVEMENT //////
      // if(camera.position.x < 30){
      //   camera.position.x += 0.1;
      // }

      // var millisElapsed = Date.now() - start;
      // var secondsElapsed = Math.floor(millisElapsed / 1000);

      // if (secondsElapsed > 1 && camera.position.z > 40) {
      //   camera.position.z -= 3;
      // }
      // OBJECTS /////////
      earthObject.rotation.x += 0.001;
      renderer.render(scene, camera);
      // controls.update();
      window.requestAnimationFrame(animate);
    };
    animate();

    function scrollAnim() {
      torusCenter.rotation.x += 0.1;
      torusLeft1.rotation.x += -0.1;
      torusRight1.rotation.x += -0.1;
      torusLeft2.rotation.x += -0.2;
      torusRight2.rotation.x += -0.2;
      torusLeft3.rotation.x += -0.4;
      torusRight3.rotation.x += -0.4;
    }

    window.addEventListener("scroll", scrollAnim);

    window.addEventListener("resize", function () {
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height + 56);

      for (let i = 0; i < threeJsObjects.length; i++) {
        if (width < 700) {
          threeJsObjects[i].position.y = 12;
        } else {
          threeJsObjects[i].position.y = 13;
        }
      }
    });
  }, []);

  return <canvas style={style.threeJsCanvas} ref={threeJsCanvasRef}></canvas>;
}
