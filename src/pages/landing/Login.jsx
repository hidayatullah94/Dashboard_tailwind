import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo, patern } from "../../assets";
import { EyeClosed, Eye, WarningCircle } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { URLS } from "../../lib/BaseUrl";
export const Login = () => {
  const [show, setShow] = useState(true);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    URLS.post(`/login`, data)
      .then((res) => {
        if (res.status === 201) {
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("Role", JSON.stringify(res.data.query));
          switch (res.data.query) {
            case "KASHIFT_LALIN":
              setTimeout(() => {
                window.location.href = "/ka-lalin";
              }, 1800);
              break;
            case "KASHIFT_TRANS":
              setTimeout(() => {
                window.location.href = "/ka-trans";
              }, 1800);
              break;
            case "PATROLI":
              setTimeout(() => {
                window.location.href = "/patroli";
              }, 1800);
              break;
            case "DEREK":
              setTimeout(() => {
                window.location.href = "/derek";
              }, 1800);
              break;
            case "AMBULAN":
              setTimeout(() => {
                window.location.href = "/ambulan";
              }, 1800);
              break;
            case "RESCUE":
              setTimeout(() => {
                window.location.href = "/rescue";
              }, 1800);
              break;
            case "SENKOM":
              setTimeout(() => {
                window.location.href = "/senkom";
              }, 1800);
              break;
            default:
              setTimeout(() => {
                window.location.href = "/adm";
              }, 1800);
              break;
          }
        }
        alert("login success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 "
      style={{
        backgroundImage: `url(${patern})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company" />
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow-md sm:rounded-lg sm:px-12 border mx-5 rounded">
          <form
            className="space-y-6"
            method="POST"
            onSubmit={handleSubmit(handleLogin)}
          >
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none px-2"
                  {...register("username", { required: true })}
                />
                {errors.username && (
                  <span className=" mt-2 flex flex-row animate-pulse">
                    <WarningCircle className="w-5 text-red-700" />
                    <span className="text-xs ms-2 text-secondary">
                      Field ini wajib di isi
                    </span>
                  </span>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type={show ? "password" : "text"}
                  id="password"
                  className="block w-full rounded-md border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none px-2"
                  {...register("password", { required: true })}
                />
                <div
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer "
                  onClick={() => setShow(!show)}
                >
                  {show ? <EyeClosed /> : <Eye />}
                </div>
              </div>
              {errors.username && (
                <span className=" mt-2 flex flex-row animate-pulse">
                  <WarningCircle className="w-5 text-red-700" />
                  <span className="text-xs ms-2 text-secondary">
                    Field ini wajib di isi
                  </span>
                </span>
              )}
            </div>

            <div className="flex items-center justify-end">
              <div className="text-sm leading-6">
                <Link
                  to={"/forgot"}
                  className="font-semibold text-sky-600 hover:text-sky-500"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-rose-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <div>
            <div className="relative mt-10">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className="bg-white px-6 text-gray-900">
                  Citra Persada Infrastruktur
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
