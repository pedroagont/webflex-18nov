function Header({ title, description, count, charactersLength }) {
  return (
    <header>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>Counter goes in: {count}</p>
      <p>Characters found: {charactersLength}</p>

    </header>
  );
}

export default Header;
