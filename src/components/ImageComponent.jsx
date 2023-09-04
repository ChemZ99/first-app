import React from "react";

class ImageComponent extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.src} alt="fail" />
      </div>
    );
  }
}

export default ImageComponent;
