import React from "react";
import cl from "./index.module.scss";
import Menu from "./Menu";

const MegaMenu: React.FC = () => {
    return (
        <div className={cl.accordionMenuDiv}>
            <div className={cl.accordionMenuDivInside}>
                <Menu name="Men's Clothes" items={[{name: "Men's Red Te-shirts", url: "#"}]}/>
                <Menu name="Phones" items={[{name: "IPhones", url: "#"}, {name: "RealMe", url: "#"}]}/>
                <Menu name="Spicy Food" items={[{name: "Men's Red Te-shirts", url: "#"}]}/>
                <Menu name="Fashion" items={[{name: "Men's Red Te-shirts", url: "#"}]}/>
                <Menu name="Electronics" items={[{name: "Men's Red Te-shirts", url: "#"}]}/>
                <Menu name="Travel" items={[{name: "Men's Red Te-shirts", url: "#"}]}/>
                <Menu name="Travel" items={[{name: "Men's Red Te-shirts", url: "#"}]}/>
                <Menu name="Travel" items={[{name: "Men's Red Te-shirts", url: "#"}]}/>
                <Menu name="Travel" items={[{name: "Men's Red Te-shirts", url: "#"}]}/>
                <Menu name="Travel" items={[{name: "Men's Red Te-shirts", url: "#"}]}/>
                <Menu name="Travel" items={[{name: "Men's Red Te-shirts", url: "#"}]}/>
            </div>
        </div>
    );
};

export default MegaMenu;