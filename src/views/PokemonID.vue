<template>
    <div>
        
        <h1>Pokemon ID {{id+1}}</h1>
        <div v-if="pokemon">
            <h1>{{pokemon.forms[0].name}}</h1>
            
            <img :src="pokemon.sprites.front_default" alt="">

            <h2><button class="btn btn-warning">Habilidades</button></h2>
            <h3>{{pokemon.abilities[0].ability.name}}</h3>
            <h3>{{pokemon.abilities[1].ability.name}}</h3>
            <h3> <button class="btn btn-info text-white">Total Base Expereincia{{pokemon.base_experience}} </button> </h3>
            <!--
            <img :src="image" alt="">
             <div>{{$data}}</div>
            -->
           
        </div>
        
    </div>
</template>
<script>

export default {
    props:{
        id:{
            type:Number,
            required:true
        }
    },
    name: '',

    data() {
        return {
           pokemon:null,
           image:null
        };
    },
    mounted() {
        
    },
    created(){
        this.getPokemonID();
    },
    methods: {
        
        async getPokemonID(){
            try{
                const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id+1}`) //${this.id}
                .then(r=>r.json());
                console.log(pokemon);
                this.pokemon=pokemon;
                
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
    },
    watch:{
       id(){
      //  this.getPokemonID();
       } 
    }
};
</script>
<style scoped>

</style>