import { createContext } from "react";
import { useState  } from "react";
import {v4 as uuidv4} from "uuid"
import FeedbackData from "../data/Feedbackdata";
const FeedbackContext = createContext();



export const FeedbackProvider= ({children})=>{
    const [feedback,setFeedback]=useState([{
        id:1,
        text:'This is a feedback form 1',
        rating:7,
    },
    {
        id:2,
        text:'This is a feedback form 2',
        rating:5,
    },
    {
        id:3,
        text:'This is a feedback form 3',
        rating:6,
    },
    {
        id:4,
        text:'This is a feedback form 4',
        rating:8,
    },
    {
        id:5,
        text:'This is a feedback form 5',
        rating:1,
    },
    {
        id:6,
        text:'This is a feedback form 6',
        rating:7,
    },
    ])

    const [feedbackEdit,setFeedbackEdit] = useState({
        item:{},
        edit: false,
    })


    const deleteFeedback =(id)=>{
        if(window.confirm("Are you sure to delete?")){
            setFeedback(feedback.filter((item)=>item.id!==id))
        }
    }

    const addFeedback=(newFeedback)=>{
        newFeedback.id=uuidv4()
        setFeedback([newFeedback,...feedback])
        
    }

    const editFeedback=(item)=>{
        setFeedbackEdit({
            item,
            edit:true
        })
    }


    const updateFeedback=(id,updItem)=>{
        setFeedback(feedback.map((item)=>item.id===id?{...item,...updItem}:item))
    }

    return (  
    <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
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