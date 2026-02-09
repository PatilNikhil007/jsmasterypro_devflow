"use client";
import AuthForm from "@/components/form/AuthForm";
import { SignInSchema } from "@/lib/validations";

const SignUp = () => {
  return (
    <div>
      <AuthForm
        formType="SIGN_UP"
        schema={SignInSchema}
        defaultValues={{ username: "", email: "", password: "" }}
        onSubmit={(data) => {
          // Handle sign-in logic here
          return Promise.resolve({ success: true, data });
        }}
      />
    </div>
  );
};

export default SignUp;
