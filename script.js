// ? SORU1 fullName adında bir fonksiyon tanımlayın ve bu fonksiyon tam adınızı yazdırsın.
/* function fullName(firstName, lastName){
    console.log(`ad: ${firstName} soyadı: ${lastName}`);
}

fullName("Nurdoğan","Bahadır") */

// ? SORU4 Bir dikdörtgenin alanı şu şekilde hesaplanır: alan = uzunluk x genişlik . areaOfRectangle değerini hesaplayan bir fonksiyon yazın .

/* const areaOfRectangle=(uzunluk,genislik)=> uzunluk*genislik
console.log(areaOfRectangle(10,15));  */

// ? SORU5 Bir dikdörtgenin çevresi şu şekilde hesaplanır: perimeter= 2x(length + width) . perimeterOfRectangle değerini hesaplayan bir fonksiyon yazın .

/* const dikdortgen = (uzunluk, genislik) => 2 * (uzunluk + genislik);
console.log(dikdortgen(20,10)); */

// ? SORU6 Dikdörtgen prizmasının hacmi şu şekilde hesaplanır: volume = uzunluk x genişlik x yükseklik . volumeOfRectPrism'i hesaplayan bir fonksiyon yazın .

/* const prizmaHacmi = (uzunluk, genislik, yukseklik) =>
  uzunluk * genislik * yukseklik;
console.log(prizmaHacmi(10,10,10)); */

// ? MÜKEMMEL SAYI

/* function mukemmelSayi(num){
  toplam=0;
  for(let i = 0;i<=num;i++){
    if(num % i == 0){
      toplam+=i;
    } 
  } 
  if(toplam==num*2){
    console.log("Mükemmel Sayı");
  } else{
    console.log("Mükemmel sayı değil...");
  }
}
console.log(mukemmelSayi(6));
 */