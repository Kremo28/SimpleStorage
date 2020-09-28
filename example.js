const local = require('./simplestorage.min.js');

local.new("nombre", "valor"); //crear un objeto

local.change("nombre", "nuevo valor"); //cambiar el valor de un objeto

local.get("nombre"); //llamar un objeto

local.remove("nombre"); //borrar un objeto

local.clear("nombre"); //eliminar valores un objeto