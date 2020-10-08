import React from "react";
import {Link, navigate} from "gatsby";
import Header from "../components/Header";
import Layout from "../components/Layout";

export default function Home() {
  return (
  <Layout headerTitle="Index Page Header">
    <Header title="Home Page"/>
    Hello world!
    <br/>
    <Link to="/about">About</Link>
    <br/>
    <button onClick={()=>{
      navigate('/about')
    }}>About Page with button</button>
  </Layout>)
}
