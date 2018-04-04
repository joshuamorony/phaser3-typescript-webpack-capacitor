export default class Player {

	private player;
	private scene;
	private x;
	private y;
	private controls;

	constructor(x, y, scene){

		this.scene = scene;
		this.x = x;
		this.y = y;
		this.controls = this.scene.input.activePointer;

		this.addToScene();
		this.addAnimations();

	}

	get entity() {
		return this.player;
	}

	update(): void {

		if(this.controls.isDown && this.player.body.touching.down){
			this.player.setVelocityY(-330);
			this.player.anims.play('right', true);
		} else {
			this.player.anims.play('turn');
		}

	}

	addToScene(): void {

		this.player = this.scene.physics.add.sprite(this.x, this.y, 'dude');
		this.player.setBounce(0.2);

	}

	addAnimations(): void {

		this.scene.anims.create({
		    key: 'turn',
		    frames: [ { key: 'dude', frame: 4 } ],
		    frameRate: 20
		});

		this.scene.anims.create({
		    key: 'right',
		    frames: this.scene.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
		    frameRate: 10,
		    repeat: -1
		});

	}
	

}