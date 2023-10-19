import { FC } from "react";
import { MdPublic, MdOutlineLock } from "react-icons/md";
import Hexagon from "./ui/hexagon";

import styles from "@/styles/components/group.module.css";

interface IGroupProps {
  src: string;
  groupName: string;
  groupMembers: number;
  isPublic: boolean;
}

const GroupItem: FC<IGroupProps> = ({
  src,
  groupMembers,
  groupName,
  isPublic,
}) => {
  return (
    <div className={`${styles.group_wrapper}`}>
      <div className={`${styles.image_wrapper}`}>
        <Hexagon src={src} />
        <div className={`${styles.group_info}`}>
          <p className={`${styles.group_info_name}`}>{groupName}</p>
          <span className={`${styles.group_info_count}`}>
            {groupMembers} members
          </span>
        </div>
      </div>
      <span className={`${styles.icon_wrapper}`}>
        {isPublic ? (
          <MdPublic color="rgb(223,223,232)" />
        ) : (
          <MdOutlineLock color="rgb(223,223,232)" />
        )}
      </span>
    </div>
  );
};

export default GroupItem;
