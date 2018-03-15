import React from "react";
// import PropTypes from "prop-types";
import styles from "./row.css";

class Row extends React.Component {
  render() {
    return <div className={`${styles.row}`}>{this.props.children}</div>;
  }
}

export default Row;
