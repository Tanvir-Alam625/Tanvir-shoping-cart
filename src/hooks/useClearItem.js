import { deleteShoppingCart } from "../utilities/fakedb";

const useClearItem = () => {
  const remove = deleteShoppingCart();
  return [remove];
};
export default useClearItem;
