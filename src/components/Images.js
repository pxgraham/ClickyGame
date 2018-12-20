import React from "react";

function Images() {

  const imageList = [
    ".\\images\\dbz0.png",
    ".\\images\\dbz1.png",
    ".\\images\\dbz2.png",
    ".\\images\\dbz3.png",
    ".\\images\\dbz4.png",
    ".\\images\\dbz5.png",
    ".\\images\\dbz6.png",
    ".\\images\\dbz7.png",
    ".\\images\\dbz8.png",
    ".\\images\\dbz9.png",
    ".\\images\\dbz10.png",
    ".\\images\\dbz11.png",
  ];
  const imageItems = imageList.map((imageURL) =>
    <div>
      <img src={imageURL} alt="dbz" />
    </div>
  );
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 border">
            Current Score:
        </div>
        <div className="col-6 border">
            Highest Score: 
        </div>        
      </div>     
      <div className="row">
        {imageItems}  
      </div>
      {/* <div className="row">
        <div className="col-3">
          <img src=".\images\dbz0.png" alt="dbz" />
        </div>      
        <div className="col-3">
          <img src=".\images\dbz1.png" alt="dbz" /> 
        </div>
        <div className="col-3">
          <img src=".\images\dbz2.png" alt="dbz" /> 
        </div>
        <div className="col-3">
          <img src=".\images\dbz3.png" alt="dbz" /> 
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <img src=".\images\dbz4.png" alt="dbz" /> 
        </div>      
        <div className="col-3">
          <img src=".\images\dbz5.png" alt="dbz" /> 
        </div>
        <div className="col-3">
          <img src=".\images\dbz6.png" alt="dbz" /> 
        </div>
        <div className="col-3">
          <img src=".\images\dbz7.png" alt="dbz" /> 
        </div>
      </div>    
      <div className="row">
        <div className="col-3">
          <img src=".\images\dbz8.png" alt="dbz" /> 
        </div>      
        <div className="col-3">
          <img src=".\images\dbz9.png" alt="dbz" /> 
        </div>
        <div className="col-3">
          <img src=".\images\dbz10.png" alt="dbz" /> 
        </div>
        <div className="col-3">
          <img src=".\images\dbz11.png" alt="dbz" /> 
        </div>
      </div>         */}
    </div>
  );
}

export default Images;
