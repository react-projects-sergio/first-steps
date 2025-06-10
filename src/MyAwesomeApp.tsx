const fisrtName = "Sergio";
const lastName = "Barreras";

const favoriteGames = ["Elden Ring", "Resident Evil"];
const isActive = false;

const addres = {
  zipCode: "ABC-123",
  country: "Mexico",
};

export function MyAwesomeApp() {
  return (
    <>
      <h1>{fisrtName}</h1>
      <h3>{lastName}</h3>

      <p>{favoriteGames.join(", ")}</p>
      <p>{2 + 2}</p>

      <h2>{isActive ? "Activo" : "Inactivo"}</h2>

      <p>{JSON.stringify(addres)}</p>
    </>
  );
}
