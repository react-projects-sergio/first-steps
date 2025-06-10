import type { CSSProperties } from "react";

const fisrtName = "Sergio";
const lastName = "Barreras";

const favoriteGames = ["Elden Ring", "Resident Evil"];
const isActive = true;

const addres = {
  zipCode: "ABC-123",
  country: "Mexico",
};

const myStyle: CSSProperties = {
  backgroundColor: "#d3d3d3",
  borderRadius: isActive ? 10 : 20,
  padding: 10,
};

export function MyAwesomeApp() {
  return (
    <>
      <h1>{fisrtName}</h1>
      <h3>{lastName}</h3>

      <p>{favoriteGames.join(", ")}</p>
      <p>{2 + 2}</p>

      <h2>{isActive ? "Activo" : "Inactivo"}</h2>

      <p style={myStyle}>{JSON.stringify(addres)}</p>
    </>
  );
}
