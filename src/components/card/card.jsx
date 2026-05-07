import Button from "../button/button.jsx";

const Card = ({ name, email, btnName }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-name">{name}</h2>

        <p className="card-email">{email}</p>
      </div>

      <div className="card-action">
        <Button name={btnName} />
      </div>
    </div>
  );
};

export default Card;