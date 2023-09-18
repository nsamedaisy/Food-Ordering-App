import Data from "./data";
import { useNavigate, useParams } from "react-router-dom";

export default function Details() {
  const navigate = useNavigate();
  let { id } = useParams();
  console.log(Data);
  const props = Data.find((ele) => ele.id == id);

  return (
    <>
      <div className="detail-container">
        <div className="detail-title">
          <h4 class="card-title">{props.title}</h4>
        </div>
        <img className="detail-img" src={props.img} alt="detailimg" />
        <div className="detail-infos">
          <p className="detail-desc" class="card-text">
            {props.desc}
          </p>{" "}
          <br />
          <h5 className="detail-head" class="card-title">
            {" "}
            Price: $ {props.price}
          </h5>
          <button
            className="detail-btn"
            onClick={() => navigate(`/${props.id}/contact`)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}
