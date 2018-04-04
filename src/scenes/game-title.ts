export class GameTitleScene extends Phaser.Scene {

	preload(): void {

	}	

	create(): void {
		this.scene.start('Main');
	}

}