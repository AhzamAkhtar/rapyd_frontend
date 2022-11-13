import React,{useState}from "react";
import { useRouter } from "next/router";
const jwt = require("jsonwebtoken");
const Invoice = () => {

  //const [name, setname] = useState()

  //const [phone, setphone] = useState()

  ///const [email, setemail] = useState()

  const changeHandler = (e) =>{
    if(e.target.name=="name"){
      setname(e.target.value)
    }
    if(e.target.name=="phone"){
      setphone(e.target.value)
    }
    if(e.target.name=="email"){
      setemail(e.target.value)
    }
  }

  const router = useRouter();

  const { transactionId  , amount , type , name , receipt_email, phone_number , line_1 } = router.query;


  const secretKey = "secret123";
  const token = localStorage.getItem("token");
  const decode_JWT = jwt.decode(token);
  const currentUserEmail = decode_JWT.email;
  console.log(currentUserEmail);
  const data = { currentUserEmail };


  
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

  const updateTransactionId = async (transactionId) =>{
    const dataForTransactionUpdation = {currentUserEmail ,transactionId}
    console.log(transactionId)
    let res = await fetch("http://localhost:3000/api/updatetransactionid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataForTransactionUpdation),
    });
    let responce = await res.json();
    console.log(responce);
    
  }

  const addNewsTransactionId = async (transactionIdnews) =>{
    const dataForNewsTransactionId = {currentUserEmail , transactionIdnews}
    let res = await fetch("http://localhost:3000/api/addnewspayid",{
      method : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body : JSON.stringify(dataForNewsTransactionId)
    });
    let responce = await res.json()
    console.log(responce) 
  }

  return (
    <>
      <section>
        <div class="container py-5 mx-4">
          <div class="card">
            <div class="card-body">
              <div class="row d-flex justify-content-center pb-5">
                <div class="col-md-7 col-xl-5 mb-4 mb-md-0">
                  <div class="py-4 d-flex flex-row">
                    <h5>
                      <span class="far fa-check-square pe-2"></span>
                      <b>ELIGIBLE</b> |
                    </h5>
                    <span class="ps-2">Pay</span>
                  </div>
                  {/*<h4 class="text-success">{"$"+amount}</h4>*/}

                  <section class="text-gray-600 body-font">
                    <div class="container  mx-auto">
                      <div class="flex flex-wrap -m-4 ">
                        <div class="p-4 ">
                          <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-green-300">
                            <div class="p-6">
                              <h2 class="tracking-widest text-lg text-black title-font font-medium  mb-1">
                                PAYABLE AMOUNT - 
                              </h2>
                              <h1 class="title-font text-3xl font-medium text-gray-900 mb-3">
                                ${amount}
                              </h1>
                              <p class="leading-relaxed mb-3 text-lg">
                                {"Transaction Id  - "+transactionId}
                              </p>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <hr />
                  <section class="gradient-custom">
                    <div class="container "></div>
                    <div class="row p-2 mt-5">
                      <div class="col">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={phone_number}
                            onChange= {changeHandler}
                            class="form-control"
                          />
                          <label class="form-label" for="form8Example1">
                            PhoneNumber
                          </label>
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-outline">
                          <input
                            type="email"
                            id="email"
                            value={receipt_email}
                            name = "email"
                            onChange= {changeHandler}
                            class="form-control"
                          />
                          <label class="form-label" for="form8Example2">
                            Email address
                          </label>
                        </div>
                      </div>
                    </div>

                    <hr />

                    <div class="row p-2 mt-5">
                      <div class="col">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="name"
                            onChange= {changeHandler}
                            value={name}
                            name = "name"
                            class="form-control"
                          />
                          <label class="form-label" for="form8Example3">
                            Name
                          </label>
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="address"
                            value={line_1}
                            name = "address"
                            class="form-control"
                          />
                          <label class="form-label" for="form8Example4">
                            Address
                          </label>
                        </div>
                      </div>
                      
                    </div>
                  </section>
                </div>

                <div class="col-md-5 col-xl-4 offset-xl-1">
                  <div class="mt-10 d-flex flex-column p-2 bg-gray-300 rounded-2xl">
                    <div class="p-2 me-3">
                      <h4>Order Recap</h4>
                    </div>
                    <div class="p-2 d-flex">
                      <div class="col-8">Contracted Price</div>
                      <div class="ms-auto">{"$" + amount}</div>
                    </div>
                    <div class="p-2 d-flex">
                      <div class="col-8">TAX</div>
                      <div class="ms-auto">$0.00</div>
                    </div>
                    <div class="p-2 d-flex">
                      <div class="col-8">Product Type</div>
                      <div class="ms-auto">{type}</div>
                    </div>
                   

                    <div class="border-top px-2 mx-2"></div>

                    <div class="p-2 d-flex">
                      <div class="col-8">
                        Payable Amount{" "}
                        <span class="fa fa-question-circle text-dark"></span>
                      </div>
                      <div class="ms-auto"><b>{"$"+amount}</b></div>
                    </div>
                    <div class="border-top px-2 mx-2"></div>
                    <div class="p-2 d-flex pt-3">
                      <div class="col-8">
                        <b>Total</b>
                      </div>
                      <div class="ms-auto">
                        <b class="text-success">{"$"+amount}</b>
                      </div>
                    </div>
                  </div>
                  <button class="text-white bg-green-400 w-full border-0 py-2 px-6 mt-10 focus:outline-none hover:bg-green-600 rounded-3xl text-lg" onClick={() => {
                      //pay()
                      //updateSubscriptionStatus()
                    }}> {" "}
                    Pay ${amount}</button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Invoice;
