import React from "react";
import "./Tag.css";
function Tag({ title, selectTag, selected }) {
  // console.log(selected);
  return (
    <button
      type="button"
      className={selected ? "selected tag" : "tag"}
      onClick={() => {
        selectTag(title);
      }}
    >
      {title}
    </button>
  );
}

export default Tag;
