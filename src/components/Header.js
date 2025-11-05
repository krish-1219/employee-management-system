/**
 * Header.js - Application header component
 * Displays the title and branding for the employee management system
 */

import React from 'react';

function Header() {
  return (
    <header className="app-header">
      <div className="header-content">
        <h1 className="app-title">
          <span className="icon">👥</span>
          Employee Management System
        </h1>
        <p className="app-subtitle">Manage your team efficiently</p>
      </div>
    </header>
  );
}

export default Header;
