export class ApiContent {
  'id'?: number;
  'name': string;
  'username': string;
  'email': string;
  'phone': number;
  'address': {
    city: string;
    geo?: {
      lat: string;
      lng: 'string';
    };
    street?: string;
    suite?: string;
    zipcode?: string;
  };
  'company'?: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
  'website': string;
}
