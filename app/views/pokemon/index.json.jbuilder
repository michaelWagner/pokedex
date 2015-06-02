json.array! @pokemon do |pokemon|

  json.name pokemon.name

  json.attributes do

    json.id pokemon.id
    json.attack pokemon.attack
    json.defense pokemon.defense
    json.image_url pokemon.image_url
    json.moves pokemon.moves
    json.name pokemon.name
    json.poke_type pokemon.poke_type

  end
end
