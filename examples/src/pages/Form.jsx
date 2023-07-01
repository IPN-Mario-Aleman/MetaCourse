import "./form.css";
import { useState } from "react";
import { validateEmail } from "../utils/validateEmail";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  // const getIsFormValid = () => {
  //   // Implement this function
  //   if (firstName.length === 0) {
  //     return false
  //   }
  //   if (!validateEmail(email)) {
  //     return false
  //   }
  //   if (password.value.length < 8) {
  //     return false
  //   }
  //   if (role != "individual" && role != "business") {
  //     return false
  //   }
  //   return true;
  // };
  // Mejor forma de realizar la validación 
  const getIsFormValid = () => { 
    return ( 
      firstName && 
      validateEmail(email) && 
      password.value.length >= 8 && 
      role !== "role" 
    ); 
  }; 

  const clearForm = () => {
    // Implement this function
    setEmail("")
    setFirstName("")
    setLastName("")
    setPassword({
      value: "",
      isTouched: false,
    })
    setRole("")
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input placeholder="First name" onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input placeholder="Last name" onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input placeholder="Email address" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input 
              placeholder="Password" 
              value={password.value} 
              onChange={(e) => setPassword({ ...password, value: e.target.value })} 
              onBlur={() => { 
                setPassword({ ...password, isTouched: true }); 
              }}
            />
            {
              password.isTouched && password.value.length < 8 && <PasswordErrorMessage />
            }
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select onChange={(e) => setRole(e.target.value)} required>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
          <button type="reset" onClick={clearForm}>
            clear form
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Form;
