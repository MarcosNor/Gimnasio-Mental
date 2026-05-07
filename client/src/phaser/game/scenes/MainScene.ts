// src/game/scenes/MainScene.ts
import * as Phaser from "phaser";

export default class MainScene extends Phaser.Scene {
  constructor() {
    super("main");
  }

  create() {
    this.add.text(100, 100, "Holaaaa", {
      color: "#ffffff",
    });
  }
}