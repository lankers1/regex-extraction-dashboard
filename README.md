### Requirements
- Node.js 18.18 or later.
- Yarn

### Setup
1. Clone this repo
2. Run `cd regex-extraction-dashboard`
3. Run `yarn install`
4. Run `yarn dev`, navigate to the localhost url shown in the terminal.

### Architecture
- I decided to adopt the App Router directory structure to leverage the performance benefits of React Server Components (RSCs). This approach aligns with modern best practices in Next.js and enables more efficient server-side rendering with reduced client-side JavaScript.
- I chose Zustand for global state management over Redux because its approach to explicitly separated stores aligns better with a domain-driven codebase structure. Zustand’s minimal and intuitive API also makes it highly developer-friendly, allowing for faster onboarding and reduced boilerplate compared to more complex solutions like Redux.
- I opted to use CSS Modules for styling, primarily because they integrate seamlessly with React's component-based architecture. By tightly coupling styles with their respective reusable components, we’re able to keep the codebase clean and modular. This approach also helps reduce global style bloat and ensures our styles remain scoped, which contributes to a leaner and more maintainable codebase overall.
- Lastly, regarding client components, I made a conscious effort to minimize their usage. They are only employed in a few specific areas where necessary. This approach allows us to take full advantage of the performance benefits offered by React Server Components (RSCs), particularly by reducing our client-side JavaScript bundle size.

### Assumptions
- The Edit Mode was a section to view/add/edit/delete regex patterns.
- The Approval Mode was a section to view the regex patterns in a dropdown and based on the matching terms displayed either approve or reject the text blocks.
- Store all data in local storage as mentioned.
- Design and testing of the app wasn't a part of the requirements so I did not prioritise either.
