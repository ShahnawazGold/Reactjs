import React, { Component } from "react";

class SalesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0
    };

    this.sumPrice = this.sumPrice.bind(this);
  }

  sumPrice(price) {
    this.setState({ total: this.state.total + price });
  }

  render() {
    console.log(this.props.items);

    var courses = this.props.items.map((item, i) => {
      return (
        <Cours
          name={item.name}
          price={item.price}
          sumPrice={this.sumPrice}
          key={i}
          active={item.active}
        />
      );
    });
    return (
      <div>
        <h4>sales App</h4>
        <h1>You can buy course</h1>
        <div id="courses">
          {courses}
          <p id="total ">
            Total <b>{this.state.total}</b>
          </p>
        </div>
      </div>
    );
  }
}

class Cours extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.clicker = this.clicker.bind(this);
  }

  clicker() {
    var active = !this.state.active;
    this.setState({ active: active });

    //======= 2.2   here call sum prices method with active state check price
    this.props.sumPrice(active ? this.props.price : -this.props.price);
  }

  render() {
    return (
      <div>
        <div>
          {/* ========= 2.3 here call clicker method add prices then show total */}
          <p onClick={this.clicker}>
            {" "}
            {this.props.name} <b> {this.props.price}</b>
          </p>
        </div>
      </div>
    );
  }
}

export default SalesApp;
