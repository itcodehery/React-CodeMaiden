function ListGroup() {
  const items = ["Item 1", "Item 2", "Item 3"];

  //   function handleClick(item: string) {
  //     console.log(item);
  //   } // by convention, this is not the way to declare functions

  const handleClick = (item: string) => {
    console.log(item);
  }; // this is the way to declare functions

  return (
    <>
      {/* That angle brackets is called React.Fragments */}
      <h1>This is the Way</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className="list-group-item"
            onClick={() => {
              handleClick(item);
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
