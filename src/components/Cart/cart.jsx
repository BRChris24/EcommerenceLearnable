import Footer from "../Footer/footer";
import Navbar from "../Navbar/navbar";
import CartItems from "./CartItems";
import CartSection from "./AddCart";



function Cart() {
  return (
    <>
      <Navbar />
      <CartSection />
      <CartItems />
      <Footer />
    </>
  )
}

export default Cart;