export class GameOverScene extends Phaser.Scene {

	preload(): void {

	}	

	create(): void {
		this.scene.start('Main');
	}

}