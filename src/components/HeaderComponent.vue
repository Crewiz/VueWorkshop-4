<template>
  <header>
    <nav>
      <!-- Other navigation links -->
      <button v-if="!authStore.isLoggedIn" @click="login">Login</button>
      <button v-else @click="logout">Logout</button>
    </nav>
  </header>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { useAuthStore } from "@/store/authStore";

export default {
  name: "HeaderComponent",
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();

    const login = () => {
      authStore.login();
    };

    const logout = () => {
      authStore.logout();
      router.push("/login"); // Redirect to login page after logout
    };

    return { authStore, login, logout };
  },
};
</script>

<style scoped>
header {
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: right;
}

nav button {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

nav button:hover {
  background-color: #45a049;
}
</style>
