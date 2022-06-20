const headerSidebarItem = document.querySelector(".header__sidebar-item");
const headerSidebar = document.querySelector(".header__sidebar");


headerSidebar.addEventListener("click",()=>{
    let content = headerSidebar.querySelector(".header__sidebar-body");
    if(content.style.maxHeight){
        content.style.maxHeight = null;
    }
    else{
        content.style.maxHeight = content.scrollHeight + "px";
    }
});
