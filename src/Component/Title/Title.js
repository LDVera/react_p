import React from "react";
import PropTypes from "prop-types";
import "./Title.css";
import portfolioPicture from "../../assets/img/Port.png";

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
  }

  _onMouseMove = (e) => {
    const width = this.refs.titleContainer.clientWidth;
    const height = this.refs.titleContainer.clientHeight;
    const oX = (e.nativeEvent.offsetX / width) * 100;
    const oY = (e.nativeEvent.offsetY / height) * 100;
    // console.log(Math.floor(oX), Math.floor(oY));
    this.setState({
      x: oX,
      y: oY,
    });
  };

  _onMouseOut = () => {
    this.setState({
      x: 20,
      y: 0,
    });
  };

  render() {
    const { text } = this.props;
    const { x, y } = this.state;
    const maskStyle = {
      "--maskX": x,
      "--maskY": y,
    };
    return (
      <div className="row contenedorPrimerS">
        {/* contenedor de texto parte izquierda */}
        <div className="col-xl-7 pt-4 ">
          {/* Fila de Titulo */}
          <div className="row pt-2 mt-5">
            <div className="col-12 pt-5 d-flex ">
              <div className="col-xl-12 col-sm-12 mainTitle mx-auto font-weight-bold">
                I´m Luis Diego Vera. I´m Front-end developer!
              </div>
            </div>
          </div>

          {/* Fila de texto */}
          <div className="row">
            <div
              className="titleContainer text-center "
              onMouseMove={this._onMouseMove}
              onMouseOut={this._onMouseOut}
              ref="titleContainer"
              style={maskStyle}
            >
              <div className="titleWrapper col-12 pt-0 mt-5 mb-5 text-justify">
                <p>{text}</p>
              </div>
              <div className="titleWrapper cloneWrapper col-12 pt-0 mb-5 text-justify">
                <p className="pt-5">{text}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contenedor de la imagen */}
        <div className="col-xl-5 fotoPresentacion col-sm-12 pl-0">
          <img
            class="foto mz-auto pr-0 pl-0 pt-4 mt-5 container-fluid img-fluid"
            src={portfolioPicture}
            alt=""
          />
        </div>
      </div>
    );
  }
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
