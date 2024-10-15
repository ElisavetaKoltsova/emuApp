export type Card = {
  uid: string;
  cardType: string;
  lastReadTime: string;
}

export type SavedCard = Card & {
  title: string;
  isActive: boolean;
}