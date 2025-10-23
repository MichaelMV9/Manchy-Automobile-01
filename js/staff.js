import { supabase } from './supabase.js';

const staffGrid = document.getElementById('staffGrid');

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

async function loadStaff() {
  try {
    const { data, error } = await supabase
      .from('staff')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) throw error;

    if (!data || data.length === 0) {
      staffGrid.innerHTML = '<p class="loading">No team members found.</p>';
      return;
    }

    staffGrid.innerHTML = data.map(member => `
      <div class="staff-card">
        <img src="${member.photo_url || 'https://via.placeholder.com/300x300?text=' + encodeURIComponent(member.full_name)}"
             alt="${member.full_name}"
             class="staff-photo"
             loading="lazy">
        <div class="staff-info">
          <h3 class="staff-name">${member.full_name}</h3>
          <p class="staff-position">${member.position}</p>
          <p class="staff-email">
            <a href="mailto:${member.email}">${member.email}</a>
          </p>
        </div>
      </div>
    `).join('');
  } catch (error) {
    console.error('Error loading staff:', error);
    staffGrid.innerHTML = '<p class="loading">Unable to load team members. Please try again later.</p>';
  }
}

loadStaff();
