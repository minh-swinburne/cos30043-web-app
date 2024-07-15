import axios from 'axios';
import { promises as fs } from 'fs'; // Use the promises API of fs

async function fetchData(url) {
  try {
    const response = await axios.get(url);
    const articles = response.data.articles;
    return articles.filter(article => article.urlToImage != null && article.title != "[Removed]");
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
    throw error;
  }
}

function formatData(data) {
  function randomUser() {
    return Math.floor(Math.random() * 5000);
  }
  // Perform custom formatting here
  // For example, let's assume we want to extract specific fields
  const formattedData = [];
  data.forEach((item, index) => {
    let votes = [];
    let upvotes = Math.floor(Math.random() * 1000);
    let downvotes = Math.floor(Math.random() * 100);
    let score = 0;

    for (let i = 0; i < upvotes; i++) {
      votes.push({
        user: randomUser(),
        type: 'upvote'
      });
      score++;
    }
    for (let i = 0; i < downvotes; i++) {
      let user = randomUser();
      while (votes.find(vote => vote.user === user)) {
        user = randomUser();
      }
      votes.push({
        user: user,
        type: 'downvote'
      });
      score--;
    }
    console.log(score);
    let comments = [];
    let commentsCount = Math.floor(Math.random() * 100);
    for (let i = 0; i < commentsCount; i++) {
      comments.push({
        user: Math.floor(randomUser()),
        text: `Comment ${i + 1}`,
      });
    }

    formattedData.push({
      id: index + 1,
      author: randomUser(),
      publishedAt: item.publishedAt,
      title: item.title,
      description: item.description,
      content: item.content,
      url: item.url,
      imageUrl: item.urlToImage,
      score: score,
      votes: votes,
      comments: comments,
    });
  });

  return formattedData;
}

function saveToFile(filename, data) {
  fs.writeFile(filename, JSON.stringify(data, null, 2), 'utf8', (err) => {
    if (err) {
      console.error(`Error saving data to file: ${err}`);
      throw err;
    }
    console.log(`Data successfully saved to ${filename}`);
  });
}

async function main() {
  // const url = 'https://newsapi.org/v2/everything?q=Apple&from=2024-06-14&sortBy=popularity&apiKey=f47fe6119dfc4592ae04366502ae2ffd';
  var url = 'https://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=f47fe6119dfc4592ae04366502ae2ffd';
  const outputFilename = 'src/data/posts_2.json';

  try {
    const data = await fetchData(url);
    const formattedData = formatData(data);
    saveToFile(outputFilename, formattedData);
  } catch (error) {
    console.error(`Error in main function: ${error}`);
  }
}

main();
