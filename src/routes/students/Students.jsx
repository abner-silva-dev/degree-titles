import { useState } from "react";
import Managment from "../../components/management/management";
import Search from "../../components/search/search";
import Button from "../../components/button/button.component";
import Popup from "../../components/popup/Popup";
import { useStudents } from "../../context/studentsContext";

import "./Students.styles.css";

const statusColor = {
  initial: "#364fc7",
  secondary: "#a61e4d",
  finish: "#2b8a3e",
};

const Students = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { students, createStudent } = useStudents();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [motherLastName, setMotherLastName] = useState("");
  const [email, setEmail] = useState("");
  const [nControl, setNControl] = useState("");
  const [status, setStatus] = useState("initial");
  const [query, setQuery] = useState("");

  const tempStudents = students.filter((student) =>
    `${student.nControl} ${student.name} ${student.lastName} ${student.motherLastName}`
      .toLowerCase()
      .includes(query)
  );

  const togglePopup = () => {
    setShowPopup(!showPopup);
    handleResetForm();
  };

  const handleResetForm = () => {
    setName("");
    setLastName("");
    setMotherLastName("");
    setEmail("");
    setNControl("");
    setStatus("initial");
  };

  return (
    <>
      <div className="header">
        <Search
          placeholder={"Buscar estudiante por: Numero de control o Nombre"}
          onSetQuery={setQuery}
        />
        <span className="contaierIconMessage">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="icon iconMessage"
          >
            <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
            <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
          </svg>

          <span className="iconMessageNum">1</span>
        </span>
      </div>

      <Managment>
        <header className="options">
          <div>
            <label htmlFor="filter">Tipo de estatus: </label>
            <select
              name=""
              id="status"
              required={true}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="all">Todos</option>
              <option value="initial">Inicial</option>
              <option value="secundary">Secundario</option>
              <option value="finish">Termino</option>
            </select>
          </div>

          <div className="options__btn">
            <Button type="create" onClick={togglePopup}>
              Crear
            </Button>
            <Button type="delete">Eliminar</Button>
          </div>
        </header>

        <ul className="list-data">
          {tempStudents.map((el, i) => {
            return (
              <li
                className="list__item"
                style={{ backgroundColor: statusColor[el.status] }}
                key={i}
              >
                <input type="checkbox" className="options__checkbox" />
                <p>{el.nControl}</p>
                <p>{`${el.name} ${el.lastName} ${el.motherLastName}`}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </li>
            );
          })}
        </ul>
      </Managment>
      {showPopup && (
        <Popup onClose={togglePopup}>
          <div className="studentForm">
            <h3>Registro de estudiante</h3>

            <form
              className="form"
              onSubmit={() => {
                createStudent({
                  name,
                  lastName,
                  motherLastName,
                  email,
                  nControl,
                  status,
                });
                togglePopup();
                handleResetForm();
              }}
            >
              <div className="group">
                <label htmlFor="name">Nombre(s)</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Santiago aldahir"
                  required={true}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="group">
                <label htmlFor="lastName">Apellido paterno</label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Rush"
                  required={true}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="group">
                <label htmlFor="motherLastName">Apellido materno</label>
                <input
                  id="motherLastName"
                  type="text"
                  placeholder="Smith"
                  required={true}
                  value={motherLastName}
                  onChange={(e) => setMotherLastName(e.target.value)}
                />
              </div>
              <div className="group">
                <label htmlFor="email">Correo electronico</label>
                <input
                  type="email"
                  placeholder="alumn@example.com"
                  required={true}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="group">
                <label htmlFor="nControl">Numero de control</label>
                <input
                  type="text"
                  placeholder="20251055"
                  required={true}
                  value={nControl}
                  onChange={(e) => setNControl(e.target.value)}
                />
              </div>
              <div className="group">
                <label htmlFor="status">Estatus actual</label>
                <select
                  name=""
                  id="status"
                  required={true}
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="initial">Inicial</option>
                  <option value="secundary">Secundario</option>
                  <option value="finish">Termino</option>
                </select>
              </div>

              <button className="btnForm">Guardar registro</button>
            </form>
          </div>
        </Popup>
      )}
    </>
  );
};

export default Students;
