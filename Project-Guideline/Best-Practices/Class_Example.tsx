import React from 'react';

class Tooltip extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
    };
  }

  handleClick = () => {
    this.setState({ toggled: !this.state.toggled });
  };
  render() {
    const { symbol = '?', text } = this.props;

    return (
      <div>
        <a onClick={this.handleClick}>{symbol}</a>
        <p>{this.state.toggled ? <p>{text}</p> : <></>}</p>
      </div>
    );
  }
}

type Props = {
  symbol?: string;
  text: string;
};

type State = {
  toggled: boolean;
};

export default Tooltip;
