import React, { useEffect } from 'react';
import './index.css'

const Animation = (props) => {
  console.log(props)
  useEffect(()=> {

    return () => {
      console.log('Animation unmount')
    }
  }, [])
  return (
    <div className="animation_demo">
    </div>
  );
};


export const Another = ({style}) => {
  useEffect(()=> {

    return () => {
      console.log('Another unmount')
    }
  }, [])

  return <div style={style}>Hello</div>
}


export default Animation;