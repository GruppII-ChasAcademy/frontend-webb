import React from "react";

interface LogInButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: () => void;
}

const LogInButton: React.FC<LogInButtonProps> = ({ type = "button", children, onClick }) => {
  return (
    <button type={type} onClick={onClick} className="login-button">
      {children}
    </button>
  );
};

export default LogInButton;
