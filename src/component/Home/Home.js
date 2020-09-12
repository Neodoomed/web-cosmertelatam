import React, {Component} from 'react';
import './home.css';

class Home extends Component{
    render(){
        return(
            <section className="banner">
                <div className="home">
                    <h1 className="titulo">Comere Latam</h1>
                    <p>La web oficial de Cosmere Latam. Donde el fandom del Cosmere de toda latinoamerica se reune.</p>
                    <p className="join">Acepta tu investidura y comeinza este viaje...</p>
                    <button className="btn btn-primary btn-lg">Unete</button>
                </div>
            </section>
        )
    }

}

export default Home