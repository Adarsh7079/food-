import { fetchCart,fetchUser } from "../../utils/fetchlocalStorageData";

const userInfo=fetchUser();
const cartInfo = fetchCart();

export const initialState ={
    user: userInfo,
    foodItems: null,
    cartShow: false,
    cartItems: cartInfo,
};
//if there is no user login function is done 