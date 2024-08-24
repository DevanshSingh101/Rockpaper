
get_id();


function get_id (id) {
 choice = id ;
 console.log(id)
 let comp = computer_choice();
 res = eval(id, comp);
 console.log(res);
 out = document.getElementById("result");
 out.innerHTML = res;

}



function eval(usr,cmp){
    let result;
    dict = {};
    dict["rock"] = 0;
    dict["paper"] = 1;
    dict["scissor"] = 2;

    uch = dict[usr];
    
    if (uch==0){
        if(cmp==0){
            result = "Draw";;
        } else if(cmp == 1){
            result = "You lose";
        }else if(cmp == 2){
            result = "You Win";
        }
    }else if (uch==1){
        if(cmp==1){
            result = "Draw";;
        } else if(cmp == 2){
            result = "You lose";
        }else if(cmp == 0){
            result = "You Win";
        }
    }else if (uch==2){
        if(cmp==2){
            result = "Draw";;
        } else if(cmp == 0){
            result = "You lose";
        }else if(cmp == 1){
            result = "You Win";
        }
    }

    return result;    

}

function computer_choice(){
    c = Math.floor(Math.random()*3)
    return c;
}