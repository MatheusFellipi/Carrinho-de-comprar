import { ProviderRoute } from "@/routes";
import { CartProvider } from "@/shared/hook/cart";

function App() {
  return (
    <CartProvider>
      <ProviderRoute />
    </CartProvider>
  );
}

export default App;
