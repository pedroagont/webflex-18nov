import Header from './Header'
import Main from './Main'
import Counter from './Counter'
import CharacterList from './CharacterList'

import "../styles/App.css";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Counter />
        <CharacterList />
      </Main>
    </>
  );
}

export default App;
