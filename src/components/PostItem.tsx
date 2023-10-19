import React, { FC } from "react";
import ProfilePicture from "./shared/ProfilePicture";
import IUser from "@/models/IUser";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaFaceLaughSquint } from "react-icons/fa6";

import styles from "@/styles/components/post.module.css";
import Image from "next/image";
import Link from "next/link";

interface IPostItemProps {
  user: IUser;
  postImage: string;
  activity: string;
  content: string;
  comments: [];
  shares: number;
  reactions: number;
  createdAt: Date;
}

const PostItem: FC<IPostItemProps> = ({
  user,
  activity,
  comments,
  content,
  createdAt,
  postImage,
  reactions,
  shares,
}) => {
  const currentDate: any = new Date();
  const postDate: any = new Date(createdAt);
  const differenceBetweenDates = currentDate - postDate;
  const years = differenceBetweenDates / (1000 * 60 * 60 * 24 * 365.25);

  return (
    <div className={styles.post_wrapper}>
      <div className={styles.post_header}>
        <div className={styles.user_profile}>
          <div className="row">
            <div className="col-2 ">
              <ProfilePicture
                src={user?.profilePicture}
                level={user?.level}
                progress={user?.progress}
              />
            </div>
            <div className="col-10 p-md-0">
              <p className={styles.post_username}>{user.fullName}</p>
              {user.isVerified ? (
                <span className={styles.verified_icon}>
                  <RiVerifiedBadgeFill color="#009dff" />
                </span>
              ) : (
                <></>
              )}
              {user.isProMember ? (
                <span className={styles.pro_member_badge}>Pro Member</span>
              ) : (
                <></>
              )}

              <span className={styles.user_activity}>{activity}</span>
              <br />
              <span className={`text-secondary ${styles.post_date}`}>
                {years.toFixed()} years ago
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content_wrapper}>
        {content.startsWith("http") ? (
          <Link
            className={`text-decoration-none ${styles.post_info}`}
            href={content}
          >
            {content}
          </Link>
        ) : (
          <p className={`text-secondary ${styles.post_info}`}>{content}</p>
        )}
        {postImage ? (
          <div className={styles.post_image}>
            <Image
              style={{ objectFit: "cover" }}
              src={postImage}
              width={635}
              height={500}
              alt="post_image"
            />
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="d-flex justify-content-center ">
        <p
          className="bg-secondary opacity-25 text-center "
          style={{ height: "1px", width: "90%" }}
        ></p>
      </div>

      <div className={styles.post_footer}>
        <div className={styles.post_reactions}>
          <span className={styles.post_emoji}>
            <FaFaceLaughSquint color="#FFAE42" size={20} />{" "}
          </span>
          {reactions}
        </div>
        <div className={styles.post_numbers}>
          <span className={styles.post_comments}>
            {comments.length} Comments
          </span>
          <span className={styles.post_shares}>{shares} Shares</span>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
