# 🐦 Nwitter

A modern Twitter clone built with React and Firebase.

## 🌟 Features

- **User Authentication**: Sign up and login with email/password
- **Real-time Tweets**: Create, read, and delete tweets instantly
- **Image Upload**: Share photos with your tweets
- **User Profiles**: Personalized profile pages
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Real-time Updates**: See new tweets without refreshing

## 🚀 Live Demo

Visit the live application: [https://nwitter-mu.vercel.app/](https://nwitter-mu.vercel.app/)

## 🛠️ Tech Stack

- **Frontend**: React 18, React Router DOM
- **Backend**: Firebase (Authentication, Firestore, Storage)
- **Styling**: CSS3, FontAwesome Icons
- **Deployment**: Vercel
- **Build Tool**: Create React App

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/LeJungMin/nwitter.git
cd nwitter
```

2. Install dependencies:
```bash
npm install
```

3. Set up Firebase configuration:
   - Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/)
   - Add a web app to your project
   - Update `src/fbase.js` with your Firebase config

4. Start the development server:
```bash
npm start
```

## 🔧 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm run build`
Builds the app for production to the `build` folder

### `npm test`
Launches the test runner in interactive watch mode

## 🌐 Deployment

This project is automatically deployed to Vercel. Any push to the main branch triggers a new deployment.

To deploy your own instance:
1. Fork this repository
2. Sign up at [Vercel](https://vercel.com/)
3. Import your forked repository
4. Deploy with default settings

## 📁 Project Structure

```
src/
├── components/
│   ├── App.js          # Main app component
│   ├── AuthForm.js     # Authentication form
│   ├── Navigation.js   # Navigation component
│   ├── Nweet.js        # Individual tweet component
│   ├── NweetFactory.js # Tweet creation component
│   └── Router.js       # App routing
├── routes/
│   ├── Auth.js         # Authentication page
│   ├── Home.js         # Home timeline
│   └── Profile.js      # User profile page
├── fbase.js            # Firebase configuration
├── index.js            # App entry point
└── styles.css          # Global styles
```

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**LeJungMin**
- GitHub: [@LeJungMin](https://github.com/LeJungMin)

## 🙏 Acknowledgments

- Inspired by Twitter's user interface and functionality
- Built following React best practices
- Firebase for providing excellent backend services
- Create React App for the initial project setup
