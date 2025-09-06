function calculatelove(){
    const name1 =document.getElementById("name1").value.trim();
    const name2 =document.getElementById("name2").value.trim();

    if(name1===""|| name2===""){
        alert("please enter both names");

    }else{
        const lovePercentage =Math.floor(Math.random()*101);

        const result =document.getElementById("result");

        result.innerHTML =`${name1} and ${name2}'s percentage: ${lovePercentage}`;

        if(lovePercentage <30){
            result.innerHTML +="<br> not a great match.keep looking!"

        }else if(lovePercentage >=30 && lovePercentage <70){
            result.innerHTML += "<br> there is pottential give a try!"
        }else{
            result.innerHTML +="<br> great match . love is in the air!"
        }

    }
    

    }
    

