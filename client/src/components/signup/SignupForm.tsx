"use client;";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {useQuery, gql} from "@urql/next";
import {useMutation} from "urql";

const ADD_USER = gql`
  # adding a new user to database
  mutation CreateUser($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      id
      name
      email
      password
    }
  }
`;


export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [resData, signup] = useMutation(ADD_USER);


   if (resData.fetching) return "Submitting...";
   if (resData.error) return `Error: ${resData.error.message}`;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


   const variables =  {
     name: formData.name,
     email: formData.email,
     password: formData.password,
   }

  const handleSubmit: any = (e: any) => {
    e.preventDefault();
    signup(variables).then(res=>console.log(res.data));
   console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="username"
        id="name"
        name="name"
        onChange={handleChange}
      />
      <Input
        type="email"
        placeholder="email"
        id="email"
        name="email"
        onChange={handleChange}
      />
      <Input
        type="password"
        placeholder="password"
        id="password"
        name="password"
        onChange={handleChange}
      />
      <Button type="submit">Signup</Button>
    </form>
  );
}
