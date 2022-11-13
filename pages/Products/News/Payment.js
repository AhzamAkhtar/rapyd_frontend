import React, { useState } from "react";
import { useRouter } from "next/router";

const jwt = require("jsonwebtoken");
const Payment = () => {
  const [name, setname] = useState();
  const [phone, setphone] = useState();
  const [email, setemail] = useState();
  const [address,setaddress] = useState()
  const [cardNumber, setcardNumber] = useState();
  const [holderName, setholderName] = useState();
  const [expiration, setexpiration] = useState();
  const [cvv, setcvv] = useState();

  const changeHandler = (e) => {
    if (e.target.name == "name") {
      setname(e.target.value);
    }
    if (e.target.name == "phone") {
      setphone(e.target.value);
    }
    if (e.target.name == "email") {
      setemail(e.target.value);
    }
    if (e.target.name == "cardNumber") {
      setcardNumber(e.target.value);
    }
    if (e.target.name == "holderName") {
      setholderName(e.target.value);

    }
    if (e.target.name == "expiration") {
      setexpiration(e.target.value);
    }
    if (e.target.name == "cvv") {
      setcvv(e.target.value);
    }
    if(e.target.name=="address"){
      setaddress(e.target.value)
    }
  };

  
  const router = useRouter();
  console.log(router.query);
  const { amount, type } = router.query;

  const pay = async () => {
    const responce = await fetch(
      `http://localhost:3005/payment?amount=${amount}&name=${name}&receipt_email=${email}&line_1=${address}`
    );
    const res = await responce.json();
    console.log(res)
    console.log(res.body.data.id);
    setTimeout(() => {
      move(res.body.data.id);
    }, 1000);
  };

  const move = (transactionId) => {
    router.push(`/Products/News/Invoice?transactionId=${transactionId}&amount=${amount}&name=${name}&receipt_email=${email}&line_1=${address}&phone_number=${phone}`)
  };

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
                  <h4 class="text-success">{"$" + amount}</h4>
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
                                      id="cardNumber"
                                      value={cardNumber}
                                      name="cardNumber"
                                      onChange={changeHandler}
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
                                      id="holderName"
                                      value={holderName}
                                      name="holderName"
                                      onChange={changeHandler}
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
                                      id="expiration"
                                      value={expiration}
                                      name="expiration"
                                      onChange={changeHandler}
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
                                      id="cvv"
                                      value={cvv}
                                      name="cvv"
                                      onChange={changeHandler}
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
                            id="name"
                            value={name}
                            onChange={changeHandler}
                            name="name"
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
                            id="email"
                            value={email}
                            onChange={changeHandler}
                            name="email"
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
                            type="number"
                            id="phone"
                            value={phone}
                            onChange = {changeHandler}
                            name = "phone"
                            class="form-control"
                          />
                          <label class="form-label" for="form8Example3">
                            Phone
                          </label>
                        </div>
                      </div>
                      
                      <div class="col">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="address"
                            value={address}
                            onChange = {changeHandler}
                            name ="address"
                            class="form-control"
                          />
                          <label class="form-label" for="form8Example5">
                           Address
                          </label>
                        </div>
                      </div>
                    </div>
                  </section>
                  <button
                    type="button"
                    class="btn btn-success w-full rounded-pill"
                    onClick={() => {
                      pay();
                    }}
                  >
                    Proceed and Pay
                  </button>
                  <button
                    type="button"
                    class="btn btn-warning w-full rounded-pill mt-2"
                  >
                    Generate Invoice and Pay
                  </button>
                </div>

                <div class="col-md-5 col-xl-4 offset-xl-1">
                  <div class="py-4 d-flex justify-content-end">
                    <button
                      type="button"
                      class="btn btn-danger w-full rounded-pill "
                    >
                      Cancel Order
                    </button>
                  </div>
                  <div class="rounded d-flex flex-column p-2">
                    <div class="p-2 me-3">
                      <h4>Order Summary</h4>
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
                        <b>{"$" + amount}</b>
                      </div>
                    </div>
                    <div class="border-top px-2 mx-2"></div>
                    <div class="p-2 d-flex pt-3">
                      <div class="col-8">
                        <b>Total</b>
                      </div>
                      <div class="ms-auto">
                        <b class="text-success">{"$" + amount}</b>
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
