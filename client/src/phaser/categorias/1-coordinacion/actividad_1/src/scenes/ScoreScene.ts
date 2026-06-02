import BaseScene from './BaseScene'
import { SCENE_KEYS } from '../utils/common';

import { type Estadisticas } from '../types/estadisticas';

class ScoreScene extends BaseScene {

    private puntuacion: number = 0;
    private aciertos: number = 0;

    private estadisticas! : Estadisticas;

    constructor() {
        super(SCENE_KEYS.SCORE);
    }
    
    init(data: { puntuacion: number; aciertos: number; estadisticas: Estadisticas }) {
        this.puntuacion = data.puntuacion;
        this.aciertos = data.aciertos;
        this.estadisticas = data.estadisticas;
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

        this.add.text(width / 2, height / 2 + 120, `Estadísticas:`, this.fontOptions)
            .setOrigin(0.5)
            .setFontSize(32)
            .setColor('#000');

        const estadisticasText = 
            `Fácil: ${this.estadisticas.FACIL.correctas}/${this.estadisticas.FACIL.respondidas} | ` +
            `Medio: ${this.estadisticas.MEDIO.correctas}/${this.estadisticas.MEDIO.respondidas} | ` +
            `Difícil: ${this.estadisticas.DIFICIL.correctas}/${this.estadisticas.DIFICIL.respondidas}`;

        this.add.text(width / 2, height / 2 + 180, estadisticasText, this.fontOptions)
            .setOrigin(0.5)
            .setFontSize(24)
            .setColor('#000');

    }
}

export default ScoreScene;