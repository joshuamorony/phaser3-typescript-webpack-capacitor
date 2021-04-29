

import 'phaser';
import { BootScene } from './scenes/boot';
import { PreloadScene } from './scenes/preload';
import { EnterNameScene } from './scenes/enter-name';
import { GameInterfaceScene } from './scenes/game-interface';
import { RoomScene } from './scenes/room';
import { MainScene } from './scenes/main';
import { GameOverScene } from './scenes/game-over';

import { WIDTH, HEIGHT } from './constants';

import { Plugins } from '@capacitor/core';

const config = {
  width: WIDTH,
  height: HEIGHT,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  type: Phaser.AUTO,
  parent: 'game',
  backgroundColor: '#ffffff',
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

  constructor(config) {

    super(config);
    
    this.scene.add('Boot', BootScene, false);
    this.scene.add('Preload', PreloadScene, false);
    this.scene.add('EnterName', EnterNameScene, false);
    this.scene.add('GameInterface', GameInterfaceScene, false);
    this.scene.add('Room', RoomScene, false);
    this.scene.add('Main', MainScene, false);
    this.scene.add('GameOver', GameOverScene, false);

    this.scene.start('Boot');

    StatusBar.hide();
    SplashScreen.hide();

  }

}

new Game(config);