import { useReducer } from "react";
import { formReducer, initialState } from "./reducer";

function App() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { step, formData, isSubmitted } = state;

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value
    });
  };

  const nextDisabled =
    (step === 1 && (!formData.name || !formData.email)) ||
    (step === 2 && (!formData.username || !formData.password));

  return (
    <div className="container">
      <h2>Multi Step Form</h2>
      <p>Step {step} / 3</p>

      {!isSubmitted && (
        <>
          {/* STEP 1 */}
          {step === 1 && (
            <>
              <input
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <input
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <>
              <h4>Review Details</h4>
              <p>Name: {formData.name}</p>
              <p>Email: {formData.email}</p>
              <p>Username: {formData.username}</p>
              <p>Password: {formData.password}</p>
            </>
          )}

          <div className="buttons">
            {step > 1 && (
              <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
                Back
              </button>
            )}

            {step < 3 && (
              <button
                disabled={nextDisabled}
                onClick={() => dispatch({ type: "NEXT_STEP" })}
              >
                Next
              </button>
            )}

            {step === 3 && (
              <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>
                Submit
              </button>
            )}
          </div>
        </>
      )}

      {isSubmitted && (
        <>
          <h3>Form Submitted Successfully 🎉</h3>
          <button onClick={() => dispatch({ type: "RESET_FORM" })}>
            Reset Form
          </button>
        </>
      )}
    </div>
  );
}

export default App;
