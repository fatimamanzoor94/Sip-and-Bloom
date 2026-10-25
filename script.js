/**
 * ============================================================================
 * SIP & BLOOM — Premium Botanical Beverages
 * Refined Application Logic (Vanilla JavaScript)
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. DRINK CATALOG DATA REPOSITORY
  // ==========================================================================
  const DRINKS_DATA = {
    'strawberry-bliss': {
      id: 'strawberry-bliss',
      name: 'Strawberry Bliss',
      category: 'Sparkling Drinks',
      price: 850,
      image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=700&q=80',
      description: 'Sun-ripened alpine strawberries infused with wild hibiscus petals, crisp sparkling mineral water, and garden mint.',
      botanicals: 'Wild Hibiscus, Persian Mint, Persian Lime',
      temperature: 'Chilled 3°C • Sparkling Effervescence'
    },
    'matcha-cloud': {
      id: 'matcha-cloud',
      name: 'Matcha Cloud',
      category: 'Matcha & Coffee',
      price: 950,
      image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=700&q=80',
      description: 'Ceremonial grade Uji green matcha whisked over chilled oat milk, crowned with silky vanilla cold foam and wildflower honey.',
      botanicals: 'Ceremonial Uji Matcha, Madagascar Vanilla, Oat Milk',
      temperature: 'Chilled 4°C • Whipped Cloud Foam'
    },
    'peach-paradise': {
      id: 'peach-paradise',
      name: 'Peach Paradise',
      category: 'Iced Teas',
      price: 890,
      image: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=700&q=80',
      description: 'Velvety white peach nectar steeped with loose-leaf silver jasmine tea, effervescent bubbles, and organic crushed basil seeds.',
      botanicals: 'Silver Jasmine Pearl, White Peach, Organic Basil Seeds',
      temperature: 'Chilled 4°C • Lightly Sparkling'
    },
    'blueberry-breeze': {
      id: 'blueberry-breeze',
      name: 'Blueberry Breeze',
      category: 'Fresh Juices',
      price: 920,
      image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=700&q=80',
      description: 'Wild antioxidant blueberries cold-pressed with French lavender mist, zesty Meyer lemon drops, and pure spring water.',
      botanicals: 'Wild Blueberries, French Lavender, Meyer Lemon',
      temperature: 'Chilled 2°C • Cold-Pressed Living Enzymes'
    },
    'citrus-sunrise': {
      id: 'citrus-sunrise',
      name: 'Citrus Sunrise',
      category: 'Fresh Juices',
      price: 790,
      image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=700&q=80',
      description: 'Freshly squeezed blood orange, golden turmeric root, ginger tonic & crisp green apple.',
      botanicals: 'Blood Orange, Ginger Root, Golden Turmeric, Green Apple',
      temperature: 'Chilled 2°C • 100% Raw Juice'
    },
    'jasmine-honeydew': {
      id: 'jasmine-honeydew',
      name: 'Jasmine Honeydew Cooler',
      category: 'Iced Teas',
      price: 860,
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=700&q=80',
      description: 'Floral dragon pearl green tea infused with ripe honeydew melon and fresh lemongrass.',
      botanicals: 'Dragon Pearl Green Tea, Sweet Honeydew, Lemongrass',
      temperature: 'Chilled 4°C • Slow Steeped 18hrs'
    },
    'rose-coldbrew': {
      id: 'rose-coldbrew',
      name: 'Rose Petal Cold Brew',
      category: 'Matcha & Coffee',
      price: 980,
      image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=700&q=80',
      description: '24-hour slow steep Ethiopian single-origin coffee with Damascus rose hydrosol & almond foam.',
      botanicals: 'Damascus Rose Water, Ethiopian Arabica, Almond Blossom',
      temperature: 'Chilled 3°C • Nitro Infused'
    },
    'mango-glow': {
      id: 'mango-glow',
      name: 'Mango Golden Glow',
      category: 'Smoothies',
      price: 870,
      image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=700&q=80',
      description: 'Sindhri mangoes blended with coconut cream, golden flax, chia seeds and passionfruit puree.',
      botanicals: 'Sindhri Orchard Mango, Coconut Cream, Golden Chia',
      temperature: 'Chilled 0°C • Silk Puree Smoothie'
    },
    'passionfruit-dream': {
      id: 'passionfruit-dream',
      name: 'Passionfruit Dream',
      category: 'Smoothies',
      price: 940,
      image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=700&q=80',
      description: 'Tart Brazilian passionfruit, frozen banana, coconut milk, and nourishing blue spirulina.',
      botanicals: 'Passionfruit, Blue Spirulina, Young Coconut Milk',
      temperature: 'Chilled 0°C • Thick Velvet Blend'
    },
    'hibiscus-fizz': {
      id: 'hibiscus-fizz',
      name: 'Hibiscus Mint Fizz',
      category: 'Sparkling Drinks',
      price: 820,
      image: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=700&q=80',
      description: 'Crisp sparkling mineral tonic infused with Egyptian hibiscus blooms, spearmint & lime.',
      botanicals: 'Egyptian Hibiscus, Garden Spearmint, Mineral Tonic',
      temperature: 'Chilled 3°C • Bubbly & Floral'
    },
    'lavender-spritz': {
      id: 'lavender-spritz',
      name: 'Lavender White Tea Spritz',
      category: 'Seasonal Specials',
      price: 880,
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80',
      description: 'Fujian silver needle white tea with botanical lavender blossom essence and effervescent bubbles.',
      botanicals: 'Silver Needle White Tea, English Lavender, Lime Zest',
      temperature: 'Chilled 3°C • Sparkling Harvest'
    },
    'pomegranate-elixir': {
      id: 'pomegranate-elixir',
      name: 'Ruby Pomegranate Elixir',
      category: 'Fresh Juices',
      price: 910,
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80',
      description: 'Kandahari ruby pomegranate, cold-extracted with rosemary essence and a hint of sour cherry.',
      botanicals: 'Kandahari Pomegranate, Wild Sour Cherry, Fresh Rosemary',
      temperature: 'Chilled 2°C • High Polyphenol Cold Extract'
    },
    'bloom-collection': {
      id: 'bloom-collection',
      name: 'The Bloom Collection (Strawberry & Peach)',
      category: 'Seasonal Specials',
      price: 890,
      image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=85',
      description: 'An artisan harmony of garden-fresh wild strawberries and luscious white peach nectar, accented with cold-steeped elderflower and delicate effervescence.',
      botanicals: 'White Peach Nectar, Alpine Strawberry, Elderflower, Rose Mist',
      temperature: 'Chilled 3°C • Limited Release Keepsake Bottle'
    }
  };

  // ==========================================================================
  // 2. SHOPPING CART STATE MANAGEMENT (With LocalStorage)
  // ==========================================================================
  const CART_STORAGE_KEY = 'sip_and_bloom_cart';
  const FREE_SHIPPING_THRESHOLD = 2500;
  const STANDARD_SHIPPING_FEE = 250;

  let cart = [];
  let appliedPromoDiscount = 0; // percentage e.g. 0.10 for 10%

  // Load cart from LocalStorage
  try {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      cart = JSON.parse(savedCart);
    }
  } catch (err) {
    console.warn('LocalStorage unavailable for cart persistence', err);
    cart = [];
  }

  function saveCart() {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (err) {
      console.warn('Failed to save cart to localStorage', err);
    }
  }

  // DOM Elements - Cart
  const cartOpenBtn = document.getElementById('cartOpenBtn');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartBackdrop = document.getElementById('cartBackdrop');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartCountBadge = document.getElementById('cartCountBadge');
  const mobileCartCount = document.getElementById('mobileCartCount');
  const cartHeaderCount = document.getElementById('cartHeaderCount');
  const cartItemsList = document.getElementById('cartItemsList');
  const cartSubtotalEl = document.getElementById('cartSubtotal');
  const cartDiscountRow = document.getElementById('cartDiscountRow');
  const cartDiscountEl = document.getElementById('cartDiscount');
  const cartShippingCostEl = document.getElementById('cartShippingCost');
  const cartTotalEl = document.getElementById('cartTotal');
  const shippingMsgEl = document.getElementById('shippingMsg');
  const shippingProgressFill = document.getElementById('shippingProgressFill');
  const promoInput = document.getElementById('promoInput');
  const applyPromoBtn = document.getElementById('applyPromoBtn');
  const promoFeedback = document.getElementById('promoFeedback');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const mobileBagOpenBtn = document.getElementById('mobileBagOpenBtn');

  // Open & Close Cart
  function openCart() {
    cartDrawer.classList.add('active');
    cartBackdrop.classList.add('active');
    cartDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    cartDrawer.classList.remove('active');
    cartBackdrop.classList.remove('active');
    cartDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (cartOpenBtn) cartOpenBtn.addEventListener('click', openCart);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
  if (cartBackdrop) cartBackdrop.addEventListener('click', closeCart);
  if (mobileBagOpenBtn) {
    mobileBagOpenBtn.addEventListener('click', () => {
      closeMobileDrawer();
      openCart();
    });
  }

  // Render & Update Cart
  function updateCartUI() {
    // 1. Calculate Totals
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // 2. Badges & Counts
    if (cartCountBadge) {
      cartCountBadge.textContent = totalItems;
      cartCountBadge.classList.remove('bounce');
      void cartCountBadge.offsetWidth; // trigger reflow
      cartCountBadge.classList.add('bounce');
    }
    if (mobileCartCount) mobileCartCount.textContent = totalItems;
    if (cartHeaderCount) cartHeaderCount.textContent = `(${totalItems} item${totalItems === 1 ? '' : 's'})`;

    // 3. Free Shipping Progress Bar
    if (shippingProgressFill && shippingMsgEl) {
      if (subtotal === 0) {
        shippingProgressFill.style.width = '0%';
        shippingMsgEl.innerHTML = `Add <strong>Rs. ${FREE_SHIPPING_THRESHOLD.toLocaleString()}</strong> more for Free Chilled Delivery!`;
      } else if (subtotal >= FREE_SHIPPING_THRESHOLD) {
        shippingProgressFill.style.width = '100%';
        shippingMsgEl.innerHTML = `🎉 <strong>Congratulations!</strong> You've unlocked Free Chilled Delivery!`;
      } else {
        const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
        const percent = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
        shippingProgressFill.style.width = `${percent}%`;
        shippingMsgEl.innerHTML = `Add <strong>Rs. ${remaining.toLocaleString()}</strong> more for Free Chilled Delivery!`;
      }
    }

    // 4. Items List Rendering
    if (cartItemsList) {
      if (cart.length === 0) {
        cartItemsList.innerHTML = `
          <div class="cart-empty-state">
            <div class="cart-empty-icon">🌸</div>
            <h4 class="cart-empty-title">Your Bag is Empty</h4>
            <p class="cart-empty-desc">Your fresh botanical journey awaits. Discover our artisan iced blends and sparkling tonics.</p>
            <button type="button" class="btn btn-primary" id="startShoppingBtn">
              Explore Our Drinks
            </button>
          </div>
        `;
        const startShoppingBtn = document.getElementById('startShoppingBtn');
        if (startShoppingBtn) {
          startShoppingBtn.addEventListener('click', () => {
            closeCart();
            const drinksSec = document.getElementById('drinks');
            if (drinksSec) drinksSec.scrollIntoView({ behavior: 'smooth' });
          });
        }
      } else {
        cartItemsList.innerHTML = cart.map(item => `
          <div class="cart-item" data-cart-id="${item.id}">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img" loading="lazy">
            <div class="cart-item-details">
              <div>
                <h4 class="cart-item-name">${item.name}</h4>
                <div class="cart-item-price">Rs. ${item.price.toLocaleString()}</div>
              </div>
              <div class="cart-item-controls">
                <div class="qty-counter">
                  <button type="button" class="qty-btn" data-action="decrement" data-id="${item.id}" aria-label="Decrease quantity">-</button>
                  <span class="qty-val">${item.quantity}</span>
                  <button type="button" class="qty-btn" data-action="increment" data-id="${item.id}" aria-label="Increase quantity">+</button>
                </div>
                <button type="button" class="cart-item-remove" data-action="remove" data-id="${item.id}">Remove</button>
              </div>
            </div>
          </div>
        `).join('');
      }
    }

    // 5. Discount, Shipping & Grand Total
    const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0;
    const shippingFee = (subtotal === 0 || isFreeShipping) ? 0 : STANDARD_SHIPPING_FEE;
    const discountAmount = Math.round(subtotal * appliedPromoDiscount);
    const grandTotal = Math.max(0, subtotal - discountAmount + shippingFee);

    if (cartSubtotalEl) cartSubtotalEl.textContent = `Rs. ${subtotal.toLocaleString()}`;
    
    if (cartDiscountRow && cartDiscountEl) {
      if (appliedPromoDiscount > 0 && subtotal > 0) {
        cartDiscountRow.style.display = 'flex';
        cartDiscountEl.textContent = `- Rs. ${discountAmount.toLocaleString()}`;
      } else {
        cartDiscountRow.style.display = 'none';
      }
    }

    if (cartShippingCostEl) {
      cartShippingCostEl.textContent = shippingFee === 0 ? 'FREE' : `Rs. ${shippingFee}`;
    }

    if (cartTotalEl) cartTotalEl.textContent = `Rs. ${grandTotal.toLocaleString()}`;

    // Enable/disable checkout button
    if (checkoutBtn) {
      checkoutBtn.disabled = cart.length === 0;
      checkoutBtn.style.opacity = cart.length === 0 ? '0.5' : '1';
      checkoutBtn.style.pointerEvents = cart.length === 0 ? 'none' : 'auto';
    }

    saveCart();
  }

  // Add Item to Cart
  function addToCart(drinkId, customName, customPrice, customImg, qtyToAdd = 1, buttonElement = null) {
    const existingIndex = cart.findIndex(item => item.id === drinkId);

    if (existingIndex > -1) {
      cart[existingIndex].quantity += qtyToAdd;
    } else {
      const drinkData = DRINKS_DATA[drinkId] || {};
      cart.push({
        id: drinkId,
        name: customName || drinkData.name || 'Botanical Drink',
        price: parseInt(customPrice || drinkData.price || 850, 10),
        image: customImg || drinkData.image || 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=700&q=80',
        quantity: qtyToAdd
      });
    }

    updateCartUI();
    const itemName = customName || (DRINKS_DATA[drinkId] && DRINKS_DATA[drinkId].name) || 'Drink';
    showToast(`🌸 Added "${itemName}" to your bag!`);

    // Tactile button confirmation animation
    if (buttonElement) {
      const originalText = buttonElement.innerHTML;
      buttonElement.classList.add('btn-added');
      buttonElement.innerHTML = `<span>Added ✓</span>`;
      setTimeout(() => {
        buttonElement.classList.remove('btn-added');
        buttonElement.innerHTML = originalText;
      }, 1200);
    }
  }

  // Handle Cart Item Actions (Increment, Decrement, Remove)
  if (cartItemsList) {
    cartItemsList.addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (!btn) return;

      const action = btn.dataset.action;
      const itemId = btn.dataset.id;
      if (!action || !itemId) return;

      const itemIndex = cart.findIndex(i => i.id === itemId);
      if (itemIndex === -1) return;

      if (action === 'increment') {
        cart[itemIndex].quantity += 1;
      } else if (action === 'decrement') {
        if (cart[itemIndex].quantity > 1) {
          cart[itemIndex].quantity -= 1;
        } else {
          cart.splice(itemIndex, 1);
        }
      } else if (action === 'remove') {
        cart.splice(itemIndex, 1);
      }

      updateCartUI();
    });
  }

  // Promo Code Validation
  if (applyPromoBtn && promoInput) {
    applyPromoBtn.addEventListener('click', () => {
      const code = promoInput.value.trim().toUpperCase();
      if (!code) {
        setPromoFeedback('Please enter a promo code.', false);
        return;
      }

      if (code === 'BLOOM10' || code === 'BLOOM15') {
        appliedPromoDiscount = code === 'BLOOM15' ? 0.15 : 0.10;
        setPromoFeedback(`Code applied! ${code === 'BLOOM15' ? '15%' : '10%'} discount activated.`, true);
        updateCartUI();
      } else {
        appliedPromoDiscount = 0;
        setPromoFeedback('Invalid code. Try "BLOOM10".', false);
        updateCartUI();
      }
    });
  }

  function setPromoFeedback(msg, isSuccess) {
    if (!promoFeedback) return;
    promoFeedback.textContent = msg;
    promoFeedback.style.color = isSuccess ? '#2e6938' : '#9d2e2e';
  }

  // ==========================================================================
  // 3. CHECKOUT SIMULATION MODAL
  // ==========================================================================
  const checkoutModal = document.getElementById('checkoutModal');
  const checkoutBackdrop = document.getElementById('checkoutBackdrop');
  const checkoutModalClose = document.getElementById('checkoutModalClose');
  const orderNumberEl = document.getElementById('orderNumber');
  const orderReceiptSummary = document.getElementById('orderReceiptSummary');
  const checkoutContinueShopping = document.getElementById('checkoutContinueShopping');

  function openCheckoutModal() {
    if (cart.length === 0) return;

    // Generate random 4-digit order number
    const randomOrderNum = Math.floor(1000 + Math.random() * 9000);
    if (orderNumberEl) orderNumberEl.textContent = randomOrderNum;

    // Render summary receipt
    if (orderReceiptSummary) {
      const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const discount = Math.round(subtotal * appliedPromoDiscount);
      const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
      const shipping = isFreeShipping ? 0 : STANDARD_SHIPPING_FEE;
      const grandTotal = Math.max(0, subtotal - discount + shipping);

      orderReceiptSummary.innerHTML = `
        <div style="margin-bottom: 0.8rem; font-weight: 600; color: var(--color-olive-dark);">
          Order Summary:
        </div>
        <ul style="margin-bottom: 1rem; border-bottom: 1px solid var(--color-border); padding-bottom: 0.8rem;">
          ${cart.map(i => `
            <li style="display: flex; justify-content: space-between; font-size: 0.88rem; margin-bottom: 0.35rem; color: var(--color-olive-soft);">
              <span>${i.name} &times; ${i.quantity}</span>
              <strong>Rs. ${(i.price * i.quantity).toLocaleString()}</strong>
            </li>
          `).join('')}
        </ul>
        <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 0.3rem;">
          <span>Subtotal:</span>
          <span>Rs. ${subtotal.toLocaleString()}</span>
        </div>
        ${discount > 0 ? `
          <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 0.3rem; color: #2e6938;">
            <span>Discount Applied:</span>
            <span>- Rs. ${discount.toLocaleString()}</span>
          </div>
        ` : ''}
        <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 0.3rem;">
          <span>Chilled Temperature Courier:</span>
          <span>${shipping === 0 ? 'FREE' : `Rs. ${shipping}`}</span>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 1.15rem; font-weight: 700; color: var(--color-olive-dark); border-top: 1px dashed var(--color-border); padding-top: 0.6rem; margin-top: 0.6rem;">
          <span>Paid Total:</span>
          <span>Rs. ${grandTotal.toLocaleString()}</span>
        </div>
      `;
    }

    closeCart();

    checkoutModal.classList.add('active');
    checkoutBackdrop.classList.add('active');
    checkoutModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Clear cart upon successful demonstration order
    cart = [];
    appliedPromoDiscount = 0;
    if (promoInput) promoInput.value = '';
    if (promoFeedback) promoFeedback.textContent = '';
    updateCartUI();
  }

  function closeCheckoutModal() {
    checkoutModal.classList.remove('active');
    checkoutBackdrop.classList.remove('active');
    checkoutModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (checkoutBtn) checkoutBtn.addEventListener('click', openCheckoutModal);
  if (checkoutModalClose) checkoutModalClose.addEventListener('click', closeCheckoutModal);
  if (checkoutBackdrop) checkoutBackdrop.addEventListener('click', closeCheckoutModal);
  if (checkoutContinueShopping) {
    checkoutContinueShopping.addEventListener('click', () => {
      closeCheckoutModal();
      const drinksSec = document.getElementById('drinks');
      if (drinksSec) drinksSec.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // ==========================================================================
  // 4. QUICK VIEW MODAL
  // ==========================================================================
  const quickViewModal = document.getElementById('quickViewModal');
  const quickViewBackdrop = document.getElementById('quickViewBackdrop');
  const quickViewCloseBtn = document.getElementById('quickViewCloseBtn');
  const qvImage = document.getElementById('qvImage');
  const qvCategory = document.getElementById('qvCategory');
  const qvTitle = document.getElementById('qvTitle');
  const qvPrice = document.getElementById('qvPrice');
  const qvDesc = document.getElementById('qvDesc');
  const qvBotanicals = document.getElementById('qvBotanicals');
  const qvTemp = document.getElementById('qvTemp');
  const qvQty = document.getElementById('qvQty');
  const qvDecBtn = document.getElementById('qvDecBtn');
  const qvIncBtn = document.getElementById('qvIncBtn');
  const qvAddBagBtn = document.getElementById('qvAddBagBtn');

  let currentQvDrink = null;

  function openQuickView(drinkId) {
    const drink = DRINKS_DATA[drinkId];
    if (!drink) return;

    currentQvDrink = drink;
    if (qvImage) {
      qvImage.src = drink.image;
      qvImage.alt = drink.name;
    }
    if (qvCategory) qvCategory.textContent = drink.category;
    if (qvTitle) qvTitle.textContent = drink.name;
    if (qvPrice) qvPrice.textContent = `Rs. ${drink.price.toLocaleString()}`;
    if (qvDesc) qvDesc.textContent = drink.description;
    if (qvBotanicals) qvBotanicals.textContent = drink.botanicals || 'Cold-Pressed Fruits & Natural Botanicals';
    if (qvTemp) qvTemp.textContent = drink.temperature || 'Chilled 3°C • Artisan Craft';
    if (qvQty) qvQty.value = 1;

    quickViewModal.classList.add('active');
    quickViewBackdrop.classList.add('active');
    quickViewModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeQuickView() {
    quickViewModal.classList.remove('active');
    quickViewBackdrop.classList.remove('active');
    quickViewModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    currentQvDrink = null;
  }

  if (quickViewCloseBtn) quickViewCloseBtn.addEventListener('click', closeQuickView);
  if (quickViewBackdrop) quickViewBackdrop.addEventListener('click', closeQuickView);

  if (qvDecBtn && qvQty) {
    qvDecBtn.addEventListener('click', () => {
      let val = parseInt(qvQty.value, 10) || 1;
      if (val > 1) qvQty.value = val - 1;
    });
  }

  if (qvIncBtn && qvQty) {
    qvIncBtn.addEventListener('click', () => {
      let val = parseInt(qvQty.value, 10) || 1;
      if (val < 24) qvQty.value = val + 1;
    });
  }

  if (qvAddBagBtn) {
    qvAddBagBtn.addEventListener('click', () => {
      if (!currentQvDrink) return;
      const qty = parseInt(qvQty ? qvQty.value : 1, 10) || 1;
      addToCart(currentQvDrink.id, currentQvDrink.name, currentQvDrink.price, currentQvDrink.image, qty, qvAddBagBtn);
      setTimeout(() => {
        closeQuickView();
      }, 500);
    });
  }

  // Delegated Click Listener for All Buttons
  document.addEventListener('click', (e) => {
    // Add to Cart button
    const addBtn = e.target.closest('[data-action="add-to-cart"]');
    if (addBtn) {
      const id = addBtn.dataset.id;
      const name = addBtn.dataset.name;
      const price = addBtn.dataset.price;
      const img = addBtn.dataset.img;
      addToCart(id, name, price, img, 1, addBtn);
      return;
    }

    // Quick View button
    const qvBtn = e.target.closest('[data-action="quickview"]');
    if (qvBtn) {
      const id = qvBtn.dataset.id;
      if (id) openQuickView(id);
      return;
    }

    // Wishlist Heart Toggle
    const wishBtn = e.target.closest('[data-action="toggle-wishlist"]');
    if (wishBtn) {
      const id = wishBtn.dataset.id;
      const drinkData = DRINKS_DATA[id] || {};
      const isActive = wishBtn.classList.toggle('active');
      if (isActive) {
        showToast(`💖 Added "${drinkData.name || 'Drink'}" to your favorites!`);
      } else {
        showToast(`Removed from your favorites.`);
      }
      return;
    }
  });

  // ==========================================================================
  // 5. INTERACTIVE CATEGORY FILTERING
  // ==========================================================================
  const filterTabs = document.querySelectorAll('.filter-tab');
  const catalogCards = document.querySelectorAll('.catalog-card');
  const filterCountAll = document.getElementById('filterCountAll');
  const catalogStatusText = document.getElementById('catalogStatusText');

  if (filterCountAll) {
    filterCountAll.textContent = catalogCards.length;
  }

  function filterDrinksByCategory(selectedCategory) {
    filterTabs.forEach(tab => {
      const tabCat = tab.dataset.category;
      const isSelected = (selectedCategory.toLowerCase() === 'all' && tabCat.toLowerCase() === 'all') ||
                         (tabCat.toLowerCase() === selectedCategory.toLowerCase());
      tab.classList.toggle('active', isSelected);
      tab.setAttribute('aria-selected', isSelected ? 'true' : 'false');
    });

    let visibleCount = 0;
    catalogCards.forEach(card => {
      const cardCategories = (card.dataset.category || '').toLowerCase();
      if (selectedCategory.toLowerCase() === 'all' || cardCategories.includes(selectedCategory.toLowerCase())) {
        card.classList.remove('hide');
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.classList.add('hide');
        card.style.display = 'none';
      }
    });

    if (catalogStatusText) {
      if (selectedCategory.toLowerCase() === 'all') {
        catalogStatusText.textContent = `Showing all 12 artisan botanical drinks`;
      } else {
        catalogStatusText.textContent = `Showing ${visibleCount} artisan blend${visibleCount === 1 ? '' : 's'} in ${selectedCategory}`;
      }
    }
  }

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.dataset.category;
      filterDrinksByCategory(category);
    });
  });

  // Click on Collection Cards -> Scroll to Drinks & Filter
  const collectionCards = document.querySelectorAll('.collection-card');
  collectionCards.forEach(colCard => {
    colCard.addEventListener('click', () => {
      const targetCat = colCard.dataset.filterTarget;
      if (targetCat) {
        filterDrinksByCategory(targetCat);
        const drinksSection = document.getElementById('drinks');
        if (drinksSection) {
          drinksSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Spotlight Seasonal Button
  const filterSeasonalBtn = document.getElementById('filterSeasonalBtn');
  if (filterSeasonalBtn) {
    filterSeasonalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      filterDrinksByCategory('Seasonal Specials');
      const drinksSection = document.getElementById('drinks');
      if (drinksSection) {
        drinksSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Footer Collection Filter Links
  const footerFilterLinks = document.querySelectorAll('[data-footer-filter]');
  footerFilterLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = link.dataset.footerFilter;
      if (cat) {
        filterDrinksByCategory(cat);
        const drinksSection = document.getElementById('drinks');
        if (drinksSection) {
          drinksSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // ==========================================================================
  // 6. MOBILE NAVIGATION DRAWER
  // ==========================================================================
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileDrawerOverlay = document.getElementById('mobileDrawerOverlay');
  const mobileDrawerClose = document.getElementById('mobileDrawerClose');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  function openMobileDrawer() {
    mobileNavDrawer.classList.add('active');
    mobileDrawerOverlay.classList.add('active');
    mobileNavDrawer.setAttribute('aria-hidden', 'false');
    mobileMenuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileDrawer() {
    mobileNavDrawer.classList.remove('active');
    mobileDrawerOverlay.classList.remove('active');
    mobileNavDrawer.setAttribute('aria-hidden', 'true');
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (mobileMenuToggle) mobileMenuToggle.addEventListener('click', openMobileDrawer);
  if (mobileDrawerClose) mobileDrawerClose.addEventListener('click', closeMobileDrawer);
  if (mobileDrawerOverlay) mobileDrawerOverlay.addEventListener('click', closeMobileDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileDrawer);
  });

  // ==========================================================================
  // 7. STICKY NAVBAR SCROLL STYLING & ACTIVE LINK HIGHLIGHTING
  // ==========================================================================
  const mainHeader = document.getElementById('mainHeader');
  const navLinks = document.querySelectorAll('.nav-desktop .nav-link');
  const sections = document.querySelectorAll('section[id], header[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Header shadow on scroll
    if (mainHeader) {
      if (scrollY > 40) {
        mainHeader.classList.add('scrolled');
      } else {
        mainHeader.classList.remove('scrolled');
      }
    }

    // Back to top button visibility
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Scroll spy active nav highlighting
    let currentId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${currentId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  }, { passive: true });

  // Back to Top Button Click
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ==========================================================================
  // 8. NEWSLETTER VALIDATION & SUBMISSION
  // ==========================================================================
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterEmail = document.getElementById('newsletterEmail');
  const newsletterFeedback = document.getElementById('newsletterFeedback');
  const subscribeBtn = document.getElementById('subscribeBtn');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterEmail.value.trim();

      // Email Regex check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email) {
        showNewsletterMessage('Please enter your email address to join.', 'error');
        return;
      }

      if (!emailRegex.test(email)) {
        showNewsletterMessage('Please provide a valid email format (e.g. name@domain.com).', 'error');
        return;
      }

      // Simulate Successful Subscription
      subscribeBtn.disabled = true;
      subscribeBtn.textContent = 'Joining...';

      setTimeout(() => {
        showNewsletterMessage('🌸 Welcome to the Bloom Circle! Check your inbox for your 15% discount code (BLOOM15).', 'success');
        newsletterForm.reset();
        subscribeBtn.disabled = false;
        subscribeBtn.textContent = 'Subscribed!';
        setTimeout(() => {
          subscribeBtn.textContent = 'Subscribe';
        }, 4000);
      }, 700);
    });
  }

  function showNewsletterMessage(msg, type) {
    if (!newsletterFeedback) return;
    newsletterFeedback.textContent = msg;
    newsletterFeedback.className = `form-message ${type}`;
  }

  // ==========================================================================
  // 9. TOAST NOTIFICATION UTILITY
  // ==========================================================================
  const toastContainer = document.getElementById('toastContainer');

  function showToast(message) {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 3000);
  }

  // ==========================================================================
  // 10. INTERSECTION OBSERVER SCROLL REVEAL ANIMATIONS
  // ==========================================================================
  const revealElements = document.querySelectorAll('.fade-in-up');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback if IntersectionObserver is not supported
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // ==========================================================================
  // 11. KEYBOARD ACCESSIBILITY (ESCAPE KEY DISMISSAL)
  // ==========================================================================
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (cartDrawer && cartDrawer.classList.contains('active')) closeCart();
      if (mobileNavDrawer && mobileNavDrawer.classList.contains('active')) closeMobileDrawer();
      if (quickViewModal && quickViewModal.classList.contains('active')) closeQuickView();
      if (checkoutModal && checkoutModal.classList.contains('active')) closeCheckoutModal();
    }
  });

  // ==========================================================================
  // INITIALIZE UI
  // ==========================================================================
  updateCartUI();

});