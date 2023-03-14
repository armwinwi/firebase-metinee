<template>
  <div class="container" style="width: 30rem">
    <div class="border p-4" style="background-color: beige">
      <div class="row g-3 h-100 justify-content-center">
        <div class="col">
          <input
            type="email"
            class="form-control"
            placeholder="email"
            aria-label="First name"
            v-model="email"
          />
        </div>
        <div class="col">
          <input
            type="password"
            class="form-control"
            placeholder="password"
            aria-label="Last name"
            name="pwd"
            v-model="pwd"
          />
        </div>
      </div>
      <br />
      <div class="container">
        <div class="row gap-2">
          <button type="email" class="btn btn-warning col" @click="register()">
            Register
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const pwd = ref("");

function register() {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email.value, pwd.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("User = " + user);
      router.push("/");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
      // ..
    });
}
</script>
