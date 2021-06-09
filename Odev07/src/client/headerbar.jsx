import React,{Component} from "react";
import {Link} from "react-router-dom";
import {withRouter} from "react-router";

class HeaderBar extends Component{
    renderNotLoggedIn = () => {
        return(
            <React.Fragment>
                <p className="header-text">Giriş Yapmadınız</p>
                <div className="action-buttons">
                    <Link className="header-button" to="/login" tabIndex="0">
                        Giriş Yap
                    </Link>

                    <Link className="header-button" to="/signup" tabIndex="0">
                        Üye Ol
                    </Link>
                </div>
            </React.Fragment>
        )
    }

    renderLoggedIn = (userId) => {
        return (
            <React.Fragment>
                <p className="header-text">
                    Hoşgeldiniz{userId}
                </p>
                <button className="header-button" onClick={this.doLogout}>Çıkış</button>
            </React.Fragment>
        );
    }
    doLogout = async () => {
        const url = "/api/logout";

        let response;
        try{
            response = await fetch(url, {method:"post"})
        }catch (e) {
            alert("Sunucuya bağlanmada hata: " + e);
            return;
        }

        if(response.status !== 204){
            alert("Sunucuya bağlanmada hata: " + response.status);
            return;
        }

        this.props.updateLoggedInUser(null);
        this.props.history.push("/");
    }
    render() {
        const userId = this.props.userId;

        let content;
        if(!userId){
            content = this.renderNotLoggedIn();
        }else{
            content = this.renderLoggedIn(userId);
        }

        return(
            <div className="header">
                <Link className="header-logo" to={"/"} tabIndex="0">
                    Kedi Bulmaca
                </Link>
                {content}
            </div>
        );
    }

}
export  default  withRouter(HeaderBar);