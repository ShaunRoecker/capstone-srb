//import { useEffect } from "react";
//import { getRedirectResult } from "firebase/auth";
import { FcGoogle } from 'react-icons/fc';
import Button from "../../components/button/button.component";
import { auth,
         signInWithGooglePopup,
         createUserDocumentFromAuth } from "../../utils/firebase.utils";
import SignUpForm from "../../components/sign-up form/sign-up-form.component";

const SignIn = () => {

    const logGoogleUser = async() => {
      const {user} = await signInWithGooglePopup();
      const userDocRef = createUserDocumentFromAuth(user)
      
    };
 
    return (
        <div>
            <h1>Sign In</h1>
            <Button buttonType="google" onClick={logGoogleUser}><FcGoogle/> Sign In with Google </Button>
            <SignUpForm />
        </div>
    )
}
export default SignIn;