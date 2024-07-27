import "./App.css";
import React, { useState } from "react";

function App() {
  const [inputText, setinputText] = useState("");
  const [list, setList] = useState([]);
  const [status, setStatus] = useState(true);
  const [uid, setUid] = useState();

  const handleSave = () => {
    if (inputText !== undefined && inputText !== "") {
      setList([...list, inputText]);
      setinputText("");
    }
  };

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      status ? handleSave() : handleUpdate();      
    }
  };

  const handleDelete = (key) => {
    list.splice(key, 1);
    setList([...list]);
  };

  const hadndleEdit = (key) => {
    const findItem = list.find((item, i) => i === key);
    setinputText(findItem);
    setUid(key);
  };

  const handleUpdate = () => {
    list.splice(uid, 1, inputText);
    setinputText("");
    setStatus(true);
  };
  return (
    <div className="main-container">
      <div className="center-container">
      <h1 className="app-heading">TODO - App</h1>
        <div className="input-container">
          <input
            className="input-box-todo"
            type="text"
            value={inputText}
            placeholder="Enter Todo"
            onChange={(e) => {
              setinputText(e.target.value);
            }}
            onKeyDown={handleEnter}
          ></input>
          <button
            className="add-btn"
            onClick={() => {
              status ? handleSave() : handleUpdate();
            }}
          >
            +
          </button>
        </div>

        
        <hr style={{ color: "white" }}></hr>

        <div>
          {list.map((item, i) => {
            return (
              <li className="list-item" key={i}>
                {item}
                <span className="icons">
                  <i
                    className="fa-solid fa-pen-to-square editicons"
                    onClick={() => {
                      hadndleEdit(i);
                      setStatus(false);
                    }}
                  ></i>
                  <i
                    className="fa-sharp fa-solid fa-trash icon-delete"
                    onClick={() => handleDelete(i)}
                  ></i>
                </span>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
