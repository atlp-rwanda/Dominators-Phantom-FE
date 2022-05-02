import React, { useEffect, useState } from "react";
import avatar from "./Ellipse 2.png";
import { Provinces, Districts, Sectors, Cells, Villages } from "rwanda";

const UpdateProfileForm = ({ user, handleUpdate }) => {
  //declaring variables which will store user info
  const [firstName, setFirstName] = useState(
    user.firstName ? user.firstName : ""
  );
  const [lastName, setLastName] = useState(user.lastName ? user.lastName : "");
  const [nationalId, setNationalId] = useState(
    user.nationalId ? user.nationalId : ""
  );
  const [phone, setPhone] = useState(user.phone ? user.phone : "");
  const [role, setRole] = useState(user.phone ? user.phone : "");
  const [gender, setGender] = useState(user.gender ? user.gender : "");
  const [category, setCategory] = useState(user.category ? user.category : "");
  const [bio, setBio] = useState(user.bio ? user.bio : "");

  //declaring address variables due to administration structure in reanda
  const [province, setProvince] = useState(user.province ? user.province : "");
  const [district, setDistrict] = useState(user.district ? user.district : "");
  const [sector, setSector] = useState(user.sector ? user.sector : "");
  const [cell, setCell] = useState(user.cell ? user.cell : "");
  const [village, setVillage] = useState(user.village ? user.village : "");

  //declaring variables states to display error messages
  const [errorFirstName, setErrorFirstName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorNationalId, setErrorNationalId] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorRole, setErrorRole] = useState("");
  const [errorGender, setErrorGender] = useState("");
  const [errorCategory, setErrorCategory] = useState("");
  const [errorBio, setErrorBio] = useState("");
  //declaring error variables for addresses
  const [errorProvince, setErrorProvince] = useState();
  const [errorDistrict, setErrorDistrict] = useState();
  const [errorSector, setErrorSector] = useState();
  const [errorCell, setErrorCell] = useState();
  const [errorVillage, setErrorVillage] = useState();

  //declaring variable object hook state which will keep updated user info.
  const [updatedInfo, setUpdateInfo] = useState(null);

  //handling submit form event
  const handleSubmit = (e) => {
    e.preventDefault();

    setErrorFirstName();
    setErrorLastName();
    setErrorNationalId();
    setErrorPhone();
    setErrorRole();
    setErrorGender();
    setErrorCategory();
    setErrorBio();
    setErrorProvince();
    setErrorDistrict();
    setErrorSector();
    setErrorCell();
    setErrorVillage();

    if (validate()) {
      setUpdateInfo({
        firstName,
        lastName,
        nationalId,
        phone,
        role,
        gender,
        category,
        bio,
        province,
        district,
        sector,
        cell,
        village,
      });
    }
  };
  useEffect(() => {
    if (updatedInfo) {
      handleUpdate(updatedInfo);
    }
  }, [updatedInfo]);

  //handling error function
  const validate = () => {
    //validating first name input field
    if (firstName == "") {
      const fn = document.querySelector("#firstName");
      fn.focus();
      setBorderError(fn);
      setErrorFirstName("First Name required!!");
      return false;
    }
    //validating last name input field
    if (lastName == "") {
      const ln = document.querySelector("#lastName");
      ln.focus();
      setBorderError(ln);
      setErrorLastName("Last Name required!!");
      return false;
    }
    //validating national ID
    if (nationalId == "") {
      const nid = document.querySelector("#nationalId");
      nid.focus();
      setBorderError(nid);
      setErrorNationalId("National ID required!!");
      return false;
    }
    //validating phone number
    if (phone == "") {
      const tel = document.querySelector("#phone");
      tel.focus();
      setBorderError(tel);
      setErrorPhone("Phone Number required!!");
      return false;
    }
    //validating biography
    if (bio == "") {
      const bio = document.querySelector("#bio");
      bio.focus();
      setBorderError(bio);
      setErrorBio("Biography required!!");
      return false;
    }
    //validating province input field
    if (province == "") {
      setErrorProvince("Province required!");
      return false;
    }
    //validating District input field
    if (district == "") {
      setErrorDistrict("District required!");
      return false;
    }
    //validating Sector input field
    if (sector == "") {
      setErrorSector("Sector required!");
      return false;
    }
    //validating Cell input field
    if (cell == "") {
      setErrorCell("Cell required!");
      return false;
    }
    //validating Village input field
    if (village == "") {
      setErrorVillage("Village required!");
      return false;
    }

    //validating Role input field
    if (role == "") {
      setErrorRole("Role required!");
      return false;
    }
    //validating Gender input field
    if (gender == "") {
      setErrorGender("Gender required!");
      return false;
    }
    //validating Category input field
    if (category == "") {
      setErrorCategory("Category required!");
      return false;
    }
    return true;
  };

  //reset form
  const handleReset = () => {
    setLastName("");
    setFirstName("");
    setNationalId("");
    setProvince("");
    setDistrict("");
    setSector("");
    setCell("");
    setVillage("");
    setCategory("");
    setRole("");
    setBio("");
    setPhone("");
    setGender("");
  };

  //applying a red border to an error input field
  const borderError = "border: 1.5px solid red";
  const setBorderError = (inputField) => {
    inputField.setAttribute("style", borderError);
  };

  //removing border error when typing in an inputs field
  const inputs = document.querySelectorAll(".inputField");
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      input.removeAttribute("style");
    });
  });

  return (
    <div>
      {localStorage.getItem("user") ? (
        <div className="avatarClass">
          <img src={avatar} alt="Update Profile Avatar" width={100} />
          <p> {user.email} </p>
        </div>
      ) : null}

      <form onSubmit={handleSubmit}>
        <h3> Personal Info </h3>
        <div className="input">
          <label htmlFor="firstName"> First name </label> <br />
          <input
            type="text"
            placeholder="Your first name"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="inputField"
          />
          {errorFirstName && (
            <span className="errorText"> {errorFirstName} </span>
          )}
        </div>
        <div className="input toright">
          <label htmlFor="lastName"> Last name </label> <br />
          <input
            type="text"
            placeholder="Your last name"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="inputField"
          />
          {errorLastName && (
            <span className="errorText"> {errorLastName} </span>
          )}
        </div>
        <div className="input">
          <label htmlFor="nationalId"> National ID </label> <br />
          <input
            type="number"
            placeholder="Your National ID"
            id="nationalId"
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
            className="inputField"
            maxLength={16}
          />
          {errorNationalId && (
            <span className="errorText"> {errorNationalId} </span>
          )}
        </div>
        <div className="input toright">
          <label htmlFor="phone"> Phone Number </label> <br />
          <input
            type="number"
            placeholder="Your phone"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="inputField"
            maxLength={12}
          />
          {errorPhone && <span className="errorText"> {errorPhone} </span>}
        </div>
        <div className="select-field-container">
          <div className="input select">
            <label htmlFor="role"> Job / Role </label> <br />
            <select
              id="role"
              value={gender}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value=""> Select </option>
              <option value="admin"> Admin </option>
              <option value="driver"> Driver </option>
              <option value="operator"> Operator </option>
            </select>
            {errorRole && <span className="errorText"> {errorRole} </span>}
          </div>
          <div className="input select">
            <label htmlFor="gender"> Gender </label> <br />
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value=""> Select </option>
              <option value="male"> Male </option>
              <option value="female"> Female </option>
            </select>
            {errorGender && <span className="errorText"> {errorGender} </span>}
          </div>
          <div className="input select">
            <label htmlFor="category"> Category </label> <br />
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value=""> Select </option> <option value="A"> A </option>
              <option value="B"> B </option> <option value="C"> C </option>
              <option value="D"> D </option> <option value="D2"> D2 </option>
              <option value="E"> E </option> <option value="F"> F </option>
            </select>
            {errorCategory && (
              <span className="errorText"> {errorCategory} </span>
            )}
          </div>
        </div>
        <div className="input textarea">
          <label htmlFor="bio"> Experience / bio </label> <br />
          <textarea
            rows={5}
            placeholder="Enter your experience or bio..."
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="inputField"
          ></textarea>
          {errorBio && <span className="errorText"> {errorBio} </span>}
        </div>
        <h3> Address </h3>
        <div className="select-field-address">
          <div className="input">
            <label htmlFor="province"> Province </label> <br />
            <select
              id="province"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
            >
              <option value=""> Select </option>
              {Provinces().map((value, idx) => (
                <option key={idx}> {value} </option>
              ))}
            </select>
            {errorProvince && (
              <span className="errorText"> {errorProvince} </span>
            )}
          </div>
          <div className="input toright">
            <label htmlFor="District"> District </label> <br />
            <select
              id="District"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            >
              <option value=""> Select </option>
              {Districts(province).map((value, idx) => (
                <option key={idx}> {value} </option>
              ))}
            </select>
            {errorDistrict && (
              <span className="errorText"> {errorDistrict} </span>
            )}
          </div>
          <div className="input">
            <label htmlFor="Sector"> Sector </label> <br />
            <select
              id="Sector"
              value={sector}
              onChange={(e) => setSector(e.target.value)}
            >
              <option value=""> Select </option>
              {Sectors().map((value, idx) => (
                <option key={idx}> {value} </option>
              ))}
            </select>
            {errorSector && <span className="errorText"> {errorSector} </span>}
          </div>
          <div className="input toright">
            <label htmlFor="Cell"> Cell </label> <br />
            <select
              id="Cell"
              value={cell}
              onChange={(e) => setCell(e.target.value)}
            >
              <option value=""> Select </option>
              {Cells().map((value, idx) => (
                <option key={idx}> {value} </option>
              ))}
            </select>
            {errorCell && <span className="errorText"> {errorCell} </span>}
          </div>
          <div className="input">
            <label htmlFor="Village"> Village </label> <br />
            <select
              id="Village"
              value={village}
              onChange={(e) => setVillage(e.target.value)}
            >
              <option value=""> Select </option>
              {Villages().map((value, idx) => (
                <option key={idx}> {value} </option>
              ))}
            </select>
            {errorVillage && (
              <span className="errorText"> {errorVillage} </span>
            )}
          </div>
        </div>
        <div className="input button">
          <input type="button" value="Reset" onClick={handleReset} />
          <input type="submit" value="Save" />
        </div>
      </form>
    </div>
  );
};

export default UpdateProfileForm;
