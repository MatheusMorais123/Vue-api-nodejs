<template>
  <div class="register-container">
   <div class="content">
      <section>
        <h1>Cadastro</h1>
        <p>Faça o cadastro, entre na plataforma e ajude a organizar seus filmes preferidos</p>
      </section>
      
      <form @submit.prevent="save">
          <input name="name" placeholder="Nome do Filme" v-model="filmes.name" />
          <div class="input-group">
              <input name="genero" placeholder="Genêro" v-model="filmes.genero"/>
          </div>
          <textarea name="description" type="text" placeholder="Detalhes do filme" v-model="filmes.description"/>
          <button class="button" type="submit">Cadastrar</button>
      </form>
   </div>
  </div>
</template>
<script>
  import Filme from '../services/filme'
export default {
     data(){
    return{
      filmes:{
          name: '',
          genero: '',
          description:''
      },
      search:[]
    }
  },
    methods:{
        save(){
           Filme.save(this.filmes).then(response =>{
               alert('Filmes foi cadastrado!')
           })
        }
    }
}
</script>

<style>
.register-container{
    width: 100%;
    max-width: 1120px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
}
.register-container .content{
    width: 100%;
    padding: 96px;
    background:#f8f8f5;
    box-shadow: 0 0 100px rgba(0,0,0 0.1);
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.register-container .content section h1{
    font-size: 32px;
    margin:64px 0 32px;
}
.register-container .content section p{
    font-size: 18px;
    color:#737380;
    line-height: 32px;
}
.register-container .content form{
    width: 100%;
    max-width: 450px;
}
.register-container .content form .input-group{
    display: flex;
}
.register-container .content form .input-group input + input{
    margin-left: 8px;
}
inpunt,button,textarea{
    font:400 14px Roboto, sans-serif;
}
button{
    cursor: pointer;
}
form input{
    width: 100%;
    height: 60px;
    color:#333;
    border:1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
    margin-bottom: 10px;
}
form textarea{
    width: 100%;
    resize: vertical;
    min-height: 140px;
    color:#333;
    border:1px solid #dcdce6;
    border-radius: 8px;
    padding: 10 24px;
    line-height: 24px;
}
.button{
    width: 100%;
    height:60px;
    background:#e02041;
    border:0;
    border-radius: 8px;
    color:#fff;
    font-weight: 700;
    margin-top:16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
}
@media (max-width: 900px) {
    .register-container .content section, h1,p{
        display: none;
    }
    .register-container .content form .input-group{
        display: block;    
    }
    
    .register-container .content form .input-group input + input{
        margin-left: 0;
    }
}
</style>
