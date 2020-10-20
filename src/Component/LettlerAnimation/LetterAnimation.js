import React, {Component} from 'react';

class LetterAnimation extends Component {
    constructor(props){
        super(props)

        this.state = {
            w: 'w',
            h: 'h',
            a: 'a',
            t: 't',
            color: 'blue'
        }
    }
    _onMouseClick =() =>{
        this.setState({
            w: 'h',
            h: 'i',
            a: '!',
            t: '!'
        })
    }
    _onMouseMoveW = (e) => {
        this.setState({
            w: 'h'
        })
    }
    _onMouseOutW = () => {
        this.setState({
            w: 'w'
        })
    }

    _onMouseMoveH = (e) => {
        this.setState({
            h: 'i'
        })
    }
    _onMouseOutH = () => {
        this.setState({
            h: 'h'       
        })
    }
    _onMouseMoveA = (e) => {
        this.setState({
            a: '!'
        })
    }
    _onMouseOutA = () => {
        this.setState({
            a: 'a'       
        })
    }
    _onMouseMoveT = () => {
        this.setState({
            t: '!'
        })
    }
    _onMouseOutT = () => {
        this.setState({
            t: 't'       
        })
    }

    handlerChange = (event) =>{
        const Color = event.target.value
        console.log(event.target.value)

        this.setState({
            color: Color
        })
    }

    render() { 
        const {hola} = this.props;
        return ( 
            <div className="letterContainer row col-8 mx-auto"
            ref="titleContainer"
            >
                <div className="col-2"
                    onMouseMove={this._onMouseMoveW}
                    onMouseOut={this._onMouseOutW}
                ><h1>{this.state.w}</h1></div>
                <div className="col-2"
                    onMouseMove={this._onMouseMoveH}
                    onMouseOut={this._onMouseOutH}
                ><h1>{this.state.h}</h1></div>
                <div className="col-2"
                    onMouseMove={this._onMouseMoveA}
                    onMouseOut={this._onMouseOutA}
                ><h1>{this.state.a}</h1></div>
                <div className="col-2"
                    onMouseMove={this._onMouseMoveT}
                    onMouseOut={this._onMouseOutT}
                ><h1>{this.state.t}</h1></div>
                <button 
                onClick={this._onMouseClick}
                >
                    Presiona para cambiar
                </button>

                <input type="text"
                    onChange={this.handlerChange}
                />

                <div className="col-12">
                    <h1
                        style={{
                          color: this.state.color
                        }}
                    >
                        {this.state.color}
                    </h1>
                </div>

            </div>
         );
    }
}
 
export default LetterAnimation;