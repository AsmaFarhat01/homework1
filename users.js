let users = [
    { id: 1, name: 'nazma' },
    { id: 2, name: 'siddhu' },
  ];
  
  // Get all users
  function getAllUsers(req, res) {
    res.json(users);
  }
  
  // Create a new user
  function createUser(req, res) {
    const newUser = req.body;
    // Generate a new ID for the user
    const newId = users.length + 1;
    newUser.id = newId;
    
    // Add the new user to the data
    users.push(newUser);
    
    res.status(201).json(newUser);
  }
  
  // Update a user
  function updateUser(req, res) {
    const userId = req.params.id;
    const updatedUser = req.body;
    
    // Find the user with the given ID and update their data
    for (let i = 0; i < users.length; i++) {
      if (users[i].id == userId) {
        users[i].name = updatedUser.name;
        break;
      }
    }
    
    res.sendStatus(204);
  }
  
  // Delete a user
  function deleteUser(req, res) {
    const userId = req.params.id;
    
    // Find the index of the user with the given ID and remove them from the data
    const userIndex = users.findIndex(user => user.id == userId);
    if (userIndex !== -1) {
      users.splice(userIndex, 1);
    }
    
    res.sendStatus(204);
  }
  
  module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
  };
  