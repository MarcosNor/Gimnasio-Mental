// src/game/Game.ts
import * as Phaser from "phaser";
import MainScene from "./scenes/MainScene.ts";

export const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [MainScene],
  parent: "game-container",
};

export const createGame = () => new Phaser.Game(config);