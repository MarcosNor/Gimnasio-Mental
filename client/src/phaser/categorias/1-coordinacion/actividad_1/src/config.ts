import * as Phaser from 'phaser';
import PreloadScene from './scenes/PreloadScene';
import PlayScene from './scenes/PlayScene';
import { TitleScene } from './scenes/TitleScene';
import MenuScene from './scenes/MenuScene';
import ScoreScene from './scenes/ScoreScene';


const WIDTH = 1446;
const HEIGHT = 720;

const SHARED_CONFIG = {
  width: WIDTH,
  height: HEIGHT,

  rightBottomCorner: {
    x: (WIDTH - 10),
    y: (HEIGHT - 10),
  },

}

// El juego inicia con MenuScene por el archivo TileScene
const Scenes = [PreloadScene, MenuScene, TitleScene, PlayScene, ScoreScene];

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
  scene: Scenes,
};

export default config;

export const createGame = () => new Phaser.Game(config);