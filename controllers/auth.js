import { db } from '../db.js';
import bcrypt from 'bcryptjs';

export const register = (req, res) => {
  const q = 'Select * from user where email = ? or username = ? ';

  db.query(q, [req.body.email, req.body.name], (err, data) => {
    if (err) return res.json(err);

    if (data.length) return res.status(409).json('User already exist!');

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = 'Insert into user (`username`, `email`, `password`) values(?) ';

    const values = [req.body.username, req.body.email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json('User has been created.');
    });
  });
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
