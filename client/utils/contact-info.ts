interface iContactInfo {
  icon: string;
  contactType: string;
  moreInfo: string;
  id: number;
}

class Contact implements iContactInfo {
  public id: number;
  static lastId = -1;
  constructor(
    public contactType: string,
    public moreInfo: string,
    public icon: string,
  ) {
    this.id = ++Contact.lastId;
  }
}

export const ContactInfo: iContactInfo[] = [
  new Contact("find", "Lebanon, Tripoli, Baddawi", "map-marker-alt"),
  new Contact("call", "+961 70 380 113", "phone"),
  new Contact("mail", "tahaalkadi57@gmail.com", "envelope-open"),
];
