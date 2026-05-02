import React, { useState } from "react";

export default function BasicDetails() {
  const [formData, setFormData] = useState({
    applicantName: "",
    applicantAddress: "",
    applicantQualifications: "",
    applicantNationality: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow rounded">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Basic Details</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-bold">
                    Full Name of the Applicant
                  </label>
                  <input
                    type="text"
                    name="applicantName"
                    className="form-control"
                    value={formData.applicantName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">
                    Full Residential Address
                  </label>
                  <textarea
                    name="applicantAddress"
                    className="form-control"
                    rows="3"
                    value={formData.applicantAddress}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label className="form-label  fw-bold">
                    Technical Qualifications (if any)
                  </label>
                  <input
                    type="text"
                    name="applicantQualifications"
                    className="form-control"
                    value={formData.applicantQualifications}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-bold">Nationality</label>
                  <input
                    type="text"
                    name="applicantNationality"
                    className="form-control"
                    value={formData.applicantNationality}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
