function countButton(additonalClicks=1){
    buttonValue = getCookie(additonalClicks)
    if(buttonValue == -1){ 
        document.cookie = 
            "buttoncookie=0;  expires=Thu, 4 Feb 2027 20:40:11 UTC; path=/; sameSite=None; Secure"
    } else {
        document.getElementById("buttonCount").innerHTML = buttonValue
    }
}

function getCookie(additonalClicks){  
    var cookieValues = document.cookie.split(";");
    console.log(cookieValues)
    for(var i=0; i < cookieValues.length; i++){
        var nameValue=cookieValues[i].split("=", 2)
        if(nameValue[0] == "buttoncookie" || nameValue[0].substring(1) == "buttoncookie"){           
            document.cookie = 
                "buttoncookie=" + (Number(nameValue[1]) + additonalClicks) + ";  expires=Thu, 4 Feb 2027 20:40:11 UTC; path=/; sameSite=Strict"     
            return (Number(nameValue[1]) + additonalClicks)
        }
    }

    return -1
}

document.addEventListener("DOMContentLoaded", function(event) {
    countButton(0)
});
