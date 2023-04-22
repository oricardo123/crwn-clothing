import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utills";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <>
      <div>SignIn</div>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </>
  );
};

export default SignIn;
