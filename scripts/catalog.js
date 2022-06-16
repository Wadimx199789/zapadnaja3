const catalogItems = document.querySelectorAll(".catalog-inner__sidebar-item")

catalogItems.forEach((catalogItem)=>{
    catalogItem.addEventListener("click",(event)=>{
        catalogItems.forEach( (catalogItem)=>{
            catalogItem.classList.remove("active");
        })
        event.currentTarget.classList.add("active");
    })
})