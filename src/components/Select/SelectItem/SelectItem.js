import PropTypes from 'prop-types';
import React from 'react';

export default function SelectItem(props) {
  return (
    <span>
      {props.children}
    </span>
  );
}

SelectItem.propTypes = {
  children: PropTypes.string,
};
