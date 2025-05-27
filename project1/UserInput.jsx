import { useState } from "react";
import "./UserInput.css";

export default function UserInput() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    location: "",
    designation: "",
  });

  const [userDataList, setUserDataList] = useState([]);

  function handleChange(prefix, newValue) {
    setUserData((prevData) => {
      return {
        ...prevData,
        [prefix]: newValue,
      };
    });
  }

  function saveData() {
    setUserDataList((userDataList) => {
      return [...userDataList, userData];
    });

    clearData();
  }

  function handleButton() {
    return (
      userData.firstName === "" ||
      userData.lastName === "" ||
      userData.location === "" ||
      userData.designation === ""
    );
  }

  function clearData() {
    setUserData({
      firstName: "",
      lastName: "",
      location: "",
      designation: "",
    });
  }
  return (
    <div className="container">
      <div className="input-container">
        <label>First Name</label>
        <input
          type="text"
          id="textbox"
          required
          value={userData.firstName}
          onChange={(event) => handleChange("firstName", event.target.value)}
        />
        <label>Last Name</label>
        <input
          type="text"
          id="textbox"
          required
          value={userData.lastName}
          onChange={(event) => handleChange("lastName", event.target.value)}
        />
        <label>Location</label>
        <input
          type="text"
          id="textbox"
          required
          value={userData.location}
          onChange={(event) => handleChange("location", event.target.value)}
        />
        <label>Designation</label>
        <input
          type="text"
          id="textbox"
          required
          value={userData.designation}
          onChange={(event) => handleChange("designation", event.target.value)}
        />
        <>
          <button id="btn" onClick={saveData} disabled={handleButton()}>
            Save
          </button>
        </>
        <>
          <button id="btn" onClick={clearData}>
            Clear
          </button>
        </>
      </div>
      <div className="user-data">
        <table>
          <thead>
            <tr>
              <th>Sr No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Location</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
            {userDataList.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.location}</td>
                  <td>{user.designation}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
