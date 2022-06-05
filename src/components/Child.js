import React,{useEffect} from "react";

function Child(props) {
    console.log("Child Render", props);
    useEffect(() => {
        props.fetchData('users');
    }, [props.fetchData]);
  return <div>Child</div>;
}

export default React.memo(Child);