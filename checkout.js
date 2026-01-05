//? map filter, dest, bubbling kullanilarak checkout page olusturulacak

//!table da kullanılacak değişkenler
const tax = 0.18;
const shipping = 15.0;

let sepettekiler = [
  { name: "Vintage Backpack", price: 34.99, piece: 1, img: "./img/photo1.png" },
  { name: "Levi Shoes", price: 40.99, piece: 1, img: "./img/photo2.png" },
  { name: "Antique Clock", price: 69.99, piece: 1, img: "./img/photo3.jpg" },
];

sepettekiler.forEach(({ img, name, price, piece }) => {
  // dest
  //   const{img,name,price}=urun demek yerine foeach in icinde direk dest yapabiliriz

  document.querySelector("#product-rowlari").innerHTML += `
    <div class="card mb-3" style="max-width: 540px;">

  <div class="row ">

    <div class="col-md-5 ">
      <img src=${img}  class=" w-100 h-100 rounded-start object-fit-cover" alt="...">
    </div>

    <div class="col-md-7 ">

      <div class="card-body">
      
        <h5 class="card-title">${name}</h5> 
        
             <div class="ürün-price">
                    <p class="text-success h2">$
                      <span class="indirim-price">${(price * 0.7).toFixed(2)} </span>
                      <span class="h5 text-danger text-decoration-line-through">${price}</span>
                    </p>
                  </div>

                  
                  <div
                    class="border border-1 border-dark shadow-lg d-flex justify-content-center p-2"
                  >
                    <div class="adet-controller ">
                      <button class="btn btn-secondary btn-sm minus">
                        <i class="fas fa-minus"></i>
                      </button>
                      <p class="d-inline mx-3" id="ürün-adet">${piece}</p>
                      <button class="btn btn-secondary btn-sm plus">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>

                  </div>

                  <div class="ürün-removal mt-4">
                    <button class="btn btn-danger btn-sm w-100 remove-product">
                      <i class="fa-solid fa-trash-can me-2"></i>Remove
                    </button>
                  </div>

                  <div class="mt-2">
                    Ürün Toplam: $<span class="product-total">${(price * 0.7 * piece).toFixed(2)} </span>
                  </div>
      </div>
    </div>
  </div>
</div>
    `;
});
//! inner html de kullanilan degerlerin ismini yazarken bosluk vs birakma yanina veya sonuna cunku hata verir kiyaslama yapmak istersek.

