import React, { Component } from "react";
import "./UI.css";
import Card from "../Card/Card";
import { FaLinkedinIn, FaGithub, FaFileDownload } from "react-icons/fa";
class UI extends Component {
  state = {};

  componentDidMount = () => {
    this.painCanvas();
  };

  painCanvas = () => {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Configuration, Play with these
    var config = {
      particleNumber: 300,
      maxParticleSize: 0.5,
      maxSpeed: 10,
      colorVariation: 50,
    };
    // Colors
    var colorPalette = {
      bg: { r: 0, g: 0, b: 0 },
      matter: [
        { r: 36, g: 18, b: 42 }, // darkPRPL
        { r: 78, g: 36, b: 42 }, // rockDust
        { r: 252, g: 178, b: 96 }, // solorFlare
        { r: 253, g: 238, b: 152 }, // totesASun
      ],
    };
    // Some Variables hanging out
    var particles = [],
      drawBg;

    // Draws the background for the canvas, because space
    drawBg = function (ctx, color) {
      ctx.fillStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    // Particle Constructor
    var Particle = function (x, y) {
      // X Coordinate
      this.x = x || Math.round(Math.random() * canvas.width);
      // Y Coordinate
      this.y = y || Math.round(Math.random() * canvas.height);
      // Radius of the space dust
      this.r = Math.ceil(Math.random() * config.maxParticleSize);
      // Color of the rock, given some randomness
      this.c = colorVariation(
        colorPalette.matter[
          Math.floor(Math.random() * colorPalette.matter.length)
        ],
        true
      );
      // Speed of which the rock travels
      this.s = Math.pow(Math.ceil(Math.random() * config.maxSpeed), 0.7);
      // Direction the Rock flies
      this.d = Math.round(Math.random() * 360);
    };

    // Provides some nice color variation
    // Accepts an rgba object
    // returns a modified rgba object or a rgba string if true is passed in for argument 2
    var colorVariation = function (color, returnString) {
      var r, g, b, a, variation;
      r = Math.round(
        Math.random() * config.colorVariation -
          config.colorVariation / 2 +
          color.r
      );
      g = Math.round(
        Math.random() * config.colorVariation -
          config.colorVariation / 2 +
          color.g
      );
      b = Math.round(
        Math.random() * config.colorVariation -
          config.colorVariation / 2 +
          color.b
      );
      a = Math.random() + 0.5;
      if (returnString) {
        return "rgba(" + r + "," + g + "," + b + "," + a + ")";
      } else {
        return { r, g, b, a };
      }
    };

    // Used to find the rocks next point in space, accounting for speed and direction
    var updateParticleModel = function (p) {
      var a = 180 - (p.d + 90); // find the 3rd angle
      p.d > 0 && p.d < 180
        ? (p.x += (p.s * Math.sin(p.d)) / Math.sin(p.s))
        : (p.x -= (p.s * Math.sin(p.d)) / Math.sin(p.s));
      p.d > 90 && p.d < 270
        ? (p.y += (p.s * Math.sin(a)) / Math.sin(p.s))
        : (p.y -= (p.s * Math.sin(a)) / Math.sin(p.s));
      return p;
    };

    // Just the function that physically draws the particles
    // Physically? sure why not, physically.
    var drawParticle = function (x, y, r, c) {
      ctx.beginPath();
      ctx.fillStyle = c;
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();
    };

    // Remove particles that aren't on the canvas
    var cleanUpArray = function () {
      particles = particles.filter((p) => {
        return p.x > -100 && p.y > -100;
      });
    };
    var initParticles = function (numParticles, x, y) {
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle(x, y));
      }
      particles.forEach((p) => {
        drawParticle(p.x, p.y, p.r, p.c);
      });
    };

    // That thing
    window.requestAnimFrame = (function () {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60);
        }
      );
    })();

    // Our Frame function
    var frame = function () {
      // Draw background first
      drawBg(ctx, colorPalette.bg);
      // Update Particle models to new position
      particles.map((p) => {
        return updateParticleModel(p);
      });
      // Draw em'
      particles.forEach((p) => {
        drawParticle(p.x, p.y, p.r, p.c);
      });
      // Play the same song? Ok!
      window.requestAnimFrame(frame);
    };
    // Click listener
    document.body.addEventListener("click", function (event) {
      console.log(event.bubbles);
      var x = event.clientX,
        y = event.clientY;
      cleanUpArray();
      initParticles(config.particleNumber, x, y);
    });
    // First Frame
    frame();
    // First particle explosion
    initParticles(config.particleNumber);
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
        <section id="canvasSection">
          <canvas id="canvas" className="uiCanvas"></canvas>
          <div className="uiContainer">
            <div className="intro nameTag">
              <h1>
                <p>
                  <span className="colorCharacter">I</span>
                  <span>'m</span>
                </p>
                <p>
                  <span className="colorCharacter">S</span>
                  <span className="reducer">idharth </span>
                  <span className="colorCharacter">S</span>
                  <span className="reducer">uresh</span>
                </p>
                <p className="reducer">
                  <u className="colorCharacter"> M</u>
                  <span>aker</span>
                </p>
              </h1>
            </div>
            <Card></Card>
            <div className="socialContainer">
              <div className="socialIcon">
                <FaLinkedinIn onClick={() => this.redirect(0)} />
              </div>
              <div className="socialIcon">
                <a href="./1.jpeg" download />
                <FaFileDownload />
              </div>
              <div className="socialIcon">
                <FaGithub onClick={() => this.redirect(2)} />
              </div>
            </div>
          </div>
        </section>
        <section></section>
      </>
    );
  };
}

export default UI;
