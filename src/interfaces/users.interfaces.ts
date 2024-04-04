export interface Users {
   id?: number;
   username?: string;
   password?: string;
   fName: string;
   mName?: string;
   lName: string;
   type: string;
   email: string;
   birthdate: string;
   degree: string;
   department: string;
   college: string;
   contact: string;
   gender:string;
   year: string;
   address1: string;
   address2: string;
   address3: string;
   address4: string;
   status: 'active' | 'inactive'
   chatLink: string;
   mapLink: string;
   refreshToken?: string

  }
  