import { EyeIcon } from "lucide-react";
import React from "react";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";

const StartupCard = ({ post }) => {
  const {
    _createdAt,
    views,
    author: { _id: author_id, name },
    _id,
    title,
    description,
    image,
    category,
  } = post;
  return (
    <li className="startup-card group">
      <div className="flex justify-between items-center">
        <p className="startup-card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="text-primary size-6" />
          <span className="text-[14px] font-medium">{views}</span>
        </div>
      </div>
      <div className="flex justify-between items-center gap-5">
        <div className="flex flex-col mt-5">
          <Link href={`/user/${author_id}`}>
            <p className="text-[16px] font-medium line-clamp-1">{name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-[26px] font-bold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${author_id}`}>
          <Image
            src="https://placehold.co/48x48"
            className="rounded-full"
            alt="placehgolder"
            width={48}
            height={48}
          />
        </Link>
      </div>
      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>
        <img
          src="/robot-img.jpg"
          alt="img"
          className="startup-card_img"
          width={200}
          height={100}
        />
      </Link>
      <div className="flex justify-between items-center mt-5">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className="text-[16px] font-medium">{category}</p>
        </Link>
        <Button className="startup-card_btn">
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
