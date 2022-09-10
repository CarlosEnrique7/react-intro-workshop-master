import { useEffect, useState } from "react";

const EffectExample = () => {
  const [pokeName, setPokeName] = useState("pikachu");
  const [apiData, setApiData] = useState();

  const handleOnChange = (e) => {
    setPokeName(event.target.value);
  };

  useEffect(() => {
    const getData = () => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}/`)
        .then((response) => response.json())
        .then((data) => setApiData(data));
    };
    getData();
  }, [pokeName]);

  return (
    <div>
      <form action="">
        <input type="text" value={pokeName} onChange={handleOnChange} />
      </form>
      <h2>{apiData && apiData.name}</h2>
      <img src={apiData && apiData.sprites.front_default} alt="" height={200} />
    </div>
  );
};

export default EffectExample;
