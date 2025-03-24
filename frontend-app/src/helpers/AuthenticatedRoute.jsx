import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

function AuthenticatedRoute({ children }) {
    const user = useUser();
    console.log(user.isSignedIn)
    return user.isSignedIn ? children : <Navigate to="/tite" />;
}

export default AuthenticatedRoute;

