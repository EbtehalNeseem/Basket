import ContactSection from "../components/checkout/ContactSection";
import DeliverySection from "../components/checkout/DeliverySection";
import OrderSummary from "../components/checkout/OrderSummary";
import PaymentSection from "../components/checkout/PaymentSection";
import ShippingMethod from "../components/checkout/ShippingMethod";


export default function Checkout() {
  return (
   <div className="px-20 py-10 grid grid-cols-2 ">
      <div className="border-r px-10 pt-5">
        <ContactSection/>
        <DeliverySection/>
        <ShippingMethod/>
        <PaymentSection/>
      </div>
      <div className="px-10">
        <OrderSummary />
      </div>
   </div>
    
  )
}