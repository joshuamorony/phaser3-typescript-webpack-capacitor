import { WIDTH, HEIGHT, TOOLBAR_HEIGHT } from '../constants';
import api from '../api';
import { backendBasePath, ports } from '../basePath';
import version from '../version'
export class GameInterfaceScene extends Phaser.Scene {

	private toolbar;
	private mainBtns;
	private name;

	init(data) {
		this.name = data.name
	}

	preload(): void {

	}	

	create(): void {
		console.log('Running MagicalCards v'+version)
		this.drawUI()
		api(ports.index, '/').then(res => {
			let r = res.data
			console.log(r)
			if (r.version != version) {
				console.log('Update Detected: '+r.version)
			}
		})
	}

	drawUI() {
		this.toolbar = this.add.rectangle(WIDTH/2, 0, WIDTH, TOOLBAR_HEIGHT, 0xF9CB40)

		var nameLabel = this.add.text(100, TOOLBAR_HEIGHT/2, this.name, {
			fontSize: '48px'
		}).setOrigin(0, 0.5)

		this.mainBtns = {
			createRoom: this.add.rectangle(WIDTH/4, (HEIGHT-TOOLBAR_HEIGHT)/2, WIDTH/2*0.6, (HEIGHT-TOOLBAR_HEIGHT)*0.6, 0x2F52E0),
			joinRoom: this.add.rectangle(WIDTH*3/4, 100+(HEIGHT-TOOLBAR_HEIGHT)/4, WIDTH/2*0.6, (HEIGHT-TOOLBAR_HEIGHT)*0.3, 0x4C5B5C)
		}
		var createRoomLabel = this.add.text(WIDTH/4, (HEIGHT-TOOLBAR_HEIGHT)/2, "创建房间", {
			fontSize: '64px',
			align: 'center'
		}).setOrigin(0.5)
		var joinRoomLabel = this.add.text(WIDTH*3/4, 100+(HEIGHT-TOOLBAR_HEIGHT)/4, "加入房间", {
			fontSize: '64px',
			align: 'center'
		}).setOrigin(0.5)

		this.mainBtns.createRoom.setInteractive().on('pointerdown', () => {
			api(ports.landlord, '/rooms/create').then(res => {
				let r = res.data
				console.log(r)
				if (r.success) {
					this.scene.start('Room', {roomId: r.roomId})
				}
				else {
					//todo error handling
				}
			}).catch(err => {
				console.error(err)
				//todo error handling
			})
		})
	}

}