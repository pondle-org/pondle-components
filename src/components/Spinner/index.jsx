import React from "react";
import PropTypes from "prop-types";
import styles from "./Spinner.css";

const Spinner = (props) => {
  const { color, animate } = props;

  const pathClass = animate ? styles.animatedPath : "";

  return (
    <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="143.6" height="135" viewBox="0 0 143.6 135">
      <path className={pathClass} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeMiterlimit="10" d="M135.2 29.3c-5.9-4.4-11.4-8.8-13.9-12.3-2.5-3.4-5.1-11.4-13.2-12.7-8.1-1.2-18 .4-20.2 11.9s5.3 14.3 6.2 21.5c.9 7.2-5.6 8.4-13.1 8.1-7.5-.3-29-.3-43.3 10S4 50.7 4 50.7s-.8 31.1 31.6 47.8c9.1 4.6 17.3 6.9 24.5 7.8.2 3.6.5 10.7-.1 14.2-.9 4.8-1.2 7.5 5.6 7.5h28.3s2-.3 2.2-2.3c.4-3.7-7.4-3.5-7.4-3.5s-19.2.8-21-7.4c0 0 .1-3.9.4-8 13.7-.2 21.9-5.3 21.9-5.3s24.9-10 34.5-29.9-4.2-31.1-4.2-31.1-6.6-3.7-5-7.5c1.7-3.7 14.5 2.1 20.4 5 5.8 2.9 7.1-1.7 7.1-1.7s-1.6-2.7-7.6-7z"/>
    </svg>
  );
};

Spinner.propTypes = {
  color: PropTypes.string, // The outline color of the spinner. Default #e9e9e9
  animate: PropTypes.bool, // Animate the spinner. Defaults to true
}

Spinner.defaultProps = {
  color: "#e9e9e9",
  animate: true
}

export default Spinner;
