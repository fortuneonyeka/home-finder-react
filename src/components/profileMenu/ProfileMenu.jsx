import React from 'react'
import {    IconHeart, IconBookmarkFilled, IconLogout } from '@tabler/icons-react';

import { Menu, Avatar,  } from '@mantine/core';
import { useNavigate } from "react-router-dom";
import { replace } from "lodash";


const ProfileMenu = ({user, logout}) => {
  const navigate =  useNavigate()
  return (
    <Menu>
       <Menu.Target>
        <Avatar src={user?.picture} alt="user image" radius={"xl"}/>
      </Menu.Target>
      <Menu.Dropdown>
          <Menu.Item onClick={() => navigate("./favorites", {replace: true})} icon={<IconHeart
    size={14}
    strokeWidth={2}
    color={'#FF0000'}
  />}>Favorites</Menu.Item>
          <Menu.Item onClick={() => navigate("./bookings", {replace: true})} icon={<IconBookmarkFilled size={14} />}>Bookings</Menu.Item>
          <Menu.Item  onClick={()=>{
            localStorage.clear();
            logout()
          }} icon={<IconLogout size={14}/>}>Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

export default ProfileMenu