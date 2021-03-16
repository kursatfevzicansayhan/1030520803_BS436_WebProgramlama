//Fotoğraflarımızın bulunduğu liste
var pics = [
    'img/cat.png' ,
    'img/dog.png',
    'img/dog.png'
]
//Kazanma veya kaybetme durumunu belirleyecek sayaç
var counter =0;

//Fotoğraf listesinden fotoğrafları çağırmak için indis listesi
var indis = [0,1,2];

shuffle(indis);

//Fotoğrafların her seferinde farklı gelmesi için indis listesinin her seferinde değişmesini sağlayacak fonksiyon
function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

//Kartları açmamıza yarayan fonksiyon
function turnCard(id)
{

    image = document.getElementById(id);
    pic = pics[indis[indis.length-1]] //rastgele fotoğrafın belirlenmesi
    image.src = pic;        //karta rastgele fotoğraf atandı
    image.onclick="";       //kartın fotoğrafı tekrar değişmemesi için onclick disable yapıldı
    counter = counter + 1;

    //kullanıcı kedi fotoğrafını bulduysa kazanıcak
    if(pic == "img/cat.png")
    {

        console.log("kazandınız");
        document.getElementById("img0").onclick="";
        document.getElementById("img1").onclick="";
        document.getElementById("img2").onclick="";
        document.getElementById("kazandiId").style.display="inline"
        kazandınız = document.getElementById("kazandiId").innerText = "Kazandınız";
        document.getElementById("newgame").style.display="inline"

    }
    //eğer kedi fotoğrafı gelmediyse ve sayaç 2 den fazla olduysa
    //kullanıcı kaybedicek
    else if(pic != "img/cat.png" && counter == 2)
    {
        console.log("kaybettiniz")
        document.getElementById("img0").onclick="";
        document.getElementById("img1").onclick="";
        document.getElementById("img2").onclick="";
        document.getElementById("yenildiId").style.display="inline"
        document.getElementById("yenildiId").innerHTML = "KAYBETTİNİZ";
        document.getElementById("newgame").style.display="inline"
    }
}
window.turnCard = turnCard;
//yeni oyunu başlatmak için gerekli fonksiyon
function newgame()
{
    location.reload();
}
window.newgame = newgame;





