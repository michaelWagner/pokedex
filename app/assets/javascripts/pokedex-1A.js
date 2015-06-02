Pokedex.RootView.prototype.addPokemonToList = function (pokemon) {
  var $pokemon = $('<li>').addClass('poke-list-item')
    .attr('name', pokemon.name).attr('poke_type', pokemon.poke_type)
    .text(pokemon.attributes.name + ' : ' + pokemon.attributes.poke_type);
  this.$pokeList.append($pokemon);
  this.pokes.create(pokemon.toJSON());
};

Pokedex.RootView.prototype.refreshPokemon = function () {
  for (var i = 0; i < this.pokes.length; i++) {
    this.addPokemonToList(this.pokes[i]);
  }
};
