import { useState } from "react";

function ListGroup() {
  const items = ["Item 1", "Item 2", "Item 3"];

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
      <h1>This is the Way</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => changeIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
