import React, { useEffect } from "react";
import { Form, Link, useActionData } from "react-router-dom";
import { FormInput } from "../components";
import { useLogin } from "../hooks/useLogin";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");
  return { email, password };
};

function Login() {
  const userData = useActionData();
  const { loginUser, isPending } = useLogin();

  useEffect(() => {
    if (userData) {
      loginUser(userData.email, userData.password);
    }
  }, [userData]);

  return (
    <div className="grid grid-cols-1  lg:grid-cols-2 min-h-screen">
      <div className="hidden lg:block h-full bg-orange-50 bg-[url('https://picsum.photos/800/1200')] bg-center bg-cover"></div>
      <div className="h-full  bg-slate-50 bg-[url('https://picsum.photos/800/1200')] lg:bg-none bg-cover grid place-items-center">
        <div className="card bg-base-100 w-96 shadow-xl  p-8">
          <Form method="post" className="flex flex-col items-center gap-5">
            <h1 className="text-3xl font-semibold">Login</h1>
            <FormInput type="email" label="email" name="email" />
            <FormInput type="password" label="password" name="password" />
            <div className="w-full">
              <button className="btn btn-primary btn-block">Login</button>
            </div>
          </Form>
          <div className="w-full mt-5">
            <button className="btn btn-disabled btn-block">Google</button>
          </div>
          <div className="text-center mt-3">
            I haven't any <Link className="text-black underline" to="/register">account </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;