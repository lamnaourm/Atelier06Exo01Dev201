import React, { Component } from 'react';

class Calcul extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }
    handleOnchange = (e) => {

    }

    handleOnSubmit = (e) => {
        e.preventDefault();

    }

    render() {
        return (
            <div className='calcul'>
                <form>
                    <div>
                        <label>Capital empreunté : </label>
                        <input type='number' name='capital'/>
                    </div>
                    <div>
                        <label>taux d'interet : </label>
                        <input type='number' name='taux'/>
                    </div>
                    <div>
                        <label>Duree rembourssement : </label>
                        <input type='number' name='duree'/>
                    </div>
                    <hr/>
                    <input type='submit' value='Calculer' />
                    <div>
                        <label>Mensualite : </label>
                        <input type='number' name='mensualite'/>
                    </div>
                </form>    
            </div>
        );
    }
}

export default Calcul;
