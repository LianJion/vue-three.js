export class TCanvasTextureEditor {
    canvas: HTMLCanvasElement

    constructor(width: number=512, height: number = 512, bgColor: string='rgb(255,255,255)') {
        this.canvas = document.createElement('canvas');
    }

    draw(fun:(ctx: CanvasRenderingContext2D) => void):this {
        const ctx = this.canvas.getContext('2d');
        if (ctx) {
            fun(ctx);
            return this
        } else {
            console.warn('your brower can not support canvas 2d')
            return this;
        }
    }

    preview(): this{
        const canvas = this.canvas;
        canvas.style.position = 'fixed';
        canvas.style.top = "25%";
        canvas.style.left = "25%";
        document.body.appendChild(this.canvas);
        return this;
    }
}