// import { useRef, useState } from "react";
// import "./App.css";

// function App() {
//   const [todos, setTodos] = useState([]);

//   const inputRef = useRef();

//   const handleAddTodo = () => {
//     const text = inputRef.current.value;
//     const newItem = { completed: false, text };
//     setTodos([...todos, newItem]);
//     inputRef.current.value = "";
//   };

//   const handleItemDone = (index) => {
//     const newTodos = [...todos];
//     newTodos[index].completed = !newTodos[index].completed;
//     setTodos(newTodos);
//   };

//   const handleDeleteItem = (index) => {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1)
//     setTodos(newTodos)
//   }

//   return (
//     <div className="App">
//       <h2>To Do List</h2>
//       <div className="to-do-container">
//         <ul>
//           {todos.map(({ text, completed }, index) => {
//             return (
//               <div className="item">
//                 <li
//                   className={completed ? "done" : ""}
//                   key={index}
//                   onClick={() => handleItemDone(index)}
//                 >
//                   {text}
//                 </li>
//                 <span onClick={() => handleDeleteItem(index)} className="trash">❌</span>
//               </div>
//             );
//           })}
//         </ul>
//         <input ref={inputRef} placeholder="Enter item..." />
//         <button onClick={handleAddTodo}>Add item</button>
//       </div>
//     </div>
//   );
// }

// export default App;

// import { useRef, useState, useEffect } from "react";
// import "./App.css";
// export default function MyApp() {
//   const [count, setCount] = useState(0);
//   const [msg, setMsg] = useState(" ");
//   useEffect(() => {
//     if (count < 0)
//       setMsg("The number is negative");
//     else
//       setMsg("");
//   }
//     , [count]);
//   function Increment() {
//     setCount(count + 1);


//   }
//   function Decrement() {
//     setCount(count - 1);

//   }

//   return (
//     <div>
//       <h2>Counters that update together</h2>
//       <h3>{count}</h3>
//       <button onClick={Increment}>+</button>

//       <button onClick={Decrement}>-</button>
//       <h3>{msg}</h3>
//     </div>
//   );
// };

import { useRef, useState, useEffect } from "react";
import "./App.css";
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    fetch("https://test-api-v1-vert.vercel.app/v1/blogs")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setData(result.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetched Data</h1>
      <button onClick={fetchData}>Reload Data</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="container">
          {data.map((item) => (
            <div className="child" key={item.id}>
              <h3>{item.title}</h3>
              <img src={item.image} alt={item.title} width="200" />
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default App();