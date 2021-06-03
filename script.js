function play(){
    var play1= Math.floor(Math.random()*6)+1;
    var playdice1="public/dice"+play1+".png";

    var play2= Math.floor(Math.random()*6)+1;
    var playdice2="public/dice"+play2+".png";
    document.getElementById('check1').setAttribute('src',playdice1);
    document.getElementById('check2').setAttribute('src',playdice2);
    if(play1==play2){
        document.getElementById('head').innerHTML="Draw";
    }
    else if(play1>play2){
        document.getElementById('head').innerHTML="Player 1 won !";
    }
    else{
        document.getElementById('head').innerHTML="Player 2 won !";
    }
}