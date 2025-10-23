import { supabase } from './supabase.js';

let allCars = [];
let filteredCars = [];

const makeFilter = document.getElementById('makeFilter');
const modelFilter = document.getElementById('modelFilter');
const yearFilter = document.getElementById('yearFilter');
const conditionFilter = document.getElementById('conditionFilter');
const minPrice = document.getElementById('minPrice');
const maxPrice = document.getElementById('maxPrice');
const maxMileage = document.getElementById('maxMileage');
const resetFilters = document.getElementById('resetFilters');
const searchButton = document.getElementById('searchButton');
const carsGrid = document.getElementById('carsGrid');
const resultsCount = document.getElementById('resultsCount');
const carModal = document.getElementById('carModal');
const modalBody = document.getElementById('modalBody');

const chatButton = document.querySelector('.chat-button');
const chatWidget = document.getElementById('chatWidget');
const chatClose = document.getElementById('chatClose');

if (chatButton) {
  chatButton.addEventListener('click', () => {
    chatWidget.classList.toggle('active');
  });
}

if (chatClose) {
  chatClose.addEventListener('click', () => {
    chatWidget.classList.remove('active');
  });
}

const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

async function loadCars() {
  try {
    const { data, error } = await supabase
      .from('cars')
      .select('*')
      .eq('available', true)
      .order('created_at', { ascending: false });

    if (error) throw error;

    allCars = data || [];
    filteredCars = [...allCars];
    populateFilters();
    displayCars();
  } catch (error) {
    console.error('Error loading cars:', error);
    carsGrid.innerHTML = '<p class="loading">Unable to load vehicles. Please try again later.</p>';
  }
}

function populateFilters() {
  const makes = [...new Set(allCars.map(car => car.make))].sort();
  const models = [...new Set(allCars.map(car => car.model))].sort();
  const years = [...new Set(allCars.map(car => car.year))].sort((a, b) => b - a);

  makeFilter.innerHTML = '<option value="">All Makes</option>';
  makes.forEach(make => {
    const option = document.createElement('option');
    option.value = make;
    option.textContent = make;
    makeFilter.appendChild(option);
  });

  modelFilter.innerHTML = '<option value="">All Models</option>';
  models.forEach(model => {
    const option = document.createElement('option');
    option.value = model;
    option.textContent = model;
    modelFilter.appendChild(option);
  });

  yearFilter.innerHTML = '<option value="">All Years</option>';
  years.forEach(year => {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    yearFilter.appendChild(option);
  });
}

function applyFilters() {
  filteredCars = allCars.filter(car => {
    const matchMake = !makeFilter.value || car.make === makeFilter.value;
    const matchModel = !modelFilter.value || car.model === modelFilter.value;
    const matchYear = !yearFilter.value || car.year === parseInt(yearFilter.value);
    const matchCondition = !conditionFilter.value || car.condition === conditionFilter.value;
    const matchMinPrice = !minPrice.value || car.price >= parseFloat(minPrice.value);
    const matchMaxPrice = !maxPrice.value || car.price <= parseFloat(maxPrice.value);
    const matchMaxMileage = !maxMileage.value || car.mileage <= parseInt(maxMileage.value);

    return matchMake && matchModel && matchYear && matchCondition &&
           matchMinPrice && matchMaxPrice && matchMaxMileage;
  });

  displayCars();
}

function displayCars() {
  resultsCount.textContent = `${filteredCars.length} vehicle${filteredCars.length !== 1 ? 's' : ''} found`;

  if (filteredCars.length === 0) {
    carsGrid.innerHTML = '<p class="loading">No vehicles match your filters. Try adjusting your criteria.</p>';
    return;
  }

  carsGrid.innerHTML = filteredCars.map(car => {
    const images = Array.isArray(car.images) ? car.images : [];
    const firstImage = images[0] || 'https://via.placeholder.com/400x300?text=No+Image';
    const formattedPrice = new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(car.price);

    return `
      <div class="car-card" data-car-id="${car.id}">
        <img src="${firstImage}" alt="${car.make} ${car.model}" class="car-image" loading="lazy">
        <div class="car-details">
          <h3 class="car-title">${car.year} ${car.make} ${car.model}</h3>
          <p class="car-price">${formattedPrice}</p>
          <div class="car-info">
            <span>${car.condition}</span>
            <span>${car.mileage.toLocaleString()} km</span>
          </div>
          <p class="car-description">${car.description}</p>
          <div class="car-actions">
            <button class="btn-buy" data-car-id="${car.id}">Buy Now</button>
            <button class="btn-details" data-car-id="${car.id}">View Details</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  document.querySelectorAll('.btn-buy').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const carId = btn.getAttribute('data-car-id');
      initializePayment(carId);
    });
  });

  document.querySelectorAll('.btn-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const carId = btn.getAttribute('data-car-id');
      showCarDetails(carId);
    });
  });

  document.querySelectorAll('.car-card').forEach(card => {
    card.addEventListener('click', () => {
      const carId = card.getAttribute('data-car-id');
      showCarDetails(carId);
    });
  });
}

function showCarDetails(carId) {
  const car = allCars.find(c => c.id === carId);
  if (!car) return;

  const images = Array.isArray(car.images) ? car.images : [];
  const features = Array.isArray(car.features) ? car.features : [];
  const formattedPrice = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0
  }).format(car.price);

  modalBody.innerHTML = `
    <div class="modal-car-images">
      ${images.length > 0 ? images.map(img => `
        <img src="${img}" alt="${car.make} ${car.model}" class="modal-car-image">
      `).join('') : '<img src="https://via.placeholder.com/400x300?text=No+Image" alt="No image" class="modal-car-image">'}
    </div>
    <div class="modal-car-details">
      <h2 class="modal-car-title">${car.year} ${car.make} ${car.model}</h2>
      <p class="modal-car-price">${formattedPrice}</p>
      <div class="modal-car-specs">
        <div class="spec-item">
          <span class="spec-label">Year</span>
          <span class="spec-value">${car.year}</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">Condition</span>
          <span class="spec-value">${car.condition}</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">Mileage</span>
          <span class="spec-value">${car.mileage.toLocaleString()} km</span>
        </div>
      </div>
      <div class="modal-car-description">
        <h3>Description</h3>
        <p>${car.description}</p>
      </div>
      ${features.length > 0 ? `
        <div class="modal-car-features">
          <h3>Key Features</h3>
          <div class="features-list">
            ${features.map(feature => `<div class="feature-item">✓ ${feature}</div>`).join('')}
          </div>
        </div>
      ` : ''}
      <div class="modal-actions">
        <button class="btn btn-gold" onclick="window.initializePayment('${car.id}')">Buy Now</button>
        <a href="tel:07076470444" class="btn btn-secondary">Call Us</a>
        <a href="https://wa.me/2347076470444?text=I'm interested in the ${car.year} ${car.make} ${car.model}"
           class="btn btn-secondary" target="_blank" rel="noopener">WhatsApp</a>
      </div>
    </div>
  `;

  carModal.classList.add('active');
}

const modalClose = document.querySelector('.modal-close');
if (modalClose) {
  modalClose.addEventListener('click', () => {
    carModal.classList.remove('active');
  });
}

carModal.addEventListener('click', (e) => {
  if (e.target === carModal) {
    carModal.classList.remove('active');
  }
});

async function initializePayment(carId) {
  const car = allCars.find(c => c.id === carId);
  if (!car) return;

  const email = prompt('Please enter your email address:');
  if (!email || !email.includes('@')) {
    alert('Please provide a valid email address.');
    return;
  }

  const name = prompt('Please enter your full name:');
  if (!name) {
    alert('Please provide your name.');
    return;
  }

  const phone = prompt('Please enter your phone number:');
  if (!phone) {
    alert('Please provide your phone number.');
    return;
  }

  const handler = PaystackPop.setup({
    key: 'pk_test_placeholder',
    email: email,
    amount: car.price * 100,
    currency: 'NGN',
    ref: 'MA_' + Math.floor((Math.random() * 1000000000) + 1),
    metadata: {
      custom_fields: [
        {
          display_name: "Car",
          variable_name: "car",
          value: `${car.year} ${car.make} ${car.model}`
        },
        {
          display_name: "Customer Name",
          variable_name: "customer_name",
          value: name
        },
        {
          display_name: "Phone",
          variable_name: "phone",
          value: phone
        }
      ]
    },
    callback: async function(response) {
      try {
        const { error } = await supabase
          .from('orders')
          .insert([{
            car_id: car.id,
            customer_name: name,
            customer_email: email,
            customer_phone: phone,
            payment_reference: response.reference,
            payment_status: 'success',
            amount: car.price
          }]);

        if (error) throw error;

        alert('Payment successful! We will contact you shortly to finalize the purchase.');
        carModal.classList.remove('active');
      } catch (error) {
        console.error('Error saving order:', error);
        alert('Payment was successful but there was an error saving your order. Please contact us with reference: ' + response.reference);
      }
    },
    onClose: function() {
      alert('Payment window closed.');
    }
  });

  handler.openIframe();
}

window.initializePayment = initializePayment;

searchButton.addEventListener('click', applyFilters);

resetFilters.addEventListener('click', () => {
  makeFilter.value = '';
  modelFilter.value = '';
  yearFilter.value = '';
  conditionFilter.value = '';
  minPrice.value = '';
  maxPrice.value = '';
  maxMileage.value = '';
  filteredCars = [...allCars];
  displayCars();
});

loadCars();
