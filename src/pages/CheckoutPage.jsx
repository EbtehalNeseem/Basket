import ContactSection from "@/components/checkout/ContactSection";
import DeliverySection from "@/components/checkout/DeliverySection";
import OrderSummary from "@/components/checkout/OrderSummary";
import PaymentSection from "@/components/checkout/PaymentSection";
import ShippingMethod from "@/components/checkout/ShippingMethod";

export default function CheckoutPage() {
  return (
    <div>
      {/* left side*/ }
      <div>
        <ContactSection/>
        <DeliverySection/>
        <ShippingMethod/>
        <PaymentSection/>

      </div>

      {/* Right side*/ }
      <div>
        <OrderSummary />
      </div>
    </div>
    
  )
}