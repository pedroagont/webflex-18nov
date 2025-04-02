import Header from "./Header";
import Main from "./Main";
import Counter from "./Counter";
import CharacterList from "./CharacterList";

import useCounter from "../hooks/useCounter";
import useCharactersData from "../hooks/useCharactersData";

import "../styles/App.css";

function App() {
  const { count, handleClickDecrement, handleClickIncrement } = useCounter();
  const { charactersData, loading } = useCharactersData();

  return (
    <>
      <Header
        title="Hello from app! 👽"
        description="Wow this lecture is amazing!"
        count={count}
        charactersLength={charactersData.length}
      />
      <Main>
        <Counter
          count={count}
          handleClickDecrement={handleClickDecrement}
          handleClickIncrement={handleClickIncrement}
        />
        <CharacterList charactersData={charactersData} loading={loading} />
      </Main>
    </>
  );
}

export default App;
