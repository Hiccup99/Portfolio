import React, { Component } from "react";
import "./UI.css";
import { QuoteGenerator } from "../QuoteGenerator/QuoteGenerator";
import { MainContainer } from "../MainContainer/MainContainer";
import { SocialContainer } from "../SocialContainer/SocialContainer";
import SimplexNoise from "simplex-noise";

let renderer, scene, camera, cameraCtrl;
let width, height, cx, cy, wWidth, wHeight;
let light1, light2, light3, light4, light5;
let gArray;
const TMath = THREE.Math;
let plane;
const simplex = new SimplexNoise();

const mouse = new THREE.Vector2();
const mousePlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
const mousePosition = new THREE.Vector3();
const raycaster = new THREE.Raycaster();

const noiseInput = document.getElementById("");
const heightInput = document.getElementById("");

const conf = {
  fov: 75,
  cameraZ: 75,
  xyCoef: 50,
  zCoef: 10,
  lightIntensity: 0.9,
  ambientColor: 0x000000,
  light1Color: 0x0e09dc,
  light2Color: 0x1cd1e1,
  light3Color: 0x18c02c,
  light4Color: 0xee3bcf,
  ...conf,
};
class UI extends Component {
  state = {};

  componentDidMount = () => {
    this.init();
  };

  init = () => {
    renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById("background"),
      antialias: true,
      alpha: true,
    });
    camera = new THREE.PerspectiveCamera(conf.fov);
    camera.position.z = conf.cameraZ;

    this.updateSize();
    window.addEventListener("resize", this.updateSize, false);

    this.initScene();
    this.initGui();
    this.animate();
  };

  initGui = () => {
    // noiseInput.value = 101 - conf.xyCoef;
    // heightInput.value = (conf.zCoef * 100) / 25;
    // noiseInput.addEventListener("input", (e) => {
    //   conf.xyCoef = 101 - noiseInput.value;
    // });
    // heightInput.addEventListener("input", (e) => {
    //   conf.zCoef = (heightInput.value * 25) / 100;
    // });
  };

  initScene = () => {
    scene = new THREE.Scene();
    this.initLights();

    let mat = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
    });
    // let mat = new THREE.MeshPhongMaterial({ color: 0xffffff });
    // let mat = new THREE.MeshStandardMaterial({ color: 0x808080, roughness: 0.5, metalness: 0.8 });
    let geo = new THREE.PlaneBufferGeometry(
      wWidth,
      wHeight,
      wWidth / 2,
      wHeight / 2
    );
    plane = new THREE.Mesh(geo, mat);
    scene.add(plane);

    plane.rotation.x = -Math.PI / 2 - 0.2;
    plane.position.y = -25;
    camera.position.z = 60;
  };

  initLights = () => {
    const r = 30;
    const y = 10;
    const lightDistance = 500;

    // light = new THREE.AmbientLight(conf.ambientColor);
    // scene.add(light);

    light1 = new THREE.PointLight(
      conf.light1Color,
      conf.lightIntensity,
      lightDistance
    );
    light1.position.set(0, y, r);
    scene.add(light1);
    light2 = new THREE.PointLight(
      conf.light2Color,
      conf.lightIntensity,
      lightDistance
    );
    light2.position.set(0, -y, -r);
    scene.add(light2);
    light3 = new THREE.PointLight(
      conf.light3Color,
      conf.lightIntensity,
      lightDistance
    );
    light3.position.set(r, y, 0);
    scene.add(light3);
    light4 = new THREE.PointLight(
      conf.light4Color,
      conf.lightIntensity,
      lightDistance
    );
    light4.position.set(-r, y, 0);
    scene.add(light4);
  };

  animate = () => {
    requestAnimationFrame(this.animate);

    this.animatePlane();
    this.animateLights();

    renderer.render(scene, camera);
  };

  animatePlane = () => {
    gArray = plane.geometry.attributes.position.array;
    const time = Date.now() * 0.0002;
    for (let i = 0; i < gArray.length; i += 3) {
      gArray[i + 2] =
        simplex.noise4D(
          gArray[i] / conf.xyCoef,
          gArray[i + 1] / conf.xyCoef,
          time,
          mouse.x + mouse.y
        ) * conf.zCoef;
    }
    plane.geometry.attributes.position.needsUpdate = true;
    // plane.geometry.computeBoundingSphere();
  };

  animateLights = () => {
    const time = Date.now() * 0.001;
    const d = 50;
    light1.position.x = Math.sin(time * 0.1) * d;
    light1.position.z = Math.cos(time * 0.2) * d;
    light2.position.x = Math.cos(time * 0.3) * d;
    light2.position.z = Math.sin(time * 0.4) * d;
    light3.position.x = Math.sin(time * 0.5) * d;
    light3.position.z = Math.sin(time * 0.6) * d;
    light4.position.x = Math.sin(time * 0.7) * d;
    light4.position.z = Math.cos(time * 0.8) * d;
  };

  updateLightsColors = () => {
    conf.light1Color = chroma.random().hex();
    conf.light2Color = chroma.random().hex();
    conf.light3Color = chroma.random().hex();
    conf.light4Color = chroma.random().hex();
    light1.color = new THREE.Color(conf.light1Color);
    light2.color = new THREE.Color(conf.light2Color);
    light3.color = new THREE.Color(conf.light3Color);
    light4.color = new THREE.Color(conf.light4Color);
    // console.log(conf);
  };

  updateSize = () => {
    width = window.innerWidth;
    cx = width / 2;
    height = window.innerHeight;
    cy = height / 2;
    if (renderer && camera) {
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      const wsize = this.getRendererSize();
      wWidth = wsize[0];
      wHeight = wsize[1];
    }
  };

  getRendererSize = () => {
    const cam = new THREE.PerspectiveCamera(camera.fov, camera.aspect);
    const vFOV = (cam.fov * Math.PI) / 180;
    const height = 2 * Math.tan(vFOV / 2) * Math.abs(conf.cameraZ);
    document.getElementById("background").style.width = "100%";
    const width = document.getElementById("background").clientWidth;
    return [width, height];
  };

  redirect = (index) => {
    switch (index) {
      case 0:
        window.open(
          "https://www.linkedin.com/in/sidharthsuresh/",
          "_blank",
          "noopener,noreferrer"
        );
        break;
      case 1:
        break;
      case 2:
        window.open(
          "https://github.com/Hiccup99",
          "_blank",
          "noopener,noreferrer"
        );
        break;
    }
  };

  render = () => {
    return (
      <>
        <div className="uiContainer">
          <div className="background">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              style={{
                width: "100%",
                position: "absolute",
                bottom: "0%",
              }}
            >
              <path
                fill="#0099ff"
                fillOpacity="1"
                d="M0,288L120,282.7C240,277,480,267,720,234.7C960,203,1200,149,1320,122.7L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className="side-panel">
            <QuoteGenerator />
          </div>
          <canvas
            id="background"
            style={{
              position: "absolute",
              right: "0px",
            }}
          ></canvas>
          <MainContainer />
          <SocialContainer></SocialContainer>
        </div>
      </>
    );
  };
}

export default UI;
