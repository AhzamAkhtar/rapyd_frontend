import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
const jwt = require("jsonwebtoken");
const Homepage = () => {
  const router = useRouter()
  const [text, settext] = useState("Subscribe Now");
  const [link, setLink] = useState("");
  const [isSubcribed, setisSubcribed] = useState();
  useEffect(() => {
    const secretKey = "secret123";
    const token = localStorage.getItem("token");
    const decode_JWT = jwt.decode(token);
    const email = decode_JWT.email;
    console.log(email);
    const data = { email };
    const isSubToNews = async () => {
      let responce = await fetch("http://localhost:3000/api/issubtonews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      let res = await responce.json();
      console.info(res);
      if (res.success == true) {
        settext("Explore");
        setLink("/Products/News/News");
        setisSubcribed(true);
      }
      if (res.success == false) {
        settext("Subscribe Now");
        setLink("/Products/News/NewsPrice");
        setisSubcribed(false);
      }
    };

    isSubToNews();
  }, []);

  const findNewsSubscriptionId = async () => {
    const secretKey = "secret123";
    const token = localStorage.getItem("token");
    const decode_JWT = jwt.decode(token);
    const email = decode_JWT.email;
    console.log(email);
    const data = {email}
    const responce = await fetch("http://localhost:3000/api/findnewspaymentid",{
      method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    const res = await responce.json()
    console.log(res.success)
    setTimeout(()=>{
      refund(res.success)
      updateAllTransaction(res.success)
    },1000)
  }

  const refund = async (newsPaymentId) =>{
    const responce = await fetch(`http://localhost:3005/refund?payment=${newsPaymentId}`)
    const res =await responce.json()
    console.log(res.body.data.id)
    addRefundId(res.body.data.id)
    cancelNewSubscription()
  }

  const addRefundId = async (refundId) =>{
    const secretKey = "secret123";
    const token = localStorage.getItem("token");
    const decode_JWT = jwt.decode(token);
    const email = decode_JWT.email;
    console.log(email);
    const data = {email,refundId}
    const responce = await fetch("http://localhost:3000/api/addrefundid",{
      method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    const res = await responce.json()
    console.log(res)
  }

  const cancelNewSubscription = async () =>{
    const secretKey = "secret123";
    const token = localStorage.getItem("token");
    const decode_JWT = jwt.decode(token);
    const email = decode_JWT.email;
    console.log(email);
    const data = {email}
    const responce = await fetch("http://localhost:3000/api/cancelnewssub",{
      method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    const res = await responce.json()
    console.log(res)
  }

  const updateAllTransaction = async(transactionId) =>{
    const secretKey = "secret123";
    const token = localStorage.getItem("token");
    const decode_JWT = jwt.decode(token);
    const email = decode_JWT.email;
    console.log(email);
    const data = {email, transactionId}
    const responce = await fetch("http://localhost:3000/api/updateallpayments",{
      method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    const res = await responce.json()
    console.log(res)
  }
  return (
    <>
      <div>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-5 mx-auto">
            <div class="flex flex-wrap w-full mb-20">
              <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                  Pitchfork Kickstarter Taxidermy
                </h1>
                <div class="h-1 w-20 bg-indigo-500 rounded"></div>
              </div>
              <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven't heard of them man bun deep jianbing selfies heirloom
                prism food truck ugh squid celiac humblebrag.
              </p>
            </div>
            <div class="flex flex-wrap -m-4 w-full">
              <div class="xl:w-1/4 md:w-1/2 p-4 ">
                <div class="bg-gray-100  rounded-lg ">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://dummyimage.com/720x400"
                    alt="content"
                  />
                  <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Chichen Itza
                  </h2>
                  <p class="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                  <Link href={link} legacyBehavior className="cursor-pointerx">
                    <a href="/newprice">
                      <p class="leading-relaxed text-base mt-5 text-blue-400 rounded-lg">
                        {text}
                      </p>
                    </a>
                  </Link>
                  
                  
                  {isSubcribed?(
                    <>
                    <button onClick={()=>{
                      findNewsSubscriptionId()
                    }} class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                    </>
                  ):(
                    <>
                      <p>Not Subscribed</p>
                    </>
                  )}
                  <button onClick={()=>{
                    router.push("/UserProfile")
                  }}>User Profile </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Homepage;
