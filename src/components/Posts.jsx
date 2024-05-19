

import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";

function Posts() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1)

  async function fetchAndUpdateData(page) {
    setLoading(true)
    try {
        let res = await axios({
          method:"get",
          url:`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
        })
        setPosts(res.data)
        setLoading(false)
      
    } catch (error) {
        console.log(error)
        setError(true)
        setLoading(false)
      }
    }
  
  console.log(posts)

  useEffect(()=>{
    fetchAndUpdateData(page)
  },[page]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }


  return (
    <div>
      <h1 style={{textAlign:"center"}}>List of Posts</h1>
     <div id="button-box">
     <button onClick={ ()=> setPage(page - 1)  } disabled={page === 1} >Prev</button>
     <h4>{page}</h4>
     <button onClick={ ()=> setPage(page + 1)}  >Next</button>
     </div>

      {/*Complete the missing code*/}
      {posts.map((post)=> (
        
        <ul key={post.id}>
         <Post {...post}  />
        </ul>
      ))}
    </div>
  );
}

export default Posts;
