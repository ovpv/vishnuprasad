---
slug: "/cancellable-axios-request"
title: "How to Write a Cancellable Network Request Using the Axios Library"
date: 2024-10-21
author: Vishnuprasad
---

### Introduction

When developing an application, you often make multiple network requests to fetch or post data to and from the server. In some cases, server responses might be too large or take a long time to arrive. Providing users with the ability to cancel such interactions enhances the user experience by allowing them to proceed without unnecessary delays.

From an application standpoint, cancelling duplicate or redundant requests can save resources and improve performance, thereby reducing costs. This capability is particularly beneficial in scenarios where the application state may trigger multiple server calls unintentionally.

### Use Cases

Implementing cancellable network requests is useful in the following scenarios:

- **Cancelling a Download Request**: Allow users to stop downloads that are taking too long or are no longer needed.
- **Debouncing Search Results on Keyword Change**: Cancel previous search requests when the user types a new character to avoid processing outdated data.
- **Stopping Content Streams**: In applications like ChatGPT, enable users to halt incoming data streams when they have received sufficient information.
- **And Many More**: Any situation where a network request may become obsolete due to changes in application state or user actions.

### How to Implement Cancellable Requests in Axios

**Step 1: Create an Instance of AbortController**

The AbortController is a Web API that allows you to abort one or more web requests as needed. In Axios, you can use an instance of AbortController to add a cancellation mechanism to your network requests.

```javascript
const controller = new AbortController();
```

**Step 2: Attach the signal to Your Axios Request**

Once you have an instance of AbortController, pass its signal property to your Axios request by including it in the request options.

```javascript
const fetchImages = () => {
  return axios.get("https://picsum.photos/v2/list", {
    signal: controller.signal,
  });
};
```

**Step 3: Execute the Cancel Operation**

You can invoke the cancel operation whenever necessary by calling the abort() method on the controller. In the example below, the API call is automatically cancelled if the network request is not resolved within 700 milliseconds.

```javascript
// Define the cancel operation
const cancelLoad = () => {
  controller.abort();
  console.log("Request aborted");
};

// Cancel the request if it takes more than 700ms
setTimeout(() => {
  cancelLoad();
}, 700);
```

**Full Example**

Putting it all together:

```javascript
const axios = require("axios");
const controller = new AbortController();

const fetchImages = () => {
  return axios
    .get("https://picsum.photos/v2/list", { signal: controller.signal })
    .then((response) => {
      console.log("Images:", response.data);
    })
    .catch((error) => {
      if (error.name === "CanceledError") {
        console.log("Request canceled:", error.message);
      } else {
        console.error("Error:", error.message);
      }
    });
};

fetchImages();

// Cancel the request if it takes more than 700ms
setTimeout(() => {
  controller.abort();
  console.log("Request aborted after 700ms");
}, 700);
```

**Check out the full output here**

<iframe src="https://codesandbox.io/embed/nhcwgn?view=Editor+%2B+Preview&module=%2Fsrc%2Findex.mjs"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="cancelling axios request"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### Conclusion

Implementing cancellable network requests using Axios and the AbortController API enhances both user experience and application performance. It allows users to have control over network interactions and helps developers manage resources efficiently by preventing unnecessary server calls.

By integrating this approach into your application, you can ensure a smoother, more responsive user experience while optimizing resource utilization.

Note: Always handle cancellations gracefully in your code to avoid unhandled promise rejections or memory leaks. Proper error handling and cleanup are crucial when dealing with cancellable network requests.
