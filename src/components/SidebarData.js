import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'

    },
    {
        title: 'User',
        path: '#',
        icon: <AiIcons.AiOutlineUser />,
        cName: 'nav-text'

    },
    {
        title: 'Messages',
        path: '#',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'

    },
]