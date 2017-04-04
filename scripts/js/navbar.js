function toggleList() {
    var navList = document.getElementById("navigation-menu");
    var navListItems = document.getElementsByClassName("header-nav-item");
    console.log(navList);
    if (navList.className === "header-nav") {
        navList.className += " responsive";
        for(i=0; i < navListItems.length; i++){
        	console.log(navListItems[i]);
        	navListItems[i].className += " responsive";
        }
    } else {
        navList.className = "header-nav";
        for(i=0; i<navListItems.length; i++){
        	navListItems[i].className = "header-nav-item";
        }
    }
}