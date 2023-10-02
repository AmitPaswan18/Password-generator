function createConnection(serverUrl, roomId) {
  return {
    connect() {
      console.log(
        '✅ Connecting to "' + roomId + '" room at ' + serverUrl + "..."
      );
    },

    disconnect() {
      console.log(
        '✅ Disconnected to "' + roomId + '" room at ' + serverUrl + "..."
      );
    },
  };
}

export default createConnection;
