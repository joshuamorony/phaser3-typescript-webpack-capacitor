import { WIDTH, HEIGHT, TOOLBAR_HEIGHT } from '../constants';
export class RoomScene extends Phaser.Scene {

    private toolbar;
    private roomId;
    private name;

    init(data) {
        console.log('init', data)
        this.roomId = data.roomId
        this.name = data.name
    }

    preload(): void {

	}	

	create(): void {
		this.drawUI()
	}

    drawUI(): void {
        this.toolbar = this.add.rectangle(WIDTH/2, 0, WIDTH, TOOLBAR_HEIGHT, 0xF9CB40)

        var title = this.add.text(WIDTH*0.1, TOOLBAR_HEIGHT, "斗地主房间", {
            fontSize: '64px',
            color: '#000'
        }).setOrigin(0.5, 0)

        
    }

}