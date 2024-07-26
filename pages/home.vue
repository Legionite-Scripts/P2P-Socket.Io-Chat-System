<!-- pages/index.vue -->
<template>
  <div>
    <h1>User 1 Chat</h1>
    <input v-model="message" placeholder="Type a message" />
    <button @click="sendMessage">Send</button>
    <div v-for="msg in messages" :key="msg.id">{{ msg.message }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const message = ref("");
const messages = ref([]);

const { $socket } = useNuxtApp();

onMounted(() => {
  $socket.on("send-message", (msg) => {
    messages.value.push(msg);
  });
});

const sendMessage = () => {
  if (message.value.trim()) {
    // Create a custom payload
    const payload = {
      message: message.value, // Key is 'message'
    };

    // Emit the payload
    $socket.emit("send-message", payload);
    message.value = "";
  }
};
</script>
