import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import GameOver from "./GameOver/GameOver.js";
import Sprite4 from "./Sprite4/Sprite4.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Sprite3: new Sprite3({
    x: 5,
    y: 74,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 2
  }),
  Sprite2: new Sprite2({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Sprite1: new Sprite1({
    x: 0,
    y: 0,
    direction: 136,
    costumeNumber: 1,
    size: 92,
    visible: true,
    layerOrder: 5
  }),
  GameOver: new GameOver({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  Sprite4: new Sprite4({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 4
  })
};

const project = new Project(stage, sprites, {
  frameRate: 60 // Set to 60 to make your project run faster
});
export default project;
