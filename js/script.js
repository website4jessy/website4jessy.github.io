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
  } else if ( $(window).height() > 361 && $(window).height() <= 1090 ){
    var kedua = 310;
    var ketiga = 613;
    // var baru = 300;
    // var baru2 = 350;
    console.log('itu');
  }
  if (hScroll >= kedua && charIndex >= 224) {
    console.log('jalan')
    $('.container.kedua').addClass('muncul')
  }
  if (hScroll >= ketiga && charIndex >= 224) {
    console.log('jalan ketiga')
    $('.container.ketiga').addClass('muncul')
  }
})

const myText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const textArray = ["Semoga dihari yang spesial ini, jadi hari yang spesial buat kamu, Selalu di beri umur yang panjang dari yang maha kuasa, Semoga di tahun ini, menjadi pribadi yang lebih baik dari sebelum nya.. Sehat terus yaa!!! ammiiin .... "];
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