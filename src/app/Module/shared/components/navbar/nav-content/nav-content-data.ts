export const navigation = {
    categories: [
      {
        id: 'women',
        name: 'Women',
        featured: [
          {
            name: 'New Arrivals',
            href: '/',
            imageSrc: 'https://imgs.search.brave.com/3zgz3JxZt5_7IQ95yVBg5TWL99hhMuRK4WunFZmWUoE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZXZlcmxhbmUuY29t/L2Nkbi9zaG9wL2Zp/bGVzLzMwNDljMGZi/X2ZhYWMuanBnP3Y9/MTc1MzQxMTc4MyZ3/aWR0aD0yMDQ4',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Basic Tees',
            href: '/',
            imageSrc: 'https://imgs.search.brave.com/axqWbNFHpNkQrFzYO-8zF174qeqN39eK4U6e5bgS02Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wdXR0/aW5nbWV0b2dldGhl/ci5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTYvMTEvb2xp/dmV0ZWV3aGl0ZWpl/YW5zb3V0Zml0MDMt/NjgyeDEwMjQuanBn',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Tops', id:"top", href: `{women/clothing/tops}` },
              { name: 'Dresses', id:"women_dress", href: '#' },
              { name: 'Women Jeans', id: 'women_jeans' },
              { name: 'Lengha Choli', id: 'lengha_choli' },
              { name: 'Sweaters', id: 'sweater' },
              { name: 'T-Shirts', id: 't-shirt' },
              { name: 'Jackets', id: 'jacket' },
              { name: 'Gouns', id: 'gouns' },
              { name: 'Sarees', id: 'saree' },
              { name: 'Kurtas', id: 'kurtas' },
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Watches', id: 'watch' },
              { name: 'Wallets', id: 'wallet' },
              { name: 'Bags', id: 'bag' },
              { name: 'Sunglasses', id: 'sunglasse' },
              { name: 'Hats', id: 'hat' },
              { name: 'Belts', id: 'belt' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Full Nelson', id: '#' },
              { name: 'My Way', id: '#' },
              { name: 'Re-Arranged', id: '#' },
              { name: 'Counterfeit', id: '#' },
              { name: 'Significant Other', id: '#' },
            ],
          },
        ],
      },
      {
        id: 'men',
        name: 'Men',
        featured: [
          {
            name: 'New Arrivals',
            id: '#',
            imageSrc: 'https://imgs.search.brave.com/qzs07Z3FoVKs-ViUc_Px091GBRfxgDqBWvxDES88vNc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzE2/OTQvNzg2MS9maWxl/cy9JTUdfMDA0MF9m/MzUzYjcyMi00NDZm/LTRjZGMtOWFlMS05/Njk0Y2UyZGZkMzRf/NjAweDYwMC5qcGc_/dj0xNjc2NDcyOTA5',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            id: '#',
            imageSrc: 'https://imgs.search.brave.com/v1m7FEMp5rI7xV3AigcBl1Kkvaef-kV9aH-G8X07qBA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGlwdG9wLmNhL2Nk/bi9zaG9wL2ZpbGVz/L1RULTUyMTItMTkt/NjE1M193aGl0ZV9i/XzIwNDh4MjA0OC5q/cGc_dj0xNzQyMjE5/OTI5',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Mens Kurtas', id: 'mens_kurta' },
              { name: 'Shirt', id: 'shirt' },
              { name: 'Men Jeans', id: 'men_jeans' },
              { name: 'Sweaters', id: '#' },
              { name: 'T-Shirts', id: 't-shirt' },
              { name: 'Jackets', id: '#' },
              { name: 'Activewear', id: '#' },
              
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Watches', id: '#' },
              { name: 'Wallets', id: '#' },
              { name: 'Bags', id: '#' },
              { name: 'Sunglasses', id: '#' },
              { name: 'Hats', id: '#' },
              { name: 'Belts', id: '#' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Re-Arranged', id: '#' },
              { name: 'Counterfeit', id: '#' },
              { name: 'Full Nelson', id: '#' },
              { name: 'My Way', id: '#' },
            ],
          },
        ],
      },
    ],
    pages: [
      { name: 'Company', id: '/' },
      { name: 'Stores', id: '/' },
    ],
  }
