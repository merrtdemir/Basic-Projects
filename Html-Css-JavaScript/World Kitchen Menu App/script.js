
const meals =[

   { id:1,title:"Chicken Teriyaki", category:"Asia", price:"8.20", img:"images/teriyaki.png",desc:"Chicken thighs or breasts, soy sauce, brown sugar, garlic, ginger, and a cooking oil." },
   { id:2,title:"Chow Mein",category:"Asia",price:"4.50",img:"images/chow_mein.png",desc:"Noodles, a mix of crisp vegetables, a savory sauce, and your choice of protein." },
   { id:3,title:"Ramen",category:"Asia",price:"5.20",img:"images/ramen.png",desc:"fresh or dried noodles, a rich broth, flavored tare (seasoning), savory toppings,and boiled eggs."},
   { id:4,title:"Onigiri",category:"Asia",price:"10.00",img:"images/onigiri.png",desc:"Japanese short-grain rice, salt, water, and nori seaweed" },
   { id:5,title:"Wienerschnitzel",category:"Europa",price:"9.95",img:"images/schintzel.png",desc:"A thin slice of meat that is pounded flat, breaded, and pan-fried until golden and crispy" },
   { id:6,title:"Napoli Pizza",category:"Europa",price:"4.50",img:"images/pizza.png",desc:"Italian flatbread from Naples featuring a soft, thin center and a puffy, charred, airy crust"},
   {id:7,title:"Fish And Chips",category:"Europa",price:"5.25",img:"images/fish.png",desc:"Fish and chips is a hot popular meal made of battered, deep-fried white fish served with thick-cut fried potatoes"},
   {id:8,title:"Paella",category:"Europa",price:"7.50",img:"images/paella.png",desc:"Paella is a traditional Spanish rice dish flavored with saffron, vegetables, and meats or seafood, cooked in a wide, shallow pan"},
   {id:9,title:"Apple Pie",category:"America",price:"3.90",img:"images/applepie.png",desc:"An apple pie is a traditional baked fruit dessert with a sweet, spiced apple filling encased in a flaky pastry crust."},
   {id:10,title:"Cheese Burger",category:"America",price:"4.00",img:"images/burger.png",desc:"A classic American cheeseburger is a hot sandwich featuring a cooked ground beef patty topped with melted American cheese inside a sliced hamburger bun."},




]
document.addEventListener("DOMContentLoaded", function() {

  displayMeals(meals);
});


// urun bulma
/* // id'si 1 olan objeyi bulma
const findMeal = meals.find( meal => meal.id === 1 );
let a = document.querySelector("#test")
a.innerText=findMeal.desc
*/
let items = document.querySelector("#items")
function displayMeals(meals){
items.innerHTML = meals.map (meal=> `        
   
            <div class="col-sm-12 col-lg-6 d-flex mb-3 p-2">
               <div class="col-4 p-0">
                  <img  class="photo img-fluid" src="${meal.img}">
               </div>
               
               <div class="col-8 ps-3">
                 <div class="row ">
                     <h4 class="col-9 m-0 fs-5 fw-bold">${meal.title}</h4>
                     <h4 class="col-3 m-0 fs-5 text-end text-danger">${meal.price}$</h4>
                  </div>
                  <hr style="margin-bottom:3px;">
                  <p id="test" class="desc mb-0 ">${meal.desc}</p>
               </div>
            </div>`).join('');

}





const buttons = document.querySelector("#button_container")
buttons.addEventListener('click', function(event){

   if(event.target.tagName === 'BUTTON'){
      if (event.target.id === 'All') {
         displayMeals(meals)
      }
      else if(event.target.id === 'Asia'){
         const AsianMeals = meals.filter(meal => meal.category === "Asia")
         displayMeals(AsianMeals)
      }
            else if(event.target.id === 'Europa'){
         const EuropaenMeals = meals.filter(meal => meal.category === "Europa")
         displayMeals(EuropaenMeals)
      }
                  else if(event.target.id === 'America'){
         const AmericanMeals = meals.filter(meal => meal.category === "America")
         displayMeals(AmericanMeals)
      }
   }

})
















/*    
   Alternatif Kullanım

   meals.forEach(meal => {
   items.innerHTML +=`        
   
            <div class="col-sm-12 col-md-6 d-flex mb-3 p-2">
               <div class="col-4 p-0">
                  <img  class="photo img-fluid" src="${meal.img}">
               </div>
               
               <div class="col-8 ps-3">
                 <div class="row ">
                     <h4 class="col-9 m-0 fs-5 fw-bold">${meal.title}</h4>
                     <h4 class="col-3 m-0 fs-5 text-end text-danger">${meal.price}$</h4>
                  </div>
                  <hr style="margin-bottom:3px;">
                  <p id="test" class="desc mb-0 text-muted">${meal.desc}</p>
               </div>
            </div>`

})       
*/





