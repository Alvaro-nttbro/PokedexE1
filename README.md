# PokedexE1
Ejercicio 1, crear una pokedex usando la PokéApi en Angular

# Ejecutar el proyecto
primero es importante ver si tienes node.js y la consola de angular instalada, para ello abre una consola y en la terminal ejecuta los comandos: 
node --version
ng --version

Una vez esten instalados, podremos ejecutar el proyecto:
1º Abrir una consola de comandos
2º Dirigirse al directorio del proyecto
3º Ejecutar el comando ng serve --open

# Funcionalidad básica implementada
Al abrir la pagina web aparecerá una lista de pokemons con su imagen, su número identificador, su nombre y un enlace 'details' al pulsar sobre este enlace nos lleva a otra ruta donde podemos ver información extra sobre el pokemon seleccionado: imagen, identificador, nombre peso, altura y tipos. Arriba de esta página hay un botón 'return' que nos llevará de vuelta a la lista de pokemons inicial, en esta pantalla si bajamos hasta abajo, podremos ver dos botones, 'next' y 'prev', además del número de la página en la que nos encontramos, al pulsar sobre estos botones, se actualizará la lista de pokemons y podremos ver los siguientes 21 pokemons o volver a ver los anteriores.

# Funcionalidades extra implementadas