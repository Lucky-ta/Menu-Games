import PropTypes from 'prop-types';
import React from 'react';
import { HiOutlineArrowSmLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

function Header({ title }) {
  const navigate = useNavigate();
  return (
    <div className="toctactoe-header">
      <button
        onClick={() => navigate('/')}
        className="tictactoe-arrow-btn"
        type="button"
      >
        <HiOutlineArrowSmLeft size="2.8em" />
      </button>
      <h1 className="tictactoe-title">{title}</h1>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
