import logo from './logo.svg';
import prop from 'prop-types';
import './App.css';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';
// useMemo não propaga a renderização do componente Pai para o Filho

const Post = ({ post }) => {
  console.log('Filho renderizou!');
  return (
    <div key={post.id} className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: prop.shape({
    id: prop.number,
    title: prop.string,
    body: prop.string,
  }),
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  console.log('Pai renderizou!');

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 5000);
  }, []);

  return (
    <div className="App">
      <p>
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      <h1>Opa</h1>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => <Post key={post.id} post={post} />)
        );
      }, [posts])}
      {posts.length <= 0 && <p>Ainda não há posts</p>}
    </div>
  );
}

export default App;
