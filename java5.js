// Combinar dos objetos con claves iguales
function myFunction(objX, objY) {
    const objz={...objX,...objY};
    for(i in objX)
    {for (j in objY)
        {if( i==j)
        {objz[i]=objX[i];}
        }
    }
    return objz;
  }

  console.log(myFunction({a:1,b:2,c:3},{a:4,d:5,e:6}));

// Eliminar una propiedad de un objeto

function myFunction(obj, key) {
  if (typeof key == "string")
  {delete obj[key];
  return  obj;}
  else
  {   console.log(obj);
      return "La llave ingresada no era de tipo string"}
} 	  


console.log(myFunction({a:1,b:2,c:3},'c'));


// Sumar valores de un objeto

function myFunction(obj) {
  let sum=0;
  for(let i in obj)
      {sum+=obj[i];}

  return sum
}

console.log(myFunction({a:1,b:2,c:3}))



