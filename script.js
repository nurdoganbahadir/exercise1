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

//? Bir dairenin alanı şu şekilde hesaplanır: alan = π xrxr . areaOfCircle'ı hesaplayan bir fonksiyon yazın

const daireAlan = (r) => Math.PI * (r * r);
console.log(daireAlan(5));

// ? Bir dairenin çevresi şu şekilde hesaplanır: circumference = 2πr . circumOfCircle'ı hesaplayan bir fonksiyon yazın

const daireCevre = (r) => {
  return 2 * Math.PI * r;
};
console.log(daireCevre(3));

// ? Bir maddenin yoğunluğu şu şekilde hesaplanır: yoğunluk = kütle/hacim . Yoğunluğu hesaplayan bir fonksiyon yazın

const maddeYogunluk = (kutle, hacim) => kutle * hacim;
console.log("yoğunluk:", maddeYogunluk(10, 20));

// ? Hız, hareket eden bir nesnenin kat ettiği toplam mesafenin, toplam harcanan zamana bölünmesiyle hesaplanır. Hareket eden bir nesnenin hızını hesaplayan bir fonksiyon yazın, hız .

/* const speed = () => {
  let mesafe = +prompt("lütfen kaç ettiğiniz kilometreyi yazınız.");
  let zaman = +prompt(
    "lütfen saat olarak ne kadar süre yol aldığınızı yazınız:"
  );
  return (mesafe / zaman);
};
console.log(`hızını saatte`,speed(),"km/h'dir"); */

// ? Bir maddenin ağırlığı şu şekilde hesaplanır: ağırlık = kütle x yer çekimi . Ağırlığı hesaplayan bir fonksiyon yazınız .

/* const agirlik = (kutle) => (kutle * 9.81).toFixed(2); //to fixed ifadesi string'e dönüştürür.
console.log("ağırlık:", agirlik(10)); */

// ? oC cinsinden sıcaklık, şu formül kullanılarak oF'ye dönüştürülebilir: oF = (oC x 9/5) + 32. oC'yi oF'ye convertCelsiusToFahrenheit olarak dönüştüren bir fonksiyon yazın .

/* const sicaklikC = (oC) => (oC * 9) / 5 + 32;
console.log("oF:", sicaklikC(8)); */

// ? Vücut kitle indeksi (VKİ) şu şekilde hesaplanır: VKİ = kg cinsinden ağırlık / (boy x boy) m2 cinsinden . VKİ'yi hesaplayan bir fonksiyon yazın . VKİ, 20 yaş ve üzeri yetişkinlerde farklı kilo gruplarını genel olarak tanımlamak için kullanılır . Aşağıda verilen bilgilere göre bir kişinin zayıf, normal, kilolu veya obez olup olmadığını kontrol edin.

/* const vki = (kg, boy) => {
  let sonuc = kg / (boy * boy);
  if (sonuc <= 18) {
    console.log("zayıfsınız");
  } else if (sonuc <= 22) {
    console.log("normal");
  } else if (sonuc <= 30) {
    console.log("kilolusunuz");
  } else {
    console.log("obez");
  }
  return sonuc;
};
console.log("Vücut Kitle İndeksiniz:", vki(72, 1.85)); */

// ? checkSeason adında bir fonksiyon yazın , bir ay parametresi alın ve mevsimi döndürün: Sonbahar, Kış, İlkbahar veya Yaz.

/* const chechSeason = () => {
  let aylar = prompt("Lütfen bir ay yazınız.");
  if (aylar === "mart" || aylar === "nisan" || aylar === "mayıs") {
    console.log("ilkbahar");
  } else if (aylar === "haziran" || aylar === "temmuz" || aylar === "ağustos") {
    console.log("yaz");
  } else if (aylar === "eylül" || aylar === "ekim" || aylar === "kasım") {
    console.log("sonbahar");
  } else if (aylar === "aralık" || aylar === "ocak" || aylar === "şubat") {
    console.log("kış");
  } else {
    console.log("yanlış değer girdiniz");
  }
};
chechSeason(); */

// ? Math.max en büyük argümanını döndürür. Üç argüman alan ve Math.max metodunu kullanmadan maksimumlarını döndüren findMax adlı bir fonksiyon yazın.

/* const findMax=(a,b,c)=> {
  if(a>b && a>c){
    console.log("En büyük sayı a'dır");
    return
  } else if(a>b && a<c){
    console.log("en büyük sayı c'dir");
    return
  } else if(b>a && b>c){
    console.log("en büyük sayı b'dir");
    return
  } else if(b>a && b<c){
    console.log("en büyük sayı c'dir");
    return
  } 
}
findMax(15,1,20); */

// ? BİNARY

/* binary(10); */

/* const binary = (num) => {
  let toplam = num / 2
  while (true) {
    if (num / 2 == 1) {
      toplam += 1;
    } else if (num / 2 == 0) {
      toplam += 0;
    }
  }
}; */

stringText = function (a) {
  text = "";
  for (i = 0; i <= a.length(); i++) {
    if (i == text.toUpperCase()) {
      text += text[i].toLowerCase();
    } else if (i == text.toLowerCase()) {
      text += text[i].toUpperCase();
    }
  }
  return text;
};
console.log(stringText("hello world"));
