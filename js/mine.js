var pNameElement = document.getElementById('productNameInput')
var pPriceElement = document.getElementById('productPriceInput')
var pCategoryElement = document.getElementById('productCategoryInput')
var pDescriptionElement = document.getElementById('productDescriptionInput')
var mainBtn = document.getElementById("mainBtn")


var productContainer ;
if (localStorage.getItem('products') ==null )
{productContainer=[]}  
else{
    productContainer=JSON.parse(localStorage.getItem('products'));
    displayProducts(productContainer)
}

function addProducts(){


   var newProduct = {
    nameValue:pNameElement.value,
    priceValue:pPriceElement.value,
    categoryValue:pCategoryElement.value,
    descriptionValue:pDescriptionElement.value
};
    
    productContainer.push(newProduct);
    localStorage.setItem("products",JSON.stringify(productContainer));
    displayProducts(productContainer);
    clear();
}



function displayProducts(productList)
{  
    var cartoona = ``;
for ( var i = 0 ; i < productList.length; i++)

{

cartoona += `<tr>
<td>${i+1}</td>
<td>${productList[i].nameValue}</td>
<td>${productList[i].priceValue}</td>
<td>${productList[i].categoryValue}</td>
<td>${productList[i].descriptionValue}</td>
<td><button onclick="UpdateProduct(${i})" class="btn btn-warning">Update</button></td>
<td><button onclick="deleteProduct(${i})" class="btn btn-danger">Delete</button></td>
</tr>`;

}

document.getElementById('tableRow').innerHTML = cartoona;
}


displayProducts(productContainer);


function clear(){
    pNameElement.value="",
    pPriceElement.value="",
    pCategoryElement.value="",
    pDescriptionElement.value=""
}


 function deleteProduct (productIndex) {
     productContainer.splice(productIndex,1)
     localStorage.setItem("products",JSON.stringify(productContainer));
     displayProducts(productContainer)
 }


 function searchProducts(term){
    var searchProducts=[];
    for(var i=0;i <productContainer.length ;i++)
    {
        if(productContainer[i].nameValue.toLowerCase().includes(term.toLowerCase()) ==true)
        {
            searchProducts.push(productContainer[i]);
        }
    }
displayProducts(searchProducts);
 }






  function UpdateProduct(index)
  {
    
    productNameInput.value=productContainer[index].nameValue;
    productPriceInput.value=productContainer[index].priceValue;
    productCategoryInput.value=productContainer[index].categoryValue;
    productDescriptionInput.value=productContainer[index].descriptionValue;
    
  
  
  mainBtn.innerHTML=` <button class = "btn btn-warning " onclick="updateChange(${index})" >Update Change</button> `
  }  
 

  function updateChange (index)
  {
   
    productContainer[index].nameValue=document.getElementById("productNameInput").value;
    productContainer[index].priceValue=document.getElementById("productPriceInput").value;
    productContainer[index].categoryValue=document.getElementById("productCategoryInput").value;
    productContainer[index].descriptionValue=document.getElementById("productDescriptionInput").value;
    clear();

    localStorage.setItem("products", JSON.stringify(productContainer));
    mainBtn.innerHTML=`<button  onclick="addProducts()" class="btn btn-info text-white">  Add product  </button>`
displayProducts(productContainer)
  }