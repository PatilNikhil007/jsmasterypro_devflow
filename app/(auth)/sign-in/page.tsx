"use client";
import AuthForm from "@/components/form/AuthForm";
import { SignInSchema } from "@/lib/validations";

const SignIn = () => {
  return (
    <div>
      <AuthForm
        formType="SIGN_IN"
        schema={SignInSchema}
        defaultValues={{ email: "", password: "" }}
        onSubmit={(data) => {
          // Handle sign-in logic here
          return Promise.resolve({ success: true, data });
        }}
      />
    </div>
  );
};

export default SignIn;
