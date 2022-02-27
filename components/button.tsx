import React from "react";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: string; // Primary, Secondary, Link
}

const Button: React.FC<Props> = ({ children, onClick, className, style }) => {
  // Prepare
  let buttonStyleClass: string;

  // Handle Style
  switch (style) {
    case "primary": {
      buttonStyleClass = "button--primary";
      break;
    }
    case "secondary": {
      buttonStyleClass = "button--secondary";
      break;
    }
    case "link": {
      buttonStyleClass = "button--link";
      break;
    }
    default: {
      buttonStyleClass = "button--primary";
    }
  }

  return (
    <button
      className={`button ${buttonStyleClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
