import React, {Component} from 'react';

export class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cat: Math.floor(Math.random()*3),
            durum: undefined,
            card: ["img/card.png","img/card.png","img/card.png"],
            counter: 0,
            gameover: false
        }
    }
    turnCard = (index) => {
        const { card, cat, counter, gameover } = this.state;

        if(!gameover){
            const yeniKart = [...card];
            let durum;

            if(cat===index){
                yeniKart[index] = "img/cat.png";
                durum = "!! Kazandınız !!"
            }else {
                yeniKart[index] = "img/dog.png";
                if(counter===1){
                    durum = "! Kaybettiniz !"
                }
            }
            this.setState({
                card:yeniKart,
                counter: this.state.counter+1,
                durum
            });

            if(durum){
                this.setState({
                    gameover: true
                })
            }
        }
    }

    yeniOyun = () => {
        this.setState({
            cat: Math.floor(Math.random()*3),
            durum: undefined,
            card: ["img/card.png","img/card.png","img/card.png"],
            counter: 0,
            gameover: false
        })
    }



    render() {
        const {card,durum} = this.state;
        return(
            <div>
                <img id='img0' className="kart" src={card[0]} onClick={()=>{this.turnCard(0)}}></img>
                <img id='img1' className="kart" src={card[1]} onClick={()=>{this.turnCard(1)}}></img>
                <img id='img2' className="kart" src={card[2]} onClick={()=>{this.turnCard(2)}}></img>
                <div className="mesaj">
                    <p>{durum?durum:"Kedi kartını bulmak için kartın üzerine tıklamalısın."}</p>
                    {durum && <p>
                        Yeni bir oyun oynamak istersen <span onClick={this.yeniOyun} className='link'>buraya</span> tıklayabilirsin.
                    </p>}
                </div>
            </div>

        )
    }

}

