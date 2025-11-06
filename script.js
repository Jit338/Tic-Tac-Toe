let box = document.querySelectorAll(".box");
let pg = document.querySelector("p");
let pg2 = document.querySelector("#p2");
pg.innerText="Now it is turn of Player 1 => O";
let p =1;
for(let i=0;i<10;i++){
    if(i!=9){
        box[i].addEventListener("click",() =>{
            if(p==1 && box[i].innerText!="x"){
                box[i].innerText="o";
                pg.innerText="Now it is turn of Player 2 => X";
                p=2;
            }else if(p==2 && box[i].innerText!="o"){
                box[i].innerText="x";
                pg.innerText="Now it is turn of Player 1 => O";
                p=1;
            }

            check();

        });
    }else{
        box[i].addEventListener("click",()=>{
            for(let k=0;k<9;k++){
                box[k].innerText="";
            }
            p=1
            pg.innerText="Now it is turn of Player 1 => O";
            pg2.innerText="";
        });
    }

}

let check = ()=>{
    for(let j=0; j<=6;j+=3){
        if(box[j].innerText==box[j+1].innerText && box[j+1].innerText==box[j+2].innerText && box[j].innerText!=""){
            p==1?pg2.innerText="Player 2 Wins!!!":pg2.innerText="Player 1 Wins!!!";
            p=3;
        }
    }

    for(let j=0; j<=2;j++){
        if(box[j].innerText==box[j+3].innerText && box[j+3].innerText==box[j+6].innerText && box[j].innerText!=""){
            p==1?pg2.innerText="Player 2 Wins!!!":pg2.innerText="Player 1 Wins!!!";
            p=3;
        }
    }

    if(box[0].innerText==box[4].innerText && box[4].innerText==box[8].innerText && box[0].innerText!=""){
        p==1?pg2.innerText="Player 2 Wins!!!":pg2.innerText="Player 1 Wins!!!";
        p=3;
    }
    else if(box[2].innerText==box[4].innerText && box[4].innerText==box[6].innerText && box[2].innerText!=""){
        p==1?pg2.innerText="Player 2 Wins!!!":pg2.innerText="Player 1 Wins!!!";
        p=3;
    }
};
