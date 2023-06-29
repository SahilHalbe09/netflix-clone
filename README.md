
# Netflix Clone using NextJS

This is a Netflix clone web application built with Next.js, React.js, Tailwind CSS, and Material UI. It allows users to browse and watch movie trailers from various genres, search for movies, and sign up and log in to the application.


## Table of Content

 - [Features](#features)
 - [Technologies Used](#tech-used)
 - [Future Improvements](#future-improvements)
 - [Setup and Installation](#installation)
 - [Deployment](#deployment)
 - [Usage](#usageexamples)
 - [Demo](#demo)
 - [Screenshots](#screenshots)
 - [Contributing](#contributing)
 - [Contact](#feedback--contact)
## Features

- Login/Signup functionality with firebase authentication
- Home screen that displays new trending movies from TMDB API on every refresh
- Movie sections such as trending, top rated, action thriller, comedy, horror, romance, and documentaries that are dynamically updated using TMDB API
- Click on the thumbnail of any movie to dynamically play its trailer from YouTube using Material UI, its modal component, and ReactPlayer
- Mute/unmute button for the trailer video in the modal window
- Display of like percentage, description of movie, and other information fetched from TMDB database in the modal window
- Close button to close the modal window on click


## Technologies used:
- Next.js
- React.js
- Tailwind CSS
- Material UI
- Firebase
- Recoil

## Packages used:
- react-hook-form
- Heroicons
- react-icons
- react-player
- Tailwind scrollbar hide
- The Movies Database(TMDB) API
## Future Improvements:
- Search functionality to search for movies by name
- User profile where users can view their saved movies
- Integration of Stripe for subscription payments
- Like/dislike feature for movies
- Save to watch later feature
## Installation

1. Clone the repository using `git clone`.
2. Install dependencies using `npm install`.
3. Create a `.env.local` file and add the following environment variable/s:

```bash
  NEXT_PUBLIC_API_KEY=[your api key]
```
4. Run the development server using `npm run dev`.
5. Open `http://localhost:3000` in your browser to view the application.
## Deployment

The application is currently hosted on Vercel at the following URL: `https://netflix-by-sahil.vercel.app/`. To deploy the application, you can follow the Vercel deployment process or deploy to a hosting platform of your choice.


## Usage/Examples

- Logging in and Signing up
    - To access the Netflix clone website, go to `https://netflix-by-sahil.vercel.app/`. If you have not previously signed in, you will see a login page.

    - To sign in, enter your email and password and click on the `Sign In` button. If you do not have an account, click on the `Sign up now` button to create one. Once you have successfully signed in or signed up, you will be redirected to the homepage.

---
- Watch movie trailers
    - To watch the trailer of any movie, you have two options:

        - Click on the More info button on the homepage.
        - Click on the thumbnail image of the movie you are interested in.
    - Once the trailer modal appears, you can mute or unmute the trailer by clicking on the mute button.


## Demo

Here is the video demo of the project:



## Screenshots

### Login Page
![Login Screen](https://i.ibb.co/zxhP5Y0/image.png)

### Home Page
![Home page](https://i.ibb.co/6PcpyWn/image.png)

### Trailer Modal
![Trailer modal](https://i.ibb.co/LrKbbPK/image.png)


## Contributing

Contributions are always welcome!

## Feedback / Contact

If you have any feedback, please reach out to me at sahilhalbe.business@gmail.com or visit [my site](https://www.thesahildev.in/)
