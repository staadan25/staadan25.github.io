//These functions show and unshow the sidebar
function openSidebar(){
    document.getElementById("transparent-overlay").style.display="block";
    document.getElementById("x-button").style.display="block";
    var sidebarClass = document.getElementsByClassName("sidebar");
    for (var i=0; i < sidebarClass.length; i++){
        sidebarClass[i].style.display="flex";
    }
    disableScroll();
}
function closeSidebar(){
    document.getElementById("transparent-overlay").style.display="none";
    document.getElementById("x-button").style.display="none";
    var sidebarClass = document.getElementsByClassName("sidebar");
    for (var i=0; i < sidebarClass.length; i++){
        sidebarClass[i].style.display="none";
    }
    enableScroll();
}
function disableScroll() { //this is to stop scrolling while mobile sidebar is open
    //gets current scroll position
    scrollTop = document.documentElement.scrollTop;
    scrollLeft = document.documentElement.scrollLeft;
        //Overides scrolling function
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}
function enableScroll() { //reenables scrolling
    window.onscroll = function() {};
}