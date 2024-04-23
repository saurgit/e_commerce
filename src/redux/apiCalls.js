import { loginFailure, loginStart, loginSuccess ,logOut} from "./userRedux";
import { publicRequest,userRequest } from "../requestMethods";
import { addProduct,setCart } from "./cartRedux";


export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    // console.log(res.data._id)
    // await new Promise(resolve => setTimeout(resolve, 5000));

  } catch (err) {
    dispatch(loginFailure());
  }
};
export const loadCart = async (dispatch,user)=>{
  try{
    const cart = await userRequest.get("/carts/find/"+user._id);
    dispatch(setCart(cart.data[0]))
    // console.log(cart.data)
  }catch(err){
    console.log(err)
  }
}

export const logout = async (dispatch) => {
  dispatch(logOut());
  dispatch(setCart({
    userId:null,
    products:[],
    total:0,
    quantity:0
  }))
};
