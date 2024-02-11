// import React, { useState } from "react";
// import Dropdown from 'react-bootstrap/Dropdown';
// import './drop.css'
// const Drop = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <div class="dropdown">
//       <Dropdown>
//       <Dropdown.Toggle variant="success" id="dropdown-basic">
//         Dropdown Button
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item href="/Table">Users</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//     </div>
//   );
// };

// export default Drop;

import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'; // Import icons
import './drop.css';


const Drop = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown" style={{ width: '400px', left:'30%' }}>
      <div className="dropdown" onClick={toggleDropdown}>
        {isOpen ? <BsChevronUp /> : <BsChevronDown />}
        Dropdown Button
      </div>
      {isOpen && (
        <div className={`dropdown-menu ${isOpen ? 'show' : ''}`} style={{ width: '200px', maxHeight: '200px', overflowY: 'auto' }}>
        <a href="/Table" className="dropdown-item">Employees</a>
        <a href="/form" className="dropdown-item">New Employee</a>
        <a href="#/action-3" className="dropdown-item">Something else</a>
      </div>
        
      )}
    </div>
  );
};

export default Drop;



