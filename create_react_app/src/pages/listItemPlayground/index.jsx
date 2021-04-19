import React, { useState } from "react";

//////////////////////////////// React Key Issue


function Item(props) {

  return <li>{props.item}<input type="text"></input></li>
}

const ListItemPlayground = () => {
  const [list, setList] = useState(["1", "2"]);

  return (
    <div>
      <button
        onClick={() => {
          list.unshift("a")
          setList([...list]);
        }}
      >
        改变数据
      </button>

      <ul>
        {list.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default ListItemPlayground;
