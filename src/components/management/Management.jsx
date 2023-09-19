import "./management.style.css";

import { useState } from "react";
import Portal from "../popUpCreateStudent/portal";
import PopUpCreateStudent from "../popUpCreateStudent/popUpCreateStudent";
import Button from "../button/button.component";

// property identifiers: put "id" in the second position and "name" in the thirty position

// const Managment = ({ data = [], identifiers }) => {
//   const [showPopup, setShowPopup] = useState(false);

//   const togglePopup = () => {
//     setShowPopup(!showPopup);
//   };

//   return (
//     <div className="management">
//       <header className="options">
//         <input type="checkbox" className="options__checkbox" />
//         <div className="options__btn">
//           <Button type="create" onClick={togglePopup}>
//             Crear
//           </Button>
//           <Button type="delete">Eliminar</Button>
//         </div>
//       </header>

//       <ul className="list-data">
//         {data.map((el, i) => {
//           return (
//             <li className="list__item" key={i}>
//               <input type="checkbox" className="options__checkbox" />
//               <p>{el[identifiers.id]}</p>
//               <p>{el[identifiers.name]}</p>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="icon"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M19.5 8.25l-7.5 7.5-7.5-7.5"
//                 />
//               </svg>
//             </li>
//           );
//         })}
//       </ul>

//       {showPopup && (
//         <Portal>
//           <PopUpCreateStudent onClose={togglePopup} />
//         </Portal>
//       )}
//     </div>
//   );
// };

// export default Managment;

function Management({ children }) {
  return <div className="management">{children}</div>;
}

export default Management;
