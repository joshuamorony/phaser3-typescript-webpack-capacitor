export class PreloadScene extends Phaser.Scene {

	preload(): void {

		this.load.crossOrigin = 'anonymous';
		this.load.maxParallelDownloads = Infinity;

	    this.load.image('ground', 'assets/sprites/platform.png');
	    this.load.spritesheet('dude', 'assets/sprites/dude.png', { frameWidth: 32, frameHeight: 48 });

	}	

	create(): void {
		this.scene.start('GameTitle');
	}

}
