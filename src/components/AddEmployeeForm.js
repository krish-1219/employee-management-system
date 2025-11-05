/**
 * AddEmployeeForm.js - Form component for adding new employees
 * Handles form submission and validation for new employee data
 */

import React, { useState } from 'react';

function AddEmployeeForm({ onAdd, onCancel }) {
  // Form state to track input values
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    department: '',
    email: ''
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

    // Call the onAdd prop function with form data
    onAdd(formData);
    
    // Reset form
    setFormData({
      name: '',
      position: '',
      department: '',
      email: ''
    });
  };

  return (
    <div className="form-container">
      <h2>Add New Employee</h2>
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
            Add Employee
          </button>
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddEmployeeForm;
