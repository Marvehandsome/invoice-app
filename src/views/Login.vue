<template >
 <div class="Body">
    <div  class="drop-shadow">
          <div class="marginn">
            <h3>Admin Login</h3>
            <div class="form">
              <input type="text" v-model="name" autocomplete="off" required />
              <label for="text" class="label-name">
                <span class="content-name">
                  Enter address
                </span>
              </label>
            </div>
            <div class="form">
              <input type="password" v-model="email" autocomplete="off" required />
              <label for="text" class="label-name">
                <span class="content-name">
                  Password
                </span>
              </label>
            </div>
            <button class="bttn" @click="Login">Log into your account </button>
          </div>
    </div>
</div>


    
</template>

<script scoped>

  export default {
    name: 'LoginPage',
    components: {
     
   },
   data() {
     return {
       title: 'My first vue app'
    } 
   }
  }
</script>

<style scoped>

.general {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* .login{
  
}
.Login input{
  width: 311px;
  height: 19px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  font-size: 14px;
}
.drop-shawdow{
  box-shadow: #3F3F4419 0px 2px 5px;
  margin-top: 212px; */
  /* border: 2px solid;
} */

/* //////////////////////////// */

.Body{
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h3 {
  padding-top: 18px;
  padding-bottom: 30px;
  font-weight: 600;
  font-size: 20px;
}
.marginn{
  margin: 30px
}
.drop-shadow{
  box-shadow: #3F3F4419 0px 2px 5px;
  width: 391px;
  margin: 30px
  /* margin-top: 212px; */
  /* border: 2px solid; */
}
.form {
  width: 327px;
  position: relative;
  /* height: 60px; */
  /* padding: 32px; */
  /* overflow: hidden; */
  /* margin: 20px; */
}

.form input {
  color: #646A86;
  width: 327px;
  height: 40px;
  /* padding-left: 20px; */
  display: block;
  margin-bottom: 27px;
  margin-right: auto;
  margin-left: auto;
  font-size: 14px;
  padding-left: 15px;
}
.form label {
  position: absolute;
  bottom: 0px;
  left: 5px;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.form label::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0px;
  width: 100%;
  height: 100%;
  transform: translateX(100%);
  transition: all 0.3s ease;
  
}

.content-name {
  position: absolute;
  bottom: 0px;
  left: 10px;
  margin-bottom: 35px;
  transition: all 0.3s ease;
  transform: translateY(110%);
  background: white;
  color: #d1d1d1;
  /* opacity: 0.5; */
  
}
.form input:focus {
  outline: none;
}
.form input:focus + .label-name .content-name,
.form input:valid + .label-name .content-name {
  transform: translateY(40%);
  font-size: 14px;
  left: 10px;
  color: #d1d1d1;
}
.form input:focus + .label-name::after,
.form input:valid + .label-name::after {
  transform: translateX(50%);
}
.content-name::after{
  width: 100px;
}

.bttn{
  width: 327px;
  height: 40px;
  color: white;
  background: #58585A;
   border-radius: 5px;
  border: none;
  margin-top: 44px;
  margin-bottom: 20px;
}
.bttn:hover,
.bttn:active {
        background-color: #2E2E2E;
    }
</style>
