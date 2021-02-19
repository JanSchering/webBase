import React, { useState } from 'react';

const Tooltip = (props: Props) => {
  const [toggled, setToggled] = useState(false);

  const { symbol = '?', text } = props;

  return (
    <React.Fragment>
      <a onClick={() => setToggled(!toggled)}>{symbol}</a>
      {toggled ? <p>{text}</p> : <></>}
    </React.Fragment>
  );
};

type Props = {
  symbol?: string;
  text: string;
};

export default Tooltip;
