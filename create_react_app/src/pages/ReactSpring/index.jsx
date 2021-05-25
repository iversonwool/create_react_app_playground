import React from 'react';

import { useSpring, animated} from 'react-spring'

const ReactSpringDemo = () => {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 },
  
    loop: true,
    })
  return <animated.div style={props}>I will fade in</animated.div>
};

export default ReactSpringDemo;