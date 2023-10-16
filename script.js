//selecting inputs
var title = document.getElementById("title")
var desc = document.getElementById("desc")
var price = document.getElementById("price")
// var imagee = document.getElementById("imagee")
var limit = document.getElementById("limit")
var protitile = document.getElementById("protitile")
var prodesc = document.getElementById("prodesc")
var proprice = document.getElementById("proprice")
var proimg = document.getElementById("proimg")
var totalamount = document.getElementById("totalamount")
//btn
 var addche = document.getElementById("addche")

//onchange image function
// var loadFile = function(event) {
//   var output = document.getElementById('output');
//   output.src = URL.createObjectURL(event.target.files[0]);
//   output.onload = function() {
//     URL.revokeObjectURL(output.src) // free memory
//   }
// };
var fileInput = document.getElementById('fileInput');
var imagePreview = document.getElementById('imagePreview');

fileInput.addEventListener('change', function() {
    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onload = function(event) {
        imagePreview.src = event.target.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});

document.getElementById('saveButton').addEventListener('click', function() {
  var file = fileInput.files[0];

  if (file) {
      var reader = new FileReader();

      reader.onload = function(event) {
          localStorage.setItem('savedImage', event.target.result);
          // window.location.href = 'retrieve.html'; // Redirect to the second page
      };

      reader.readAsDataURL(file);
  }
});




//btn function
function add() {
  // var imageElement = document.getElementById('image-preview');

  // var imageDataURL = imageElement.src;

  // localStorage.setItem('savedImage', imageDataURL);
  localStorage.setItem('titlee', title.textContent);


  protitile.textContent=title.value.substring(0,20)
  prodesc.textContent=desc.value.substring(0,50)+"..........."
  proprice.textContent="₹"+price.value



  // proimg
  var proimg = localStorage.getItem('savedImage');
  if (proimg) {
      document.getElementById('proimg').src = proimg;
  }

  

  // title 
  if (title.value) {
    console.log("hello");
    title.style.borderColor="green"
  }else{
    title.style.borderColor="red"
  }
  // desc
  if (desc.value) {
    console.log("hello");
    desc.style.borderColor="green"
  }else{
    desc.style.borderColor="red"
  }
  // price
  if (price.value) {
    console.log("hello");
    price.style.borderColor="green"
  }else{
    price.style.borderColor="red"
  }
  // imagee
  if (fileInput.value) {
    console.log("hello");
    fileInput.style.color="green"
  }else{
    fileInput.style.color="red"
  }
  // limit
  if (limit.value) {
    console.log("hello");
    limit.style.borderColor="green"
  }else{
    limit.style.borderColor="red"
  }

  if(limit.value && fileInput.value && price.value && desc.value && title.value){
    addche.innerHTML="<button type='submit' class='btn btn-primary'  data-dismiss='modal'>Confirm</button>"
    console.log(addche.innerHTML);
  }else{
    console.log("ggjh");
    addche.innerHTML="<button type='submit' class='btn btn-primary' onclick='add()' >Add</button>"
  }
}




var dropLabel = document.getElementById("dropLabel")
dropLabel.addEventListener("click",function(){

  addche.innerHTML="<button type='submit' class='btn btn-primary' onclick='add()' >Add</button>"
})





//selecting plus minus and value
var minus = document.querySelector(".minus")
var plus = document.querySelector(".plus")
var valueadd = document.querySelector(".valueadd")
var Max = document.querySelector("#Max")
var valuee = 0
plus.addEventListener("click",function(){
  valuee =valueadd.textContent
  if(valueadd.textContent==limit.value){
    Max.textContent="Reached Max Limit"
    valueadd.textContent=parseInt(limit.value)
  }else{
    Max.textContent="Limit"
    valueadd.textContent = parseInt(valuee)+1
    totalamount.value= valueadd.textContent*price.value

  }

})
minus.addEventListener("click",function(){
  valuee =valueadd.textContent
  if(valuee == 0){
    valueadd.textContent = 0    
    Max.textContent="Limit"
  }else{
  valueadd.textContent = parseInt(valuee)-1
  Max.textContent="Limit"
  totalamount.value= valueadd.textContent*price.value

  }

})

// var shop = document.getElementById("shop")
function shop() {
  alert("Successfully ordered :"+protitile.textContent)
}