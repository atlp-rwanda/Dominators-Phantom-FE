import React, { useState } from "react";
import Select from "react-select";
import { Provinces, Districts, Sectors, Cells, Villages } from "rwanda";
import defaultAvatar from "./Ellipse 2.png";

const UpdateProfileForm = ({ userInfo, handleUpdate }) => {
  const [isUpdating, setIsUpdating] = useState("Save");
  //declaring variables which will store userInfo info
  const [firstName, setFirstName] = useState(
    userInfo.firstName ? userInfo.firstName : ""
  );
  const [lastName, setLastName] = useState(
    userInfo.lastName ? userInfo.lastName : ""
  );
  const [nationalId, setNationalId] = useState(
    userInfo.nationalId ? userInfo.nationalId : ""
  );
  const [phone, setPhone] = useState(userInfo.phone ? userInfo.phone : "");
  const [gender, setGender] = useState(userInfo.gender ? userInfo.gender : "");
  const [category, setCategory] = useState(
    userInfo.category ? userInfo.category : ""
  );
  const [bio, setBio] = useState(userInfo.bio ? userInfo.bio : "");

  //declaring address variables due to administration structure in reanda
  const [province, setProvince] = useState(
    userInfo.province ? userInfo.province : ""
  );
  const [district, setDistrict] = useState(
    userInfo.district ? userInfo.district : ""
  );
  const [sector, setSector] = useState(userInfo.sector ? userInfo.sector : "");
  const [cell, setCell] = useState(userInfo.cell ? userInfo.cell : "");
  const [village, setVillage] = useState(
    userInfo.village ? userInfo.village : ""
  );
  const [avatar, setAvatar] = useState(
    userInfo.profilePic ? userInfo.profilePic : defaultAvatar
  );

  //declaring variables states to display error messages
  const [errorFirstName, setErrorFirstName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorNationalId, setErrorNationalId] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorGender, setErrorGender] = useState("");
  const [errorCategory, setErrorCategory] = useState("");
  const [errorBio, setErrorBio] = useState("");
  //declaring error variables for addresses
  const [errorProvince, setErrorProvince] = useState();
  const [errorDistrict, setErrorDistrict] = useState();
  const [errorSector, setErrorSector] = useState();
  const [errorCell, setErrorCell] = useState();
  const [errorVillage, setErrorVillage] = useState();

  //declaring variable object hook state which will keep updated userInfo info.
  const [updatedInfo, setUpdateInfo] = useState(null);
  //photo to be sent on the backend
  const [profilePic, setProfilePic] = useState(null);
  const formData = new FormData();
  //handling submit form event
  const handleSubmit = (e) => {
    e.preventDefault();

    setErrorFirstName();
    setErrorLastName();
    setErrorNationalId();
    setErrorPhone();
    setErrorGender();
    setErrorCategory();
    setErrorBio();
    setErrorProvince();
    setErrorDistrict();
    setErrorSector();
    setErrorCell();
    setErrorVillage();

    if (validate()) {
      setIsUpdating("Updating, Please wait..");
      const form = document.querySelector(".update-profile-form");
      const photoImage = form.profilePic.files[0];

      if (photoImage) formData.append("profilePic", photoImage);
      formData.append("lastName", lastName);
      formData.append("firstName", firstName);
      formData.append("nationalId", nationalId);
      if (gender.value) formData.append("gender", gender.value);
      formData.append("phone", phone);
      if (category.value) formData.append("category", category.value);
      formData.append("bio", bio);
      formData.append("province", province);
      formData.append("district", district);
      formData.append("sector", sector);
      formData.append("cell", cell);
      formData.append("village", village);

      handleUpdate(formData);
    }
  };

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
  const handleProfilePic = () => {
    const inputFile = document.getElementById("file");
    //const profileImagePreview = document.getElementById("profileImagePreview");
    inputFile.click();
    inputFile.addEventListener("change", () => {
      if (inputFile.files) {
        var reader = new FileReader();

        reader.readAsDataURL(inputFile.files[0]);
        reader.addEventListener("load", (e) => {
          const dataImage = e.target.result;
          setAvatar(dataImage);
        });
      }
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="update-profile-form">
        <div className="avatarClass">
          <div className="flex-container">
            <img
              src={avatar}
              alt="Update Profile Avatar"
              id="profileImagePreview"
              width={100}
            />
            <input type="button" value="Change" onClick={handleProfilePic} />
            <input
              type="file"
              id="file"
              name="profilePic"
              style={{ display: "none" }}
              accept="image/jpg, image/jpeg, image/png"
            />
          </div>

          <p>
            {userInfo.email} ({userInfo.role})
          </p>
        </div>

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
          />{" "}
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
          />{" "}
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
            <label htmlFor="gender"> Gender </label> <br />
            <Select
              options={[
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
                { value: "binary", label: "Binary" },
                { value: "prefer_not_to_say", label: "Prefer not to say" },
              ]}
              defaultValue={{ value: gender, label: gender }}
              onChange={setGender}
            />
            {errorGender && <span className="errorText"> {errorGender} </span>}
          </div>
          <div className="input select">
            <label htmlFor="category"> Category </label> <br />
            <Select
              options={[
                { value: "A", label: "A" },
                { value: "B", label: "B" },
                { value: "C", label: "C" },
                { value: "D", label: "D" },
                { value: "D2", label: "D2" },
                { value: "E", label: "E" },
                { value: "F", label: "F" },
              ]}
              defaultValue={{ value: category, label: category }}
              onChange={setCategory}
            />
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
          <input type="submit" value={isUpdating} />
        </div>
      </form>
    </div>
  );
};

export default UpdateProfileForm;
