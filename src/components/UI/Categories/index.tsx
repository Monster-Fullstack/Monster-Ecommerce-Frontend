import React from "react";
import Menu from "../MegaMenu/Menu";

const Categories: React.FC = () => {
    return (
        <div>
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
    );
};

export default Categories;