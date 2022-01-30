import { FC } from "react";
import Banner from "../customs/Banner";

type Props = {};

const Header: FC<Props> = () => {
    return (
        <header className="">
            <Banner />
            <div></div>
        </header>
    )
};

export default Header;
