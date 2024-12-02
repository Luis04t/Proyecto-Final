// src/NewPost.js
import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from './firebase';

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (auth.currentUser) {
      try {
        await addDoc(collection(db, 'posts'), {
          title,
          content,
          userId: auth.currentUser.uid,
          timestamp: new Date(),
        });
        setTitle('');
        setContent('');
      } catch (error) {
        console.error('Error al publicar:', error);
      }
    } else {
      console.log('Debe iniciar sesión primero');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Contenido"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Publicar</button>
    </form>
  );
};

export default NewPost;
