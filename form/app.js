const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const sequelize = new Sequelize('userdata', 'root', 'omkar', {
  host: 'localhost',
  dialect: 'mysql',
});

const User = sequelize.define('User', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    phone: { // Changed from 'number' to 'phone'
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

sequelize.sync().then(() => {
  console.log('Database and table created');
});

app.get('/', (req, res) => {
  //res.send('Welcome to the User Management App');
  res.sendFile(__dirname+'/form.html');
});

app.post('/user', (req, res) => {
  const { name, email, phone } = req.body;
  User.create({
    name,
    email,
    phone,
  })
    .then((user) => {
      console.log('User created: ', user.toJSON());
      res.status(201).json(user);
      console.log(user.phone);
    })
    .catch((err) => {
      console.error('Error creating user:', err);
      res.status(500).json({ error: 'Error creating user' });
    });
});

app.delete('/user/:id', (req, res) => {
    const userId = req.params.id;
    User.findByPk(userId)
        .then((user) => {
            if(!user){
                return res.status(404).json({ error: 'User not found' });
            }
            return user.destroy();
        })
        .then(() => {
            console.log('User deleted');
            res.status(204).send();
        })
        .catch((error) => {
            console.error(' Error deleting user:', error);
            res.status(500).json({ error: 'Error deleting user'});
        });
});

app.get('/user', (req, res) => {
    User.findAll()
        .then((users) => {
            console.log('Users retrieved', users);
            res.status(200).json(users);
        })
        .catch((error) => {
            console.error('Error retrieving users:', error);
            res.status(500).json({ error: 'Error retrieving users '});
        });
});

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});

