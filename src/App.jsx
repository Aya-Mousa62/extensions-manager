import { useState } from "react";
import CardContainer from "./components/Card-container";
import Filters from "./components/Filters";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
export default function App() {

  const [filter, setFilter] = useState("All");

  return (
    <>
      <div className="light-gradient dark:dark-gradient min-h-screen">
        <div className="container m-auto">
          <Header/>
          <Filters filter={filter} setFilter={setFilter}/>
          <CardContainer/>
          <Card filter={filter}/>
          <Footer/>
        </div>
      </div >
    </>
  )
}
