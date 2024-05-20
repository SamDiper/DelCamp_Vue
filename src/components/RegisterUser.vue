<template>
    <div>
        <div class="container">
            <i class="fa-solid fa-user"></i>
            <h2>Registro</h2>
            <form class="user-form">
                <label for="user-name">Nombre</label>
                <input class="user-name" type="text" id="campoNombre" placeholder="@Pepito">

                <label for="user-lastname">Apellido</label>
                <input class="user-name" type="text" id="campoApellido" placeholder="@Pérez Pérez">

                <label for="user-type">Tipo de usuario</label>
                <select class="user-type" id="user_type">
                    <option disabled selected value="0">Tipo de usuario</option>
                    <option value="buyer">Campesino</option>
                    <option value="seller">Comprador</option>
                </select>
                <label for="user-email">Correo electrónico</label>
                <input class="user-email" type="email" id="campoCorreo" placeholder="Ejemplo@gmail.com">

                <label for="user-password">Contraseña</label>
                <input class="user-password" type="password" id="campoContraseña" placeholder="********">

                <div class="terms-conditions">
                    <label for="terms-conditions">Aceptar términos y condiciones</label>
                    <input type="checkbox" id="terms-conditions" required />
                </div>
                <div class="notifications">
                    <label for="notifications">Notificaciones</label>
                    <input type="checkbox" id="notifications" />
                </div>
                <div class="direct-message">
                    <label for="direct-message">Recibir mensajes directos</label>
                    <input type="checkbox" id="direct-message" />
                </div>
                <p id="TrueFormulario"></p>
                <button class="btn-register" type="submit">Registrar</button>
                <button class="btn-cancel" type="reset">Cancelar</button>
            </form>
        </div>
    </div>
  </template>
  
  <script>
  import API from "@/api";
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
        API.peticion("https://render-delcamp.onrender.com/clientes").then(
          (response) => {
            console.log(response);
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
  