import { createContext, useContext, useReducer } from "react";

const StudentsContext = createContext();

const initialState = {
  students: [
    {
      nControl: 20251086,
      name: "Dylan Abner  ",
      lastName: "Silva",
      motherLastName: "Araujo",
      email: "dyla@gmail.com",
      status: "initial",
    },
    {
      nControl: 20251346,
      name: "Lopez  ",
      lastName: "Dominguez",
      motherLastName: "Diego",
      email: "lopez@gmail.com",
      status: "secondary",
    },
    {
      nControl: 20251086,
      name: "Ortega",
      lastName: "Fernandez",
      motherLastName: "Raul",
      email: "ortega@gmail.com",
      status: "secondary",
    },
  ],
};

function reducer(state, action) {
  console.log(action.payload);
  switch (action.type) {
    case "newStudent":
      return { ...state, students: [action.payload, ...state.students] };
    default:
      throw new Error("Action unknow");
  }
}

function StudentProvider({ children }) {
  const [{ students }, dispatch] = useReducer(reducer, initialState);

  const createStudent = (student) => {
    dispatch({ type: "newStudent", payload: student });
  };

  return (
    <StudentsContext.Provider value={{ students, createStudent }}>
      {children},
    </StudentsContext.Provider>
  );
}

function useStudents() {
  const context = useContext(StudentsContext);

  return { ...context };
}

export { StudentProvider, useStudents };
