import { useEffect, useState } from "react";

function useCharactersData() {
  const [charactersData, setCharactersData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      fetch("https://swapi.dev/api/people/")
        .then((res) => res.json())
        .then((data) => setCharactersData(data.results))
        .then(() => setLoading(false));
    }, 2000);
  }, []);

  return { charactersData, loading };
}

export default useCharactersData;
