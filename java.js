let sound=new Audio();
sound.src='sound.mp3';

function myfunc(){
    let a=Math.floor(Math.random()*3+1);
    let b=Math.floor(Math.random()*3+1);
    switch(a){
       case 1:
        document.getElementById("firstim").setAttribute("src","rock.png")
        document.getElementById('first').innerHTML="rock"
        break;
       case 2:
        document.getElementById("firstim").setAttribute("src","paper.png")
        document.getElementById('first').innerHTML="paper"
        break;
       case 3:
        document.getElementById("firstim").setAttribute("src","scissor.png")
        document.getElementById('first').innerHTML="scissor"
        break;


    }
    switch(b){
        case 1:
         document.getElementById("secondim").setAttribute("src","rock.png")
         document.getElementById('second').innerHTML="rock"
         break;
        case 2:
         document.getElementById("secondim").setAttribute("src","paper.png")
         document.getElementById('second').innerHTML="paper"
         break;
        case 3:
         document.getElementById("secondim").setAttribute("src","scissor.png")
         document.getElementById('second').innerHTML="scissor"
         break;
 
 
     }
    if((a==1 && b==2)||(a==2 && b==3)||(a==3 && b==1)){
        document.querySelector('.winner').innerHTML="Computer wins."

        
    }
    else if((a==1 && b==3)||(a==2 && b==1)||(a==3 && b==2)){
        document.querySelector('.winner').innerHTML="Player wins wins."
    }
    else{
        document.querySelector('.winner').innerHTML="Game is draw."
    }
}
