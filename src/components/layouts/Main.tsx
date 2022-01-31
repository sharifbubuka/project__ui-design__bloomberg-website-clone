import { FC, ReactNode } from "react";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import TopAdvert from "../sections/TopAdvert";

type Props = {
  children: ReactNode;
};

const MainLayout: FC<Props> = (props) => {
  return (
    <section className="flex flex-col min-h-screen">
      <TopAdvert />
      <Header />
      <main className="flex-1 bg-red-600-">{props.children}</main>
      <Footer />
    </section>
  );
};

export default MainLayout;
