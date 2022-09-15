import React from "react";

import { Clock } from "neetoicons";
import { Typography, Tag, Tooltip, Avatar } from "neetoui";

import { USER_IMG_URL } from "./constants";
import DropdownMenu from "./DropdownMenu";

const Note = ({ note }) => {
  const noteLastCreatedAt = "Created 2 hours ago";
  return (
    <div className="m-3 w-full space-y-2 border p-4 shadow-md">
      <div className="flex justify-between">
        <Typography style="h3">{note.title}</Typography>
        <DropdownMenu />
      </div>
      <div className="text-gray-500">
        <Typography style="body2">{note.description}</Typography>
      </div>
      <hr />
      <div className="flex w-full justify-between">
        <Tag className="bg-gray-100" label="Getting Started" />
        <div className="flex justify-between pt-1">
          <Clock className="pt-1" size={15} />
          <Tooltip
            content="Wednesday, 10:30AM"
            followCursor="horizontal"
            position="bottom"
          >
            <Typography className="pr-2 text-gray-500" style="body3">
              {noteLastCreatedAt}
            </Typography>
          </Tooltip>
          <Avatar
            className="justify-end pt-1"
            size="small"
            user={{
              imageUrl: USER_IMG_URL,
              name: "Oliver",
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Note;
