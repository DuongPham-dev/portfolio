// Props
import { AppLayoutProps } from "./props";

// Components
import { Header } from "@/components";

const AppLayout = ({ children }: AppLayoutProps) => (
  <>
    <Header />
    {children}
  </>
);

export default AppLayout;
