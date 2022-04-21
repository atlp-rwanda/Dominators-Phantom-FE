import SideBarProfile from "./sidebarProfile";
import "./profile.css";
import { useState } from "react";
import avatar from "./Ellipse 2.png";
import Header from "../admin-header/Header";
import { ToastContainer, toast } from "react-toastify";

const UpdateProfile = () => {
  let localUser;
  if (localStorage.getItem("user")) {
    localUser = JSON.parse(localStorage.getItem("user"));
  }
  const [user, setUser] = useState(
    localUser
      ? localUser
      : {
          firstName: "",
          lastName: "",
          nationId: "",
          phone: "",
          role: "",
          gender: "",
          category: "",
          bio: "",
          country: "",
          city: "",
          address: "",
        }
  );

  //variables for input fields
  const [firstName, setFirstName] = useState(user ? user.firstName : "");
  const [lastName, setLastName] = useState(user ? user.lastName : "");
  const [nationId, setNationId] = useState(user ? user.nationId : "");
  const [phone, setPhone] = useState(user ? user.phone : "");
  const [role, setRole] = useState(user ? user.role : "");
  const [gender, setGender] = useState(user ? user.gender : "");
  const [category, setCategory] = useState(user ? user.category : "");
  const [bio, setBio] = useState(user ? user.bio : "");
  const [country, setCountry] = useState(user ? user.country : "");
  const [city, setCity] = useState(user ? user.city : "");
  const [address, setAddress] = useState(user ? user.address : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setUser({
        firstName,
        lastName,
        nationId,
        phone,
        role,
        gender,
        category,
        bio,
        country,
        city,
        address,
      });
      localStorage.setItem("user", JSON.stringify(user));
      toast.success("Profile Updated");
    }
  };
  const HandleReset = () => {
    setAddress("");
    setBio("");
    setCategory("");
    setCity("");
    setCountry("");
    setFirstName("");
    setGender("");
    setLastName("");
    setNationId("");
    setPhone("");
    setRole("");
  };

  function validate() {
    if (
      firstName === "" ||
      lastName === "" ||
      nationId === "" ||
      phone === "" ||
      role === "" ||
      gender === "" ||
      category === "" ||
      bio === "" ||
      country === "" ||
      city === "" ||
      address === ""
    ) {
      toast.error("All inputs are required please! ", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: { backgroundColor: "red", color: "white" },
      });
      return false;
    }
    return true;
  }

  return (
    <div>
      <Header />
      <div className="content">
        <div>
          <SideBarProfile />
        </div>
        <div className="update-profile">
          <h1 className="title">Update Profile</h1>
          <div>
            {localStorage.getItem("user") && (
              <div className="avatarClass">
                <img src={avatar} alt="Update Profile Avatar" width={100} />
                <p>kamana356@gmail.com</p>
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <h3>Personal Info</h3>

              <div className="input">
                <label htmlFor="firstName">First name </label>
                <br />
                <input
                  type="text"
                  placeholder="Your first name"
                  value={firstName}
                  id="firstName"
                  onChange={(e) => setFirstName(e.target.value)}
                  minLength={5}
                />
              </div>
              <div className="input toright">
                <label htmlFor="lastName">Last name </label>
                <br />
                <input
                  type="text"
                  placeholder="Your last name"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  minLength={5}
                />
              </div>
              <div className="input">
                <label htmlFor="nationalId">National ID </label>
                <br />
                <input
                  type="number"
                  placeholder="Your National ID"
                  id="nationalId"
                  maxLength={16}
                  value={nationId}
                  onChange={(e) => setNationId(e.target.value)}
                />
              </div>
              <div className="input toright">
                <label htmlFor="phone">Phone Number </label>
                <br />
                <input
                  type="number"
                  placeholder="Your phone"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  minLength={10}
                  maxLength={12}
                />
              </div>
              <div className="select-field-container">
                <div className="input select">
                  <label htmlFor="role">Job/Role </label>
                  <br />
                  <select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="driver">Driver</option>
                    <option value="operator">Operator</option>
                  </select>
                </div>
                <div className="input select">
                  <label htmlFor="gender">Gender </label>
                  <br />
                  <select
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="input select">
                  <label htmlFor="category">Category </label>
                  <br />
                  <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="driver">Driver</option>
                    <option value="operator">Operator</option>
                  </select>
                </div>
              </div>
              <div className="input textarea">
                <label htmlFor="bio">Experience/bio </label>
                <br />
                <textarea
                  rows={5}
                  placeholder="Enter your experience or bio..."
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
              </div>
              <h3>Address</h3>
              <div className="input">
                <label htmlFor="country">Country </label>
                <br />
                <input
                  type="text"
                  placeholder="Your city"
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className="input toright">
                <label htmlFor="city">City </label>
                <br />
                <input
                  type="text"
                  placeholder="Your city"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="input">
                <label htmlFor="address">Address line </label>
                <br />
                <input
                  type="text"
                  placeholder="Your address line"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="input button">
                <input type="button" value="Reset" onClick={HandleReset} />
                <input type="submit" value="Save" />
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="admin-footer">
        &copy; Copyright 2022,
        <span style={{ color: "#10B7FF" }}> Phantom Dominators</span>
      </div>
    </div>
  );
};
// {"firstName":"KAMANA","lastName":"Deo","nationId":"1198030056576288","phone":"250788088909","role":"driver","gender":"male","category":"","bio":"My name is KAMANA Deo, I am 42 years old and I live in Kigali. I was a driver for 10 years and worked for many travel agencies. I now work at the Phantom travel agency...","country":"Rwanda","city":"Kigali City","address":"KG 726 st, Kigali"}
export default UpdateProfile;
