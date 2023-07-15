import { db } from '../db.js';

export const getPosts = (req, res) => {
  const q = req.query.cat
    ? 'Select * from posts where cat=?'
    : 'Select * from posts';

  db.query(q, [req.query.cat], (err, data) => {
    if(err) return res.send(err);

    return res.status(200).json(data);
  })
};

export const getPost = (req, res) => {
  res.json('dssdf');
};

export const addPost = (req, res) => {
  res.json('dssdf');
};

export const deletePost = (req, res) => {
  res.json('dssdf');
};

export const updatePost = (req, res) => {
  res.json('dssdf');
};
