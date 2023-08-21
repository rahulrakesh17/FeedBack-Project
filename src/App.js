import "./index.css"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from "./pages/About"
import AboutUsLink from "./components/shared/AboutUsLink"
import { FeedbackProvider } from "./context/FeedBackContext"

const App =()=>{
    return(
      <FeedbackProvider>
        <>
        <BrowserRouter basename="/" >
        <Header/>
          <Routes>
              <Route path="/" element={
                <>
                  <div className="container">
                        <FeedbackForm/>
                        <FeedbackStats />
                        <FeedbackList />
                        
                  </div>
                  <AboutUsLink/>
                </>
              } />
              <Route path="/about" element={<>
               
               <div className="container"><About/></div>
               
              </>} />
              
          </Routes>
          
        </BrowserRouter>
      </>
      </FeedbackProvider>
    )
}

export default App
