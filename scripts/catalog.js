const catalogItems = document.querySelectorAll(".sidebar-item")

catalogItems.forEach((catalogItem)=>{
    catalogItem.addEventListener("click",(event)=>{
        catalogItems.forEach( (catalogItem)=>{
            catalogItem.classList.remove("active");
        })
        event.currentTarget.classList.add("active");
    })
})