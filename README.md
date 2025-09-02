# 📚 boiPoka - Book Management Application

<div align="center">

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.12-38B2AC?style=for-the-badge&logo=tailwind-css)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5.1.1-5A0EF8?style=for-the-badge)

_A modern, responsive book management application built with React and Tailwind CSS_

[🚀 Live Demo](https://ppetsboi-poka.vercel.app/) • [📖 Features](#-key-features) • [🛠️ Tech Stack](#tech-stack) • [🚀 Getting Started](#getting-started)

</div>

---

## ✨ Overview

**boiPoka** is a comprehensive book management application that allows users to explore, organize, and track their reading journey. Built with modern web technologies, it provides an intuitive interface for managing personal book collections, wishlists, and reading progress.

## 🎯 Key Features

- **📚 Book Catalog**: Browse through an extensive collection of books with detailed information
- **🔍 Book Details**: Comprehensive book information including reviews, ratings, and metadata
- **📖 Reading Lists**: Mark books as read and track your reading progress
- **💝 Wishlists**: Create and manage your book wishlist
- **📱 Responsive Design**: Beautiful UI that works seamlessly across all devices
- **🎨 Modern Interface**: Clean, intuitive design powered by Tailwind CSS and DaisyUI
- **💾 Local Storage**: Persistent data storage for your reading preferences
- **🚀 Fast Performance**: Built with Vite for optimal development and build performance

## 🛠️ Tech Stack

### Frontend Framework

- **React 19.1.1** - Modern React with latest features
- **React Router DOM 7.8.2** - Client-side routing
- **React Icons 5.5.0** - Beautiful icon library

### Styling & UI

- **Tailwind CSS 4.1.12** - Utility-first CSS framework
- **DaisyUI 5.1.1** - Component library for Tailwind CSS
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixing

### Build Tools

- **Vite 7.1.2** - Fast build tool and dev server
- **ESLint 9.33.0** - Code linting and quality
- **Prettier 3.6.2** - Code formatting

### Additional Libraries

- **React Tabs 6.1.0** - Tab component functionality
- **React Toastify 11.0.5** - Toast notifications
- **LocalForage 1.10.0** - Enhanced local storage
- **Match Sorter & Sort By** - Advanced filtering and sorting

## 🏗️ Project Structure

```
boiPoka/
├── 📁 public/
│   ├── 📄 booksData.json          # Book catalog data
│   └── 📄 book.svg               # Book icon
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 📁 Author/            # Author information component
│   │   ├── 📁 Banner/            # Hero banner component
│   │   ├── 📁 Book/              # Individual book card component
│   │   ├── 📁 BookDetail/        # Detailed book view component
│   │   ├── 📁 Books/             # Book grid display component
│   │   ├── 📁 Dashboard/         # User dashboard component
│   │   ├── 📁 ErrorPage/         # Error handling component
│   │   ├── 📁 Footer/            # Footer component
│   │   ├── 📁 Home/              # Home page component
│   │   ├── 📁 ListedBooks/       # Book listing component
│   │   ├── 📁 NavBar/            # Navigation component
│   │   ├── 📁 ReadList/          # Reading list component
│   │   ├── 📁 Root/              # Root layout component
│   │   ├── 📁 ScrollToTop/       # Scroll to top utility
│   │   ├── 📁 utility/           # Utility functions
│   │   │   └── 📄 addToDb.js     # Local storage management
│   │   └── 📁 WishList/          # Wishlist component
│   ├── 📁 assets/                # Static assets (images, icons)
│   ├── 📄 App.jsx                # Main application component
│   ├── 📄 main.jsx               # Application entry point
│   ├── 📄 index.css              # Global styles
│   └── 📄 App.css                # App-specific styles
├── 📄 package.json               # Dependencies and scripts
├── 📄 tailwind.config.js         # Tailwind CSS configuration
├── 📄 vite.config.js             # Vite build configuration
└── 📄 eslint.config.js           # ESLint configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/boiPoka.git
   cd boiPoka
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the URL shown in your terminal)

### Available Scripts

- **`npm run dev`** - Start development server
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build
- **`npm run lint`** - Run ESLint for code quality

## 📱 Features in Detail

### Book Management

- **Comprehensive Book Data**: Each book includes title, author, category, rating, review, page count, publisher, and publication year
- **Tag System**: Books are categorized with multiple tags for easy filtering
- **Rating System**: 5-star rating system with visual indicators

### User Experience

- **Responsive Grid Layout**: Adaptive book grid that works on all screen sizes
- **Interactive Cards**: Clickable book cards with hover effects
- **Navigation**: Intuitive routing between different sections
- **Toast Notifications**: User feedback for actions like adding to lists

### Data Persistence

- **Local Storage**: Reading lists and wishlists are saved locally
- **Duplicate Prevention**: Smart handling to avoid duplicate entries
- **Data Validation**: Proper error handling and user feedback

## 🎨 Design Philosophy

The application follows modern design principles:

- **Clean & Minimal**: Focus on content without visual clutter
- **Responsive First**: Mobile-first approach with progressive enhancement
- **Accessibility**: Proper semantic HTML and ARIA labels
- **Performance**: Optimized images and efficient data loading
- **User-Centric**: Intuitive navigation and clear call-to-actions

## 🔧 Configuration

### Tailwind CSS

The project uses Tailwind CSS v4 with DaisyUI components for rapid UI development.

### Vite

Fast development server and build tool configuration for optimal performance.

### ESLint

Code quality enforcement with React-specific rules and best practices.

## 📊 Data Structure

Books are stored in JSON format with the following structure:

```json
{
  "bookId": 1,
  "bookName": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "image": "book-cover-url",
  "review": "Book description and review...",
  "totalPages": 192,
  "rating": 4.5,
  "category": "Classic",
  "tags": ["Fiction", "Romance"],
  "publisher": "Scribner",
  "yearOfPublishing": 1925
}
```

## 🚧 Future Enhancements

- [ ] **User Authentication**: Login and user profiles
- [ ] **Cloud Storage**: Sync data across devices
- [ ] **Advanced Filtering**: Search by author, category, rating
- [ ] **Reading Progress**: Track reading progress and set goals
- [ ] **Social Features**: Share reading lists and reviews
- [ ] **Mobile App**: React Native version
- [ ] **Dark Mode**: Theme switching capability

## 🤝 Contributing

We welcome contributions! Please feel free to submit issues and pull requests.

### Contributing Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS approach
- **DaisyUI** for beautiful pre-built components
- **Vite** for the lightning-fast build tool
- **React Router** for seamless client-side routing

## 📞 Contact

- **Project Link**: [https://github.com/imamulkadir/React_boiPoka](https://github.com/imamulkadir/React_boiPoka)
- **Issues**: [GitHub Issues](https://github.com/imamulkadir/React_boiPoka/issues)

---

<div align="center">

**Made with ❤️ using React and Tailwind CSS**

⭐ **Star this repository if you found it helpful!** ⭐

</div>
