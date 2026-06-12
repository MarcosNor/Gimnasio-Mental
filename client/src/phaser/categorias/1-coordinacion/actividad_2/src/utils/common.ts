export const SCENE_KEYS = {
  PRELOAD: 'PRELOAD',
  PLAY: 'PLAY',
  MENU: 'MENU',
  TITLE: 'TITLE',
  SCORE: 'SCORE',
} as const;

export const ASSET_KEYS = {
  TITLE: 'TITLE',
  CLICK_TO_START: 'CLICK_TO_START',
  CARDS: 'CARDS',
} as const;

export type SceneKey = typeof SCENE_KEYS[keyof typeof SCENE_KEYS];

export const CARD_WIDTH = 37;
export const CARD_HEIGHT = 52;
