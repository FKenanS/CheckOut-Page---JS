//? map filter, dest, bubbling kullanilarak checkout page olusturulacak

//!table da kullanılacak değişkenler
const tax = 0.18;
const shipping = 15.0;

let sepettekiler = [
  { name: "Vintage Backpack", price: 34.99, piece: 1, img: "./img/photo1.png" },
  { name: "Levi Shoes", price: 40.99, piece: 1, img: "./img/photo2.png" },
  { name: "Antique Clock", price: 69.99, piece: 1, img: "./img/photo3.jpg" },
];

//!URUNLERI EKRANA BASTIRMA
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
                    Ürün Toplam: $<span class="product-total">${(price * 0.7 * piece).toFixed(2)}</span>
                  </div>
      </div>
    </div>
  </div>
</div>
    `;
});
//? inner html de kullanilan degerlerin ismini yazarken bosluk vs birakma yanina veya sonuna cunku hata verir kiyaslama yapmak istersek.

//!Fiyat Hesaplama Fonksiyonu 
// QuerySelectorAll ile butun fiyatlari cekip topluyoruz
//ama cekme islemi domda degisiklik yapildiktan sonra yapilmasi lazim
//nodelist olarak cekiyoruz o sebeple dizi haline getirip index ile ulasiyoruz
//reduce ile toplama yapilamaz nodelist oldugu icin. DIZI HALINE GETIRIP REDUCE KULLANABILIRIZ

// function olarak yazmaliyiz ki tekrar tekrar cagiralim

function calculateCardTotal(){
 const toplam =  document.querySelectorAll(`.product-total`)
 //console.log(Array.from(toplam)) //nodelisti arraye cevirdik
 const pToplam =Array.from(toplam).reduce((acc,item)=> acc + Number(item.textContent),0)
 //console.log(pToplam) //domdan cekilen fiyatlar string olarak geliyor //!number a ceviriyoruz
 // carpma cikarma islemi sadece stringlerde yapilir ondan number a cevirmeye gerek yok ama toplamada sarttir.

 //!   querySelectorAll(), statik bir NodeList döndürür.
  //!burada netten https://softauthor.com/javascript-htmlcollection-vs-nodelist/
  // Dizi Değil!
  // Bir NodeList bir dizi gibi görünebilir ama öyle değildir.
  // Bir NodeList içinde döngü yapabilir ve düğümlerine dizine göre başvurabilirsiniz.
  // Ancak, bir NodeList'te reduce(), push(), pop() veya join() gibi Array yöntemlerini kullanamazsınız.

  //? pToplam= en alttaki tüm ürünler için vergi ve kargo hariç sepettekilerin indirimli fiyat toplamı
  //?Reduce tam olarak Array istiyor, nodelist yeterli değil
 document.querySelector(`.productstoplam`).textContent = pToplam.toFixed(2)
 document.querySelector(`.vergi`).textContent = (pToplam * tax).toFixed(2)
 document.querySelector(`.kargo`).textContent = pToplam ? shipping.toFixed(2) : 0.0.toFixed(2)
 document.querySelector(`.toplam`).textContent = pToplam ? (pToplam + pToplam*tax + shipping).toFixed(2) : 0.0.toFixed(2)
}
removeButton();
calculateCardTotal();

//Silme Butonu
function removeButton(){
document.querySelectorAll(`.remove-product`).forEach((btn)=>btn.onclick=()=>{
  //? ekrandan silme
  btn.closest(`.card`).remove();
  calculateCardTotal(); //todo silme islemi yapildiktan sonra toplam fiyatin guncellenmesi gerekir.
})
}