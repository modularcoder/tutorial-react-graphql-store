# Stage 2

In this stage we're going to build the UI of our simple webstore.

Install react router an it's TypeScript typings

```
npm install react-router-dom @types/react-router-dom --save
```

And setup the react router in App.tsx component

```
// App.tsx (view at stage2-ui-layout/stage2-client/src/App_v1-setup-router.tsx)

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

...


```

We'll be starting from the main page. Let's start 