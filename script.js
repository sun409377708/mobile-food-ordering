// 分类数据
const categories = [
    { id: 1, name: '特惠套餐' },
    { id: 2, name: '川湘菜' },
    { id: 3, name: '粤式点心' },
    { id: 4, name: '家常菜' },
    { id: 5, name: '小吃快餐' },
    { id: 6, name: '饮品甜点' }
];

// 菜品数据
const menuItems = {
    1: [
        {
            id: 101,
            name: '双人套餐A',
            price: 88,
            image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            description: '含宫保鸡丁、红烧肉等四个菜品'
        },
        {
            id: 102,
            name: '情侣套餐',
            price: 66,
            image: 'https://fuss10.elemecdn.com/b/6c/75bd250e5ba69868f3b1178afbda3jpeg.jpeg',
            description: '含水煮鱼、青椒肉丝等三个菜品'
        },
        {
            id: 103,
            name: '商务套餐',
            price: 128,
            image: 'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
            description: '含北京烤鸭、清蒸鱼等六个菜品'
        }
    ],
    2: [
        {
            id: 201,
            name: '宫保鸡丁',
            price: 28,
            image: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
            description: '经典川菜，口感麻辣鲜香'
        },
        {
            id: 202,
            name: '水煮鱼',
            price: 45,
            image: 'https://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg',
            description: '新鲜鱼片，麻辣鲜香'
        },
        {
            id: 203,
            name: '麻婆豆腐',
            price: 22,
            image: 'https://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg',
            description: '川菜代表，麻辣可口'
        },
        {
            id: 204,
            name: '回锅肉',
            price: 32,
            image: 'https://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg',
            description: '农家小炒，香辣可口'
        }
    ],
    3: [
        {
            id: 301,
            name: '叉烧包',
            price: 18,
            image: 'https://fuss10.elemecdn.com/7/4a/f307f56216b03f067155aec8b124ejpeg.jpeg',
            description: '广式早茶必点'
        },
        {
            id: 302,
            name: '虾饺',
            price: 22,
            image: 'https://fuss10.elemecdn.com/e/53/97d73cd1faac2b4f3a8a4ab71e605jpeg.jpeg',
            description: '晶莹剔透，鲜美可口'
        },
        {
            id: 303,
            name: '肠粉',
            price: 16,
            image: 'https://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg',
            description: '滑嫩可口，配料丰富'
        }
    ],
    4: [
        {
            id: 401,
            name: '红烧肉',
            price: 32,
            image: 'https://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg',
            description: '传统美食，肥而不腻'
        },
        {
            id: 402,
            name: '青椒肉丝',
            price: 26,
            image: 'https://fuss10.elemecdn.com/0/f3/58839990da0fbe4c8ae9e55f8d781jpeg.jpeg',
            description: '家常小炒，清淡可口'
        },
        {
            id: 403,
            name: '糖醋排骨',
            price: 36,
            image: 'https://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg',
            description: '酸甜可口，开胃下饭'
        }
    ],
    5: [
        {
            id: 501,
            name: '扬州炒饭',
            price: 22,
            image: 'https://fuss10.elemecdn.com/b/76/853b3187cb6bc8d51d8c85e6c490cjpeg.jpeg',
            description: '色香味俱全，料足味美'
        },
        {
            id: 502,
            name: '牛肉面',
            price: 26,
            image: 'https://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c1a1ce13d07jpeg.jpeg',
            description: '汤鲜肉嫩，面条劲道'
        },
        {
            id: 503,
            name: '鸡腿饭',
            price: 24,
            image: 'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg',
            description: '香酥可口，肉质鲜嫩'
        }
    ],
    6: [
        {
            id: 601,
            name: '珍珠奶茶',
            price: 12,
            image: 'https://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52dbe18fe8a82jpeg.jpeg',
            description: '香浓奶茶，珍珠弹牙'
        },
        {
            id: 602,
            name: '芒果冰沙',
            price: 16,
            image: 'https://fuss10.elemecdn.com/5/27/98d1256f3707f3fd68b9af00319c2jpeg.jpeg',
            description: '清爽解暑，果味十足'
        },
        {
            id: 603,
            name: '提拉米苏',
            price: 22,
            image: 'https://fuss10.elemecdn.com/9/93/91994544c31d1f4ffb24bc0435593jpeg.jpeg',
            description: '意式经典，口感细腻'
        }
    ]
};

// 购物车数据
let cart = [];

// DOM 元素
const categoryList = document.getElementById('category-list');
const foodList = document.getElementById('food-list');
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const totalPrice = document.getElementById('total-price');
const cartBtn = document.getElementById('cart-btn');
const closeCartBtn = document.getElementById('close-cart');
const checkoutBtn = document.getElementById('checkout-btn');

// 渲染分类列表
function renderCategories() {
    categoryList.innerHTML = categories.map((category, index) => `
        <div class="category-item ${index === 0 ? 'active' : ''}" data-id="${category.id}">
            ${category.name}
        </div>
    `).join('');

    // 添加分类点击事件
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            // 更新active状态
            categoryItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            // 滚动到对应的商品区域
            const categoryId = parseInt(item.dataset.id);
            const foodSection = document.querySelector(`[data-category-id="${categoryId}"]`);
            if (foodSection) {
                foodSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// 渲染商品列表
function renderFoodList() {
    let html = '';
    categories.forEach(category => {
        const foods = menuItems[category.id] || [];
        if (foods.length > 0) {
            html += `
                <div class="food-section" data-category-id="${category.id}">
                    <div class="food-section-title">${category.name}</div>
                    ${foods.map(food => `
                        <div class="food-item">
                            <img class="food-item-img" src="${food.image}" alt="${food.name}">
                            <div class="food-item-info">
                                <h3 class="food-item-name">${food.name}</h3>
                                <p class="food-item-desc">${food.description}</p>
                                <p class="food-item-price">¥${food.price}</p>
                            </div>
                            <div class="food-item-action">
                                <button class="add-to-cart" onclick="addToCart(${food.id})">加入购物车</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }
    });
    foodList.innerHTML = html;

    // 监听商品列表的滚动
    foodList.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('.food-section');
        const categoryItems = document.querySelectorAll('.category-item');
        
        let currentSection = null;
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                currentSection = section;
            }
        });

        if (currentSection) {
            const categoryId = currentSection.dataset.categoryId;
            categoryItems.forEach(item => {
                if (item.dataset.id === categoryId) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });

            // 确保左侧分类列表可以看到当前激活的分类
            const activeCategory = document.querySelector('.category-item.active');
            if (activeCategory) {
                activeCategory.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    });
}

// 添加到购物车
function addToCart(id) {
    let targetItem = null;
    // 在所有分类中查找商品
    Object.values(menuItems).forEach(foods => {
        const found = foods.find(item => item.id === id);
        if (found) targetItem = found;
    });

    if (!targetItem) return;

    const cartItem = cart.find(item => item.id === id);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({
            ...targetItem,
            quantity: 1
        });
    }

    updateCart();
}

// 从购物车移除
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

// 更新购物车显示
function updateCart() {
    // 更新购物车数量
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // 更新购物车列表
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <span>${item.name} x ${item.quantity}</span>
            <span>¥${item.price * item.quantity}</span>
            <button onclick="removeFromCart(${item.id})">删除</button>
        </div>
    `).join('');

    // 更新总价
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    totalPrice.textContent = total;
}

// 结算功能
function checkout() {
    if (cart.length === 0) {
        alert('购物车是空的！');
        return;
    }
    alert('订单提交成功！');
    cart = [];
    updateCart();
    cartModal.style.display = 'none';
}

// 事件监听
cartBtn.addEventListener('click', () => {
    cartModal.style.display = 'block';
});

closeCartBtn.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

checkoutBtn.addEventListener('click', checkout);

// 初始化
renderCategories();
renderFoodList();
