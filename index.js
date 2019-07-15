
var pets = [
    { name: `Max`, type: `dog`, bornOn: 2018 },
    { name: `Angel`, type: `cat`, bornOn: 2015 },
    { name: `Jasper`, type: `dog`, bornOn: 2016 }
  ];
  
  const getAge= (pet) => { return new Date().getFullYear() - pet.bornOn;
  };
  var petsWithAge = [];
pets.forEach ((pet)=>{ pet.age = getAge(pet);
  
    petsWithAge.push(pet)} );
    console.log(petsWithAge);
   
    const dogs = pets.filter((pet)=>{ return pet.type === `dog`
      } );
      console.log(dogs);

      const jas = pets.filter((pet)=>{ return pet.name ===`Jasper`})
      console.log(jas)
      console.log(`Jasper is ` + jas[0].age + ` years old`);
      
