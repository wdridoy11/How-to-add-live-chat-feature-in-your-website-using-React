# How to add live chat feature in your website using React

### Step 1:
Open your React project or create

### Step 2: 
Open your terminal and install<br/>
```sh
npm i react-messenger-customer-chat
```
### Step 3: 
Create one page like: LiveChat.jsx
Past this code in your "LiveChat" page

```jsx
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
```
`Note: If you have any problem to find Facebook page ID, you can search google or YouTube "How to Find Facebook Page ID"`

### Step 4:
Run this command:
```sh
npm run build
```

### Step 5:
Deploy your website to your domain/Firebase or Netlify

### Step 6:
Copy your Website URL