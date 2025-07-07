### Requirements
- Node.js 18.18 or later.
- Yarn

### Setup
1. Clone this repo
2. Run `cd regex-extraction-dashboard`
3. Run `yarn install`
4. Run `yarn dev`, navigate to the localhost url shown in the terminal.

### Architecture
- I decided to use the app router directory structure due to the performance benefits from using React server components (RSCs).
- For global state I opted to use Zustand, I chose Zustand over Redux as the explicit sepraration of each store lends itself better to a Domain driven codebase. The API is also really developer friendly and easy to setup.
- I went with CSS modules for the styling system. This was mainly due to the fact the css modules fit in so well with React's component based design. Coupling the styles to reusable components means we can keep our codebase extremely lean when it comes to both styles and react components.
- Lastly, as far as client components are concerned I tried to reduce my reliance on them and there are only a few place I used these. As mentioned before, this is so we can leverage the performance improvements of RSCs through the reducation of our client side JS bundle.

### Assumptions
- The Edit Mode was a section to view/add/edit/delete regex patterns.
- The Approval Model was a section to view the regex patterns in a dropdown and based on the matching terms displayed either approve or reject the text blocks.
- Store all data in local storage as mentioned.
- Design and testing of the app wasn't a priority.
