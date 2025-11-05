/**
 * App.js - Main Application Component
 * This is the root component that manages the employee management system
 * It handles state management and renders all child components
 */

import React, { useState } from 'react';
import Header from './components/Header';
import EmployeeList from './components/EmployeeList';
import AddEmployeeForm from './components/AddEmployeeForm';
import EditEmployeeForm from './components/EditEmployeeForm';
import './styles/app.css';

function App() {
  // State to store list of employees
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', position: 'Developer', department: 'IT', email: 'john@company.com' },
    { id: 2, name: 'Jane Smith', position: 'Designer', department: 'Design', email: 'jane@company.com' }
  ]);

  // State to track which employee is being edited (null if none)
  const [editingEmployee, setEditingEmployee] = useState(null);

  // State to toggle between showing add form or employee list
  const [showAddForm, setShowAddForm] = useState(false);

  /**
   * Add a new employee to the list
   * @param {Object} employee - The employee object to add
   */
  const addEmployee = (employee) => {
    const newEmployee = {
      ...employee,
      id: Date.now() // Generate unique ID using timestamp
    };
    setEmployees([...employees, newEmployee]);
    setShowAddForm(false);
  };

  /**
   * Update an existing employee's information
   * @param {Object} updatedEmployee - The updated employee object
   */
  const updateEmployee = (updatedEmployee) => {
    setEmployees(employees.map(emp => 
      emp.id === updatedEmployee.id ? updatedEmployee : emp
    ));
    setEditingEmployee(null);
  };

  /**
   * Delete an employee from the list
   * @param {number} id - The ID of the employee to delete
   */
  const deleteEmployee = (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      setEmployees(employees.filter(emp => emp.id !== id));
    }
  };

  /**
   * Set an employee to edit mode
   * @param {Object} employee - The employee object to edit
   */
  const editEmployee = (employee) => {
    setEditingEmployee(employee);
    setShowAddForm(false);
  };

  return (
    <div className="app-container">
      <Header />
      
      <main className="main-content">
        {/* Button to toggle add employee form */}
        {!showAddForm && !editingEmployee && (
          <button 
            className="btn btn-primary add-btn"
            onClick={() => setShowAddForm(true)}
          >
            + Add New Employee
          </button>
        )}

        {/* Show Add Employee Form */}
        {showAddForm && (
          <AddEmployeeForm 
            onAdd={addEmployee}
            onCancel={() => setShowAddForm(false)}
          />
        )}

        {/* Show Edit Employee Form */}
        {editingEmployee && (
          <EditEmployeeForm 
            employee={editingEmployee}
            onUpdate={updateEmployee}
            onCancel={() => setEditingEmployee(null)}
          />
        )}

        {/* Show Employee List */}
        {!showAddForm && !editingEmployee && (
          <EmployeeList 
            employees={employees}
            onEdit={editEmployee}
            onDelete={deleteEmployee}
          />
        )}
      </main>
    </div>
  );
}

export default App;
