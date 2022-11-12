import React, { useEffect, useState } from "react";
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
  
  const pay = async () => {
    const responce = await fetch(
      `http://localhost:3005/payment?amount=${amount}`
    );
    const res = await responce.json();
    console.log(res.body.data.id)
    updateTransactionId(res.body.data.id)
    addNewsTransactionId(res.body.data.id)
    setTimeout(()=>{
      move(res.body.data.id)
    },1000)
  };

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
    const dataForTransactionUpdation = {email ,transactionId}
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
    const dataForNewsTransactionId = {email , transactionIdnews}
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
  
  const move = (transactionId) =>{
    router.push(`/Products/News/Invoice?transactionId=${transactionId}`)
  }
  
  return (
    <>
      <section>
        <div class="container py-5">
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
                  <h4 class="text-success">{"$"+amount}</h4>
                  <h4>Diabetes Pump & Supplies</h4>

                  <p>
                    Insurance claims and all necessary dependencies will be
                    submitted to your insurer for the coverred portion of this
                    order
                  </p>

                  <hr />
                  <section class="gradient-custom">
                    <div class="container ">
                      <div class="row d-flex justify-content-center ">
                        <div class="col-md-10 col-lg-10 col-xl-12">
                          <div class="card">
                            <div class="card-body p-4">
                              <form>
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                  <div class="form-outline">
                                    <input
                                      type="text"
                                      id="typeText"
                                      class="form-control form-control-lg"
                                      siez="17"
                                      placeholder="1234 5678 9012 3457"
                                      minlength="19"
                                      maxlength="19"
                                    />
                                    <label class="form-label" for="typeText">
                                      Card Number
                                    </label>
                                  </div>
                                  <img
                                    src="https://img.icons8.com/color/48/000000/visa.png"
                                    alt="visa"
                                    width="64px"
                                  />
                                </div>

                                <div class="d-flex justify-content-between align-items-center mb-4">
                                  <div class="form-outline">
                                    <input
                                      type="text"
                                      id="typeName"
                                      class="form-control form-control-lg"
                                      siez="17"
                                      placeholder="Cardholder's Name"
                                    />
                                    <label class="form-label" for="typeName">
                                      Cardholder's Name
                                    </label>
                                  </div>
                                </div>

                                <div class="d-flex justify-content-between align-items-center pb-2">
                                  <div class="form-outline">
                                    <input
                                      type="text"
                                      id="typeExp"
                                      class="form-control form-control-lg"
                                      placeholder="MM/YYYY"
                                      size="7"
                                      minlength="7"
                                      maxlength="7"
                                    />
                                    <label class="form-label" for="typeExp">
                                      Expiration
                                    </label>
                                  </div>
                                  <div class="form-outline">
                                    <input
                                      type="password"
                                      id="typeText2"
                                      class="form-control form-control-lg"
                                      placeholder="&#9679;&#9679;&#9679;"
                                      size="1"
                                      minlength="3"
                                      maxlength="3"
                                    />
                                    <label class="form-label" for="typeText2">
                                      Cvv
                                    </label>
                                  </div>
                                  <button
                                    type="button"
                                    class="btn btn-info btn-lg btn-rounded"
                                  >
                                    <i class="fas fa-arrow-right"></i>
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row p-2 mt-5">
                      <div class="col">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="form8Example1"
                            class="form-control"
                          />
                          <label class="form-label" for="form8Example1">
                            Name
                          </label>
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-outline">
                          <input
                            type="email"
                            id="form8Example2"
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
                            id="form8Example3"
                            class="form-control"
                          />
                          <label class="form-label" for="form8Example3">
                            First name
                          </label>
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="form8Example4"
                            class="form-control"
                          />
                          <label class="form-label" for="form8Example4">
                            Last name
                          </label>
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-outline">
                          <input
                            type="email"
                            id="form8Example5"
                            class="form-control"
                          />
                          <label class="form-label" for="form8Example5">
                            Email address
                          </label>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>

                <div class="col-md-5 col-xl-4 offset-xl-1">
                  <div class="py-4 d-flex justify-content-end">
                    <button type="button" class="btn btn-success mx-3" onClick={()=>{
                      pay()
                      updateSubscriptionStatus()
                    }}>
                      Proceed
                    </button>
                    <button type="button" class="btn btn-danger">
                      Cancel
                    </button>
                  </div>
                  <div class="rounded d-flex flex-column p-2">
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
                      <div class="ms-auto">{type.toUpperCase()}</div>
                    </div>
                    
                    <div class="border-top px-2 mx-2"></div>

                    <div class="p-2 d-flex">
                      <div class="col-8">
                        Payable Amount{" "}
                        <span class="fa fa-question-circle text-dark"></span>
                      </div>
                      <div class="ms-auto">
                        <b>{"$"+amount}</b>
                      </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
