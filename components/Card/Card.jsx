"use client";

import styles from "./Card.module.css";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import StarButton from "@/components/StarButton/StarButton";
import formatCurrentDate from "@/lib/formatCurrentDate";
import calcElapsedTime from "@/lib/calcElapsedTime";

const cx = classNames.bind(styles);
const cardDefaultImg = "../public/assets/card-default";

function Card({ card }) {
  return (
    <>
      <Link href={card.url}>
        <article className={cx("card")}>
          <div className={cx("like-btn")}>
            <StarButton />
          </div>
          <div
            className={cx("card-image")}
            style={{
              backgroundImage: `url(${card.image_source ?? cardDefaultImg})`,
            }}
          ></div>
          <div className={cx("card-body")}>
            <button className={cx("menu-btn")}>
              <Image
                src="/assets/kebab.svg"
                alt="kebab-icon"
                width="21"
                height="17"
              />
            </button>
            <div className={cx("elapsed-time")}>
              {calcElapsedTime(card.created_at)}
            </div>
            <p className={cx("card-description")}>{card.description}</p>
            <div className={cx("created-date")}>
              {formatCurrentDate(card.created_at)}
            </div>
          </div>
        </article>
      </Link>
    </>
  );
}

export default Card;