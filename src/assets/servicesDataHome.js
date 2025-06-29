import magnifImage from './tokyo-magnifier-web-search-with-elements 2.png';
import browserImage from './tokyo-browser-window-with-emoticon-likes-and-stars-around 2.png';
import windowsImage from './tokyo-many-browser-windows-with-different-information 1.png';
import messageImage from './tokyo-sending-messages-from-one-place-to-another 1.png';
import selectImage from './tokyo-selecting-a-value-in-the-browser-window 1.png';
import volumetricImage from './tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.png';
const servicesData = [
    {
      id: 1,
      titleLines: ['Search engine', 'optimization'],
      bgClass:    'grey',
      titleColor: 'green',
      textColor:  'blacktext',
      iconColor:  'fillblack',
      imgSrc:     magnifImage,
      alt:        'Magnifying glass and SEO-related icons',
      imgClass:   'servicesimg',
    },
    {
      id: 2,
      titleLines: ['Pay-per-click', 'advertising'],
      bgClass:    'green',
      titleColor: 'white',
      textColor:  'blacktext',
      iconColor:  'fillblack',
      imgSrc:     selectImage,
      alt:        'Cursor selecting a PPC ad',
      imgClass:   'servicesimg',
    },
    {
      id: 3,
      titleLines: ['Social Media', 'Marketing'],
      bgClass:    'black',
      titleColor: 'white',
      textColor:  'whitetext',
      iconColor:  'fillgreen',
      imgSrc:     browserImage,
      alt:        'Browser window with social-media icons',
      imgClass:   'servicesimg',
    },
    {
      id: 4,
      titleLines: ['Email', 'Marketing'],
      bgClass:    'grey',
      titleColor: 'green',
      textColor:  'blacktext',
      iconColor:  'fillgreen',
      imgSrc:     messageImage,
      alt:        'Envelope representing an email campaign',
      imgClass:   'servicesimgfixed',
      fontLink:   'https://fonts.google.com/specimen/Space+Grotesk',
    },
    {
      id: 5,
      titleLines: ['Content', 'Creation'],
      bgClass:    'green',
      titleColor: 'white',
      textColor:  'blacktext',
      iconColor:  'fillblack',
      imgSrc:     windowsImage,
      alt:        'Windows illustrating multimedia content',
      imgClass:   'servicesimg',
    },
    {
      id: 6,
      titleLines: ['Analytics and', 'Tracking'],
      bgClass:    'black',
      titleColor: 'green',
      textColor:  'whitetext',
      iconColor:  'fillgreen',
      imgSrc:     volumetricImage,
      alt:        'Analytics dashboard with charts and metrics',
      imgClass:   'servicesimg',
    },
  ];
  
  export default servicesData;