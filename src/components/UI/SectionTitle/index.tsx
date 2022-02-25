import React from "react";
import cl from "./index.module.scss";
import SectionTitleModel from "./SectionTitleModel";

const SectionTitle: React.FC<SectionTitleModel> =
    ({title, content, main = true}) => {
        return (
            <div className={main ? cl.sectionTitle : cl.sectionSubTitle}>
                <h2>
                    {title.toUpperCase()}
                </h2>
                <p>{content}</p>
            </div>
        );
    };


export default SectionTitle;