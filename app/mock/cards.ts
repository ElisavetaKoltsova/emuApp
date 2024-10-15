import { Card, SavedCard } from "../types";

export const cards: Card[] = [
  {
    uid: "04:80:57:02:a5:c0:ac",
    cardType: "MIFARE Classic",
    lastReadTime: "2024-10-15T10:00:00Z",
  },
  {
    uid: "03:90:21:04:b7:c3:af",
    cardType: "MIFARE Classic",
    lastReadTime: "2024-10-14T12:30:00Z",
  },
  {
    uid: "02:81:47:05:a6:d1:bc",
    cardType: "MIFARE Ultralight",
    lastReadTime: "2024-10-13T09:15:00Z",
  },
  {
    uid: "05:78:32:07:a3:e2:bd",
    cardType: "MIFARE DESFire",
    lastReadTime: "2024-10-12T18:45:00Z",
  },
  {
    uid: "06:66:11:08:a2:f3:cc",
    cardType: "MIFARE Classic",
    lastReadTime: "2024-10-11T08:20:00Z",
  },
];

export const savedCards: SavedCard[] = [
  {
    title: 'Work1',
    uid: "04:80:57:02:a5:c0:ac",
    cardType: "MIFARE Classic",
    lastReadTime: "2024-10-15T10:00:00Z",
    isActive: false
  },
  {
    title: 'Work2',
    uid: "03:90:21:04:b7:c3:af",
    cardType: "MIFARE Classic",
    lastReadTime: "2024-10-14T12:30:00Z",
    isActive: false
  },
  {
    title: 'Uni',
    uid: "02:81:47:05:a6:d1:bc",
    cardType: "MIFARE Ultralight",
    lastReadTime: "2024-10-13T09:15:00Z",
    isActive: false
  },
  {
    title: 'Kinder Garden',
    uid: "05:78:32:07:a3:e2:bd",
    cardType: "MIFARE DESFire",
    lastReadTime: "2024-10-12T18:45:00Z",
    isActive: false
  },
  {
    title: 'Work4',
    uid: "06:66:11:08:a2:f3:cc",
    cardType: "MIFARE Classic",
    lastReadTime: "2024-10-11T08:20:00Z",
    isActive: true
  },
];