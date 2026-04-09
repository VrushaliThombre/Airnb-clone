import React,{Suspense, lazy} from "react";
const Home = lazy(()=>import("./pages/Home"));
function App(){
  return(
    <Suspense fallback={<h2>Loading....</h2>}>
      <Home/>
    </Suspense>
    
  );
}
export default App;