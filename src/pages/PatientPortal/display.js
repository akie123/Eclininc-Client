import Upcoming from "./upcoming"
import Book from "./booking"
import Cancel from "./cancel"
import Past from "./Past"
import Profile from "./Profile"
import Message from "./message"
import Peer from "simple-peer"
import Counter from "./counter"
import io from "socket.io-client"
import {useRef, useState,useEffect} from "react";
import axios from "axios";
import {SERVER_URL} from "../../constants";



export default function Display(props){

    const [ me, setMe ] = useState("")




    if(props.level === "Upcoming_Appointments"){
        return ( <Upcoming />)
    }
    else if(props.level === "Info"){
        return <Profile/>
    }
    else if(props.level === "Booking"){
        return <Book/>
    }
    else if(props.level === "Cancel_Appointment"){
        return <Cancel/>
    }
    else if(props.level === "Past_Appointment"){
        return <Past/>
    }
    else{
        return <Message/>
    }
}