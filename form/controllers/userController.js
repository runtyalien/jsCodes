const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
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

router.delete('/:id', (req, res) => {
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

router.get('/', (req, res) => {
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


module.exports = router;
