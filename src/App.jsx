
import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    rollNumber: "",
    course: "",
    gender: "",
    address: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ ...formData });
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      rollNumber: "",
      course: "",
      gender: "",
      address: "",
    });

    setSubmittedData(null);
  };

  return (
    <div className="page">
      <header className="topbar">
        <div className="brand">
          <span className="brand-icon">S</span>
          <span>Student<span className="brand-highlight">Portal</span></span>
        </div>
        <span className="topbar-label">REGISTRATION SYSTEM</span>
      </header>

      <main className="main-container">
        <section className="intro">
          <span className="eyebrow">STUDENT ENROLLMENT</span>
          <h1>Start your journey<span>.</span></h1>
          <p>
            Fill in your details below to register. Your information will
            appear after you submit the form.
          </p>
        </section>

        <div className="content-grid">
          <section className="form-card">
            <div className="card-heading">
              <div>
                <h2>Registration Form</h2>
                <p>Enter your personal and academic details.</p>
              </div>
              <span className="step-badge">01 / FORM</span>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="section-label">PERSONAL INFORMATION</div>

              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="student@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="10-digit mobile number"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="section-label section-spaced">
                ACADEMIC INFORMATION
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="rollNumber">Roll Number *</label>
                  <input
                    id="rollNumber"
                    name="rollNumber"
                    type="text"
                    placeholder="Enter roll number"
                    value={formData.rollNumber}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="course">Select Course *</label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose a course</option>
                    <option value="BCA">BCA</option>
                    <option value="BCA Honors">BCA Honors</option>
                    <option value="BBA">BBA</option>
                    <option value="B.Com">B.Com</option>
                    <option value="B.Sc IT">B.Sc IT</option>
                    <option value="MCA">MCA</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Gender *</label>
                <div className="gender-options">
                  {["Male", "Female", "Other"].map((option) => (
                    <label className="gender-option" key={option}>
                      <input
                        type="radio"
                        name="gender"
                        value={option}
                        checked={formData.gender === option}
                        onChange={handleChange}
                        required
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="address">Address *</label>
                <textarea
                  id="address"
                  name="address"
                  rows="3"
                  placeholder="Enter your complete address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <button className="submit-btn" type="submit">
                Register Student <span>→</span>
              </button>

              <p className="form-note">
                * All fields are required.
              </p>
            </form>
          </section>

          <aside className="result-card">
            <div className="result-top">
              <span className="result-icon">✓</span>
              <span className="result-label">SUBMISSION PREVIEW</span>
            </div>

            {submittedData ? (
              <div className="student-result">
                <div className="avatar">
                  {submittedData.fullName.charAt(0).toUpperCase()}
                </div>
                <h2>{submittedData.fullName}</h2>
                <p className="result-course">{submittedData.course}</p>

                <div className="success-message">
                  <span>✓</span> Form submitted successfully!
                </div>

                <div className="details-list">
                  <div className="detail-item">
                    <span>Email</span>
                    <strong>{submittedData.email}</strong>
                  </div>
                  <div className="detail-item">
                    <span>Phone</span>
                    <strong>{submittedData.phone}</strong>
                  </div>
                  <div className="detail-item">
                    <span>Roll Number</span>
                    <strong>{submittedData.rollNumber}</strong>
                  </div>
                  <div className="detail-item">
                    <span>Gender</span>
                    <strong>{submittedData.gender}</strong>
                  </div>
                  <div className="detail-item">
                    <span>Address</span>
                    <strong>{submittedData.address}</strong>
                  </div>
                </div>

                <button
                  className="reset-btn"
                  type="button"
                  onClick={handleReset}
                >
                  Register Another Student
                </button>
              </div>
            ) : (
              <div className="empty-state">
                <div className="empty-illustration">
                  <span>▤</span>
                  <i>+</i>
                </div>
                <h3>Your details will appear here</h3>
                <p>
                  Complete the registration form and click the button to see
                  the submitted student information.
                </p>
                <div className="preview-line" />
                <div className="preview-line short" />
                <div className="preview-line medium" />
              </div>
            )}

            <div className="privacy-note">
              <span>◆</span>
              <p>This demo displays submitted data on this page only.</p>
            </div>
          </aside>
        </div>

        <footer className="footer">
          <span>STUDENT PORTAL</span>
          <span>React · useState · Controlled Components</span>
        </footer>
      </main>
    </div>
  );
}

export default App;
