const orders = [
  {
    _id: '645f5c0a2143136895d1f477',
    user: '6459dee18d3f535cd6997f07',
    cart: [
      {
        brand: {
          name: 'Logitech',
          id: '6412eae89c2275a25d09541d',
        },
        category: {
          name: 'Headphones',
          id: '6419723bd7dc5155c04350d3',
        },
        _id: '641e887d05f9ee1717e1348a',
        sku: 'NTB7SDVX44',
        img: 'https://i.ibb.co/WVdTgR8/headphone-1.png',
        title: 'Headphones Wireless.',
        slug: 'headphones-wireless.',
        unit: '3pcs',
        imageURLs: [
          {
            color: {
              name: 'Purply Blue',
              clrCode: '#C1BAE4',
            },
            img: 'https://i.ibb.co/WVdTgR8/headphone-1.png',
            _id: '641e887d05f9ee1717e1348b',
          },
          {
            color: {
              name: 'Light Grey',
              clrCode: '#D8D7DD',
            },
            img: 'https://i.ibb.co/zh9x3Q0/headphone-2.png',
            _id: '641e887d05f9ee1717e1348c',
          },
          {
            color: {
              name: 'Baby Pink',
              clrCode: '#F3C0D1',
            },
            img: 'https://i.ibb.co/JBZk7sS/headphone-3.png',
            _id: '641e887d05f9ee1717e1348d',
          },
          {
            color: {
              name: 'Bluish Cyan',
              clrCode: '#64BFD1',
            },
            img: 'https://i.ibb.co/SrPq3r0/headphone-4.png',
            _id: '641e887d05f9ee1717e1348e',
          },
        ],
        parent: 'Headphones',
        children: 'Bluetooth Headphones',
        price: 120,
        discount: 14,
        quantity: 12,
        status: 'in-stock',
        reviews: [],
        productType: 'electronics',
        description:
          "Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra Evolve2 75 USB-A MS Teams Stereo Headset has replaced previous hybrid working standards. Industry-leading call quality thanks to top-notch audio engineering. With this intelligent headset, you can stay connected and productive from the first call of the day to the last train home. With an ergonomic earcup design, this headset invented a brand-new dual-foam technology. You will be comfortable from the first call to the last thanks to the re-engineered leatherette ear cushion design that allows for better airflow. We can provide exceptional noise isolation and the best all-day comfort by mixing firm foam for the outer with soft foam for the interior of the ear cushions. So that you may receive Active Noise-Cancellation (ANC) performance that is even greater in a headset that you can wear for whatever length you wish. The headset also offers MS Teams Certifications and other features like Busylight, Calls controls, Voice guiding, and Wireless range (ft): Up to 100 feet. Best-in-class. Boom The most recent Jabra Evolve2 75 USB-A MS Teams Stereo Headset offers professional-grade call performance that leads the industry, yet Evolve2 75 wins best-in-class. Additionally, this includes a redesigned microphone boom arm that is 33 percent shorter than the Evolve 75 and offers the industry-leading call performance for which Jabra headsets are known. It complies with Microsoft's Open Office criteria and is specially tuned for outstanding conversations in open-plan workplaces and other loud environments when the microphone boom arm is lowered in Performance Mode.",
        additionalInformation: [
          {
            key: 'Standing screen display size',
            value: 'Screen display Size 10.4',
          },
          {
            key: 'Colors',
            value: 'Purply Blue, Light Grey, Baby Pink, Bluish Cyan',
          },
          {
            key: 'Screen Resolution',
            value: '1920 x 1200 Pixels',
          },
          {
            key: 'Max Screen Resolution',
            value: '2000 x 1200',
          },
          {
            key: 'Processor',
            value: '2.3 GHz (128 GB)',
          },
          {
            key: 'Graphics Coprocessor',
            value: 'Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)',
          },
          {
            key: 'Wireless Type',
            value: '802.11a/b/g/n/ac, Bluetooth',
          },
        ],
        featured: false,
        sellCount: 1,
        __v: 0,
        createdAt: '2023-03-25T05:37:01.352Z',
        updatedAt: '2023-03-25T05:37:01.352Z',
        tags: ['Headphones', 'Bluetooth '],
        orderQuantity: 1,
      },
    ],
    name: 'Naim Ahmed',
    address: 'Dhaka',
    email: 'naim.themepure@gmail.com',
    contact: '3524654564',
    city: 'Sunamganj',
    country: 'bangladesh',
    zipCode: '1234',
    subTotal: 230,
    shippingCost: 60,
    discount: 0,
    totalAmount: 290,
    shippingOption: 'on',
    paymentMethod: 'COD',
    invoice: 1000,
    status: 'Pending',
  },
];

module.exports = orders;
