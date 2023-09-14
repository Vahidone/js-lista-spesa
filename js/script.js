
const shopingList = ["Latte", "Pane", "Uova", "Frutta", "Verdura"];
        
  
let i = 0;
  
  
const shopingListPrint = document.getElementById("lista-spesa");
  
 
while (i < shopingList.length) {
  const article = shopingList[i];
      
  i++;

  const listItem = document.createElement("li");
  listItem.textContent = article;
    
    
  shopingListPrint.append(listItem);
         
}