import React from "react";
import { Button } from "../Button/Button";
import "./PresentationSection.css";
import portfolioPicture from "../../assets/img/Port.png";
import reactPicture from "../../assets/img/react.PNG";
// import AperturaState1 from '../public/images/AperturaState1.png'

function PresentationSection() {
  const btnprimary = "btn--primary";
  return (
    <div className="PresentationSection-Container row text-center mr-0">
      {/* <video src="/videos/video-2.mp4" autoPlay loop muted />     */}
      {/* <div className="PSC-subContainer col-12 text-center "> */}
      {/* <img src={AperturaState1} alt=""/> */}
      <div className="row pt-5 col-12 mb-5 ">
        <div className="col-12">
          <p>let´s know some about the tecnologies that I can use! </p>
        </div>
      </div>

      {/* <div className="row col-12">
        <div className="col-12">
          <div className="PresentationSection-btns">
            <Button
              className="btns"
              buttonStyle="btn--outline2"
              buttonSize="btn--medium"
            > 
              About me
            </Button>
            <Button
              className="btns"
              buttonStyle="btn--primary"
              buttonSize="btn--medium"
            >
              About me 2
            </Button>
          </div>
        </div>
      </div> */}

      <div className="row mx-auto">
        <div className="col-sm-2">
          <div className="card fotoCard1 ">
            <img
              className="card-img-top"
              src={reactPicture}
              alt="Card image cap"
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
}

export default PresentationSection;
