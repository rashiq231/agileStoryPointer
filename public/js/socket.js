let roomNumber = window.prompt("Input your room number", 1);
console.log(roomNumber);
var socket = io();
async function createRoom(url, roomNumber) {
  const response = await fetch(url, {
    method: "POST",
    // mode: "cors",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({ roomNumber }),
  });
}

createRoom("http://localhost:3000/room", roomNumber);
