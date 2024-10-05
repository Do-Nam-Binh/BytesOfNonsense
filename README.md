# Bytes of Nonsense

**Bytes of Nonsense** is a fullstack AI-powered news website that generates satirical, fake articles based on real news headlines. Using the ChatGPT API, the backend scrapes real article titles from the web and generates AI-generated content that mimics real news but with a humorous, nonsensical twist. This project is built with Node.js, React, MongoDB, and TypeScript.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)

## Features
- **AI-Generated Fake News**: Uses the ChatGPT API to generate articles based on scraped real-world headlines.
- **Real-time Headline Scraping**: Scrapes news titles from the internet to generate new fake articles.
- **Responsive Frontend**: A React-based responsive interface for viewing fake articles.
- **Backend API**: A Node.js and Express API with MongoDB for managing articles.

## Tech Stack
- **Frontend**: React, TypeScript, CSS
- **Backend**: Node.js, Express, TypeScript
- **Database**: MongoDB (Mongoose)
- **AI Integration**: OpenAI ChatGPT API
- **Web Scraping**: [Cheerio](https://www.npmjs.com/package/cheerio) (or any preferred web scraping library)

## Installation

### Prerequisites
- **Node.js** (v14 or later)
- **MongoDB** (local or cloud instance)
- **NPM**

### Steps

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Do-Nam-Binh/BytesOfNonsense
    cd BytesOfNonsense
    ```

2. **Install dependencies**:
    ```bash
    # For both frontend and backend
    cd back-end
    npm install

    cd ../front-end
    npm install
    ```

3. **Set up environment variables**:  
   Create a `.env` file in both the `back-end` and `front-end` directories and configure the following variables.

## Environment Variables

### Backend `.env`:

```bash
MONGODB_URI=mongodb+srv://<username>:<password>@news.s0vit.mongodb.net/?retryWrites=true&w=majority&appName=News
OPENAI_API_KEY=your-openai-api-key
SCRAPER_BASE_URL=https://example-news-website.com

