var allProduct=[];
if(localStorage.getItem('ourProducts')!=null)
{
  allProduct=JSON.parse(localStorage.getItem('ourProducts'));
  displayProduct();
}
var updateIndex;
var productNameInput=document.getElementById("productName");
var productPriceInput=document.getElementById("productPrice");
var productCategoryInput=document.getElementById("productCategory");
var productDescriptionInput=document.getElementById("productDescription");

function pushProduct(){
  if(document.getElementById('mainBtn').innerHTML=="Add Product"){
    addProduct();
  }else{
    updateProduct();
  }
}



function addProduct(){


if(validation()){  var product=
  {
    name:productNameInput.value,
    price:productPriceInput.value,
    category:productCategoryInput.value,
    Description:productDescriptionInput.value,
  }
  allProduct.push(product);
  localStorage.setItem('ourProducts',JSON.stringify(allProduct));
  displayProduct();}
  else(
    alert("please Enter Right data ")
  )




 

}



function displayProduct(){
  var productTable=``;
  for(var i =0; i<allProduct.length;i++){
    productTable+=`
      <tr>
      <td>${i}</td>
      <td>${allProduct[i].name}</td>
      <td>${allProduct[i].price}</td>
      <td>${allProduct[i].category}</td>
      <td>${allProduct[i].Description}</td>
      <td> <button onclick='update(${i})' class="btn-sm rounded-pill border-0 btn-warning ">Update</button></td>
      <td> <button onclick='deleteProduct(${i})' class="btn-sm border-0 rounded-pill btn-danger ">Delete</button></td>
      </tr>`;

  }
  document.getElementById("productTable").innerHTML=productTable;
}
function deleteProduct(index){
  allProduct.splice(index,1);
  localStorage.setItem('ourProducts',JSON.stringify(allProduct));
  displayProduct();
}

function searchProduct(term){
filterProduct=``;
for(i=0;i<allProduct.length;i++)
{
  if(allProduct[i].name.toLowerCase().includes(term.toLowerCase()))
  {
    filterProduct+=` <tr>
    <td>${i}</td>
    <td>${allProduct[i].name}</td>
    <td>${allProduct[i].price}</td>
    <td>${allProduct[i].category}</td>
    <td>${allProduct[i].Description}</td>
    <td> <button onclick='update(${i})' class="btn-sm rounded-pill border-0 btn-warning ">Update</button></td>
    <td> <button onclick='deleteProduct(${i})' class="btn-sm border-0 rounded-pill btn-danger ">Delete</button></td>
    </tr>`;
  }
}

if(filterProduct==``)
{
  document.getElementById("productTable").innerHTML="Not found";

}else{
document.getElementById("productTable").innerHTML=filterProduct;
}
}

function update(index){
 updateIndex=index;
 productNameInput.value=allProduct[index].name;
 productPriceInput.value=allProduct[index].price;
 productCategoryInput.value=allProduct[index].category;
 productDescriptionInput.value=allProduct[index].Description;
 document.getElementById('mainBtn').innerHTML="Update";
}

function  updateProduct(){

  if(validation()){
  allProduct[updateIndex].name=productNameInput.value;
  allProduct[updateIndex].price=productPriceInput.value;
  allProduct[updateIndex].category=productCategoryInput.value;
  allProduct[updateIndex].Description=productDescriptionInput.value;
  localStorage.setItem('ourProducts',JSON.stringify(allProduct));
  displayProduct();
  document.getElementById('mainBtn').innerHTML="Add Product";
  }else{
    alert("Enter Valid data");
  }
}

function clearForm(){
  productNameInput.value=" ";
  productPriceInput.value=" ";
  productCategoryInput.value=" ";
  productDescriptionInput.value=" ";
  }

  function validation(){
var maxnum= /^[0-9]{2,6}$/;
var testname=/^[a-zA-Z0-9]{3,15}$/;
var testcateg=/^[a-zA-Z0-9]{2,10}$/;
var x=Number(productPriceInput.value);
if(
maxnum.test(x)==true&&
testname.test(productNameInput.value)==true&&
testcateg.test(productCategoryInput.value)==true&&
testname.test(productDescriptionInput.value)==true

){
  return true;
}
else{
  return false
}
//  var testname=/^[a-zA-Z0-9]{1,15}$/gm;
//  var testdes=/^[a-zA-Z0-9]{1,5}$/gm;
 

  }

