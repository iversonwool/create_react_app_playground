import React, { Component, PureComponent, memo, useMemo } from "react";

// class B extends PureComponent {
//   // shouldComponentUpdate(prevProps) {
//   //   const {text} = this.props
//   //   if (text === prevProps.text) {
//   //     return false
//   //   }
//   //   return true
//   // }

//   render() {
//     console.log('B render called')
//     const {text} = this.props
//     return (
//       <div>
//         B:text {text}
//       </div>
//     );
//   }
// }

// function isEqual(prevProps, props) {
//   return prevProps.text === props.text
// }

function B(props) {
  console.log("B render called");
  const { text, count } = props;

  // const renderText = () => <div>{text}</div>;

  // const renderCount = () => <div>{text}</div>;

  const memoText = useMemo(() => {
    console.log("memoText called");
    return <div>{text}</div>;
  }, [text]);
  const memoCount = useMemo(() => {
    console.log("memo count called");

    return <div>{count}</div>;
  }, [count]);
  return (
    <div>
      {memoText}
      {memoCount}
    </div>
  );
}

// export default memo(B, isEqual);
export default B;
