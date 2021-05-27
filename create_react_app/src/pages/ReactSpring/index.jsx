import React, {useState} from "react";

import { useSpring, animated } from "react-spring";

const ReactSpringDemo = () => {
  const props = useSpring({
    to: { opacity: 0 },
    from: { opacity: 1 },
    // immediate: (key) => {
    //   console.log('key', key)
    //   return false
    // }
    // loop: true,
    config: { duration: 2500 }
  });
  return (
    <div>
      <animated.div style={props}>I will fade in</animated.div>


      <Text />


      <LoopTrue />
    </div>
  );
};

export default ReactSpringDemo;




function Text() {
  const [flip, set] = useState(false)
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    // config: config.molasses,
    onRest: () => set(!flip),
  })

  return <animated.h1 style={props}>hello</animated.h1>
}




function LoopTrue() {
  const styles = useSpring({
    loop: {reverse: true},
    from: { rotateZ: 0 },
    to: { rotateZ: 180 },
  })

  return (
    <animated.div
      style={{
        width: 80,
        height: 80,
        backgroundColor: '#46e891',
        borderRadius: 16,
        // left: 100,
        ...styles,
      }}
    />
  )
}