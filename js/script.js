var kedua = 0;
var ketiga = 0;
let hScroll;
let charIndex = 0;

$(window).on('load', function() {
  // console.log('oke');
  $('.pKanan').addClass('pmuncul');
});

$(window).scroll(function() { 
  hScroll = $(this).scrollTop();
  console.log(hScroll);
  console.log('charindex : ' + charIndex)
  if ( $(window).height() <= 360 ){
    var kedua = 207;
    var ketiga = 268;
    // var baru = 368;
    // var baru2 = 390;
    console.log('yang ini');
  } else if ( $(window).height() > 361 && $(window).height() <= 670 ){
    var kedua = 470;
    var ketiga = 600;
    // var baru = 300;
    // var baru2 = 350;
    console.log('itu');
  } else {
    var kedua = 370;
    var ketiga = 500;
  }
  if (hScroll >= kedua && charIndex >= 650) {
    console.log('jalan')
    $('.container.kedua').addClass('muncul')
  }
  if (hScroll >= ketiga && charIndex >= 650) {
    console.log('jalan ketiga')
    $('.container.ketiga').addClass('muncul')
  }
})

const myText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

// Smoga di umur yang sekarang Kamu makin dewasa , makin sayang kluarga sayang aku makin baik hati . trimakasih sudah tulus nemenin aku dari 0 udah sabar nemenin aku dari yg blm apa apa jadi apa apa smoga hubungan kita langgeng sampe kakek nenek . pokoknya doa yg trbaik untuk km . doain aku lancar melakukan pekerjaan ku ya nanti suatu saat nanti aku bakal bales ketulusan km syg . trbaik untuk km sygku akuu syggg kmmmmm  ❤

const textArray = ["Semoga dihari yang spesial ini, jadi hari yang spesial buat kamu, Selalu di beri umur yang panjang dari yang maha kuasa, Semoga di tahun ini, menjadi pribadi yang lebih baik dari sebelum nya... ,makin sayang kluarga sayang aku makin baik hati . trimakasih sudah tulus nemenin aku dari 0 udah sabar nemenin aku dari yg blm apa apa jadi apa apa smoga hubungan kita langgeng sampe kakek nenek . pokoknya doa yg trbaik untuk km... Jangan Suka ngambek - ngambek lagi yaa sayangkuu..... Sehat terus yaa!!! Amiin...  doain aku lancar melakukan pekerjaan ku ya nanti suatu saat nanti aku bakal bales ketulusan km syg . trbaik untuk km sygku akuu syggg kmmmmm  ❤"];
const typingDelay = 150;
const newTextDelay = 2000;
let textArrayIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    $('.cursor').addClass('blink')
    if (!cursor.classList.contains("typing")) cursor.classList.add("typing")
    myText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    if (textArray[textArrayIndex].charAt(charIndex) === "." || textArray[textArrayIndex].charAt(charIndex) === ",") {
      setTimeout(type, 500);
    } else {
      setTimeout(type, typingDelay);
    }
  } else {
    cursor.classList.remove("typing")
    $('.container.kanan').addClass('muncul')
  }
}

var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");
var txtArea = document.getElementById("salamHangat") ;

icon.onclick = function() {
  $('.container.hide').addClass('muncul')
  if (mySong.paused) {
    mySong.play()
    icon.src = "img/giftopen.png"
  }
  setTimeout(type, 3000)
  type()
}