import * as React from 'react'

function Name({name, onNameChange}) {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={onNameChange} />
    </div>
  )
}

// ๐จ aceite as props `animal` e `onAnimalChange` neste componente
function FavoriteAnimal({animal, onAnimalChange}) {
  // ๐ฃ delete this, it's now managed by the App
  // const [animal, setAnimal] = React.useState('')
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input
        id="animal"
        value={animal}
        onChange={onAnimalChange}
      />
    </div>
  )
}

// ๐จ descomente isso
function Display({name, animal}) {
  return <div>{`Olรก ${name}, seu animal favorito รฉ: ${animal}!`}</div>
}


// ๐ฃ exclua esse componente e use o novo
// function Display({name}) {
//    return <div>{`Hey ${name}, you are great!`}</div>
// }

function Exercicio03() {
  // ๐จ adicione um useState para o animal
  const [name, setName] = React.useState('')
  const [animal, setAnimal] = React.useState('')

  // function handleNameChange(event) {
  //   setName(event.target.value)
  // }

  // const handleAnimalChange = event => setAnimal(event.target.value)

  return (
    <form>
      <Name name={name} onNameChange={event => setName(event.target.value)} />
      {/* ๐จ passe o animal e a prop onAnimalChange aqui (similar ao componente Name acima) */}
      <FavoriteAnimal animal={animal} onAnimalChange={event => setAnimal(event.target.value)} />
      {/* ๐จ passe a prop do animal aqui */}
      <Display name={name} animal={animal} />
    </form>
  )
}

export default Exercicio03