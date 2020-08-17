<template>
  <div class="profile-container">
    <ul v-for="filmes of filmes" :key="filmes.id">
      <li>
        <strong>Nome: {{filmes.name}}</strong>
        <strong>Gênero: {{filmes.genero}}</strong>
        <strong>Descrição: {{filmes.description}}</strong>
        <strong>Curtidas: {{filmes.likes}}</strong>
           <button @click="$delete(id)"  type="button">
              Deletar      
          </button>
      </li>
    </ul>
  </div>
</template>
<script>

  import Filme from '../services/filme'

export default {

  data(){
    return{
      filmes:[],
    
    }
  },

  mounted(){
    Filme.listar().then(response =>{
     // console.log(response)
      this.filmes = response.data
    } )
  },
    delete(id){
      if(confirm('Deseja excluir o produto?')){
        Filme.delete(id).then(response => {
          this.listar()
          this.errors = {}
        }).catch(e => {
          this.errors = e.response.data.errors
        })
      }
    },

  
};
</script>

<style>

.profile-container {
  width: 100%;
  max-width: 1180px;
  margin: 32px auto;
   display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  list-style: none;
}
.profile-container h1 {
  margin-top: 80px;
  margin-bottom: 24px;
  margin-left: 45px;
}
.profile-container ul {
  list-style: none;
}
.profile-container ul li {
  background: #ecf0f1;
  padding: 24px;
  border-radius: 8px;
  position: relative;
  height: 254px;
}
.profile-container ul li img {
  width: 20%;
  float: right;
  border-radius: 15px;
}
.profile-container ul li button {
  right: 24px;
  top: 24px;
  border: 0;
  background: none;
}
.profile-container ul li button:hover {
  opacity: 0.8;
}
.profile-container ul li strong {
  display: flex;
  margin-bottom: 16px;
  color: #626567;
  font-weight: 300;
}
.profile-container .footer {
  justify-content: center;
  display: flex;
  justify-content: space-between;
}
.profile-container ul li p + strong {
  margin-top: 32px;
}
.profile-container ul li p {
  color: #737380;
  font-size: 16px;
  margin-left: 10px;
}
.profile-container ul li button{
    position: absolute;
    right: 24px;
    top:24px;
    border:0;
    background: none;
}
@media (max-width: 900px) {
  .profile-container{
     display: grid;
  grid-template-columns: repeat(1, 1fr);
  }
  .profile-container ul li{
    width: 90%;
    height: auto;
  }
} 
</style>
