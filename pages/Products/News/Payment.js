import React, { useState } from "react";
import { useRouter } from "next/router";
import { HiDocumentText } from "react-icons/hi";
import { MdPayment } from "react-icons/md";
const jwt = require('jsonwebtoken')
const Payment = () => {
  const router = useRouter();
  console.log(router.query);

  const secretKey = "secret123";
  const token = localStorage.getItem("token");
  const decode_JWT = jwt.decode(token);
  const email = decode_JWT.email;
  console.log(email);
  const data = { email };

  const { amount, type } = router.query;
  
  const updateSubscriptionStatus = async () => {
   
    let res = await fetch("http://localhost:3000/api/updatenewssub", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let responce = await res.json();
    console.log(responce);
  };

  const pay = async () => {

    const responce = await fetch(
      `http://localhost:3005/payment?amount=${amount}`
    );
    const res = await responce.json();
    console.log(res);
  };


  return (
    <>
      <div class="container px-5 py-5 mx-auto flex flex-wrap">
        <div class="flex w-full  flex-wrap">
          <h1 class="sm:text-2xl text-xl  title-font lg:w-1/3 lg:mb-0 mb-4">
            PAYMENT PAGE
          </h1>
        </div>
      </div>

      <section class="text-gray-600 body-font mx-2">
        <div class="container px-2 py-5 mx-auto flex flex-wrap">
          <div class="flex flex-wrap -m-4">
            <div class="p-2  lg:w-1/2 md:w-full">
              <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-8 h-8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                    Shooting Stars
                  </h2>
                  <p class="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Change Plan
                  </button>
                  <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/2 md:w-full">
              <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <HiDocumentText className="text-2xl" />
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3 mt-3">
                    YOUR ORDER
                  </h2>
                  <div class="container text-center">
                    <div class="row align-items-start">
                      <div class="col">
                        Product
                        <p className="mt-4">News</p>
                      </div>
                      <div class="col">
                        Type
                        <p className="mt-4">{type.toUpperCase()}</p>
                      </div>
                      <div class="col">
                        AMOUNT
                        <p className="mt-4">{"$" + amount}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font ">
        <div class="container px-5 mx-auto">
          <div class="flex flex-wrap w-full flex-col items-center text-center">
            <div class="w-full h-full  sm:mr-8 sm:mb-0  items-center justify-center rounded-full bg-white text-indigo-500 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-8 h-8"
                viewBox="0 0 24 24"
              ></svg>
              <h1 class="sm:text-3xl  text-2xl font-medium title-font  text-gray-900">
                <MdPayment className="mx-auto text-5xl" />{" "}
                {"SubTotal : " + "$" + amount}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div class="lg:w-1/2 px-4 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
              General Details
            </h2>

            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">
                Billing Address
              </label>
              <textarea
                id="message"
                name="message"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
          </div>

          <div class="lg:w-1/2 px-4 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
              Card Details
            </h2>

            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-600">
                Card Number
              </label>
              <input
                type="text"
                id="name"
                name="name"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                CVV
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">
                EX
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              onClick={()=>{
                pay()
                updateSubscriptionStatus()
              }}
              class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Pay {"$" + amount}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
