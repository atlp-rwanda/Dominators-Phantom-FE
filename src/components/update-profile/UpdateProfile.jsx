import SideBarProfile from "./sidebarProfile";
import "./profile.css";
import { useState, useEffect } from "react";
import Header from "../admin-header/Header";
import UpdateProfileForm from "./UpdateForm";
import { ToastContainer, toast } from "react-toastify";

const UpdateProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:3000/user")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setUser(data);
        });
    }, [1000]);
  }, [user]);

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
        province,
        address,
      });
      localStorage.setItem("user", JSON.stringify(user));
      toast.info("Profile Updated", {
        theme: "colored",
      });
    }
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
          theme: "colored",
        });
      }
      if (firstName === "") {
        return false;
      }
      return true;
    }

    return (
      <div>
        <form onSubmit={handleSubmit} autoComplete="off">
          <h3>Personal Info</h3>

          <div className="input">
            <label htmlFor="firstName">First name: </label>

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

        <div className="admin-footer">
          &copy; Copyright 2022,
          <span style={{ color: "#10B7FF" }}> Phantom Dominators</span>
        </div>
      </div>
    );
  };
};
export default UpdateProfile;
