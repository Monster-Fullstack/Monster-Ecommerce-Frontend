import React, {Fragment} from "react";
import MainForm from "../components/main/MainForm";
import LoginForm from "../components/UI/Forms/LoginForm";

const Login: React.FC = () => {
    return (
        <Fragment>
            <MainForm UsedForm={<LoginForm/>}/>
        </Fragment>
    );
};

export default Login;