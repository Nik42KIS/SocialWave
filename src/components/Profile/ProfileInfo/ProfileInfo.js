import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
 if(!props.profile){
  return <Preloader/>
 }
  return (
  
    <div>
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqCmqSFQgo-ixAhVspjiJX2XDwrcjvuqB8Hg&usqp=CAU"/>
    </div>
    <div className={s.descriptionBlock}>
      <img src={props.profile.photos.large}  />
     <ProfileStatus status = {props.status} updateStatus = {props.updateStatus} />
    </div>
    </div>
  
  );
};

export default ProfileInfo;
