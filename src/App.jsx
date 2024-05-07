import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import OurBenifits from "./components/OurBenifits";
import Preloder from "./components/Preloader";
document.body.classList.add("overflow-hidden");
function App() {
  const [load, setload] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      document.body.classList.remove("overflow-hidden");
      setload(false);
    }, 4000);
  });
  return (
    <>
      {load && <Preloder />}
      <OurBenifits />
    </>
  );
}

export default App;
