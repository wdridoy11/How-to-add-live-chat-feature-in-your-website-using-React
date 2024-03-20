import React from 'react'
import MessengerCustomerChat from 'react-messenger-customer-chat';

// This file from .env.local file

const FbPageId = import.meta.env.VITE_FB_PAGE_ID;
const FbAppId = import.meta.env.VITE_FB_APP_ID;

const LiveChat = () => {
    return (
        <div>
            <MessengerCustomerChat
              pageId={FbPageId}
              appId={FbAppId}
            />,
      </div>
    )
}

export default LiveChat