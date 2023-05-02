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
      <img className={s.profImg} src="https://plus.unsplash.com/premium_photo-1663013425404-b6ac8372d814?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXIlMjBvZiUyMHNvY2lhbCUyMG5ldHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"/>
    </div>
    <div className={s.descriptionBlock}>
      {/* <img className={s.profImg} src={props.profile.photos.large}  /> */}
     <ProfileStatus status = {props.status} updateStatus = {props.updateStatus} />
    </div>
    </div>
  
  );
};

export default ProfileInfo;
