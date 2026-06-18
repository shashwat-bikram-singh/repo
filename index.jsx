import { useState } from "react";

export default function JobApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    coverLetter: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.position) newErrors.position = "Position is required";
    if (!formData.experience) newErrors.experience = "Experience is required";
    if (!formData.coverLetter) newErrors.coverLetter = "Cover letter is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div>
        <h2>Application submitted</h2>
        <p>Thanks, {formData.name}!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Job application</h2>

      <div>
        <label>Full name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <div>
        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
      </div>

      <div>
        <label>Position applying for</label>
        <select
          name="position"
          value={formData.position}
          onChange={handleChange}
        >
          <option value="">Select a role</option>
          <option value="Frontend engineer">Frontend engineer</option>
          <option value="Backend engineer">Backend engineer</option>
          <option value="Full-stack engineer">Full-stack engineer</option>
          <option value="Product designer">Product designer</option>
        </select>
        {errors.position && <p style={{ color: "red" }}>{errors.position}</p>}
      </div>

      <div>
        <label>Years of experience</label>
        <input
          type="number"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
        />
        {errors.experience && <p style={{ color: "red" }}>{errors.experience}</p>}
      </div>

      <div>
        <label>Cover letter</label>
        <textarea
          name="coverLetter"
          rows={4}
          value={formData.coverLetter}
          onChange={handleChange}
        />
        {errors.coverLetter && <p style={{ color: "red" }}>{errors.coverLetter}</p>}
      </div>

      <button type="submit">Submit application</button>
    </form>
  );
}