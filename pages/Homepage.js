import Link from "next/link";
import React, { useEffect, useState } from "react";
const jwt = require('jsonwebtoken')
const Homepage = () => {
  const [text, settext] =  useState("Subscribe Now")
  const [link , setLink] = useState("")
  
  useEffect(() => {
    const secretKey = "secret123"
    const token = localStorage.getItem("token")
    const decode_JWT = jwt.decode(token)
    const email = decode_JWT.email
    console.log(email)
    const data = {  email };
    const isSubToNews =  async() => {
      let responce = await fetch("http://localhost:3000/api/issubtonews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
       let res = await responce.json();
       console.info(res);
      if(res.success==true){
        settext('Explore')
        setLink("/Products/News/News")
      }
      if(res.success==false){
        settext("Subscribe Now")
        setLink("/Products/News/NewsPrice")
      }
    };
    
    isSubToNews();
  }, [])
  


  return (
    <>
      <div>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
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
            <div class="flex flex-wrap -m-4">
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
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
                  <Link
                    href={link}
                    legacyBehavior
                    className="cursor-pointerx"
                  >
                    <a href="/newprice">
                      <p class="leading-relaxed text-base mt-5 text-blue-400 rounded-lg">
                        {text}
                      </p>
                    </a>
                  </Link>
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
