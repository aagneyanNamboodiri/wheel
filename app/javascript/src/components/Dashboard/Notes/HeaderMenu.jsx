import React, { useState } from "react";

import { Search, Settings, Plus } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar } from "neetoui/layouts";

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
              onClick: () => setIsSearchCollapsed(prevstate => !prevstate),
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
