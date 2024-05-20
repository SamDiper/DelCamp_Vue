<template>
  <div>
    <div v-if="data">
      <pre>{{ data }}</pre>
    </div>
    <div class="container">
      <i class="fa-solid fa-user"></i>
      <h2>Inicio de Sesión</h2>
      <form class="user-form">
        <label for="user-type">Tipo de usuario</label>
        <select class="user-type" id="user_type">
          <option disabled selected value="0">Tipo de usuario</option>
          <option value="buyer">Campesino</option>
          <option value="seller">Comprador</option>
        </select>
        <label for="user-email">Correo electrónico</label>
        <input
          v-model="email"
          class="user-email"
          type="email"
          id="campoCorreo"
          placeholder="Ejemplo@gmail.com"
        />

        <label for="user-password">Contraseña</label>
        <input
          v-model="password"
          class="user-password"
          type="password"
          id="campoContraseña"
          placeholder="********"
        />

        <button class="btn-register" @click="infoenviar">Iniciar Sesión</button>
        <p>
          ¿Aun no tienes una cuenta?
          <a href="/Components/Login-Register-User/user_register.html"
            >Registrate</a
          >
        </p>
        <p>Olvidaste tu contraseña? <a href="#">Recuperar Contraseña</a></p>
        <p id="TrueFormulario"></p>
      </form>
    </div>
  </div>
</template>

<script>
import API from "@/api";
import { ref } from "vue";
export default {
  name: "miTercerComponente",
  data() {
    return {
      data: null,
      email: null,
      password: null,
    };
  },
  methods: {
    infodelcamp() {
        let globalizatio  = ref([])
      API.peticion("https://render-delcamp.onrender.com/clientes").then(
        (response) => {
            globalizatio.value(response.data)
        }
      );
    },

    infoenviar() {
      API.enviar("https://render-delcamp.onrender.com/clientes", {
        correo: this.email,
        contraseña: this.password,
      });
    },
  },

  mounted() {
    this.infodelcamp();
  },
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css");

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  text-align: center;
}

.container {
  width: 400px;
  margin: 50px;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 2rem;
  background-color: #fff;
}

.fa-solid.fa-circle-arrow-left {
  font-size: 5vh;
  margin: 20px;
  color: #0ac763;
}

.fa-solid.fa-user {
  font-size: 20vh;
  color: #0ac763;
  border: 5px #0ac763 solid;
  overflow: hidden;
  padding: 20px 20px 0px 20px;
  border-radius: 50%;
}

.container h2 {
  margin: 10px 0;
  color: #0ac763;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="password"],
input[type="email"],
input[type="text"] {
  width: 95%;
  padding: 8px;
  margin-bottom: 10px;
  border-style: none;
  border-bottom: 2px solid #0ac763;
}

input:focus {
  outline: none;
}

select {
  width: 99.8%;
  padding: 8px;
  border: 1px solid #ccc;
  border-style: none;
  border-bottom: 2px solid #0ac763;
  margin-bottom: 20px;
}

.terms-conditions {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  gap: 4.5%;
}
.notifications {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  gap: 35.5%;
}
.direct-message {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  gap: 14.5%;
}

.btn-register {
  margin: 5px;
  padding: 10px 60px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  background-color: #0ac763;
  color: #fff;
  font-weight: 700;
}

.btn-register:hover {
  background-color: #08a652;
}

.btn-cancel {
  margin: 5px;
  padding: 10px 60px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  background-color: #ffffff;
  border: 1px #0ac763 solid;
  color: #212529;
  font-weight: 700;
}

.btn-cancel:hover {
  border: 1px #0ac763 solid;
}
</style>
