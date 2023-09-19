import Managment from "../../components/management/management";
import Search from "../../components/search/search";

const status = [
  { id: "204133", phase: "Fase 1" },
  { id: "204134", phase: "Fase 2" },
  { id: "204134", phase: "Fase 3" },
  { id: "204134", phase: "Fase 4" },
];

const Status = () => {
  return (
    <>
      <Search placeholder={"Buscar estatus por: ID o fase"} />
      <Managment data={status} identifiers={{ id: "id", name: "phase" }} />
    </>
  );
};

export default Status;
