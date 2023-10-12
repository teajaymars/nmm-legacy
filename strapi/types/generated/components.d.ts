import type { Schema, Attribute } from '@strapi/strapi';

export interface FrontPageComponentsClinicLocationZone
  extends Schema.Component {
  collectionName: 'components_fp_location_zones';
  info: {
    displayName: 'ClinicLocationZone';
    icon: 'pinMap';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Blurb: Attribute.Blocks;
    LocationList: Attribute.Component<
      'front-page-components.clinic-location',
      true
    >;
  };
}

export interface FrontPageComponentsClinicLocation extends Schema.Component {
  collectionName: 'components_fp_locations';
  info: {
    displayName: 'ClinicLocation';
    icon: 'pinMap';
  };
  attributes: {
    Title: Attribute.String;
    Address: Attribute.Blocks;
    Times: Attribute.Blocks;
    Parking: Attribute.Blocks;
  };
}

export interface FrontPageComponentsContactzone extends Schema.Component {
  collectionName: 'components_front_page_components_contactzones';
  info: {
    displayName: 'Contactzone';
    icon: 'picture';
  };
  attributes: {
    Instagram: Attribute.String;
    Phone: Attribute.String;
    Email: Attribute.String;
  };
}

export interface FrontPageComponentsMassagePrice extends Schema.Component {
  collectionName: 'components_fp_massage_prices';
  info: {
    displayName: 'MassagePrice';
    icon: 'priceTag';
    description: '';
  };
  attributes: {
    Time: Attribute.String;
    Price: Attribute.Integer;
    AdditionalNotes: Attribute.String;
  };
}

export interface FrontPageComponentsMassage extends Schema.Component {
  collectionName: 'components_fp_massages';
  info: {
    displayName: 'Massage';
    icon: 'file';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Blocks;
    PriceList: Attribute.Component<'front-page-components.massage-price', true>;
  };
}

export interface FrontPageComponentsNenaBiography extends Schema.Component {
  collectionName: 'components_fp_biographies';
  info: {
    displayName: 'NenaBiography';
    icon: 'emotionHappy';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'front-page-components.clinic-location-zone': FrontPageComponentsClinicLocationZone;
      'front-page-components.clinic-location': FrontPageComponentsClinicLocation;
      'front-page-components.contactzone': FrontPageComponentsContactzone;
      'front-page-components.massage-price': FrontPageComponentsMassagePrice;
      'front-page-components.massage': FrontPageComponentsMassage;
      'front-page-components.nena-biography': FrontPageComponentsNenaBiography;
    }
  }
}
