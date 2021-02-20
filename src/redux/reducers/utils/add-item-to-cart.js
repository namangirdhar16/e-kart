export const addItemToCart = (cartItems , newItem) =>
{
  const exisitingItem = cartItems.find((item)=> item.id === newItem.id);
  if(exisitingItem)
  {
      return cartItems.map((item) => {
          return item.id === newItem.id ? {...item , quantity: item.quantity + 1} : item;
      })
  }
  else
  {
    newItem.quantity = 1;
    cartItems.push(newItem);
    return [...cartItems];
  }
}