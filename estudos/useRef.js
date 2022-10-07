import logo from './logo.svg';
import prop from 'prop-types';
import './App.css';
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
// useMemo não propaga a renderização do componente Pai para o Filho

const Post = ({ post, handleClick }) => {
  console.log('Filho renderizou!');
  return (
    <div key={post.id} className="post">
      <h1 onClick={() => handleClick(post.title)}>{post.title}</h1>
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
  handleClick: prop.func,
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const input = useRef(null);
  const contador = useRef(0);

  console.log('Pai renderizou!');

  useEffect(() => {
    input.current.focus();
    console.log(input.current);
  }, [value]);

  useEffect(() => {
    contador.current++;
  });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  const handleClick = (value) => {
    setValue(value);
  };

  return (
    <div className="App">
      <h6>Renderizou: {contador.current}X</h6>
      <p>
        <input
          ref={input}
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      <h1>Opa</h1>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => (
            <Post handleClick={handleClick} key={post.id} post={post} />
          ))
        );
      }, [posts])}
      {posts.length <= 0 && <p>Ainda não há posts</p>}
    </div>
  );
}

export default App;
