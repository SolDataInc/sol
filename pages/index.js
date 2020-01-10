import Layout from "../components/myLayout";
import Clock from "../components/Clock";
import Toggle from "../components/Toggle";
import React, { useState } from "react";
import Link from "next/link";

class Welcome extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}. The world is yours.</h1>
    )
  } 
}

export default function Blog() {
  return (
    <Layout>
      <Welcome name="Evan Roubekas"/>
      <Clock />
      <Toggle />
    </Layout>
  );
}
