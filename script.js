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
            image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
            description: '含宫保鸡丁、红烧肉等四个菜品'
        },
        {
            id: 102,
            name: '情侣套餐',
            price: 66,
            image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1',
            description: '含水煮鱼、青椒肉丝等三个菜品'
        },
        {
            id: 103,
            name: '商务套餐',
            price: 128,
            image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19',
            description: '含北京烤鸭、清蒸鱼等六个菜品'
        }
    ],
    2: [
        {
            id: 201,
            name: '宫保鸡丁',
            price: 28,
            image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e',
            description: '经典川菜，口感麻辣鲜香'
        },
        {
            id: 202,
            name: '水煮鱼',
            price: 45,
            image: 'https://images.unsplash.com/photo-1518732714860-b62714ce0c59',
            description: '新鲜鱼片，麻辣鲜香'
        },
        {
            id: 203,
            name: '麻婆豆腐',
            price: 22,
            image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb',
            description: '川菜代表，麻辣可口'
        },
        {
            id: 204,
            name: '回锅肉',
            price: 32,
            image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
            description: '农家小炒，香辣可口'
        }
    ],
    3: [
        {
            id: 301,
            name: '叉烧包',
            price: 18,
            image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d',
            description: '广式早茶必点'
        },
        {
            id: 302,
            name: '虾饺',
            price: 22,
            image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c',
            description: '晶莹剔透，鲜美可口'
        },
        {
            id: 303,
            name: '肠粉',
            price: 16,
            image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d',
            description: '滑嫩可口，配料丰富'
        }
    ],
    4: [
        {
            id: 401,
            name: '红烧肉',
            price: 32,
            image: 'https://images.unsplash.com/photo-1544025162-d76694265947',
            description: '传统美食，肥而不腻'
        },
        {
            id: 402,
            name: '青椒肉丝',
            price: 26,
            image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8',
            description: '家常小炒，清淡可口'
        },
        {
            id: 403,
            name: '糖醋排骨',
            price: 36,
            image: 'https://images.unsplash.com/photo-1544025162-d76694265947',
            description: '酸甜可口，开胃下饭'
        }
    ],
    5: [
        {
            id: 501,
            name: '扬州炒饭',
            price: 22,
            image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19',
            description: '色香味俱全，料足味美'
        },
        {
            id: 502,
            name: '牛肉面',
            price: 26,
            image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43',
            description: '汤鲜肉嫩，面条劲道'
        },
        {
            id: 503,
            name: '鸡腿饭',
            price: 24,
            image: 'https://images.unsplash.com/photo-1562967914-608f82629710',
            description: '香酥可口，肉质鲜嫩'
        }
    ],
    6: [
        {
            id: 601,
            name: '珍珠奶茶',
            price: 12,
            image: 'images/bubble-tea.jpg',
            description: '香浓奶茶，珍珠弹牙'
        },
        {
            id: 602,
            name: '芒果冰沙',
            price: 16,
            image: 'https://images.unsplash.com/photo-1546173159-315724a31696',
            description: '清爽解暑，果味十足'
        },
        {
            id: 603,
            name: '提拉米苏',
            price: 22,
            image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d',
            description: '意式经典，口感细腻'
        }
    ]
};

// 购物车数据
let cart = {};

// DOM 元素
const categoryList = document.querySelector('.category-list');
const foodList = document.querySelector('.food-list');
const cartModal = document.querySelector('.cart-modal');
const cartItems = document.querySelector('.cart-items');
const cartCount = document.querySelector('.cart-count');
const cartBtn = document.querySelector('.cart-btn');
const closeCartBtn = document.querySelector('.cart-btn-small');
const totalPrice = document.querySelector('.total-price');
const checkoutBtn = document.querySelector('.checkout-btn');

// 渲染分类列表
function renderCategories() {
    categories.forEach((category, index) => {
        const div = document.createElement('div');
        div.className = `category-item ${index === 0 ? 'active' : ''}`;
        div.textContent = category.name;
        div.setAttribute('data-id', category.id);
        div.addEventListener('click', () => {
            // 移除其他分类的激活状态
            document.querySelectorAll('.category-item').forEach(item => {
                item.classList.remove('active');
            });
            // 添加当前分类的激活状态
            div.classList.add('active');
            // 滚动到对应的食品列表
            const targetSection = document.querySelector(`[data-category="${category.id}"]`);
            if (targetSection) {
                foodList.scrollTo({
                    top: targetSection.offsetTop - foodList.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
        categoryList.appendChild(div);
    });
}

// 渲染商品列表
function renderFoodList() {
    categories.forEach(category => {
        const section = document.createElement('div');
        section.setAttribute('data-category', category.id);
        
        const title = document.createElement('div');
        title.className = 'category-title';
        title.textContent = category.name;
        section.appendChild(title);
        
        const items = menuItems[category.id] || [];
        items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'food-item';
            div.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="food-image">
                <div class="food-info">
                    <div>
                        <div class="food-name">${item.name}</div>
                        <div class="food-description">${item.description}</div>
                        <div class="food-price">¥${item.price}</div>
                    </div>
                    <div class="cart-controls">
                        ${cart[item.id] ? `
                            <button class="cart-btn-small" onclick="removeFromCart(${item.id})">-</button>
                            <span class="cart-count">${cart[item.id]}</span>
                        ` : ''}
                        <button class="cart-btn-small" onclick="addToCart(${item.id})">+</button>
                    </div>
                </div>
            `;
            section.appendChild(div);
        });
        
        foodList.appendChild(section);
    });

    // 监听滚动事件来更新分类激活状态
    foodList.addEventListener('scroll', () => {
        const sections = foodList.querySelectorAll('[data-category]');
        let currentSection = null;
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= foodList.offsetTop + 100) {
                currentSection = section;
            }
        });
        
        if (currentSection) {
            const categoryId = currentSection.getAttribute('data-category');
            document.querySelectorAll('.category-item').forEach(item => {
                item.classList.toggle('active', 
                    item.getAttribute('data-id') === categoryId);
            });
        }
    });
}

// 添加到购物车
function addToCart(id) {
    cart[id] = (cart[id] || 0) + 1;
    updateCart();
    updateFoodList();
}

// 从购物车移除
function removeFromCart(id) {
    if (cart[id] > 0) {
        cart[id]--;
        if (cart[id] === 0) {
            delete cart[id];
        }
        updateCart();
        updateFoodList();
    }
}

// 更新购物车显示
function updateCart() {
    // 更新购物车计数
    const totalCount = Object.values(cart).reduce((sum, count) => sum + count, 0);
    cartCount.textContent = totalCount;

    // 更新购物车列表
    cartItems.innerHTML = '';
    let total = 0;

    Object.entries(cart).forEach(([id, count]) => {
        const item = findItemById(parseInt(id));
        if (item) {
            const itemTotal = item.price * count;
            total += itemTotal;
            
            const div = document.createElement('div');
            div.className = 'cart-item';
            div.innerHTML = `
                <div>
                    <span>${item.name}</span>
                    <span class="cart-item-price">¥${item.price}</span>
                </div>
                <div class="cart-controls">
                    <button class="cart-btn-small" onclick="removeFromCart(${id})">-</button>
                    <span class="cart-count">${count}</span>
                    <button class="cart-btn-small" onclick="addToCart(${id})">+</button>
                </div>
            `;
            cartItems.appendChild(div);
        }
    });

    totalPrice.textContent = `¥${total}`;
}

// 更新食品列表中的购物车控件
function updateFoodList() {
    document.querySelectorAll('.food-item').forEach(item => {
        const controls = item.querySelector('.cart-controls');
        const addButton = controls.querySelector('button:last-child');
        const id = parseInt(addButton.getAttribute('onclick').match(/\d+/)[0]);
        
        if (cart[id]) {
            controls.innerHTML = `
                <button class="cart-btn-small" onclick="removeFromCart(${id})">-</button>
                <span class="cart-count">${cart[id]}</span>
                <button class="cart-btn-small" onclick="addToCart(${id})">+</button>
            `;
        } else {
            controls.innerHTML = `
                <button class="cart-btn-small" onclick="addToCart(${id})">+</button>
            `;
        }
    });
}

// 查找商品
function findItemById(id) {
    for (const items of Object.values(menuItems)) {
        const item = items.find(item => item.id === id);
        if (item) return item;
    }
    return null;
}

// 结算功能
function checkout() {
    if (Object.keys(cart).length === 0) {
        alert('购物车是空的');
        return;
    }
    alert('订单提交成功！');
    cart = {};
    updateCart();
    updateFoodList();
    cartModal.classList.remove('active');
}

// 事件监听
cartBtn.addEventListener('click', () => {
    cartModal.classList.add('active');
    updateCart();
});

closeCartBtn.addEventListener('click', () => {
    cartModal.classList.remove('active');
});

checkoutBtn.addEventListener('click', checkout);

// 初始化
renderCategories();
renderFoodList();
