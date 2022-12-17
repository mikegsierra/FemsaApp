export interface Movement {
  id: string;
  description: string;
  createdAt: string;
  imageUrl: string;
  amount: number;
  amountText: string;
  isPositive: boolean;
}

export interface MovementDTO {
  id: string;
  product: string;
  createdAt: Date;
  points: number;
  image: string;
  is_redemption: boolean;
}
