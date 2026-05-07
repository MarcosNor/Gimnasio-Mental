import BaseScene from './BaseScene'
import { SCENE_KEYS } from '../utils/common';

class ScoreScene extends BaseScene {

    private puntuacion: number = 0;
    private aciertos: number = 0;

    constructor() {
        super(SCENE_KEYS.SCORE);
    }
    
    init(data: { puntuacion: number; aciertos: number}) {
        this.puntuacion = data.puntuacion;
        this.aciertos = data.aciertos;
    }

    create() {
        super.create();

        this.crearBackButton(SCENE_KEYS.MENU);
        this.crearTexto();

    }

    crearTexto() {
        const { width, height } = this.scale;

        this.add.text(width / 2, height / 2 - 40, `Puntuación: ${this.puntuacion}`, this.fontOptions)
            .setOrigin(0.5)
            .setFontSize(48)
            .setColor('#000');

        this.add.text(width / 2, height / 2 + 40, `Aciertos: ${this.aciertos}`, this.fontOptions)
            .setOrigin(0.5)
            .setFontSize(48)
            .setColor('#000');

    }
}

export default ScoreScene;