import BaseScene from './BaseScene';
import { SCENE_KEYS } from '../utils/common';

class MenuScene extends BaseScene {

    private menu: any;

    private buttonWidth = 180;
    private buttonHeight = 70;
    private bloqueado = false;

    constructor() {
        super(SCENE_KEYS.MENU);

        this.menu = [
            {scene: SCENE_KEYS.PLAY, text: 'Play'},
            {scene: null, text: 'Exit'}
        ]
    }


    create() {
        super.create();
        this.add.image(0, 0, 'FondoMenu').setOrigin(0).setScale(2);

        this.crearExplicacion();
        this.crearVideo();

        const { width, height } = this.scale;

        const x = width / 2;
        const y = height - 150;

        this.crearBoton(x, y, 'Jugar', SCENE_KEYS.PLAY);
        this.crearBoton(x + 300, y, 'Salir').on('pointerdown', () => {
            this.game.destroy(true);
            console.log('Juego cerrado');
            window.location.href = '/usuario/home/categorias/';
        });

    }
    
    crearExplicacion() {
        const { width, height } = this.scale;

        // Se leerá de la base de datos
        const explanationText = 'Lee las preguntas y responde correctamente. ¿Podrás seguir el combo?';
        this.add.text((width as number) / 2, (height as number) / 7, explanationText, { ...this.fontOptions }).setOrigin(0.5);
    }
    
    crearVideo() {
        const { width, height } = this.scale;


        const video = this.add.video(width as number / 2, height as number / 2, 'tutorial').setOrigin(0.5).play(true);
        video.setScale(0.6);
    }

    crearBoton(x: number, y:number, texto: string, sceneKey?: string): Phaser.GameObjects.Container {
        const container = this.add.container(x, y + 50);

        const width = this.buttonWidth;
        const height = this.buttonHeight;
    
        const bg = this.add.graphics();
        bg.fillStyle(0x2d2d2d, 1);
        bg.fillRoundedRect(-width / 2, -height / 2, width, height, 15);
    
        
        const label = this.add.text(0, 0, texto, {
          ...this.fontOptionsBotones,
          align: 'center',
          wordWrap: { width: width - 20 }
        }).setOrigin(0.5)
    
        container.add([bg, label]);
        container.setSize(width, height);
        container.setInteractive();
    
        // hover
        // Cuando el mouse sale del botón
        container.on('pointerout', () => {
          bg.clear();
          bg.fillStyle(0x2d2d2d);
          bg.fillRoundedRect(-width / 2, -height / 2, width, height, 15);
        })
    
        // Mouse sobre el botón
        container.on('pointerover', () => {
          if (this.bloqueado) return;
    
          bg.clear();
          bg.fillStyle(0x555555);
          bg.fillRoundedRect(-width / 2, -height / 2, width, height, 15);
        })
    
        // click en el botón
        container.on('pointerdown', () => {
            if(sceneKey) {
                this.scene.start(sceneKey);
                return;
            }
        });
        
        return container
    }
}

export default MenuScene;
