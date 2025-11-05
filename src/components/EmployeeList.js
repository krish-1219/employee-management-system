/**
 * EmployeeList.js - Component to display list of employees
 * Shows employee information in a table format with edit and delete actions
 */

import React from 'react';

function EmployeeList({ employees, onEdit, onDelete }) {
  // If no employees, show a friendly message
  if (employees.length === 0) {
    return (
      <div className="empty-state">
        <p>No employees found. Click "Add New Employee" to get started!</p>
      </div>
    );
  }

  return (
    <div className="employee-list-container">
      <h2>Employee Directory</h2>
      <div className="table-wrapper">
        <table className="employee-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Department</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.position}</td>
                <td>{employee.department}</td>
                <td>{employee.email}</td>
                <td className="action-buttons">
                  {/* Edit button - triggers edit mode for this employee */}
                  <button
                    className="btn btn-secondary"
                    onClick={() => onEdit(employee)}
                    aria-label={`Edit ${employee.name}`}
                  >
                    Edit
                  </button>
                  {/* Delete button - removes employee from list */}
                  <button
                    className="btn btn-danger"
                    onClick={() => onDelete(employee.id)}
                    aria-label={`Delete ${employee.name}`}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeList;
