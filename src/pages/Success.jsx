import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";


const Success = () => {

  const location = useLocation();
  // Parse the query string
  const queryParams = new URLSearchParams(location.search);

  // Get the session_id from the query parameters
  const stripeId = queryParams.get('session_id');
  console.log(stripeId)
  const cart = useSelector((state)=>state.cart)
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const stripeData = await userRequest.get("/checkout/payDetail/"+stripeId)
        const data = stripeData.data
        console.log(data)
        
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item.productId._id,
            quantity: item._quantity,
            color:item.color,
            size:item.size,
          })),
          amount: cart.total,
          address: data.shipping_details.address,
        });
        setOrderId(res.data._id);
        console.log(res.data)
      } catch {}
    };
    createOrder();
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <a href="/">
        <button style={{ padding: 10, marginTop: 20,backgroundColor:teal }}>Go to Homepage</button>
      </a>
    </div>
  );
};

export default Success;