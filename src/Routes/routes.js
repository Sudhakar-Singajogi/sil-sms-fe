import Dashboard from "../Pages/School/Dashboard";
import Login from "../Pages/School/Login";
import Register from "../Pages/School/Register";
import ForgotPassword from "../Pages/School/ForgotPassword";
import Logout from "../Pages/School/Logout";

const routes = {
    public_routes:[
        {
            path:"/",
            permalink:"login",
            exact: true,
            component:<Login />
        },
        {
            path:"/register-school",
            permalink:"signupschool",
            exact: true,
            component:<Register />
        },
        {
            path:"/forgot-password",
            permalink:"forgotpassword",
            exact: true,
            component:<ForgotPassword />
        }

    ],
    protected_routes:[
        {
            permalink:"adminLogout",
            path:"/admin/logout",
            component:<Logout />
        },
        {
            permalink:"adminDashboard",
            path:"/admin/dashboard",
            component:<Dashboard />
        },
    ], 
}

export default routes;