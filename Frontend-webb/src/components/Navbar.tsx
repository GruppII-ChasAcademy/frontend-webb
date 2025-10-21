// src/components/Navbar.tsx
import React from "react";

const Navbar = () => {
  return (
    <header className="dashboard-header">
      <h1>Grupp || Chas academy</h1>
      <button className="notification-btn" aria-label="Notifications">
        🔔
      </button>
    </header>
  );
};

export default Navbar;
