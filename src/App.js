import logo from "./logo.svg";
import "./App.css";
import { create } from "ipfs-core";
import { createOrbitDB } from "@orbitdb/core";
import { useEffect } from "react";

function App() {
  let ipfs;
  let orbitdb;
  let db;

  const initDB = async () => {
    ipfs = await create();
    orbitdb = await createOrbitDB({ ipfs });
    // Create / Open a database. Defaults to db type "events".
    db = await orbitdb.open("hello");
  };

  useEffect(() => {
    initDB();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Address: {db?.address}
        OrbitDB
      </header>
    </div>
  );
}

export default App;
