//答えを用意
var number = Math.floor(Math.random()*3);
var answer = parseInt(window.prompt('数あてゲーム。0～2の数字を入力してください!'));

var message;
if(answer === number){
 message = 'あたり！';
}else if (answer < number){
 messeage = '残念！もっと大きいです';
}else if (number < answer){
 messeage = '残念！もっと小さいです';
}else{
 messeage = '0～3の数字を入力してください';
} 

document.getElementById('choice').textContent = messeage;
