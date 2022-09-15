import React from "react";

import { Clock } from "@bigbinary/neeto-icons";
import { Typography, Tag, Tooltip, Avatar } from "@bigbinary/neetoui";

import NoteDropdown from "./NoteDropdown";

const NoteCard = ({ note }) => (
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
        <Clock
          // @ts-ignore
          className="pt-1"
          size={15}
        />
        <Tooltip
          content="Wednesday, 10:30AM"
          followCursor="horizontal"
          position="bottom"
        >
          <Typography className="pr-2 text-gray-500" style="body3">
            {"Created 2 hours ago"}
          </Typography>
        </Tooltip>
        <Avatar
          className="justify-end pt-1"
          size="small"
          user={{
            imageUrl:
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
            name: "Oliver",
          }}
        />
      </div>
    </div>
  </div>
);
export default NoteCard;
