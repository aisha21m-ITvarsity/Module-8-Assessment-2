//list-recipes script 

let category = getCategory();

            function getRecipeList(){
                let rootPath = "https://mysite.itvarsity.org/api/recipe-book/";
                let fullPath = rootPath + "get-recipes/?category=" + category;

                fetch(fullPath)
                 .then(function(response){
                    return response.json();
                 })
                  .then(function(data){
                    let output = "";
                    
                    for (a = 0; a < data.length; a++) {
                        output += `
                            <a href="show-recipes.html?id=${data[a].id}">
                                <div class="meals-list-item"> 
                                   <h1>${data[a].title}<i class="fas fa-chevron-circle-right"> </i> </h1> 
                                   <p>${data[a].description}</p> 
                                </div>
                            </a>
                        `;
                    }; 
                
                document.getElementById("output").innerHTML = output;
             })
            }

            function getCategory(){
                let url = window.location.href;
                let pos = url.search("=");
                let category = url.slice(pos + 1);

                return category;
            }

//show-recipe script

let id = getId();

            function getRecipe(){
                let rootPath = "https://mysite.itvarsity.org/api/recipe-book/";
                let fullPath = rootPath + "get-recipes/?id=" + id;  
                
                fetch(fullPath)
                    .then(function(response){ 
                        return response.json();
                    })
                    .then(function(data){
                        document.getElementById("back-link").href = "list-recipes.html?category=" + data[0].category;

                        let output = "";

                        output += `
                            <img src="${rootPath}uploads/${data[0].image}"/>
                            <h1>${data[0].title}</h1>
                            <div class="recipe-details-ingredients">
                                <h2>Ingredients</h2>
                                <ul>
                                    ${data[0].ingredients}
                                </ul>
                            </div>
                            <div class="recipe-details-steps">
                                <h2>Method</h2>
                                <ol>
                                    ${data[0].method}
                                </ol>
                            </div>   
                        `;
                        document.getElementById("output").innerHTML = output;
                    })
            }
             
            function getId(){
                let url = window.location.href;
                let pos = url.search("=");
                let id = url.slice(pos + 1);

                return id;
            }