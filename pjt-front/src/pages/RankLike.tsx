import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import rf from "../api/rf";
import style from "./Rank.module.css";

interface Media {
  url: string;
}

interface Like {
  title: string;
  artwork_id: string;
  attachmentRequestDtoList: Media[];
}

function RankLike(): JSX.Element {
  const [likeRank, setLikeRank] = useState<Array<Like>>([]);

  const likeRankRequest = async () => {
    const response = await axios({
      url: rf.rank.getLikeRank(),
      method: "get",
    });

    if (response.status === 200) {
      const likeList = response.data;
      setLikeRank(likeList);
    }
  };

  useEffect(() => {
    likeRankRequest();
  }, []);

  return (
    <div className={style.Container}>
      <p className={style.rankTitle}>베스트 게시물</p>
      {likeRank.map((item, index) => {
        return (
          <div className={style.listItem} key={item.artwork_id}>
            <div className={style.itemContent}>
              <li className={style.txtLine}>
                <span className={style.rankNumber}>
                  {index + 1}
                  {`. `}
                </span>{" "}
                {item.attachmentRequestDtoList[0].url && (
                  <img
                    className={style.AuctionImage}
                    src={item.attachmentRequestDtoList[0].url}
                  />
                )}
                <span>
                  <NavLink
                    to={`/auction/detail/${item.artwork_id}`}
                    className={style.moveLink}
                  >
                    <div>{item.title}</div>
                  </NavLink>
                </span>
              </li>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RankLike;
