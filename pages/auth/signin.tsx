
import { signIn } from 'next-auth/react';

export const SignIn = () => {
  return (
    <button onClick={() => signIn('credentials', {'callbackUrl': '/'})}>Sign in</button>
  );
};

SignIn.getLayout = (page) => page;

export default SignIn;
