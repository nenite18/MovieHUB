import React from 'react'
import './Single.css';
import { img_300 ,unavailable} from '../config/config'
import './Single.css';
import { Badge } from '@material-ui/core';
import Modal from '../modal/Modal';

const Single = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
    
}) => {

   

    return (
        <Modal media_type ={media_type} id ={id}>
            <Badge badgeContent ={vote_average} color ={vote_average>=7?"primary" : "secondary"} size ="10px"/>
            <img  classNmae ="poster" src ={poster ?`${img_300}/${poster}`: unavailable} alt ={title}/>
            <b className = "title" >{title}</b> 
            <span  className ="subText">
                {media_type === "tv" ? "TV Series":"Movie"}
            </span>
            <span className ="subText">
                {date}
                
            </span>
            

        </Modal>
    )
}

export default Single
