/* tslint:disable*/

export class InMemoryDataService {
  createDb() {
    const shows = [
      {
        id: 1,
        venueImage: '/assets/images/arlenesgrocery.jpg',
        venueImage_class: 'black',
        venueName: 'Arlenes Grocery',
        venueLink: 'http://www.arlenesgrocery.net/',
        venueAddress: '95 Stanton St. NYC',
        date: 'Saturday Sep 16'
      }, {
        id: 2,
        venueImage: '/assets/images/carra.png',
        venueImage_class: 'black',
        venueName: 'Carraghers',
        venueLink: 'http://carraghersnyc.com/',
        venueAddress: '228 W 39th St, New York, NY 10018',
        date: 'Sunday Oct 14'
      }
    ];
    const members = [
      {
        id: '1',
        image: '/assets/images/regan.jpg',
        image_class: '',
        name: 'Regan Glover',
        link: 'https://www.facebook.com/regan.glover',
        bio: 'Regan Glover hails from the land of Salt and Honey where she grew up listening to Country Western music. How the heck she became a lead singer in a rock band is anyone\'\s guess. She\'\s one of the founding members of The Dog\'\s Bollocks and definitely the prettiest. If you give her high quality dark chocolate, she will be your best friend; if you add a nice red wine, well...that\'\s probably why she became a lead singer in a rock band.'
      }, {
        id: '2',
        image: '/assets/images/james.jpg',
        image_class: '',
        name: 'James O\'\Brien',
        link: '',
        bio: ''
      }, {
        id: '3',
        image: '/assets/images/andy.jpg',
        image_class: '',
        name: 'Andrew Whitney',
        link: '',
        bio: ''
      }, {
        id: '4',
        image: '/assets/images/tommy.jpg',
        image_class: '',
        name: 'Tommy Dunn',
        link: 'https://www.facebook.com/tommmyldunn',
        bio: 'Born and rasied in Los Angeles. Wants to go to Mars. Boom.'
      }, {
        id: '5',
        image: '/assets/images/bart.jpg',
        image_class: '',
        name: 'Bart Mol',
        link: 'https://www.facebook.com/meelmol',
        bio: 'Born in Edam, the cheese-capital of the Netherlands. He\'\s the guy in the back with the guitar, occasionally busting out a solo but mostly thinking about turtle things.'
      }
    ];
    return { shows, members };
  }
}
