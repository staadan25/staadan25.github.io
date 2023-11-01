function openaccordion(){// this function makes a new button with a random rgb value
    var panelclass = document.getElementsByClassName("panel");
    for (var i=0; i < panelclass.length; i++){
            let newbutton = document.createElement("button");
            document.getElementById("buttonhouse").appendChild(newbutton);
            newbutton.classList.add("childbutton");
            newbutton.textContent="MORE"
            newbutton.setAttribute("onclick","openaccordion()")
            newbutton.style.backgroundColor="rgb("+String(Math.random() *255)+","+String(Math.random() *255)+","+String(Math.random() *255)+")"//this is a wack ass way to randomize the rgb value of the button
        }
    }
function showbutton(){//shows the button
    var DropdownsClass = document.getElementsByClassName("dropdowns");
    for (var i=0; i < DropdownsClass.length; i++){
        DropdownsClass[i].style.display="block";
    }
}