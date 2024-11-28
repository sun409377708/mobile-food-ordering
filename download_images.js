import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const UNSPLASH_ACCESS_KEY = 'Qw58xEOCPn5V6G0Iagelj36uKQZDzNDWj3cX1CHOWIU';

// 确保 images 目录存在
const imagesDir = path.join(__dirname, 'images');
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir);
}

const imagesToDownload = [
    { query: 'restaurant food', filename: 'header.jpg' },
    { query: 'food delivery', filename: 'footer.jpg' },
    { query: 'ancient cooking', filename: 'history1.jpg' },
    { query: 'vintage restaurant', filename: 'history2.jpg' },
    { query: 'food delivery app', filename: 'history3.jpg' },
    { query: 'future food delivery', filename: 'history4.jpg' }
];

async function downloadImage(query, filename) {
    try {
        // 获取图片URL
        const response = await fetch(
            `https://api.unsplash.com/photos/random?query=${query}&orientation=landscape`,
            {
                headers: {
                    'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`
                }
            }
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch image data for ${query}`);
        }

        const data = await response.json();
        const imageUrl = data.urls.regular;

        // 下载图片
        const imageResponse = await fetch(imageUrl);
        if (!imageResponse.ok) {
            throw new Error(`Failed to download image for ${query}`);
        }

        // 保存图片到本地
        const filePath = path.join(imagesDir, filename);
        const fileStream = fs.createWriteStream(filePath);
        await new Promise((resolve, reject) => {
            imageResponse.body.pipe(fileStream);
            imageResponse.body.on('error', reject);
            fileStream.on('finish', resolve);
        });

        console.log(`Successfully downloaded ${filename}`);
        
        // 保存图片信息到 JSON 文件
        const imageInfo = {
            photographer: data.user.name,
            photographerUrl: data.user.links.html,
            unsplashUrl: data.links.html
        };
        
        const infoFilePath = path.join(imagesDir, `${path.parse(filename).name}.json`);
        fs.writeFileSync(infoFilePath, JSON.stringify(imageInfo, null, 2));
        console.log(`Saved attribution info for ${filename}`);

    } catch (error) {
        console.error(`Error downloading ${filename}:`, error);
    }
}

async function downloadAllImages() {
    for (const image of imagesToDownload) {
        await downloadImage(image.query, image.filename);
        // 添加延迟以避免超过 API 限制
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

downloadAllImages().then(() => {
    console.log('All images downloaded successfully!');
}).catch(error => {
    console.error('Error downloading images:', error);
});
