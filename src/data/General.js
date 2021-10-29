// import images
import logo from './img/logo.png'
import clickMint from './img/click-mint.png'
import roadmapimg from './img/raodmap-FF.jpg'

import story1 from './img/story-boarding-designs-FF-01.png'
import story2 from './img/story-boarding-designs-FF-02.png'
import story3 from './img/story-boarding-designs-FF-03.png'
import story4 from './img/story-boarding-designs-FF-04.png'
import story5 from './img/story-boarding-designs-FF-05.png'
import story6 from './img/story-boarding-designs-FF-06.png'
import story7 from './img/story-boarding-designs-FF-07.png'

import person1 from './img/person1.jpg'

import x000 from './img/x000.png'

import roadmapcard1 from './img/roadmapcard1.png'

import faq from './img/faq.png'

import mar1 from './img/marquee/mar1.png'
import mar2 from './img/marquee/mar2.png'
import mar3 from './img/marquee/mar3.png'
import mar4 from './img/marquee/mar4.png'
import mar5 from './img/marquee/mar5.png'
import mar6 from './img/marquee/mar6.png'
import mar7 from './img/marquee/mar7.png'
import mar8 from './img/marquee/mar8.png'
import mar9 from './img/marquee/mar9.png'
import mar10 from './img/marquee/mar10.png'
import mar11 from './img/marquee/mar11.png'
import mar12 from './img/marquee/mar12.png'
import mar13 from './img/marquee/mar13.png'
import mar14 from './img/marquee/mar14.png'
import mar15 from './img/marquee/mar15.png'
import mar16 from './img/marquee/mar16.png'
import mar17 from './img/marquee/mar17.png'
import mar18 from './img/marquee/mar18.png'
import mar19 from './img/marquee/mar19.png'
import mar20 from './img/marquee/mar20.png'



// general
export const WEBSITE_NAME = "Cool NFT"

// images
export const LOGO = logo;
export const CLICKMINT = clickMint;

// links navbar
export const MENU_LINKS = [
  { name: "Home", to: '#welcome' },
  { name: 'Story', to: '#story' },
  { name: 'Market', to: '#market' },
  { name: 'Team', to: '#team' },
  { name: 'Roadmap', to: '#roadmap' },
  { name: 'FAQ', to: '#faq' },
];

// story
export const STORY = {
  heading: 'STORY TIME',
  font: 'Poor Story', // fonts: https://fonts.google.com/
  content: [
    {
      image: story1,
      imgDirection: 'top', // top, left, right
      text: 'HALLO Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy '
    },
    {
      image: story2,
      imgDirection: 'left', // top, left, right
      text: ' Second Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy '
    },
    {
      image: story3,
      imgDirection: 'right', // top, left, right
      text: 'Third Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy '
    },
    {
      image: story4,
      imgDirection: 'left', // top, left, right
      text: 'Last Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy '
    },
    {
      image: story5,
      imgDirection: 'top', // top, left, right
      text: 'Last Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy '
    },
    {
      image: story6,
      imgDirection: 'top', // top, left, right
      text: 'Last Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy '
    },
    {
      image: story7,
      imgDirection: 'top', // top, left, right
      text: 'Last Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy '
    },

  ]
}

export const VIEWITEMS = {
  heading: 'VIEW THE ITEMS',
  text: 'Last Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
  buttonText: 'VIEW ON OPENSEA',
  link: 'http://www.google.de',
  imgs: [
    mar1, mar2, mar3, mar4, mar5, mar6, mar7, mar8, mar9, mar10, mar11, mar12, mar13, mar14, mar15, mar16, mar17, mar18, mar19, mar20
  ]
}

export const TEAM = {
  heading: 'TEAM',
  team: [
    {
      name: 'KING KARL',
      desc: 'The King',
      img: person1
    },
    {
      name: 'KING KARL',
      desc: 'The King',
      img: person1
    },
    {
      name: 'KING KARL',
      desc: 'The King',
      img: person1
    },
    {
      name: 'KING KARL',
      desc: 'The King',
      img: person1
    },
  ]
}

export const ROADMAP = {
  heading: '...our beautiful roadmap',
  image: roadmapimg,
  roadmap: [ // deleted in forntend
    {
      img: x000,
      heading: '2000 NFTs',
      desc: 'Last Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    },
    {
      img: x000,
      heading: '3000 NFTs',
      desc: 'Last Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    },
    {
      img: x000,
      heading: '4000 NFTs',
      desc: 'Last Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    },
    {
      img: x000,
      heading: '5000 NFTs',
      desc: 'Last Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    },
  ],
  cards: [
    {
      img: roadmapcard1,
      heading: 'OMG !',
      desc: 'Last Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
    },
    {
      img: roadmapcard1,
      heading: 'YEAH !!!',
      desc: 'Last Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
    },
    {
      img: roadmapcard1,
      heading: 'Hello there',
      desc: 'Last Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
    },

  ]
}

export const FAQS = {
  img: faq,
  heading: 'FAQ',
  content: [
    {
      q: 'Last Lorem ipsum dolor sit amet?',
      a: 'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
    },
    {
      q: 'Last Lorem ipsum dolor sit amet?',
      a: 'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
    },
    {
      q: 'Last Lorem ipsum dolor sit amet?',
      a: 'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
    },
    {
      q: 'Last Lorem ipsum dolor sit amet?',
      a: 'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
    },
    {
      q: 'Last Lorem ipsum dolor sit amet?',
      a: 'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
    },
    {
      q: 'Last Lorem ipsum dolor sit amet?',
      a: 'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
    },
  ]
}

export const FOOTER = {
  copyright: 'COPYRIGHT BY DINGELING',
  links: [
    {
      name: 'INTERFACE CONTRACT',
      to: 'http://www.google.de'
    },
    {
      name: 'IMPLEMENTATION CONTRACT',
      to: 'http://www.google.de'
    },
  ],
  socialmedia: {
    telegram: {
      show: true,
      link: 'http://www.google.de'
    },
    twitter: {
      show: true,
      link: 'http://www.google.de'
    },
    discord: {
      show: true,
      link: 'http://www.google.de'
    },
    youtube: {
      show: true,
      link: 'http://www.google.de'
    },
    tiktok: {
      show: true,
      link: 'http://www.google.de'
    },
    github: {
      show: true,
      link: 'http://www.google.de'
    },
    reddit: {
      show: true,
      link: 'http://www.google.de'
    },
    medium: {
      show: true,
      link: 'http://www.google.de'
    },


  }
}
