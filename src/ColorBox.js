import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.css";

class ColorBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
  }

  changeCopyState = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        this.setState({ copied: false });
      }, 1000);
    });
  };

  render() {
    const {
      background: { name, color },
    } = this.props;
    const { copied } = this.state;

    return (
      <CopyToClipboard text={color} onCopy={this.changeCopyState}>
        <div className="ColorBox" style={{ background: `${color}` }}>
          <div
            className={`copy-overlay ${copied && "show"}`}
            style={{ background: `${color}` }}
          />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>Copied!</h1>
            <p>{color}</p>
          </div>

          <div className="copy-container">
            <button className="copy-button" type="button">
              Copy
            </button>
            <div className="box-content">
              <span className="box-content-name">{name}</span>
              <span className="see-more">More</span>
            </div>
          </div>
        </div>
      </CopyToClipboard>
    );
  }
}
export default ColorBox;
