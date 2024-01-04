<template>
  <div class="pokemon mx-5  my-5  px-5  py-5 ">
    <h1>Pokemon App</h1>

    <h3>Pokemon List</h3>

    <div class="content">
        <div class="row mb-3  d-flex justify-content-center">
            <div class="col bg-secondary text-white">Nombre Pokemon</div>
            <div class="col bg-secondary text-white">Accion</div>
        </div>
        <div class="row" v-for="(pokemon, index) of pokemones">
            <div class="col">{{pokemon.name}}</div>
            <div class="col">
                <a class="btn btn-primary" v-bind:href="`#/pokemon/${index}`"> Ver </a>
                <!--
                <a class="btn btn-primary" v-bind:href="pokemon.url"> Ver </a>
                -->
            </div>
        </div>
    </div>
    <div>{{$data}}</div>
    <!--
    
    -->
  </div>
</template>

<script>
export default {
    props:{
        title:String,
        start:{
            type:Number,
            //required:true,
            default:1
        }
    },
    name: '',

    data() {
        return {
           pokemones:{}
        };
    },
    mounted() {
        
    },
    created(){
        this.getPokemon();
    },
    methods: {
        
        async getPokemon(){
            try{
                const pokemones = await fetch(`https://pokeapi.co/api/v2/pokemon/`) //${this.id}
                .then(r=>r.json());
                console.log(pokemones);
                this.pokemones=pokemones.results;
                
            //    const {front_default} = pokemon.sprites.front_default;
            //    this.image = front_default;

            }
            catch(e){
              //  this.$router.push('/')
                console.log('nada que mostrar')
            }
        }
    },
    computed:{
        resultado_computed(){
            console.log(pokemones);
        }
    }
};

</script>

<style scoped>

</style>
