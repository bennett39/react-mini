import React from 'react';

function Items(props) {
  const items = [
		{id: 1, name: "one"},
    {id: 2, name: "two"}
  ];
  const listItems = items.map((item) =>
    <li key={item['id']}>{item['name']}</li>
  );
  return (
    <ul>
      { listItems }
    </ul>
  );
}

export default Items
