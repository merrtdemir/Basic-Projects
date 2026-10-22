
let input_Text = document.querySelector("#input_text")
let buton = document.querySelector("#buton")
let ekle = document.querySelector("#ekle")
let ul_element = document.querySelector("#ul_element")
const Saved_List =localStorage.getItem('element')
let alert_area =document.querySelector("#alert-area")

if (Saved_List) {
   ul_element.innerHTML=Saved_List;
}

ekle.addEventListener("click", Ekle)
function Ekle() {

   if (input_Text.value.trim() !=="") {
 
      const list_item = document.createElement("li")
      const newDiv =document.createElement("div")
      ul_element.appendChild(list_item)
      list_item.appendChild(newDiv)
      list_item.classList="pt-3 list_item"
      const Notes =document.createElement("h4")
      Notes.classList=("notes")
      const RemoveButton=document.createElement("span")
      RemoveButton.innerHTML="x"
      RemoveButton.classList="removebutton"
      Notes.innerHTML=input_Text.value;
      newDiv.append(Notes,RemoveButton)
      newDiv.classList="d-flex justify-content-between newDiv"
      input_Text.value="";
      localStorage.setItem('element',ul_element.innerHTML)
      alert_area.classList.add("alert", "alert-success")
      alert_area.innerHTML="Başarıyla Eklendi!";
    setTimeout(() => {
      alert_area.classList=""
      alert_area.innerHTML=""
}, 5000);
      
   } 

   else {
      alert_area.classList.add("alert", "alert-danger")
      alert_area.innerHTML="Not Alanı Boş Bırakılamaz!";
    setTimeout(() => {
      alert_area.classList=""
      alert_area.innerHTML=""
}, 5000);
   }

   


}
  ul_element.addEventListener("click",function (e){

   if(e.target.classList.contains("removebutton")){
      e.target.closest("li").remove();
      localStorage.setItem('element',ul_element.innerHTML)}
      
      if(e.target.classList.contains("notes")){
            if (e.target.classList.contains("ust_cizme")) {
         e.target.classList.remove("ust_cizme");
      } 
     
      else {
         e.target.classList.add("ust_cizme");
      }
}


 

  }
    
)