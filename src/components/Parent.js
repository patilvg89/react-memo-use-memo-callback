import React, { useEffect, useMemo, useState, useCallback } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);
    let arrMemo = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], []);
    
    const fetchDataCallback = useCallback(
      (type) => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(response => response.json())
        .then(json => console.log(json))
      },
      [],
    )

    useEffect(() => {
        fetchDataCallback('todos');
     }, [fetchDataCallback]);

  return (
    <>
      <div>Parent</div>
      <div>
        <span>Count = </span>
        <span>{count}</span>
      </div>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count
      </button>
      <Child arr={arrMemo} fetchData={fetchDataCallback} />
    </>
  );
}

export default Parent;
