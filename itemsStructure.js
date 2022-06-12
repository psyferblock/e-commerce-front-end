let category_id=document.getElementById("search-bar-btn")
let results_container=document.getElementById("results-container")

// code that loads categories 


    category_id.addEventListener("click",getCategory)
    function getCategory(e){
        console.log("something")
        e.preventDefault()
        axios({
            method:"get",
            url:"http://127.0.0.1:8000/api/v1/user/get_product?",
        }).then((response)=>{
        console.log("something")
            console.log(response)
            response.display
            for (var i=0;i<response.length;i++){
                results_container.innerHTML+=`
                <div class="item"id="${data.id}">
                            <div class="item-input">
                            <h3>name:${data.name}</h3>
                            <h3>category:${data.email}</h3>
                            <h3>price:${data.price}</h3>
                            </div>
                            <img src="${data.image}" alt="">
                            
                        </div>
                `

            }
        })
    }
//   getCategory()/
