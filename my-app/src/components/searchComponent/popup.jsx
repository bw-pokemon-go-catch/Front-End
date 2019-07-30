import React from "react";

export default class Popup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items, isOpen } = this.props;
    //Do not show popup
    if (!isOpen) return null;
    return (
      <div className="popup">
        <div className="container">
          <div className="content">
            {items &&
              items.map((item, idx) => {
                return (
                  <div className="item" key={idx}>
                    {item.name}
                  </div>
                );
              })}
            {!items && <div className="warning">Nothing Found!</div>}
          </div>
          <div className="dropdown">Type Pokemon name to search for number</div>
        </div>
      </div>
    );
  }
}
