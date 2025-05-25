"use client";

import { useState } from "react";
import styles from "../app/styles/TagSelector.module.css";

export const TAG_OPTIONS = [
  "競プロ",
  "web/アプリ開発",
  "機械学習",
  "ハッカソン",
  "低レイヤー",
  "情報科学理論",
];

type Props = {
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
};

export default function TagSelector({ selectedTags, setSelectedTags }: Props) {
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  return (
    <div className="flex flex-wrap gap-2 my-4">
      {TAG_OPTIONS.map((tag) => (
        <button
          key={tag}
          type="button"
          onClick={() => toggleTag(tag)}
          className={`${styles.tagButton} ${
            selectedTags.includes(tag) ? styles.selected : ""
          }`}
        >
          {" "}
          {tag}
        </button>
      ))}
    </div>
  );
}
