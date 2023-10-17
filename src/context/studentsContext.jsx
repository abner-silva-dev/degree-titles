import { useEffect } from "react";
import { createContext, useContext, useReducer } from "react";

const StudentsContext = createContext();

const initialState = {
  // status: "loading",
  filter: [],
  students: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, students: action.payload, filter: action.payload };
    case "newStudent":
      return {
        ...state,
        students: [action.payload, ...state.students],
        filter: [action.payload, ...state.students],
      };
    case "filterStudents":
      if (action.payload === "all") return { ...state, filter: state.students };

      return {
        ...state,
        filter: state.students.filter(
          (el) =>
            el.status === action.payload || el.career.id === action.payload
        ),
      };
    default:
      throw new Error("Action unknow");
  }
}

function StudentProvider({ children }) {
  const [{ students, filter }, dispatch] = useReducer(reducer, initialState);

  const createStudent = (student) => {
    dispatch({ type: "newStudent", payload: student });
  };

  useEffect(() => {
    const getStudents = async () => {
      try {
        const res = await fetch("/students.json");
        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (err) {
        console.log("error");
      }
    };

    getStudents();
  }, []);

  return (
    <StudentsContext.Provider
      value={{ students, filter, createStudent, dispatch }}
    >
      {children},
    </StudentsContext.Provider>
  );
}

function useStudents() {
  const context = useContext(StudentsContext);

  return { ...context };
}

export { StudentProvider, useStudents };
