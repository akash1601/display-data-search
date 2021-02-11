import './App.css';
import React, { useEffect, useState, useMemo } from "react";
import Pagination from "./components/Pagination"
import Search from "./components/Search"

const App = () => {
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [search, setSearch] = useState("");

  const ITEMS_PER_PAGE = 50;

  useEffect(() => { 
    const getData = () => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(response => response.json())
            .then(json => {
                setComments(json);
                console.log(json);
            });
    };
    getData();
}, []);

const commentsData = useMemo(() => {
  let totalComments = comments;
  if (search) {
      totalComments = totalComments.filter(
          comment =>
              comment.name.toLowerCase().includes(search.toLowerCase()) ||
              comment.email.toLowerCase().includes(search.toLowerCase())
      );
}

  setTotalItems(totalComments.length);
  return totalComments.slice(( currentPage -1) * ITEMS_PER_PAGE, (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE);
}, [comments, currentPage, search])

var rows = []

//use for loop to load data multiple times on single page

for (var i = 0; i < 50; i++)
{
    rows.push(commentsData.map(comment => (
        <tr>
            <th scope="row" key={comment.id}>
                {comment.id}
            </th>
            <td>{comment.name}</td>
            <td>{comment.email}</td>
            <td>{comment.body}</td>
        </tr>
        )));
}  

return (
     <>
    <div className="row w-100">
      <Pagination
        total={totalItems}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={currentPage} 
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
    <div className="col-md-6 d-flex flex-row-reverse">
        <Search
        onSearch={value => {
        setSearch(value);
        setCurrentPage(1);
          }}/>
      </div>
      <table>
      <tbody>
        {rows}
       </tbody>
       <tbody>
         {rows}
       </tbody>
      </table>
    </>
  );
}

export default App;
