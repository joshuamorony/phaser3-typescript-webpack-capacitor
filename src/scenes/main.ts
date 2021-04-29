import Player from '../objects/player';
import { WIDTH, HEIGHT } from '../constants';

export class MainScene extends Phaser.Scene {

	private player;
	private platforms;

	create(): void {

		this.player = new Player(WIDTH/2, 100, this);
		this.addPlatforms();

	}

	update(): void {

		this.player.update();

	}

	addPlatforms(){

		this.platforms = this.physics.add.staticGroup();

		this.platforms.create(WIDTH / 2, HEIGHT, 'ground');
		this.physics.add.collider(this.player.entity, this.platforms, null, null, this);

	}

}
