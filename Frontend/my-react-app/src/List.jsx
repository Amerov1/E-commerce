import PropTypes from "prop-types";

function List(props) {
  const listItems = props.items.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: <b>{fruit.cal}</b>
    </li>
  ));

  return (
    <>
      <h2 className="ListCategory">{props.category}</h2>
      <ol className="ListItems">{listItems}</ol>
    </>
  );
}

// PropTypes-Definition
List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      cal: PropTypes.number.isRequired,
    })
  ),
};

// Default Props setzen
List.defaultProps = {
    category: "None",
  items: [],
};
console.log(List.defaultProps);
export default List;
