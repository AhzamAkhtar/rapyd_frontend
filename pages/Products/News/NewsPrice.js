import Link from "next/link";
import React, { useState, useEffect } from "react";
import {BsCheckCircle} from 'react-icons/bs'
import {MdNotInterested} from 'react-icons/md'
const data = [
  {
    type: "STARTER",
    price: "$10",
    p1: "Live News Updates Every Hour",
    p1ClassName: true,
    p2: "Browse Different Topics Like Sports , Health ....",
    p2ClassName: false,
    p3: "Browse Latest News Update Of Upto 10 Different Countries",
    p3ClassName: false,
    link : "/Products/News/Payment?amount=10"
  },
  {
    type: "PRO",
    price: "$100",
    p1: "Live News Updates Every Hour",
    p1ClassName: true,
    p2: "Browse Different Topics Like Sports , Health ....",
    p2ClassName: true,
    p3: "Browse Latest News Update Of Upto 10 Different Countries",
    p3ClassName: false,
    link : "/Products/News/Payment?amount=100"
  },
  {
    type: "PREMIUM",
    price: "$999",
    p1: "Live News Updates Every Hour",
    p1ClassName: true,
    p2: "Browse Different Topics Like Sports , Health ....",
    p2ClassName: true,
    p3: "Browse Latest News Update Of Upto 10 Different Countries",
    p3ClassName: true,
    link : "/Products/News/Payment?amount=999"
  },
];
const NewsPrices = () => {
  /*{const [amount, setamount] = useState();
  useEffect(() => {
    console.log(amount);
  }, [amount]);}*/

  {/*function sendProps() {
    Router.push({
      pathname: "/Products/News/Payment",
      query: {
        amount,
      },
    });
  };*/}

 
  return (
    
    <div> 
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-2 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Pricing
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
            </p>
          </div>
          <div class="flex  flex-wrap -m-4">
            {data.map((item) => {
              return (
                <>
                  <div class="p-4 xl:w-1/3   md:w-1/2 w-full">
                    <div class="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                      <h2 class="text-sm tracking-widest title-font mb-1 font-medium">
                        {item.type}
                      </h2>
                      <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                        <span>{item.price}</span>
                        <span class="text-lg ml-1 font-normal text-gray-500">
                          /one-Time
                        </span>
                      </h1>

                      <p class="flex items-center text-gray-600 mb-2">
                        <span class={`w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-300 text-white rounded-full flex-shrink-0`}>
                        {item.p1ClassName?(
                          <>
                          <BsCheckCircle className="bg-green-500 rounded-2xl" />
                          </>
                        ):(
                          <>
                            <MdNotInterested className="bg-red-500 rounded-2xl"/>
                          </>
                        )}
                         
                        </span>
                        
                        {item.p1}
                      </p>
                      <p class="flex items-center text-gray-600 mb-2">
                        <span class={`w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-300 text-white rounded-full flex-shrink-0`}>
                        {item.p2ClassName?(
                          <>
                          <BsCheckCircle className="bg-green-500 rounded-2xl text-lg" />
                          </>
                        ):(
                          <>
                            <MdNotInterested className="bg-red-500 rounded-2xl"/>
                          </>
                        )}
                         
                        </span>
                        {item.p2}
                      </p>
                      <p class="flex items-center text-gray-600 mb-2">
                        <span class={`w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-300 text-white rounded-full flex-shrink-0`}>
                        {item.p3ClassName?(
                          <>
                          <BsCheckCircle className="bg-green-500 rounded-2xl" />
                          </>
                        ):(
                          <>
                            <MdNotInterested className="bg-red-500 rounded-2xl"/>
                          </>
                        )}
                         
                        </span>
                        {item.p3}
                      </p>
                      <Link href={item.link} legacyBehavior>
                      <a>
                      <button
                        /*{onClick={() => {
                          setamount(item.price);
                          setTimeout(() => {
                            {sendProps()}
                          }, 1000);

                          
                          
                        }}}*/
                        class="flex items-center mt-3 text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded"
                      >
                        Proceed
                      </button>
                      </a>
                      </Link>
                      <p class="text-xs text-gray-500 mt-3">
                        Literally you probably haven't heard of them jean
                        shorts.
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
      
    </div>
    
  );
};

export default NewsPrices;
