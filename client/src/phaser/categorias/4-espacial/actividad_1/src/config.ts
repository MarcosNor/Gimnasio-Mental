// config.ts

import * as Phaser from 'phaser';

import PlayScene from './scenes/PlayScene';
const WIDTH = 1446;
const HEIGHT = 720;

const SHARED_CONFIG = {
  width: WIDTH,
  height: HEIGHT,

  rightBottomCorner: {
    x: WIDTH - 10,
    y: HEIGHT - 10,
  },
};

export const createGame = () => {

  const scenes = [
    PlayScene
  ];

  const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.WEBGL,

    ...SHARED_CONFIG,

    pixelArt: true,

    scale: {
      parent: 'game-container',
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },

    backgroundColor: '#75e9ed',

    scene: scenes,
  };

  return new Phaser.Game(config);
};