// @ts-nocheck
import React, { useState } from "react";

// @ts-ignore
import { Search, Settings, Plus } from "@bigbinary/neeto-icons";
import { Typography } from "@bigbinary/neetoui";
import { MenuBar } from "@bigbinary/neetoui/layouts";
// @ts-ignore
// @ts-ignore

const HeaderMenu = ({ showMenu }) => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);

  return (
    <div className="flex">
      <MenuBar showMenu={showMenu} title="Contacts">
        <MenuBar.Block active count={200} label="All" />
        <MenuBar.Block count={80} label="Users" />
        <MenuBar.Block count={60} label="Leads" />
        <MenuBar.Block count={60} label="Visitors" />
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
              onClick: () => setIsSearchCollapsed(!isSearchCollapsed),
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Segments
          </Typography>
        </MenuBar.SubTitle>
        <MenuBar.Search
          collapse={isSearchCollapsed}
          onCollapse={() => setIsSearchCollapsed(true)}
        />
        <MenuBar.Block count={80} label="Europe" />
        <MenuBar.Block count={60} label="Middle-East" />
        <MenuBar.Block count={60} label="Asia" />
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Settings,
            },
            {
              icon: Plus,
            },
            {
              icon: Search,
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Tags
          </Typography>
        </MenuBar.SubTitle>
        <MenuBar.Block count={80} label="Europe" />
        <MenuBar.Block count={60} label="Middle-East" />
        <MenuBar.Block count={60} label="Asia" />
      </MenuBar>
    </div>
  );
};

export default HeaderMenu;
