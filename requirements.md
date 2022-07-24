**Requirements:**
1. Create app, which finds a number of videos by title, using https://www.pexels.com/api, autoplay them sequentially for selected time and shows each video's author. Suggested user interface layout

**Functional requirements:**

1. User is able to select how many videos will be played in a dropdown (max value 10).
2. User is able to select for how long each video plays (values [10s, 20s, 30s]).
3. If video is shorter than the provided video length - it is played fully.
4. When user enters video title in an input field (for e.g. Mountains, Sea, City) application sequentially autoplay found videos.
5. If less videos for given query is found, change number in a dropdown to number found and play found videos
6. After last video is played video component plays same sequence of videos from the beginning.
7. While videos are being queried video component should show loading indicator inside it.
8. Each video shows a caption with it’s author.
9. Only landscape videos are queried, they should be center cropped in a component.
10. **Bonus:** before each video is loaded and ready to play video’s picture from API response is shown.

**Non-functional requirements:**
1. Application should be written using **React** or **Angular** frameworks
2. Please provide your code in **TypeScript**
3. You must be able to set www.pexels.com API key as environmental variable
4. Provide project’s Git repo stored in **Github** or **Bitbucket**
