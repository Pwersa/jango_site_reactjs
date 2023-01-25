import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        //Google Provider
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider({
            name: 'Credentials',
            async authorize(credentials, req) {

                const email = credentials.email
                const password = credentials.password

                const data = {email, password}

                const res = await fetch('http://192.168.1.15:4000/login-user', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                });
                const json = await res.json();

                const name = json.username
                const email_json = json.email

                console.log(json.message)
                
                if (json.message === "Success") {
                    return {name, email};
                } else {
                    throw new Error("Invalid Credentials");
                }
                
            }
        })
    ],
    secret: process.env.JWT_SECRET
});