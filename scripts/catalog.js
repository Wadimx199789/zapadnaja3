const catalogItems = document.querySelectorAll(".sidebar-item");
const sidebar = document.querySelector(".sidebar");

catalogItems.forEach((catalogItem)=>{
   catalogItem.addEventListener("click",()=>{
    let content = catalogItem.querySelector(".sidebar-body");
    if(content.style.maxHeight){
       sidebar.querySelectorAll(".sidebar-body").forEach((el)=>el.style.maxHeight=null);
    }
    else {
        sidebar.querySelectorAll(".sidebar-body").forEach((el)=>el.style.maxHeight=null);
        content.style.maxHeight = content.scrollHeight + "px";
    }
   })
})