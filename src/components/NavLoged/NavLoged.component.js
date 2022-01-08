import React from 'react'
import {StyledNavLoged} from "./NavLoged.styled";
import BookmarkIcon from '@material-ui/icons/Bookmark';
import MessageIcon from '@material-ui/icons/Message';
import NotificationIcon from '@material-ui/icons/Notifications';
import ListIcon from '@material-ui/icons/FormatListBulleted';
import ProfileIcon from '@material-ui/icons/PersonOutline';
import { NavIcon,DropdownNavicon} from '..';
export default function NavLoged() {
    return (
        <StyledNavLoged>
                 <NavIcon navTo="/saved" NavIcon={BookmarkIcon} name="Saved"  />
                 <NavIcon navTo="/messages" NavIcon={MessageIcon} name="My messages" bage="0" />
                 <NavIcon navTo="/notification" NavIcon={NotificationIcon} name="Notifications" />
                 <NavIcon navTo="/myadverts" NavIcon={ListIcon} name="My adverts" />
                 <DropdownNavicon NavIcon={ProfileIcon} />
             </StyledNavLoged>
    )
}
