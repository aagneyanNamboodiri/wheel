import React from "react";

import { Clock } from "neetoicons";
import { Typography, Tag, Tooltip, Avatar } from "neetoui";

import { IMG_URL } from "./constants";
import NoteDropdown from "./DropdownMenu";

const Note = ({ note }) => {
  const createdString = "Created 2 hours ago";
  return (
    <div className="m-3 w-full space-y-2 border p-4 shadow-md">
      <div className="flex justify-between">
        <Typography style="h3">{note.title}</Typography>
        <NoteDropdown />
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
              {createdString}
            </Typography>
          </Tooltip>
          <Avatar
            className="justify-end pt-1"
            size="small"
            user={{
              imageUrl: IMG_URL,
              name: "Oliver",
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Note;
