import { useState } from "react";

// { items : [], heading: string }
interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // const handleClick = (index: number) => {
  //   selectedIndex = index;
  //   console.log(items[selectedIndex]);
  // };

  // A Hook: function that allows us to use React Features
  // arr[0] is the variable
  // arr[1] is the updater function
  //const arraY = useState(-1);
  const [selectedIndex, changeIndex] = useState(-1);

  return (
    <>
      {/* That angle brackets is called React.Fragments */}
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              changeIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
