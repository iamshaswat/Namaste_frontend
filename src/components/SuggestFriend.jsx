import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaUserCheck } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa6";
import { Avatar } from '@mui/material';

export const SuggestFriend = ({ suggestFriends, friendRequest, handlefriendReq }) => {

  return (
    <div className='flex flex-col gap-4'>
      {
        suggestFriends?.map((friend) => (
          <div key={friend?._id} className='flex justify-between items-center'>

            <Link to={'/profile' + friend?._id}
              className='w-full flex gap-4 items-center cursor-pointer'>
              <Avatar
                src={friend?.profileUrl}
                alt='profile'
                sx={{ width: 50, height: 50 }}
              />

              <div className='flex-1'>
                <p className='text-ascent-1 font-medium'>
                  {friend?.firstName} {friend?.lastName}
                </p>
                <span className='text-sm text-ascent-1'>
                  {friend?.profession ?? "No Profession"}
                </span>
              </div>

            </Link>


            <div className='flex gap-1'>
              <button
                onClick={() => handlefriendReq(friend?._id)}
                className='text-blue p-1 rounded' >
                {
                  friendRequest?.find((item) => item.requestFrom._id === friend?._id) ? (
                    <FaUserCheck size={28} />
                  ) : (
                    <FaUserPlus size={28} />
                  )
                }
              </button>
            </div>
          </div>
        ))
      }

    </div>
  )
}
