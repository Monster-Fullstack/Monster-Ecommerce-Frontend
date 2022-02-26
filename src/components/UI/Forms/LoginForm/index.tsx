import React from "react";
import cl from "./index.module.scss";
import {Form} from "react-bootstrap";
import {NormalTitle} from "../../SectionTitle";
import {InputSite} from "../../Inputs";
import {ButtonSite} from "../../Buttons";

const LoginForm: React.FC = () => {
    return (
        <Form className={`text-start ${cl.onboardBanner}`}>
            <NormalTitle title={"sign in"} main={false} content={""}/>
            <InputSite
                settings={{
                    type: "text", placeholder: "Enter Mobile Number"
                }}
                className={`mt-2 ${cl.input}`}
            />
            <ButtonSite className="mt-2">Next</ButtonSite>
        </Form>
    );
};

export default LoginForm;