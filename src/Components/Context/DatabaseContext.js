import { createContext } from "react";
import db from "../../Helpers/Database";

const DatabaseContext = createContext(db);
export default DatabaseContext;
