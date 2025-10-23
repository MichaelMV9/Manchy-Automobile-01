# Manchy Automobile - Setup Instructions

## Database Setup

The database schema has been created. To populate it with sample data:

1. Run the seed script:
   ```bash
   npm run seed
   ```

This will add:
- 5 staff members (CEO, Operations Manager, Sales Manager, Accountant, Personal Assistant)
- 20+ sample vehicles from various manufacturers

## Important Notes

### Paystack Integration

The showroom page includes Paystack integration for payments. Currently using a test key placeholder.

To enable real payments:
1. Get your Paystack public key from https://dashboard.paystack.com/settings/developer
2. Replace the placeholder key in `/js/showroom.js` line with your actual key:
   ```javascript
   key: 'YOUR_PAYSTACK_PUBLIC_KEY'
   ```

### Database Tables

The following tables have been created:
- **cars** - Vehicle inventory with images, features, pricing
- **staff** - Team member profiles
- **orders** - Purchase orders with payment tracking

All tables have Row Level Security enabled with appropriate public read access policies.

## Features

- Homepage with automatic image slideshow
- Car showroom with advanced filtering (make, model, year, price, mileage, condition)
- Paystack payment integration
- Staff profiles page
- About Us page with company information
- Contact page with Google Maps integration
- Mobile-responsive design
- Live chat widget
- Luxury black and gold color scheme
