### Step-by-Step Guide

### Step 1 :

Download the zip file

### Step 2 :

Unzip the zip file

### Step 3:

Navigate to Your Project

```bash
cd <name-of-project>
```

### Step 4:

Install Dependencies

```bash
npm install

```

This command installs all the necessary dependencies for your project.

### Step 5:

Start the Development Server\*\*

```bash
npm run dev

```

Visit `http://localhost:5173` in your browser to see your app running.

### Understanding the Project Structure

After creating your project, you'll see several files and folders:

- `node_modules/`: Contains all the packages and dependencies your project needs.
- `public/`: Stores static assets like images.
- `src/`: This is where you'll spend most of your time. It contains your React components.
  - `App.jsx`: The main React component.
  - `main.jsx`: The entry point for your application, where React is rendered into the DOM.
- `src/components`: This is where you'll find all the Child components of App.
- `index.html`: The base HTML file.
- `vite.config.js`: Configuration file for Vite.
- `package.json`: Lists your project dependencies and scripts.

### Assignment Problems

**Note : Please note that axios library is also installed within the template (gets installed when you do `npm install` ) and need not be installed again**

### Problem 1: Fetching and Displaying Data with Axios

Here is an example using `Users` and `User` components to fetch and display user data from an API using Axios as soon as component mounts

```jsx
// src/components/Users.jsx

import { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";

function Users() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);

  async function fetchAndUpdateData() {
    setLoading(true);
    try {
      let res = await axios({
        method: "get",
        url: `https://reqres.in/api/users`,
      });

      setUsers(res?.data?.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAndUpdateData();
  }, []);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div>
      <h1>List of users</h1>
      {users?.map((user) => (
        <User {...user} key={user.id} />
      ))}
    </div>
  );
}

export default Users;
```

```jsx
// src/components/User.jsx

function User({ avatar, email, first_name, last_name }) {
  return (
    <div>
      <img src={avatar} alt={first_name} />
      <div>
        Name : {first_name} {last_name}
      </div>
      <div>Email : {email}</div>
    </div>
  );
}

export default User;
```

Now, you have to complete the code in the `Posts` and `Post` components. The `Posts` component should fetch a list of posts from an API using Axios ( Perform side effect ) as soon as component mounts and display them using the `Post` component. Complete the Missing Code

```jsx
// src/components/Posts.jsx

import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";

function Posts() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  async function fetchAndUpdateData() {
    {
      /*Complete the missing code*/
    }
    try {
      {
        /*Complete the missing code*/
      }
    } catch (error) {
      {
        /*Complete the missing code*/
      }
    }
  }

  useEffect(() => {
    fetchAndUpdateData();
  }, []);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div>
      <h1>List of Posts</h1>

      {/*Complete the missing code*/}
    </div>
  );
}

export default Posts;
```

```jsx
// src/components/Post.jsx

function Post({ title, body }) {
  return (
    <div>
      <p>Title : {title}</p>
      <p>Body : {body}</p>
    </div>
  );
}

export default Post;
```

### Submission Instructions

- Push your code to GitHub and share the repository link.
#   R e v e r s e - e n g i n e e r i n g - A s s i g - 2 b  
 