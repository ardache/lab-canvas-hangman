
class HangmanCanvas {
  constructor(secretWord) {
    this.secretWord = secretWord;
    this.canvas = document.getElementById("hangman");
    this.ctx = this.canvas.getContext("2d");
    this.ctx.font = "50px Arial";
    this.origin = [300, 700];
    this.hyphen = 50;
    this.blank = 20;
  }

  createBoard() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawLines() {
    let x = this.origin[0];
    let y = this.origin[1];
  
    for (let i = 0; i < this.secretWord.length; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, y);
      x += this.hyphen;
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
      this.ctx.closePath();
      x += this.blank;
    }
  }

  writeCorrectLetter(index) {
    let x = this.origin[0] + (this.hyphen + this.blank) * index;
    let y = this.origin[1] - 10;
    let letter = this.secretWord[index];

    this.ctx.fillText(letter, x, y);
  }

  writeWrongLetter(letter, errorsLeft) {
    let x = this.origin[0] + 50*(17 - errorsLeft);
    let y = this.origin[1] - 50*8;

    this.ctx.fillText(letter, x, y);

  }

  drawHangman(shape) {
    switch (shape){
      case 'leftLeg': 
        this.ctx.beginPath();
        this.ctx.moveTo(115, 590);
        this.ctx.lineTo(125, 560);
        this.ctx.stroke();
        this.ctx.closePath();
        break
      case 'rightLeg': 
        this.ctx.beginPath();
       this.ctx.moveTo(125, 560);
       this.ctx.lineTo(135, 590);
       this.ctx.stroke();
       this.ctx.closePath();
       break
      case 'body': 
        this.ctx.beginPath();
       this.ctx.moveTo(125, 560);
       this.ctx.lineTo(125, 520);
       this.ctx.stroke();
       this.ctx.closePath();
       break
      case 'leftArm': 
        this.ctx.beginPath();
        this.ctx.moveTo(125, 530);
        this.ctx.lineTo(105, 520);
        this.ctx.stroke();
        this.ctx.closePath();
        break
      case 'rightArm': 
        this.ctx.beginPath();
        this.ctx.moveTo(125, 530);
        this.ctx.lineTo(145, 520);
        this.ctx.stroke();
        this.ctx.closePath();
        break
      case 'head': 
        this.ctx.beginPath();
        this.ctx.moveTo(139, 505);
        this.ctx.arc(125, 505, 15,  0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.closePath();
        break
      case 'base': 
        this.ctx.beginPath();
        this.ctx.moveTo(20, 650);
        this.ctx.lineTo(160, 650);
        this.ctx.stroke();
        this.ctx.closePath();
        break
      case 'pole': 
        this.ctx.beginPath();
        this.ctx.moveTo(60, 650);
        this.ctx.lineTo(60, 450);
        this.ctx.stroke();
        this.ctx.closePath();
        break
      case 'joist': 
        this.ctx.beginPath();
        this.ctx.moveTo(60, 450);
        this.ctx.lineTo(130, 450);
        this.ctx.stroke();
        this.ctx.closePath();
        break
      case 'rope': 
        this.ctx.beginPath();
        this.ctx.moveTo(130, 450);
        this.ctx.lineTo(130, 493);
        this.ctx.stroke();
        this.ctx.closePath();
        break
      
    }
  }

  gameOver() {

  }

  winner() {

  }

}