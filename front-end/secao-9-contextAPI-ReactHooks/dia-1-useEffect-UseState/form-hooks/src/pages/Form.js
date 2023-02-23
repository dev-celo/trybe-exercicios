import { useState } from "react";

function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [module, setModule] = useState('');
  const [isAble, setIsAble] = useState(false);

  return (
    <>
      <form action="">
        <input
          className="input"
          type="text"
          placeholder="Digite seu nome"
          name="name"
          onChange={ ({ target }) => setName(target.value) }
        />
        <input
          className="input"
          type="number"
          placeholder="Digite sua idade"
          name="age"
          onChange={ ({ target }) => setAge(target.value) }
        />
        <input
          className="input"
          type="text"
          placeholder="Cidade"
          name="city"
          onChange={ ({ target }) => setCity(target.value) }
        />

        {/* (Fundamentos, Front-end, Back-end ou Ciência da Computação) */}
        <div className="radio">
          <label htmlFor="fundamentos">
            <input
              type="radio"
              name="module"
              value="Fundamentos"
              id="Fundamentos"
              checked={module === "Fundamentos"}
              onChange={({ target }) => setModule(target.value)}
          />
            Fundamentos
          </label>
          <label htmlFor="Front-end">
            <input
              type="radio"
              name="module"
              value="Front-end"
              id="Front-end"
              checked={module === "Front-end"}
              onChange={({ target }) => setModule(target.value)}
            />
            Front-end
          </label>
          <label htmlFor="Back-end">
            <input
              type="radio"
              name="module"
              value="Back-end"
              id="Back-end"
              checked={module === "Back-end"}
              onChange={({ target }) => setModule(target.value)}
            />
            Back-end
          </label>
          <label htmlFor="Ciência da Computação">
            <input
              type="radio"
              name="module"
              value="Ciência da Computação"
              id="Ciência da Computação"
              checked={module === "Ciência da computação"}
              onChange={({ target }) => setModule(target.value)}
            />
            Ciência da Computação
          </label>
        </div>

        <button onClick={ (e) => {
          e.preventDefault();
          setIsAble(true);
        }}>
          Enviar
        </button>
      </form>

      {
        isAble &&
        <div>
          <p>{`Olá me chamo ${name}, moro em ${city}, tenho ${age} anos e estou no módulo de ${module} na trybe!`}</p>
        </div>
      }
    </>
   );
}

export default Form;
