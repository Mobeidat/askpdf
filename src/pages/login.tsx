import Head from "next/head";
import { useState } from "react";

export default function LoginPage() {

return (
  <div class="mx-auto w-full rounded-xl bg-neutral-100 p-6">
    <Head>
      <title>Get Instant Answers to Your PDF Questions with ChatGPT API</title>
    </Head>
    <div
      class="flex w-full flex-col items-center space-y-12 py-12 text-center md:py-32"
    >
      <div class="flex max-w-xl flex-col space-y-4">
        <h1
          class="text-4xl font-semibold leading-snug tracking-tight md:text-5xl"
        >
          Sign up today.
        </h1>
        <p class="text-gray-600">
          Get started with ChatGPT API today and start getting instant answers to your PDF questions.
        </p>
      </div>
      <div class="max-4xl flex flex-col space-y-4">
        <button
          class="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white py-2 px-6 text-center font-medium text-gray-700 shadow-sm hover:text-gray-500"
        >
          <svg
            class="mr-2"
            width="20"
            height="19"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.06 12.25C23.06 11.47 22.99 10.72 22.86 10H12.5V14.26H18.42C18.16 15.63 17.38 16.79 16.21 17.57V20.34H19.78C21.86 18.42 23.06 15.6 23.06 12.25V12.25Z"
              fill="#4285F4"
            />
            <path
              d="M12.4999 23.0001C15.4699 23.0001 17.9599 22.0201 19.7799 20.3401L16.2099 17.5701C15.2299 18.2301 13.9799 18.6301 12.4999 18.6301C9.63993 18.6301 7.20993 16.7001 6.33993 14.1001H2.67993V16.9401C4.48993 20.5301 8.19993 23.0001 12.4999 23.0001Z"
              fill="#34A853"
            />
            <path
              d="M6.34 14.0901C6.12 13.4301 5.99 12.7301 5.99 12.0001C5.99 11.2701 6.12 10.5701 6.34 9.91007V7.07007H2.68C1.93 8.55007 1.5 10.2201 1.5 12.0001C1.5 13.7801 1.93 15.4501 2.68 16.9301L5.53 14.7101L6.34 14.0901Z"
              fill="#FBBC05"
            />
            <path
              d="M12.4999 5.38C14.1199 5.38 15.5599 5.94 16.7099 7.02L19.8599 3.87C17.9499 2.09 15.4699 1 12.4999 1C8.19993 1 4.48993 3.47 2.67993 7.07L6.33993 9.91C7.20993 7.31 9.63993 5.38 12.4999 5.38Z"
              fill="#EA4335"
            />
          </svg>
          Sign up with Google
        </button>
        <p class="text-neutral-400">Or</p>
        <form class="flex flex-col space-y-3">
          <input
            type="email"
            id="email"
            class="block w-full rounded-md border border-gray-200 py-2.5 px-4 text-base text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
            placeholder="Email"
            required
          />
          <input
            type="password"
            id="password"
            class="block w-full rounded-md border border-gray-200 py-2.5 px-4 text-base text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
            placeholder="Password"
            required
          />
          <button
            type="submit"
            class="rounded-md bg-green-600 py-2.5 px-8 text-base font-medium text-white hover:bg-green-700"
          >
            Create account
          </button>
        </form>
        <p class="text-gray-600">
          Already have an account?
          <a class="font-medium text-gray-900 hover:text-gray-500" href=""
            >Log in</a
          >
        </p>
        <p class="text-xs text-gray-500">
          By clicking "Create account", I agree to Terms and
          Privacy.
        </p>
      </div>
    </div>
  </div>
  );
}