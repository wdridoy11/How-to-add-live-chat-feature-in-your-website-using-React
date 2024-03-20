import React from 'react'
import MessengerCustomerChat from 'react-messenger-customer-chat';

const LiveChat = () => {
    return (
        <div>
            <MessengerCustomerChat
              pageId="Enter your Page id"
              appId="Enter your App id"
            />,
      </div>
    )
}

export default LiveChat