//following IF statement checks if the document is loaded before accessing the different parts of the codes in this document
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded',ready);
  ready();
} else {
  ready();
}

//when the DOM is loaded the ready function starts to run
//the different sections of this ready() function, sets up all the event listeners for all the food items that are
// already loaded into the document which was checked in the above IF statement.
function ready() {
  var removeAddedFoods = document.getElementsByClassName("remove-button");
  for (var counter = 0; counter < removeAddedFoods.length; counter++) {
    var button = removeAddedFoods[counter];
    button.addEventListener('click', removeA_SingleCartItem);
  }
  var quantityPerFood = document.getElementsByClassName("quantity-input");
  for (var counter = 0; counter < quantityPerFood.length; counter++) {
    var Qinput = quantityPerFood[counter];
    Qinput.addEventListener('change', editTheQuantity);
  }

  var buttonforAddtocart = document.getElementsByClassName("addtocart-btn");
  for (var counter = 0; counter < buttonforAddtocart.length; counter++) {
    var add_button = buttonforAddtocart[counter];
    add_button.addEventListener('click', finalAddToCart);
  }

  document.getElementsByClassName("purchase-button")[0].addEventListener('click', purchaseAllSelectedFood);
}

//Following are the different events that are going to do different things in the food CART

//This function Update the quantity and makes sure that the user is not given the opportunity to add a
//negative value or a text as quantity
function editTheQuantity(event) {
  var Qinputelement = event.target;
  if (isNaN(Qinputelement.value) || Qinputelement.value <= 0) {
    Qinputelement.value = 1;
  }
  updatefoodcart();
}

//This function is used to remove a food item from the cart
function removeA_SingleCartItem(event) {
  var buttonclicked = event.target;
  buttonclicked.parentElement.parentElement.remove();
  updatefoodcart();
}

//following function updates the final total of the food cart together with the
//newly added food items or new quantities if any
function updatefoodcart()
{
  var foodCartItems = document.getElementsByClassName("allcartitems")[0];
  var foodCartRows = foodCartItems.getElementsByClassName("addtocart-row");
  var total = 0;
  for (var counter = 0; counter < foodCartRows.length; counter++) {
    var foodCartRow = foodCartRows[counter];
    var singlefoodCartPrice = foodCartRow.getElementsByClassName("price-addtocart")[0];
    var singlefoodCartQuantity = foodCartRow.getElementsByClassName("quantity-input")[0];
    var foodPrice = parseFloat(singlefoodCartPrice.innerText.replace('$',''));
    var foodQuantity = singlefoodCartQuantity.value;
    total += (foodPrice * foodQuantity); //calculates the new filan cart total
  }
  total = Math.round(total * 100) /100; //this will make sure that the number of decimals are only 2
  document.getElementsByClassName("food-sum-price")[0].innerText = '$' + total;
}

//this function create the code for the add to cart button in each food item.
//The following function grabs the title price and the image of the food item and displays it on the cart
function finalAddToCart(event) {
  var TargetThebutton = event.target;
  var fooditem = TargetThebutton.parentElement.parentElement;
  var foodtitle = fooditem.getElementsByClassName("foodtitle")[0].innerText;
  var foodprice = fooditem.getElementsByClassName("foodprice")[0].innerText;
  var foodimage = fooditem.getElementsByClassName("cardImage cardItem")[0].src;
  addAnewFoodtoCart(foodtitle, foodprice, foodimage);
  updatefoodcart(); //this function call will make sure that the final cart total is updated with the nexly added food item
}

//following function makes sure that the nexly added food items from the add to cart button
//is displayed in the cart and the final food cart sum is updated by connecting the necessary
//event listeners at the end of the function
function addAnewFoodtoCart(foodtitle, foodprice, foodimage) {
  //creating a new food item in the cart as the customer selects
  var newrow = document.createElement("div");
  newrow.classList.add("addtocart-row");
  var newcartitems = document.getElementsByClassName("allcartitems")[0];
  var cardfoodnames = newcartitems.getElementsByClassName("cart-food-title");
  for (var counter = 0; counter < cardfoodnames.length; counter++) {
    if (cardfoodnames[counter].innerText == foodtitle) {
      alert("The item is already in the cart. Increment from the cart.");
      return;
    }
  }
  var newCartrowContents = `
    <div class="item-addtocart addtocart-column">
      <img class="cart-image" src="${foodimage}" width="100" height="100">
      <span class="cart-food-title">${foodtitle}</span>
    </div>
    <span class="price-addtocart addtocart-column">${foodprice}</span>
    <div class="quantity-addtocart addtocart-column">
      <input class="quantity-input" type="number" value="1">
      <button class="remove-button" type="button">Remove</button>
    </div>`
  newrow.innerHTML = newCartrowContents; //innerHTML because we are not passing string but a whole HTML section
  newcartitems.appendChild(newrow); //will add the new food item into the cart

  //must connect the following event eventListeners again because the nex items weren't added when the initial
  //setup of event listeners were done in the ready() function because they were added after the event function was called.
  newrow.getElementsByClassName("remove-button")[0].addEventListener('click',removeA_SingleCartItem);
  newrow.getElementsByClassName("quantity-input")[0].addEventListener('change',editTheQuantity);
}

//following function sends the customer an alert when the customer press the PURCHASE button. Then
//clears all food items from the cart and makes the cart total to 0
function purchaseAllSelectedFood(event) {
  alert("Thankyou For Your Purchase from Fannie Bay Super Pizza!!");
  var allCurrentFoodsinCart = document.getElementsByClassName("allcartitems")[0];
  while (allCurrentFoodsinCart.hasChildNodes()) {
    allCurrentFoodsinCart.removeChild(allCurrentFoodsinCart.firstChild);
  }
  updatefoodcart();
}
