const Notification = props => {
    const{src,msg,className}=props;
   const containerClassName = {`notification-container ${className}`}

  return (
    <div className={containerClassName}>
      <img src={src}/>
      <p>{msg}</p>
    </div>
  )
}

const element = (
  <div className="main-con">
    <div className="heading">
        <h1 className="head">Notifications</h1>
    </div>
    <Notification src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" msg="Information Message" className="box1"/>
    <Notification src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" msg="Information Message" className="box2"/>
    <Notification src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" msg="Information Message" className="box3"/>
    <Notification src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" msg="Information Message" className="box4"/>
  </div>   
)
ReactDOM.render(element, document.getElementById('root'))
