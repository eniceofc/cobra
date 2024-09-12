const tela = {
    largura: 800,
    altura: 400,
    imagemFundo: new Image(),
    carregarImagem() {
        this.imagemFundo.src = 'snakeGame.jpg'; 
        this.imagemFundo.onload = () => {
            this.desenhar(); 
        };
    },
    desenhar() {
        canvasCtx.drawImage(this.imagemFundo, 0, 60, this.largura, this.altura);
    }
};


tela.carregarImagem();
