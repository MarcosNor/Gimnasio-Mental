// config.ts

import * as Phaser from 'phaser';

import PreloadScene from './scenes/PreloadScene';
import PlayScene from './scenes/PlayScene';
import { TitleScene } from './scenes/TitleScene';
import MenuScene from './scenes/MenuScene';
import ScoreScene from './scenes/ScoreScene';

import { type Item } from '@/types/item';

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

export const createGame = (preguntas: Item[]) => {

  const scenes = [
    PreloadScene,
    MenuScene,
    TitleScene,

    new PlayScene(preguntas),

    ScoreScene
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