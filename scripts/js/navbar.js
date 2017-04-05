// toggles navigation lists
function toggleList() {
    var navList = document.getElementById("navigation-menu");	//get navbar element
    var navListItems = document.getElementsByClassName("header-nav-item");	//get each list items
    // if navigation list is closed, add responsive class to it
    if (navList.className === "header-nav") {
        navList.className += " expanded";		//navbar element expanded added
        for(i=0; i < navListItems.length; i++){
        	navListItems[i].className += " expanded";		//each item element add expanded to classlist
        }
    } else {
        navList.className = "header-nav";		//if expanded, its closed by removing class
        for(i=0; i<navListItems.length; i++){
        	navListItems[i].className = "header-nav-item";
        }
    }
}