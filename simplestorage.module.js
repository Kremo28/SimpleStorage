module.exports={new:/**@param {string}name@param {string}value@return {string}*/(name,value)=>localStorage.setItem(name,value),change:/**@param {string}name@param {string}value@return {string}*/(name, value)=>localStorage.setItem(name, value),get:/**@param {string}name@return {string}*/name=>localStorage.getItem(name),remove:/**@param {string}name@return {string}*/name=>localStorage.removeItem(name),clear:/**@param {string}name@return {string}*/name=>localStorage.clear(name)};

//Name: SimpleStorage
//Author: Kremo :)
//collaborator: USHIERU
