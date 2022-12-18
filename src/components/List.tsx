import React from 'react';

interface ListProps<T> {
  items: T[];
  itemRender: (item: T) => React.ReactNode;
}

function List<T>(props: ListProps<T>) {
  return <div>{props.items.map(props.itemRender)}</div>;
}

export default List;
