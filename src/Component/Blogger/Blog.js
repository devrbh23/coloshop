import React from 'react';
import style from './Blog.module.css';

const Blog = () => {
  return (
    <div className={style.container}>
      <img src={require('./blog.jpg')} alt="ss" className={style.image}></img>
      <h3>Here's what you had to say about spending, travel…and guilt</h3>
    </div>
  );
};

export default Blog;
