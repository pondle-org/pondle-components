import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import { IconMoreVertical } from "../Icons";
import { Popover, Position } from '@blueprintjs/core';
import styles from "./Dashcard.css";
import cx from "classnames";
import classNamesBind from "classnames/bind";

const Dashcard = (props) => {
  const { children, cardStyle, style, utils, className, ...otherProps } = props;

  let moduleClassNames = classNamesBind.bind(styles);

  const classes = moduleClassNames({
    wrapper: true,
    dark: cardStyle === "dark",
    empty: cardStyle === "empty",
  });


  const Utils = () => {
    const buttonStyles = {
      background: "transparent",
      color: cardStyle === "dark" ? "white" : "#a9abad",
    };
    return (
      <Popover content={utils} position={Position.LEFT} className={styles.utils}>
        <Button style={buttonStyles}><IconMoreVertical /></Button>
      </Popover>
    );
  };

  return (
    <div className={cx(classes, className)} style={style} {...otherProps}>
      { utils && <Utils /> }
      <div className={styles.inner}>
        {props.children}
      </div>
    </div>
  );
};

export default Dashcard;

Dashcard.propTypes = {
  cardStyle: PropTypes.oneOf(["dark", "empty"]), // Optional card types
  style: PropTypes.object, // Custom styles object
  utils: PropTypes.object, // Content to place inside the utilities popover. Use a react functional component.
};