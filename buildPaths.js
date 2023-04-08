const fs = require("fs");
const path = require("path");

const POSTS_DIRECTORY = "./public/posts";
const OUTPUT_FILE = "./public/posts.json";

fs.readdir(POSTS_DIRECTORY, (err, files) => {
  if (err) {
    console.error(`Failed to read directory ${POSTS_DIRECTORY}: ${err}`);
    process.exit(1);
  }

  const mdFiles = files.filter((file) => path.extname(file) === ".md");
  const postNames = mdFiles.map((file) => path.basename(file, ".md"));

  const jsonData = JSON.stringify(postNames, null, 2);

  fs.writeFile(OUTPUT_FILE, jsonData, (err) => {
    if (err) {
      console.error(`Failed to write to file ${OUTPUT_FILE}: ${err}`);
      process.exit(1);
    }

    console.log(`File names saved to ${OUTPUT_FILE}`);
  });
});
