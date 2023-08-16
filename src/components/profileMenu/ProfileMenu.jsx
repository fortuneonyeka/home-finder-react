import React from 'react'

import { Menu, Avatar,  } from '@mantine/core';

const ProfileMenu = ({user, logout}) => {
  return (
    <Menu>
       <Menu.Target>
        <Avatar src={user?.picture} alt="user image" radius={"xl"}/>
      </Menu.Target>
      <Menu.Dropdown>
          <Menu.Item>Favorites</Menu.Item>
          <Menu.Item>Bookings</Menu.Item>
          <Menu.Item onClick={()=>{
            localStorage.clear();
            logout()
          }}>Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

export default ProfileMenu