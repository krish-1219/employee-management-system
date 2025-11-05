/**
 * EditEmployeeForm.js - Form component for editing existing employees
 * Pre-fills form with current employee data and handles updates
 */

import React, { useState } from 'react';

function EditEmployeeForm({ employee, onUpdate, onCancel }) {
  // Initialize form state with current employee data
  const [formData, setFormData] = useState({
    id: employee.id,
    name: employee.name,
    position: employee.position,
    department: employee.department,
    email: employee.email
  });

  /**
   * Handle input changes and update form state
   * @param {Event} e - The input change event
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  /**
   * Handle form submission
   * @param {Event} e - The form submit event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation - ensure all fields are filled
    if (!formData.name || !formData.position || !formData.department || !formData.email) {
      alert('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Call the onUpdate prop function with updated data
    onUpdate(formData);
  };

  return (
    <div className="form-container">
      <h2>Edit Employee Information</h2>
      <form onSubmit={handleSubmit} className="employee-form">
        {/* Name Input */}
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter employee name"
            required
          />
        </div>

        {/* Position Input */}
        <div className="form-group">
          <label htmlFor="position">Position *</label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            placeholder="Enter job position"
            required
          />
        </div>

        {/* Department Input */}
        <div className="form-group">
          <label htmlFor="department">Department *</label>
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="Enter department"
            required
          />
        </div>

        {/* Email Input */}
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="employee@company.com"
            required
          />
        </div>

        {/* Form Action Buttons */}
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            Update Employee
          </button>
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditEmployeeForm;
