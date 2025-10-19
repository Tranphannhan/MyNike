export interface accountUser {
    id: string;
    name: string;
    gmail: string;
    phone: string;
    address: string;
    img: string;
    role: 'user' | 'admin'; 
    iat: number; // issued at
    exp: number; // expires at
  }