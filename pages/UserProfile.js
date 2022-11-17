import React, { useState ,useEffect, use } from "react";
const jwt = require("jsonwebtoken");
const UserProfile = () => {
  const [name , setname] = useState()
  const [useremail , setuserEmail] = useState()
  const [newsTransactionId, setNewtransactionId] = useState()
  const [allTransaction , setAllTransaction] = useState()
  const secretKey = "secret123";
  const token = localStorage.getItem("token");
  const decode_JWT = jwt.decode(token);
  const email = decode_JWT.email;
  console.log(email);
  const data = { email };
  useEffect(() => {
    const getUserInfo = async () => {
      const responce = await fetch("http://localhost:3000/api/getuserinfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await responce.json();
      console.log(res.success);
      setname(res.success.name)
      setuserEmail(res.success.email)
      setNewtransactionId(res.success.newsTransactinId)
      setAllTransaction(res.success.allTransaction)
    };
    getUserInfo()
  }, [])
  
  
 
  return (
    <div>
      <section>
        <div class="container py-5">
          <div class="row">
            <div class="col">
              <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
                <ol class="breadcrumb mb-0">
                  <li class="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="#">User</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    User Profile
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-4">
              <div class="card mb-4">
                <div class="card-body text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    class="rounded-circle img-fluid"
                  />
                  <h5 class="my-3">tt</h5>
                  <p class="text-muted mb-1">Full Stack Developer</p>
                  <p class="text-muted mb-4">Bay Area, San Francisco, CA</p>
                  <div class="d-flex justify-content-center mb-2">
                    <button type="button" class="btn btn-primary">
                      Follow
                    </button>
                    <button type="button" class="btn btn-outline-primary ms-1">
                      Message
                    </button>
                  </div>
                </div>
              </div>
              
            </div>
            <div class="col-lg-8">
              <div class="card mb-4">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Full Name</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{name}</p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Email</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{useremail}</p>
                    </div>
                  </div>
                  <hr />
                  
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Transaction IDS</p>
                    
                    </div>
                    <div class="col-sm-9">
                  
                      <p class="text-muted mb-0">{newsTransactionId}</p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Transaction IDS</p>
                    
                    </div>
                    <div class="col-sm-9">
                
                      <p class="text-muted mb-0">{allTransaction}</p>
                    </div>
                  </div>          
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
