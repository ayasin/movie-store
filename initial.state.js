module.exports = {
  members: [
    {
      name: 'Amir',
      checkedOut: [],
    },
    {
      name: 'Andy',
      checkedOut: [],
    },
    {
      name: 'MikeN',
      checkedOut: [],
    },
    {
      name: 'MikeS',
      checkedOut: [],
    },
    {
      name: 'Soarbh',
      checkedOut: [],
    },
    {
      name: 'Tai',
      checkedOut: [],
    },
  ],
  movies: [
    {
      name: 'Die Hard',
      description: 'Great christmas movie',
      image: 'http://203.144.224.125/dvdcover/Gang47/830341_f.jpg',
      mpaaRating: 'R',
      userRating: 5,
      total: 10,
      inStock: 10,
      reviews: [
        {
          member: 'Amir',
          rating: 5,
          text: 'I watch this movie every christmas.'
        }
      ]
    },
    {
      name: 'The Notebook',
      description: 'Great way to expreience regret for not choosing a better movie',
      image: 'http://gobooksparks.com/wp-content/uploads/2013/05/The-Notebook-Cover.jpg',
      mpaaRating: 'R',
      userRating: 1,
      total: 10,
      inStock: 10,
      reviews: []
    },
  ],
};
