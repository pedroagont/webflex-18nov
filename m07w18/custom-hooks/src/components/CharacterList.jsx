function CharacterList({ charactersData, loading }) {
  return (
    <section>
      <h3>My favorite start wars characters</h3>
      <ul>
        {loading && <p>Loading...</p>}

        {!loading && charactersData.map((char) => (
          <li key={char.name}>{char.name}</li>
        ))}
      </ul>
    </section>
  );
}

export default CharacterList;
