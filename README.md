## Table of Contents

- <a href="https://github.com/sophiapak/front-end-interview-project/tree/beta#overview">Overview</a>
- <a href="https://github.com/sophiapak/front-end-interview-project/tree/beta#getting-started">Getting Started</a>
- <a href="https://github.com/sophiapak/front-end-interview-project/tree/beta#future-improvements--stretch-implementations">Future Improvements + Stretch Implementations</a>
- <a href="https://github.com/sophiapak/front-end-interview-project/tree/beta#provided-references">Provided References</a>
- <a href="https://github.com/sophiapak/front-end-interview-project/tree/beta#thank-you">Thank you</a>

<br>

## Overview

The file is structured with 5 core main files within the `components` folder: `index`, `Hero`, `Header`, `Group` & `Footer`.

Additional supporting components (`Cart`, `Logo`, `Product` & `SocialBar`) can be located in the subfolder called `common`

As for the modularized styling for each corresponding components can be located in the subfolder called `styles`.

All the testing suite files can be located in the `__tests__` folder from the root directory (`__mock__` contains a single file that is used for rendering mock images for the testing suite)

\*\* Additional setup/config files have been added to the root directory for custom configuration for next.js and for testing suite implementation

<br>

## Getting Started

1.  Clone this repo to your local machine and point to the corresponding directory:

    ```bash
    git clone https://github.com/sophiapak/front-end-interview-project.git

    cd front-end-interview-project
    ```

2.  Install all required dependencies with the following script:

    ```bash
    npm install
    ```

3.  Run the following script to open the application on http://localhost:3000:

    ```bash
    npm run dev
    ```

4.  Run the Testing Suite using the following script:

    ```bash
     npm test
    ```

<br>

## Future Improvements + Stretch Implementations

As prompted, I didn't spend an inordinate amount of time but there are quite a few things if I had more time would love to have implemented:

- Fleshing out the Testing Suite with more variety of tests (eg. Integration + End to End)
- Smoothing the Small Hiccup Alignment in the wrapping of products when the Application Page transitions between the targeted mobile and desktop comps
- Trying to update the overall page to be more accessible - Current Google Lighthouse Accessibility Rating: 89/100 - (eg. Making the Site more Keyboard-Friendly - right now, a user can only access the main navigation menu and the footer links using only with the keyboard)
- Optimizing the Product Images so it doesn't bottleneck the initial response time

<br>

## Provided References

- Design Comp (Mobile + Desktop): [https://www.figma.com/file/tFhYREeWNPh4F0BqeycV3k/Coding-Test](https://www.figma.com/file/tFhYREeWNPh4F0BqeycV3k/Coding-Test)
- GET (Product Data + Images): `https://api.foxtrotchicago.com/v5/inventory/aisles/224/items?store_id=6`
- Next.js Reference Material: [Learn Next.js](https://nextjs.org/learn) & [Next.js Documentation](https://nextjs.org/docs)

<br>

## Thank you

I just wanted to say thank you so much Kevin for taking the time to speak with me in our previous zoom call as well as providing this take home opportunity.
