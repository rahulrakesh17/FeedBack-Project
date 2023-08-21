import { createContext } from "react";
import { useState ,useEffect } from "react";


const FeedbackContext = createContext();



export const FeedbackProvider= ({children})=>{
    const [feedback,setFeedback]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const [feedbackEdit,setFeedbackEdit] = useState({
        item:{},
        edit: false,
    })

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData =async ()=>{
        const response=await fetch(`http://localhost:5000/feedback?sort=id&_order=desc`)
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
        console.log(data)
    }

    const deleteFeedback =async (id)=>{
        if(window.confirm("Are you sure to delete?")){
            
            await fetch(`http://localhost:5000/feedback/${id}`,{method:"DELETE"})
            setFeedback(feedback.filter((item)=>item.id!==id))
        }
    }

    const addFeedback = async (newFeedback) => {
        const response = await fetch('http://localhost:5000/feedback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newFeedback),
        })
    
        const data = await response.json()
    
        setFeedback([data, ...feedback])
      }

    const editFeedback=(item)=>{
        setFeedbackEdit({
            item,
            edit:true
        })
    }


    const updateFeedback=async (id,updItem)=>{
        const response =await fetch(`http://localhost:5000/feedback/${id}`,
        {method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(updItem)
        })

        const data = await response.json()
        setFeedback(feedback.map((item)=>item.id===id?{...item,...data}:item))
    }

    return (  
    <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        isLoading,
        updateFeedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        
    }}>
        {children}
    </FeedbackContext.Provider>
    )
}

export default FeedbackContext