import React from "react";

let navStyle = {
  color: 'black',
  fontSize: '18px'
}
function Header() {
  return (
    <div className='text-center' style={navStyle}>
      Click the images below to rack up your score! But don't click the same image twice!
      <hr />
    </div>    
  );
}

export default Header;
