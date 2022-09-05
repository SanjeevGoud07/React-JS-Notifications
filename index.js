const Notification = (props) => {
  //  Write your code here.
  const { className, name, img_url } = props;
  const classN = `notification ${className}`;
  return (
    <div className={classN}>
      <img className="icon" src={img_url} />
      <p className="msg">{name}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="Con">
    <h1 className="heading">Notifications</h1>
    <div className="List">
      <Notification
        className="blue"
        name="Information Message"
        img_url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        className="green"
        name="Success Message"
        img_url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        className="yellow"
        name="Warning Message"
        img_url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        className="red"
        name="Error Message"
        img_url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
