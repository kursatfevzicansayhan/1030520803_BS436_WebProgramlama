import React from "react";
import ReactDOM from "react-dom";


let pics = [
    'img/cat.png' ,
    'img/dog.png',
    'img/dog.png'
]
//Kazanma veya kaybetme durumunu belirleyecek sayaç
let counter =0;

//Fotoğraf listesinden fotoğrafları çağırmak için indis listesi
let indis = [0,1,2];
function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
shuffle(indis)
console.log(indis)


class App extends React.Component {


    handleClick = (id) => {
        let image = document.getElementById(id);
        let pic = pics[indis[indis.length-1]]
        image.src = pic;
        counter = counter + 1;
        indis.pop()

        if(pic == "img/cat.png")
        {
            console.log("kazandınız");
            document.getElementById("kazandiId").style.display="inline"
            document.getElementById("kazandiId").innerText = "Kazandınız";
            document.getElementById("newgame").style.display="inline"

        }

        else if(pic != "img/cat.png" && counter == 2)
        {
            console.log("kaybettiniz");
            document.getElementById("yenildiId").style.display="inline";
            document.getElementById("yenildiId").innerHTML = "KAYBETTİNİZ";
            document.getElementById("newgame").style.display="inline";

        }


    }


    render() {

        return(
            <div>
                <img id="img0" value={"img0"}className="kart" src="img/card.png" onClick={((e) => this.handleClick("img0"))}></img>
                <img id="img1" value={"img1"}className="kart" src="img/card.png" onClick={((e) => this.handleClick("img1"))}></img>
                <img id="img2" value={"img2"}className="kart" src="img/card.png" onClick={((e) => this.handleClick("img2"))}></img>


            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById("root"));