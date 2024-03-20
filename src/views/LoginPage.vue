<template>
  <div>
    <h1>Login</h1>
    <button @click="login">Log In</button>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { useAuthStore } from "@/store/authStore";

export default {
  name: "LoginPage",
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();

    const login = () => {
      authStore.login();
      router.push("/dashboard"); // Redirect to the dashboard after login
    };

    return { login };
  },
};
</script>

<style scoped>
h1 {
  color: #4a90e2;
  text-align: center;
}

div {
  padding: 20px;
  text-align: center;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
