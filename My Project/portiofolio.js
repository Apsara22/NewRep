var tabLinks = document.getElementsByClassName("links");
var tabContents = document.getElementsByClassName("tab-contents");
function opentab(tbname){
    for(tablink of tabLinks){
        tablink.classList.remove("active-links");
    }
    for(tabcontent of tabContents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links");
    document.getElementById(tbname).classList.add("active-tab");
}
