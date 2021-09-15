const movementHandler = (data) => {
  // eslint-disable-next-line no-console
  console.log(data);
};

const activeHandler = (data) => {
  // eslint-disable-next-line no-console
  console.log(data);
};

const buttonHandler = (data) => {
  // eslint-disable-next-line no-console
  console.log(data);
};

const disconnectHandler = (data) => {
  // eslint-disable-next-line no-console
  console.log('User disconnected', data);
};

const socketHandler = (socket) => {
  // eslint-disable-next-line no-console
  console.log('Registered new Socket');
  socket.on('movement', movementHandler);
  socket.on('isActive', activeHandler);
  socket.on('buttonPress', buttonHandler);
  socket.on('disconnect', disconnectHandler);
};

module.exports = {
  socketHandler,
};
