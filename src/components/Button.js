import React from 'react';
import PropTypes from 'prop-types';

const CustomOutlineButton = ({ color, size, children, onClick }) => {
    return (
        <button
            className={`custom-outline-button ${size}`}
            style={{ borderColor: color, color: color }}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

CustomOutlineButton.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

CustomOutlineButton.defaultProps = {
    color: '#1470AF', // Default color
    size: 'lg', // Default size
    onClick: () => {},
};

export default CustomOutlineButton;