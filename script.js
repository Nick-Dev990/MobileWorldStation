let cart= JSON.parse(localStorage.getItem("cart"))||[];

let toastTimeout;

  function showToast() {
    const toast = document.getElementById("toast");

    clearTimeout(toastTimeout);
    toast.classList.add("show");

    toastTimeout = setTimeout(() => {
      toast.classList.remove("show");
    }, 2000);
  }

window.addToCart=function (name, price, img){
    cart.push({name: name, price: price, img: img});

    const counter=document.getElementById("cart-count");

        counter.classList.add("animate");
        setTimeout(()=>{
            counter.classList.remove("animate");
        }, 300);

    showToast();

    displayCart();
  };

  function toggleCart(){
    const popup= document.getElementById("cart-popup");

        popup.classList.toggle("active");
        if (popup.classList.contains("active")){
            document.body.style.overflow="hidden";
    
    const scrollbarWidth=window.innerWidth-document.documentElement.clientWidth;
        document.body.style.paddingRight=scrollbarWidth+"px";
        }else{
            document.body.style.overflow="";
            document.body.style.paddingRight=""; 
        }
    }

  const cartPopup=document.getElementById("cart-popup");
  cartPopup.addEventListener("click", function (e){
    if (e.target===this){
        this.classList.remove("active");
        document.body.style.overflow="auto";
    }
  });
  

  function displayCart(){
    const itemsContainer=document.getElementById("cart-items");
    const totalElement=document.getElementById("cart-total");

    itemsContainer.innerHTML="";
    let total=0;

    cart.forEach((item, index)=>{
        total+=item.price;

        itemsContainer.innerHTML+=`
        <div class="cart-item">
        <img src="${item.img}" width="50">
        <div>
          <p>${item.name}</p>
          <p>£${item.price}</p>
          </div>
        </div>

        <!--Delete button-->
        <button onclick="removeFromCart(${index})">Remove</button>
          `;
    });
    totalElement.innerText="Total: £"+total;
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
  }

window.openProduct=function(name, price, img, desc){
    document.getElementById("product-display").style.display="flex";

    document.getElementById("display-title").innerText=name;
    document.getElementById("display-price").innerText="£"+price;
    document.getElementById("display-img").src=img;
    document.getElementById("display-desc").innerText=desc;


    document.querySelector(".close").onclick=function(){
        document.getElementById("product-display").style.display="none";
    };
    window.onclick= function(event){
        const modal= document.getElementById("product-display");
        if(event.target===modal) {
            modal.style.display="none";
        }
    }
}

function toggleSearch(){
    const container=document.querySelector(".search-container");
    const nav=document.querySelector(".nav");
    const input=document.getElementById("search-input");
    
    const isActive=container.classList.toggle("active");
    nav.classList.toggle("search-active", isActive);

    if (isActive){
        input.focus();
    }else{
        input.value="";
        searchProducts();
        document.getElementById("search-results").innerHTML="";
    }
}

function searchProducts(){
    const inputValue=document.getElementById("search-input").value.toLowerCase();
    const products=document.querySelectorAll(".product");
    const resultsContainer=document.getElementById("search-results");

    resultsContainer.innerHTML="";

    if(inputValue===""){
        products.forEach(product=>product.style.display="block");
        return;
    }
    products.forEach(product=>{
        const text=product.innerText.toLowerCase();

        if(text.includes(inputValue)){
        product.style.display="block";

        const name=product.querySelector("h3").innerText;
        const div=document.createElement("div");
        div.textContent=name;

        div.addEventListener("click",()=>{
        const selectedValue=name.toLowerCase();

        document.getElementById("search-input").value=name;
        resultsContainer.innerHTML="";

        products.forEach(p=>{
        const pName=p.querySelector("h3").innerText.toLowerCase();
                if (pName===selectedValue){
                    p.style.display="block";
               }else{
                    p.style.display="none";
        }
    });
});
              
    resultsContainer.appendChild(div);
 }else{
    product.style.display="none";
}
    });
}

function removeFromCart(index){
    const items=document.querySelectorAll(".cart-item");
    items[index].classList.add("removing");
    setTimeout(()=>{
    cart.splice(index,1);
    displayCart();
    },300);   
}

function clearCart(){
    cart=[];
    displayCart();
}

function updateCartCount(){
    const countElement=document.getElementById("cart-count");
    if(cart.length>0){
       countElement.innerText=cart.length;
       countElement.style.display="block";
    }else{
        countElement.style.display="none";
    }
}

function addCurrentProductToCart(){
    const name=document.getElementById("display-title").innerText;
    const price=document.getElementById("display-price").innerText;
    const img=document.getElementById("display-img").src;

    addToCart(name, price, img);
}

function buyNow(e){
    e.stopPropagation();
    alert("proceeding to checkout...");
}
const searchContainer=document.querySelector(".search-container");
const resultsContainer=document.getElementById("search-results");
 
document.addEventListener("click",(e)=>{
     if (!searchContainer.contains(e.targe)){
        resultsContainer.innerHTML="";
    }
});
