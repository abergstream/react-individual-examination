# React - Individual Examination

My project is a single-page application (SPA) designed to showcase my portfolio and enable users to contact me easily. It incorporates various features to enhance user experience, including toast notifications powered by `react-hot-toast` and icons from `material-design-icons`.

## Small printscreens to show design
![image](https://github.com/abergstream/react-individual-examination/assets/64410668/16786a26-5117-4db8-9a6c-20bf8cff9f95)


## Printscreens showing light and dark-mode combined

![image](https://github.com/abergstream/react-individual-examination/assets/64410668/4e188d23-718d-410f-a76f-74990b1a38b2)


![image](https://github.com/abergstream/react-individual-examination/assets/64410668/dbcf9918-8667-48fa-89bc-54de6ee391dd)


![image](https://github.com/abergstream/react-individual-examination/assets/64410668/48d0aff0-c038-4910-926b-2c4847251dfb)


## Features

- **SPA Architecture**: The project follows a single-page application architecture, ensuring seamless navigation and a smooth user experience.
- **Three Views**:
  - **Home**: The Home view provides a brief introduction about me, allowing users to get to know more about my background and interests.
  - **Projects**: In the Projects view, users can explore my three most recently updated repositories fetched dynamically from GitHub via API. This provides a snapshot of my recent work and projects.
  - **Contact**: The Contact view offers a convenient contact form through which users can reach out to me directly. (Contact form does not work)
- **Enhanced UX with React Hot Toast and Material Design Icons**:

  - **React Hot Toast**: Utilizing `react-hot-toast` for toast notifications enhances user feedback and interaction, providing real-time updates and notifications throughout the application. I use this to show when API is loaded/error and also to show message sent/error in contact form
  - **Material Design Icons**: Integration of icons from `material-design-icons` improves the visual appeal and accessibility of the application, enhancing the overall user experience. I use this to make the contact form more alive that just boxes and text

- **Light and Dark Mode Toggle with Redux**:
  - The application features a light and dark mode toggle functionality powered by Redux. Users can switch between light and dark themes to suit their preferences, with the state managed globally through Redux.

## Technologies Used

- React Router: Enables client-side routing in the SPA, facilitating navigation between different views seamlessly.
- React Hot Toast: A library for displaying toast notifications in React applications, enhancing user feedback and interaction.
- Material Design Icons: A collection of icons from Google's Material Design system, enhancing the visual presentation and accessibility of the application.
- GitHub API: Used to dynamically fetch and display my most recent repository updates in the Projects view.
- Email Service: (Not working, only shows useStates-scenario)

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server using `npm run dev`.
5. Access the application in your web browser at the specified localhost address.
