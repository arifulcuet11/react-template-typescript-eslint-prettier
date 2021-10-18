import React from 'react';
import '../../../styles/customs/custom-button.css';
interface ButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
    type?: 'submit' | 'button' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type = 'button',
    className = 'btn btn-primary',
}): JSX.Element => (
    <button onClick={onClick} className={className} type={type}>
        {children}
    </button>
);

export default Button;
