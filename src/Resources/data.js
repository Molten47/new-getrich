import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

const menus = {
  appetizers: [
    {
      title: 'Pierogi',
      price: '$22',
      tags: 'Dumplings | Potato & Cheese Filling | Sour Cream | Butter',
    },
    {
      title: 'Goulash',
      price: '$26',
      tags: 'Slow-Cooked Beef | Paprika | Vegetables | Bread',
    },
  ],
  mainCourses: [
    {
      title: 'Paella Valenciana',
      price: '$32',
      tags: 'Saffron Rice | Seafood | Chicken | Chorizo | Vegetables',
    },
    {
      title: 'Coq au Vin',
      price: '$28',
      tags: 'Braised Chicken | Red Wine | Mushrooms | Bacon | Herbs',
    },
    {
      title: 'Wiener Schnitzel',
      price: '$30',
      tags: 'Breaded Veal Cutlet | Lemon | Parsley | Potato Salad',
    },
    {
      title: 'Moussaka',
      price: '$27',
      tags: 'Eggplant | Minced Lamb | Bechamel Sauce | Tomato | Herbs',
    },
    {
      title: 'Margherita Pizza',
      price: '$24',
      tags: 'Tomato Sauce | Mozzarella | Basil | Olive Oil',
    },
    {
      title: 'Beef Stroganoff',
      price: '$29',
      tags: 'Beef | Mushrooms | Sour Cream | Paprika | Pasta',
    },
    {
      title: 'Boeuf Bourguignon',
      price: '$35',
      tags: 'Slow-Cooked Beef | Red Wine | Vegetables | Herbs',
    },
    {
      title: 'Risotto alla Milanese',
      price: '$31',
      tags: 'Arborio Rice | Saffron | Parmesan | White Wine',
    },
  ],
  desserts: [
    {
      title: 'Tiramisu',
      price: '$18',
      tags: 'Mascarpone | Espresso | Ladyfingers | Cocoa Powder',
    },
  ],
  beverages: [
    {
      title: 'Negroni',
      price: '$26',
      tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
    },
  ],
};





const gallerys = [
  {
    igImg: images.gallery04
  },
  {
    igImg:images.gallery03
  },
  {
    igImg:images.gallery02
  },
  {
    igImg:images.gallery01
  },

];

export default { wines, cocktails, awards, gallerys, menus};
