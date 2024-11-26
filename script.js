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
