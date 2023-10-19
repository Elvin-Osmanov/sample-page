import React, { FC } from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";

import styles from "@/styles/components/user.module.css";
import ProfilePicture from "./shared/ProfilePicture";

interface IUserProps {
  userName: string;
  fullName: string;
  level: number;
  src: string;
  progress: number;
  isVerified: boolean;
}
const UserItem: FC<IUserProps> = ({
  userName,
  level,
  fullName,
  src,
  progress,
  isVerified,
}) => {
  return (
    <div className={styles.user_wrapper}>
      <div className={styles.image_wrapper}>
        <ProfilePicture progress={progress} level={level} src={src} />
        <div className={styles.user_info}>
          <p className={styles.user_info_fullname}>
            {fullName}
            {isVerified ? (
              <span className={styles.verified_icon}>
                <RiVerifiedBadgeFill color="#009dff" />
              </span>
            ) : (
              <></>
            )}
          </p>
          <span className={styles.user_info_username}>@{userName}</span>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
