import { HeaderComponent } from "@/shared/components/header/header";
import { RegisterProvider } from "@/shared/components/header/model";

export const HeaderLayout = () => {
  return (
    <RegisterProvider>
      <HeaderComponent />
    </RegisterProvider>
  );
};
