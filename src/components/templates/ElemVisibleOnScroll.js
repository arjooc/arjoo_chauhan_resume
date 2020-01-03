import React from "react";
import PropTypes from "prop-types";

export default class ElemVisibleOnScroll extends React.Component {
  state = {
    scrolledAmount: 0,
    refScrolledAmount: 0
  };

  componentDidMount() {
    const { side, refElem } = this.props;
    window.addEventListener("scroll", this.listenToScroll);
    this.setState({
      refScrolledAmount: side
    });
  }

  listenToScroll = () => {
    console.log("I am scrolling=============");
    if (typeof window !== "undefined") {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const scrolled = winScroll;
      this.setState({
        scrolledAmount: scrolled
      });
    }
  };

  render() {
    const { classes, children } = this.props;
    const { scrolledAmount, refScrolledAmount } = this.state;
    return (
      <span
        className={
          (classes && `${classes}`) +
          (scrolledAmount <= refScrolledAmount ? ` hidden` : "")
        }
      >
        {children}
      </span>
    );
  }
}

ElemVisibleOnScroll.propTypes = {
  side: PropTypes.any,
  refElem: PropTypes.any,
  classes: PropTypes.string,
  children: PropTypes.any
};
