// Unsplash API 配置
const UNSPLASH_ACCESS_KEY = 'Qw58xEOCPn5V6G0Iagelj36uKQZDzNDWj3cX1CHOWIU';

async function loadBackgroundImage(element, query) {
    try {
        const response = await fetch(
            `https://api.unsplash.com/photos/random?query=${query}&orientation=landscape&content_filter=high`,
            {
                headers: {
                    'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`
                }
            }
        );
        
        if (!response.ok) {
            throw new Error('Failed to fetch image');
        }

        const data = await response.json();
        
        // 先加载较小的图片作为预览
        const previewUrl = data.urls.small;
        element.style.backgroundImage = `linear-gradient(rgba(255, 107, 107, 0.7), rgba(255, 107, 107, 0.7)), url('${previewUrl}')`;
        
        // 然后加载高质量图片
        const fullImage = new Image();
        fullImage.src = data.urls.regular;
        fullImage.onload = () => {
            element.style.backgroundImage = `linear-gradient(rgba(255, 107, 107, 0.7), rgba(255, 107, 107, 0.7)), url('${data.urls.regular}')`;
        };
        
        // 添加图片归属信息
        const photographerName = data.user.name;
        const photographerUrl = data.user.links.html;
        
        // 移除旧的归属信息（如果存在）
        const oldAttribution = element.querySelector('.photo-attribution');
        if (oldAttribution) {
            oldAttribution.remove();
        }
        
        // 添加新的归属信息
        const attribution = document.createElement('div');
        attribution.className = 'photo-attribution';
        attribution.innerHTML = `Photo by <a href="${photographerUrl}?utm_source=小张点餐器&utm_medium=referral" target="_blank" rel="noopener noreferrer">${photographerName}</a> on <a href="https://unsplash.com?utm_source=小张点餐器&utm_medium=referral" target="_blank" rel="noopener noreferrer">Unsplash</a>`;
        element.appendChild(attribution);
    } catch (error) {
        console.error('Error loading Unsplash image:', error);
        // 使用备用背景色
        element.style.background = 'var(--primary-color)';
    }
}

async function loadTimelineImage(imgElement, query) {
    try {
        const response = await fetch(
            `https://api.unsplash.com/photos/random?query=${query}&orientation=landscape&content_filter=high`,
            {
                headers: {
                    'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`
                }
            }
        );
        
        if (!response.ok) {
            throw new Error('Failed to fetch image');
        }

        const data = await response.json();
        
        // 先设置较小的预览图
        imgElement.src = data.urls.small;
        imgElement.alt = data.description || query;
        
        // 加载高质量图片
        const fullImage = new Image();
        fullImage.src = data.urls.regular;
        fullImage.onload = () => {
            imgElement.src = data.urls.regular;
        };
        
        // 移除旧的归属信息（如果存在）
        const container = imgElement.parentElement;
        const oldAttribution = container.querySelector('.photo-attribution');
        if (oldAttribution) {
            oldAttribution.remove();
        }
        
        // 添加新的归属信息
        const attribution = document.createElement('div');
        attribution.className = 'photo-attribution';
        attribution.innerHTML = `Photo by <a href="${data.user.links.html}?utm_source=小张点餐器&utm_medium=referral" target="_blank" rel="noopener noreferrer">${data.user.name}</a> on <a href="https://unsplash.com?utm_source=小张点餐器&utm_medium=referral" target="_blank" rel="noopener noreferrer">Unsplash</a>`;
        container.appendChild(attribution);
    } catch (error) {
        console.error('Error loading timeline image:', error);
        // 使用备用图片
        imgElement.src = 'https://via.placeholder.com/800x400?text=Image+Not+Available';
    }
}

// 在页面加载时初始化背景图片
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');
    
    if (header) {
        loadBackgroundImage(header, 'restaurant food');
    }
    
    if (footer) {
        loadBackgroundImage(footer, 'food delivery');
    }
    
    // 如果在历史页面，加载时间线图片
    const timelineItems = document.querySelectorAll('.timeline-image');
    const queries = ['ancient cooking', 'vintage restaurant', 'food delivery app', 'future food delivery'];
    
    timelineItems.forEach((item, index) => {
        if (index < queries.length) {
            loadTimelineImage(item, queries[index]);
        }
    });
});
