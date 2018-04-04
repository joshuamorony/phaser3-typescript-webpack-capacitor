/// <reference path="./phaser.d.ts"/>

import 'phaser';
import { BootScene } from './scenes/boot';
import { PreloadScene } from './scenes/preload';
import { GameTitleScene } from './scenes/game-title';
import { MainScene } from './scenes/main';
import { GameOverScene } from './scenes/game-over';

import { WORLD_WIDTH, WORLD_HEIGHT } from './constants';

import { Plugins } from '@capacitor/core';

const config: GameConfig = {
  width: WORLD_WIDTH,
  height: WORLD_HEIGHT,
  type: Phaser.AUTO,
  parent: 'game',
  backgroundColor: '#93e7ff',
  pixelArt: false,
  zoom: 1,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 }
    }
  }
};

const { StatusBar, SplashScreen } = Plugins;

export class Game extends Phaser.Game {

  constructor(GameConfig: config) {

    super(config);
    
    this.scene.add('Boot', BootScene, false);
    this.scene.add('Preload', PreloadScene, false);
    this.scene.add('GameTitle', GameTitleScene, false);
    this.scene.add('Main', MainScene, false);
    this.scene.add('GameOver', GameOverScene, false);

    this.scene.start('Boot');

    StatusBar.hide();
    SplashScreen.hide();

  }

}

new Game(config);