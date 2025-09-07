const socket = io();

const form = document.getElementById('chat-form');
const input = document.getElementById('message');
const chatBox = document.getElementById('chat-box');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const msg = input.value;
  if (msg.trim()) {
    socket.emit('chat message', msg);
    input.value = '';
  }
});

socket.on('chat message', (msg) => {
  const div = document.createElement('div');
  div.textContent = msg;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
});
