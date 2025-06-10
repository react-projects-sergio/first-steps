import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { productName: "Nintendo Switch 2", quantity: 1 },
  { productName: "Pro Controller", quantity: 2 },
  { productName: "Mario Kart World", quantity: 5 },
];

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>
      {itemsInCart.map(({ productName, quantity }) => (
        <ItemCounter key={productName} name={productName} quantity={quantity} />
      ))}
    </>
  );
}
