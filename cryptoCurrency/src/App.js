import Homepage from "./Components/Homepage";
import './App.css';
import ContextCoinRanking from "./ContextCoinRanking/ContextCoinRanking";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "./DetailPage/DetailPage";
function App() {
  return (

    <div className="App">
      {/* <ContextCoinRanking> */}
      <BrowserRouter>
        <Routes>
       <Route path="/" element={<Homepage/>}></Route>
        <Route path="/detailpage" element={<DetailPage/>}></Route>
      {/* </ContextCoinRanking> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
