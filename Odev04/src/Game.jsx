import React, {Component} from 'react';

let pics = [
    'img/cat.png' ,
    'img/dog.png',
    'img/dog.png'
]

let counter =0;


let indis = [0,1,2];
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
shuffle(indis);
console.log(indis);

export class Game extends Component {


    handleClick = (id) => {

        const image = document.getElementById(id);
        const pic = pics[indis[indis.length-1]];
        image.src = pic;
        counter = counter + 1;
        indis.pop()

        if(pic === "img/cat.png")
        {
            console.log("kazandınız");
            document.getElementById("kazandiId").style.display="inline"
            document.getElementById("kazandiId").innerText = "Kazandınız";
            document.getElementById("newgame").style.display="inline"
            document.getElementById("img0").onclick=null;
        }

        else if(pic !== "img/cat.png" && counter === 2)
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
                <img id='img0' className="kart" src='img/card.png' onClick={((e) => this.handleClick("img0"))}></img>
                <img id='img1' className="kart" src='img/card.png' onClick={((e) => this.handleClick("img1"))}></img>
                <img id='img2' className="kart" src='img/card.png' onClick={((e) => this.handleClick("img2"))}></img>


            </div>
        )
    }

}

