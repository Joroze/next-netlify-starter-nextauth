import NextAuth, { NextAuthOptions } from 'next-auth';
// import Auth0Provider from 'next-auth/providers/auth0';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  // pages: {
  //   signIn: '/auth/signin',
  // },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' };

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
    // Auth0Provider({
    //   clientId: process.env.AUTH0_CLIENT_ID as string,
    //   clientSecret: process.env.AUTH0_CLIENT_SECRET as string,
    //   issuer: process.env.AUTH0_ISSUER,
    //   authorization: {
    //     params: {
    //       audience: process.env.AUTH0_AUDIENCE,
    //       scope: 'openid email profile offline_access',
    //     },
    //   },
    // }),
  ],
  callbacks: {
    // Assigning encoded token from API to token created in the session
    // async jwt({ token, account, user }) {
    //   // Initial sign in
    //   if (account && user) {
    //     return {
    //       accessToken: account.access_token,
    //       idToken: account.id_token,
    //       accessTokenExpires: account.expires_at * 1000,
    //       refreshToken: account.refresh_token,
    //       provider: account.provider,
    //       user,
    //     };
    //   }

    //   // Return previous token if the access token has not expired yet
    //   if (Date.now() < token.accessTokenExpires) {
    //     return token;
    //   }

    //   // Access token has expired, try to update it
    //   switch (token.provider) {
    //     case 'google':
    //       return refreshGoogleTokens(token);
    //     case 'auth0':
    //       return refreshAuth0Tokens(token);
    //     default:
    //       // TODO: Support other providers for refreshing tokens
    //       return token;
    //   }
    // },
    async session({ session, token }) {

      return session;
    },
  },
  session: { strategy: 'jwt' },
};

export default NextAuth(authOptions);
