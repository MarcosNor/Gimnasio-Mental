import * as Phaser from 'phaser';
import { SCENE_KEYS} from '../utils/common';
import { type SceneKey } from '../utils/common';

type MenuItem = {
    text: string;
    textGO?: Phaser.GameObjects.Text;
};

class BaseScene extends Phaser.Scene {

    public screenCenter!: [number, number];
    public fontSize: number;
    public fontBotones: number;
    public lineHeight: number;
    
    constructor(key: SceneKey) {
        super(key);
        
        
        this.fontSize = 30;
        this.lineHeight = 42;

        this.fontBotones = 25;

    }

    get fontOptions(): Phaser.Types.GameObjects.Text.TextStyle {
        return {
            fontSize: `${this.fontSize}px`,
            color: '#000'
        };
    }

    get fontOptionsBotones(): Phaser.Types.GameObjects.Text.TextStyle {
        return {
            fontSize: `${this.fontBotones}px`,
            color: '#fff'
        };
    }
    
    create() {
        
        const { width, height } = this.scale;
        this.screenCenter = [width / 2, height / 2];

        this.add.image(0, 0, 'sky').setOrigin(0).setScale(2);
    }
    
    
    createMenu( menu: MenuItem[], setupMenuEvents: (menuItem: MenuItem) => void): void {
        let lastMenuPositionY = 0;
        
        menu.forEach(menuItem => {
            const menuPosition: [number, number] = [
                this.screenCenter[0],
                this.screenCenter[1] + lastMenuPositionY
            ];

            menuItem.textGO = this.add
                .text(menuPosition[0], menuPosition[1], menuItem.text, this.fontOptions)
                .setOrigin(0.5, 1);
                
            lastMenuPositionY += this.lineHeight;
            
            setupMenuEvents(menuItem);
        });
    }
    
    crearBackButton(sceneKey: SceneKey = SCENE_KEYS.MENU) {
        const { width, height } = this.scale;

        const btn = this.add.image(width - 40, height - 40, 'back')
        .setOrigin(1)
        .setScrollFactor(0)
        .setScale(2)
        .setInteractive()

        btn.on('pointerup', () => {
            this.scene.start(sceneKey);
        })
    }

}

export default BaseScene;