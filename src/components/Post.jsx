import "../App.css"

function Post({ title, body }) {
  return (
    <div id="post-box">
      
      <p>Title : {title}</p>
      <p>Body : {body}</p>
    </div>
  );
}

export default Post;
