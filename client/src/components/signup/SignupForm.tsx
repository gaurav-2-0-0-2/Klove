"use client;";
import React, { ChangeEvent, FormEvent, useState} from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // console.log(e.target.value);
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  // const handleSubmit:any = (e:any)=>{
  //   e.preventDefault();
    
  // }


  return (
  <form>
      <Input
        type="text"
        placeholder="username"
        id="name"
        name="name"
      />
      <Input
        type="email"
        placeholder="email"
        id="email"
        name="email"
      />
      <Input
        type="password"
        placeholder="password"
        id="password"
        name="password"
      />
      <Button type="submit">Signup</Button>
    </form>
  );
}
