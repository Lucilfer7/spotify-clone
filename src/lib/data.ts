import { colors } from "./colors";

export interface Playlist {
  id: string;
  albumId: number;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
}

const albumCovers = {
  DisraeliGears: "https://i.scdn.co/image/ab67616d00001e02f7d3ba2473d4452b83ba61c4",
  TheDoors: "https://i.scdn.co/image/ab67616d00001e025b96a8c5d61be8878452f8f1",
  TheDarkSideOfTheMoon: "https://i.scdn.co/image/ab67616d00001e02ea7caaff71dea1051d49b2fe",
  AbbeyRoad: "https://i.scdn.co/image/ab67616d00001e02dc30583ba717007b00cceb25",
  PhysicalGraffiti: "https://i.scdn.co/image/ab67616d00001e025273ac7ada6725bc36a2bcd0",
  CosmosFactory: "https://i.scdn.co/image/ab67616d00001e026e186edfb8fe3710fdc1f7c2",
  LedZeppelin: "https://i.scdn.co/image/ab67616d00001e02c77c73285cc5cb64d97e1b0f",
  WheelsOfFire: "https://i.scdn.co/image/ab67616d00001e025c7731f5acdcb2d02d78b7ee",
  WishYouWereHere: "https://i.scdn.co/image/ab67616d00001e021a84d71391df7469c5ab8539"
}


export const playlists: Playlist[] = [
  {
    id: '1',
    albumId: 1,
    title: 'Disraeli Gears',
    color: colors.red,
    cover: albumCovers.DisraeliGears,
    artists: ["Cream"],
  },
  {
    id: '2',
    albumId: 2,
    title: "The Doors",
    color: colors.yellow,
    cover: albumCovers.TheDoors,
    artists: ["The Doors"]
  },
  {
    id: '3',
    albumId: 3,
    title: "The Dark Side of the Moon",
    color: colors.gray,
    cover: albumCovers.TheDarkSideOfTheMoon,
    artists: ["Pink Floyd"]
  },
  {
    id: '4',
    albumId: 4,
    title: 'Abbey Road',
    color: colors.blue, 
    cover: albumCovers.AbbeyRoad,
    artists: ["The Beatles"],
  },
  {
    id: '5',
    albumId: 5,
    title: "Physical Graffiti",
    color: colors.yellow,
    cover: albumCovers.PhysicalGraffiti,
    artists: ["Led Zeppelin"]
  },
  {
    id: '6',
    albumId: 6,
    title: "Cosmo's Factory",
    color: colors.red,
    cover: albumCovers.CosmosFactory,
    artists: ["Creedence Clearwater Revival"]
  },
  {
    id: '7',
    albumId: 7,
    title: "Led Zeppelin",
    color: colors.red,
    cover: albumCovers.LedZeppelin,
    artists: ["Led Zeppelin"]
  },
  {
    id: '8',
    albumId: 8,
    title: "Wheels Of Fire",
    color: colors.gray,
    cover: albumCovers.WheelsOfFire,
    artists: ["Cream"]
  },
  {
    id: '9',
    albumId: 9,
    title: "Wish You Were Here",
    color: colors.teal,
    cover: albumCovers.WishYouWereHere,
    artists: ["Pink Floyd"]
  },
]

export const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more",
}))

export const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side"
}))

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
]

export interface Song {
  id: number;
  albumId: number;
  title: string;
  image: string
  artists: string[];
  album: string;
  duration: string;
}

export const songs: Song[] = [
  {
    "id": 1,
    "albumId": 1,
    "title": "Strange Brew",
    "image": albumCovers.DisraeliGears,
    "artists": ["Cream"],
    "album": "Disraeli Gears",
    "duration": "2:46"
  },
  {
    "id": 2,
    "albumId": 1,
    "title": "Sunshine Of Your Love",
    "image": albumCovers.DisraeliGears,
    "artists": ["Cream"],
    "album": "Disraeli Gears",
    "duration": "4:10"
  },
  {
    "id": 3,
    "albumId": 1,
    "title": "World Of Pain",
    "image": albumCovers.DisraeliGears,
    "artists": ["Cream"],
    "album": "Disraeli Gears",
    "duration": "3:02"
  },
  {
    "id": 4,
    "albumId": 1,
    "title": "Dance The Night Away",
    "image": albumCovers.DisraeliGears,
    "artists": ["Cream"],
    "album": "Disraeli Gears",
    "duration": "3:34"
  },
  {
    "id": 5,
    "albumId": 1,
    "title": "Blue Condition",
    "image": albumCovers.DisraeliGears,
    "artists": ["Cream"],
    "album": "Disraeli Gears",
    "duration": "3:29"
  },
  {
    "id": 6,
    "albumId": 1,
    "title": "Tales Of The Brave Ulysses",
    "image": albumCovers.DisraeliGears,
    "artists": ["Cream"],
    "album": "Disraeli Gears",
    "duration": "2:46"
  },
  {
    "id": 7,
    "albumId": 1,
    "title": "SWLABR",
    "image": albumCovers.DisraeliGears,
    "artists": ["Cream"],
    "album": "Disraeli Gears",
    "duration": "2:31"
  },
  {
    "id": 8,
    "albumId": 1,
    "title": "We're Going Wrong",
    "image": albumCovers.DisraeliGears,
    "artists": ["Cream"],
    "album": "Disraeli Gears",
    "duration": "3:27"
  },
  {
    "id": 9,
    "albumId": 1,
    "title": "Outside Woman Blues",
    "image": albumCovers.DisraeliGears,
    "artists": ["Cream"],
    "album": "Disraeli Gears",
    "duration": "2:24"
  },
  {
    "id": 10,
    "albumId": 1,
    "title": "Take It Back",
    "image": albumCovers.DisraeliGears,
    "artists": ["Cream"],
    "album": "Disraeli Gears",
    "duration": "3:05"
  },
  {
    "id": 11,
    "albumId": 1,
    "title": "Mother's Lament",
    "image": albumCovers.DisraeliGears,
    "artists": ["Cream"],
    "album": "Disraeli Gears",
    "duration": "1:47"
  },
  {
    "id": 1,
    "albumId": 2,
    "title": "Break on Through (To the Other Side)",
    "image": albumCovers.TheDoors,
    "artists": ["The Doors"],
    "album": "The Doors",
    "duration": "2:25"
  },
  {
    "id": 2,
    "albumId": 2,
    "title": "Soul Kitchen",
    "image": albumCovers.TheDoors,
    "artists": ["The Doors"],
    "album": "The Doors",
    "duration": "3:33"
  },
  {
    "id": 3,
    "albumId": 2,
    "title": "The Crystal Ship",
    "image": albumCovers.TheDoors,
    "artists": ["The Doors"],
    "album": "The Doors",
    "duration": "2:32"
  },
  {
    "id": 4,
    "albumId": 2,
    "title": "Twentieth Century Fox",
    "image": albumCovers.TheDoors,
    "artists": ["The Doors"],
    "album": "The Doors",
    "duration": "2:31"
  },
  {
    "id": 5,
    "albumId": 2,
    "title": "Alabama Song (Whisky Bar)",
    "image": albumCovers.TheDoors,
    "artists": ["The Doors"],
    "album": "The Doors",
    "duration": "3:17"
  },
  {
    "id": 6,
    "albumId": 2,
    "title": "Light My Fire",
    "image": albumCovers.TheDoors,
    "artists": ["The Doors"],
    "album": "The Doors",
    "duration": "7:09"
  },
  {
    "id": 7,
    "albumId": 2,
    "title": "Back Door Man",
    "image": albumCovers.TheDoors,
    "artists": ["The Doors"],
    "album": "The Doors",
    "duration": "3:32"
  },
  {
    "id": 8,
    "albumId": 2,
    "title": "I Looked at You",
    "image": albumCovers.TheDoors,
    "artists": ["The Doors"],
    "album": "The Doors",
    "duration": "2:20"
  },
  {
    "id": 9,
    "albumId": 2,
    "title": "End of the Night",
    "image": albumCovers.TheDoors,
    "artists": ["The Doors"],
    "album": "The Doors",
    "duration": "2:50"
  },
  {
    "id": 10,
    "albumId": 2,
    "title": "Take It as It Comes",
    "image": albumCovers.TheDoors,
    "artists": ["The Doors"],
    "album": "The Doors",
    "duration": "2:14"
  },
  {
    "id": 11,
    "albumId": 2,
    "title": "The End",
    "image": albumCovers.TheDoors,
    "artists": ["The Doors"],
    "album": "The Doors",
    "duration": "11:43"
  },
  {
    "id": 1,
    "albumId": 3,
    "title": "Speak to Me",
    "image": albumCovers.TheDarkSideOfTheMoon,
    "artists": ["Pink Floyd"],
    "album": "The Dark Side of the Moon",
    "duration": "1:05"
  },
  {
    "id": 2,
    "albumId": 3,
    "title": "Breathe (In the Air)",
    "image": albumCovers.TheDarkSideOfTheMoon,
    "artists": ["Pink Floyd"],
    "album": "The Dark Side of the Moon",
    "duration": "2:49"
  },
  {
    "id": 3,
    "albumId": 3,
    "title": "On the Run",
    "image": albumCovers.TheDarkSideOfTheMoon,
    "artists": ["Pink Floyd"],
    "album": "The Dark Side of the Moon",
    "duration": "3:45"
  },
  {
    "id": 4,
    "albumId": 3,
    "title": "Time",
    "image": albumCovers.TheDarkSideOfTheMoon,
    "artists": ["Pink Floyd"],
    "album": "The Dark Side of the Moon",
    "duration": "6:53"
  },
  {
    "id": 5,
    "albumId": 3,
    "title": "The Great Gig in the Sky",
    "image": albumCovers.TheDarkSideOfTheMoon,
    "artists": ["Pink Floyd"],
    "album": "The Dark Side of the Moon",
    "duration": "7:09"
  },
  {
    "id": 6,
    "albumId": 3,
    "title": "Money",
    "image": albumCovers.TheDarkSideOfTheMoon,
    "artists": ["Pink Floyd"],
    "album": "The Dark Side of the Moon",
    "duration": "6:22"
  },
  {
    "id": 7,
    "albumId": 3,
    "title": "Us and Them",
    "image": albumCovers.TheDarkSideOfTheMoon,
    "artists": ["Pink Floyd"],
    "album": "The Dark Side of the Moon",
    "duration": "7:49"
  },
  {
    "id": 8,
    "albumId": 3,
    "title": "Any Colour You Like",
    "image": albumCovers.TheDarkSideOfTheMoon,
    "artists": ["Pink Floyd"],
    "album": "The Dark Side of the Moon",
    "duration": "3:26"
  },
  {
    "id": 9,
    "albumId": 3,
    "title": "Brain Damage",
    "image": albumCovers.TheDarkSideOfTheMoon,
    "artists": ["Pink Floyd"],
    "album": "The Dark Side of the Moon",
    "duration": "3:46"
  },
  {
    "id": 10,
    "albumId": 3,
    "title": "Eclipse",
    "image": albumCovers.TheDarkSideOfTheMoon,
    "artists": ["Pink Floyd"],
    "album": "The Dark Side of the Moon",
    "duration": "2:10"
  },
  {
    "id": 1,
    "albumId": 4,
    "title": "Come Together",
    "image": albumCovers.AbbeyRoad,
    "artists": ["The Beatles"],
    "album": "Abbey Road",
    "duration": "4:19"
  },
  {
    "id": 2,
    "albumId": 4,
    "title": "Something",
    "image": albumCovers.AbbeyRoad,
    "artists": ["The Beatles"],
    "album": "Abbey Road",
    "duration": "3:02"
  },
  {
    "id": 3,
    "albumId": 4,
    "title": "Maxwell's Silver Hammer",
    "image": albumCovers.AbbeyRoad,
    "artists": ["The Beatles"],
    "album": "Abbey Road",
    "duration": "3:27"
  },
  {
    "id": 4,
    "albumId": 4,
    "title": "Oh! Darling",
    "image": albumCovers.AbbeyRoad,
    "artists": ["The Beatles"],
    "album": "Abbey Road",
    "duration": "3:27"
  },
  {
    "id": 5,
    "albumId": 4,
    "title": "Octopus's Garden",
    "image": albumCovers.AbbeyRoad,
    "artists": ["The Beatles"],
    "album": "Abbey Road",
    "duration": "2:50"
  },
  {
    "id": 6,
    "albumId": 4,
    "title": "I Want You (She's So Heavy",
    "image": albumCovers.AbbeyRoad,
    "artists": ["The Beatles"],
    "album": "Abbey Road",
    "duration": "7:47"
  },
  {
    "id": 7,
    "albumId": 4,
    "title": "Here Comes The Sun",
    "image": albumCovers.AbbeyRoad,
    "artists": ["The Beatles"],
    "album": "Abbey Road",
    "duration": "3:05"
  },
  {
    "id": 8,
    "albumId": 4,
    "title": "Because",
    "image": albumCovers.AbbeyRoad,
    "artists": ["The Beatles"],
    "album": "Abbey Road",
    "duration": "2:45"
  },
  {
    "id": 9,
    "albumId": 4,
    "title": "You Never Give Me Your Money",
    "image": albumCovers.AbbeyRoad,
    "artists": ["The Beatles"],
    "album": "Abbey Road",
    "duration": "4:02"
  },
  {
    "id": 10,
    "albumId": 4,
    "title": "Sun King",
    "image": albumCovers.AbbeyRoad,
    "artists": ["The Beatles"],
    "album": "Abbey Road",
    "duration": "2:26"
  },
  {
    "id": 11,
    "albumId": 4,
    "title": "Mean Mr Mustard",
    "image": albumCovers.AbbeyRoad,
    "artists": ["The Beatles"],
    "album": "Abbey Road",
    "duration": "1:06"
  },
  {
    "id": 12,
    "albumId": 4,
    "title": "Polythene Pam",
    "image": albumCovers.AbbeyRoad,
    "artists": ["The Beatles"],
    "album": "Abbey Road",
    "duration": "1:12"
  },
  {
    "id": 13,
    "albumId": 4,
    "title": "She Came Through The Bathroom Window",
    "image": albumCovers.AbbeyRoad,
    "artists": ["The Beatles"],
    "album": "Abbey Road",
    "duration": "1:58"
  },
  {
    "id": 14,
    "albumId": 4,
    "title": "Goldem Slumbers",
    "image": albumCovers.AbbeyRoad,
    "artists": ["The Beatles"],
    "album": "Abbey Road",
    "duration": "1:31"
  },
  {
    "id": 15,
    "albumId": 4,
    "title": "Carry That Weight",
    "image": albumCovers.AbbeyRoad,
    "artists": ["The Beatles"],
    "album": "Abbey Road",
    "duration": "1:36"
  },
  {
    "id": 16,
    "albumId": 4,
    "title": "The End",
    "image": albumCovers.AbbeyRoad,
    "artists": ["The Beatles"],
    "album": "Abbey Road",
    "duration": "2:21"
  },
  {
    "id": 17,
    "albumId": 4,
    "title": "Her Majesty",
    "image": albumCovers.AbbeyRoad,
    "artists": ["The Beatles"],
    "album": "Abbey Road",
    "duration": "0:25"
  },
  {
    "id": 1,
    "albumId": 5,
    "title": "Custard Pie",
    "image": albumCovers.PhysicalGraffiti,
    "artists": ["Led Zeppelin"],
    "album": "Physical Graffiti",
    "duration": "4:15"
  },
  {
    "id": 2,
    "albumId": 5,
    "title": "The Rover",
    "image": albumCovers.PhysicalGraffiti,
    "artists": ["Led Zeppelin"],
    "album": "Physical Graffiti",
    "duration": "5:39"
  },
  {
    "id": 3,
    "albumId": 5,
    "title": "In My Time of Dying",
    "image": albumCovers.PhysicalGraffiti,
    "artists": ["Led Zeppelin"],
    "album": "Physical Graffiti",
    "duration": "11:08"
  },
  {
    "id": 4,
    "albumId": 5,
    "title": "Houses of the Holy",
    "image": albumCovers.PhysicalGraffiti,
    "artists": ["Led Zeppelin"],
    "album": "Physical Graffiti",
    "duration": "4:04"
  },
  {
    "id": 5,
    "albumId": 5,
    "title": "Trampled Under Foot",
    "image": albumCovers.PhysicalGraffiti,
    "artists": ["Led Zeppelin"],
    "album": "Physical Graffiti",
    "duration": "5:36"
  },
  {
    "id": 6,
    "albumId": 5,
    "title": "Kashmir",
    "image": albumCovers.PhysicalGraffiti,
    "artists": ["Led Zeppelin"],
    "album": "Physical Graffiti",
    "duration": "8:37"
  },
  {
    "id": 7,
    "albumId": 5,
    "title": "In the Light",
    "image": albumCovers.PhysicalGraffiti,
    "artists": ["Led Zeppelin"],
    "album": "Physical Graffiti",
    "duration": "8:47"
  },
  {
    "id": 8,
    "albumId": 5,
    "title": "Bron-Yr Aur",
    "image": albumCovers.PhysicalGraffiti,
    "artists": ["Led Zeppelin"],
    "album": "Physical Graffiti",
    "duration": "2:06"
  },
  {
    "id": 9,
    "albumId": 5,
    "title": "Down by the Seaside",
    "image": albumCovers.PhysicalGraffiti,
    "artists": ["Led Zeppelin"],
    "album": "Physical Graffiti",
    "duration": "5:15"
  },
  {
    "id": 10,
    "albumId": 5,
    "title": "Ten Years Gone",
    "image": albumCovers.PhysicalGraffiti,
    "artists": ["Led Zeppelin"],
    "album": "Physical Graffiti",
    "duration": "6:34"
  },
  {
    "id": 11,
    "albumId": 5,
    "title": "Night Flight",
    "image": albumCovers.PhysicalGraffiti,
    "artists": ["Led Zeppelin"],
    "album": "Physical Graffiti",
    "duration": "3:38"
  },
  {
    "id": 12,
    "albumId": 5,
    "title": "The Wanton Song",
    "image": albumCovers.PhysicalGraffiti,
    "artists": ["Led Zeppelin"],
    "album": "Physical Graffiti",
    "duration": "4:08"
  },
  {
    "id": 13,
    "albumId": 5,
    "title": "Boogie with Stu",
    "image": albumCovers.PhysicalGraffiti,
    "artists": ["Led Zeppelin"],
    "album": "Physical Graffiti",
    "duration": "3:52"
  },
  {
    "id": 14,
    "albumId": 5,
    "title": "Black Country Woman",
    "image": albumCovers.PhysicalGraffiti,
    "artists": ["Led Zeppelin"],
    "album": "Physical Graffiti",
    "duration": "4:24"
  },
  {
    "id": 15,
    "albumId": 5,
    "title": "Sick Again",
    "image": albumCovers.PhysicalGraffiti,
    "artists": ["Led Zeppelin"],
    "album": "Physical Graffiti",
    "duration": "4:42"
  },
  {
    "id": 1,
    "albumId": 6,
    "title": "Ramble Tamble",
    "image": albumCovers.CosmosFactory,
    "artists": ["Creedence Clearwater Revival"],
    "album": "Cosmo's Factory",
    "duration": "7:11"
  },
  {
    "id": 2,
    "albumId": 6,
    "title": "Before You Accuse Me",
    "image": albumCovers.CosmosFactory,
    "artists": ["Creedence Clearwater Revival"],
    "album": "Cosmo's Factory",
    "duration": "3:27"
  },
  {
    "id": 3,
    "albumId": 6,
    "title": "Travelin' Band",
    "image": albumCovers.CosmosFactory,
    "artists": ["Creedence Clearwater Revival"],
    "album": "Cosmo's Factory",
    "duration": "2:08"
  },
  {
    "id": 4,
    "albumId": 6,
    "title": "Ooby Dobby",
    "image": albumCovers.CosmosFactory,
    "artists": ["Creedence Clearwater Revival"],
    "album": "Cosmo's Factory",
    "duration": "2:07"
  },
  {
    "id": 5,
    "albumId": 6,
    "title": "Lookin' Out My Back Door",
    "image": albumCovers.CosmosFactory,
    "artists": ["Creedence Clearwater Revival"],
    "album": "Cosmo's Factory",
    "duration": "2:32"
  },
  {
    "id": 6,
    "albumId": 6,
    "title": "Run Through The Jungle",
    "image": albumCovers.CosmosFactory,
    "artists": ["Creedence Clearwater Revival"],
    "album": "Cosmo's Factory",
    "duration": "3:05"
  },
  {
    "id": 7,
    "albumId": 6,
    "title": "Up Around The Bend",
    "image": albumCovers.CosmosFactory,
    "artists": ["Creedence Clearwater Revival"],
    "album": "Cosmo's Factory",
    "duration": "2:39"
  },
  {
    "id": 8,
    "albumId": 6,
    "title": "My Baby Left Me",
    "image": albumCovers.CosmosFactory,
    "artists": ["Creedence Clearwater Revival"],
    "album": "Cosmo's Factory",
    "duration": "2:19"
  },
  {
    "id": 9,
    "albumId": 6,
    "title": "Who'll Stop The Rain",
    "image": albumCovers.CosmosFactory,
    "artists": ["Creedence Clearwater Revival"],
    "album": "Cosmo's Factory",
    "duration": "2:27"
  },
  {
    "id": 10,
    "albumId": 6,
    "title": "I Heard It Through The Grapevine",
    "image": albumCovers.CosmosFactory,
    "artists": ["Creedence Clearwater Revival"],
    "album": "Cosmo's Factory",
    "duration": "11:07"
  },
  {
    "id": 11,
    "albumId": 6,
    "title": "Long As I Can See The Light",
    "image": albumCovers.CosmosFactory,
    "artists": ["Creedence Clearwater Revival"],
    "album": "Cosmo's Factory",
    "duration": "3:33"
  },
  {
    "id": 1,
    "albumId": 7,
    "title": "Good Times, Bad Times",
    "image": albumCovers.LedZeppelin,
    "artists": ["Led Zeppelin"],
    "album": "Led Zeppelin",
    "duration": "2:46"
  },
  {
    "id": 2,
    "albumId": 7,
    "title": "Babe I'm Gonna Leave You",
    "image": albumCovers.LedZeppelin,
    "artists": ["Led Zeppelin"],
    "album": "Led Zeppelin",
    "duration": "6:42"
  },
  {
    "id": 3,
    "albumId": 7,
    "title": "You Shook Me",
    "image": albumCovers.LedZeppelin,
    "artists": ["Led Zeppelin"],
    "album": "Led Zeppelin",
    "duration": "6:28"
  },
  {
    "id": 4,
    "albumId": 7,
    "title": "Dazed and Confused",
    "image": albumCovers.LedZeppelin,
    "artists": ["Led Zeppelin"],
    "album": "Led Zeppelin",
    "duration": "6:28"
  },
  {
    "id": 5,
    "albumId": 7,
    "title": "Your Time is Gonna Come",
    "image": albumCovers.LedZeppelin,
    "artists": ["Led Zeppelin"],
    "album": "Led Zeppelin",
    "duration": "4:34"
  },
  {
    "id": 6,
    "albumId": 7,
    "title": "Black Mountain Side",
    "image": albumCovers.LedZeppelin,
    "artists": ["Led Zeppelin"],
    "album": "Led Zeppelin",
    "duration": "2:12"
  },
  {
    "id": 7,
    "albumId": 7,
    "title": "Communication Breakdown",
    "image": albumCovers.LedZeppelin,
    "artists": ["Led Zeppelin"],
    "album": "Led Zeppelin",
    "duration": "2:30"
  },
  {
    "id": 8,
    "albumId": 7,
    "title": "I Can't Quit You Baby",
    "image": albumCovers.LedZeppelin,
    "artists": ["Led Zeppelin"],
    "album": "Led Zeppelin",
    "duration": "4:42"
  },
  {
    "id": 9,
    "albumId": 7,
    "title": "How Many More Times",
    "image": albumCovers.LedZeppelin,
    "artists": ["Led Zeppelin"],
    "album": "Led Zeppelin",
    "duration": "8:27"
  },
  {
    "id": 1,
    "albumId": 8,
    "title": "White Room",
    "image": albumCovers.WheelsOfFire,
    "artists": ["Cream"],
    "album": "Wheels Of Fire",
    "duration": "4:58"
  },
  {
    "id": 2,
    "albumId": 8,
    "title": "Sitting On Top Of The World",
    "image": albumCovers.WheelsOfFire,
    "artists": ["Cream"],
    "album": "Wheels Of Fire",
    "duration": "4:58"
  },
  {
    "id": 3,
    "albumId": 8,
    "title": "Passing The Time",
    "image": albumCovers.WheelsOfFire,
    "artists": ["Cream"],
    "album": "Wheels Of Fire",
    "duration": "4:32"
  },
  {
    "id": 4,
    "albumId": 8,
    "title": "As You Said",
    "image": albumCovers.WheelsOfFire,
    "artists": ["Cream"],
    "album": "Wheels Of Fire",
    "duration": "4:20"
  },
  {
    "id": 5,
    "albumId": 8,
    "title": "Pressed Rat And Warthog",
    "image": albumCovers.WheelsOfFire,
    "artists": ["Cream"],
    "album": "Wheels Of Fire",
    "duration": "3:13"
  },
  {
    "id": 6,
    "albumId": 8,
    "title": "Politician",
    "image": albumCovers.WheelsOfFire,
    "artists": ["Cream"],
    "album": "Wheels Of Fire",
    "duration": "4:11"
  },
  {
    "id": 7,
    "albumId": 8,
    "title": "Those Were The Days",
    "image": albumCovers.WheelsOfFire,
    "artists": ["Cream"],
    "album": "Wheels Of Fire",
    "duration": "2:53"
  },
  {
    "id": 8,
    "albumId": 8,
    "title": "Born Under A Bad Sign",
    "image": albumCovers.WheelsOfFire,
    "artists": ["Cream"],
    "album": "Wheels Of Fire",
    "duration": "3:09"
  },
  {
    "id": 9,
    "albumId": 8,
    "title": "Deserted Cities Of The Heart",
    "image": albumCovers.WheelsOfFire,
    "artists": ["Cream"],
    "album": "Wheels Of Fire",
    "duration": "3:38"
  },
  {
    "id": 10,
    "albumId": 8,
    "title": "Crossroads (Live)",
    "image": albumCovers.WheelsOfFire,
    "artists": ["Cream"],
    "album": "Wheels Of Fire",
    "duration": "4:18"
  },
  {
    "id": 11,
    "albumId": 8,
    "title": "Spoonful (Live)",
    "image": albumCovers.WheelsOfFire,
    "artists": ["Cream"],
    "album": "Wheels Of Fire",
    "duration": "16:46"
  },
  {
    "id": 12,
    "albumId": 8,
    "title": "Traintime (Live)",
    "image": albumCovers.WheelsOfFire,
    "artists": ["Cream"],
    "album": "Wheels Of Fire",
    "duration": "7:01"
  },
  {
    "id": 13,
    "albumId": 8,
    "title": "Toad (Live)",
    "image": albumCovers.WheelsOfFire,
    "artists": ["Cream"],
    "album": "Wheels Of Fire",
    "duration": "16:15"
  },
  {
    "id": 1,
    "albumId": 9,
    "title": "Shine On You Crazy Diamond (Pts. 1-5)",
    "image": albumCovers.WishYouWereHere,
    "artists": ["Pink Floyd"],
    "album": "Wish You Were Here",
    "duration": "13:31"
  },
  {
    "id": 2,
    "albumId": 9,
    "title": "Welcome to the Machine",
    "image": albumCovers.WishYouWereHere,
    "artists": ["Pink Floyd"],
    "album": "Wish You Were Here",
    "duration": "7:31"
  },
  {
    "id": 3,
    "albumId": 9,
    "title": "Have A Cigar",
    "image": albumCovers.WishYouWereHere,
    "artists": ["Pink Floyd"],
    "album": "Wish You Were Here",
    "duration": "5:07"
  },
  {
    "id": 4,
    "albumId": 9,
    "title": "Wish You Were Here",
    "image": albumCovers.WishYouWereHere,
    "artists": ["Pink Floyd"],
    "album": "Wish You Were Here",
    "duration": "5:34"
  },
  {
    "id": 5,
    "albumId": 9,
    "title": "Shine On You Crazy Diamond (Pts. 6-9)",
    "image": albumCovers.WishYouWereHere,
    "artists": ["Pink Floyd"],
    "album": "Wish You Were Here",
    "duration": "12:27"
  },
]