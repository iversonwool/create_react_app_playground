import React from 'react';

function CloneChildren(props) {

  const {children}  = props



  return React.Children.map(children, function(child) {
    return React.cloneElement(child, {highlight: true})
  })
}


export default CloneChildren