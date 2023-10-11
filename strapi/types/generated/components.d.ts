import type { Schema, Attribute } from '@strapi/strapi';

export interface FrontPageComponentsMassagePrice extends Schema.Component {
  collectionName: 'components_front_page_components_massage_prices';
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
  collectionName: 'components_front_page_components_massages';
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
  collectionName: 'components_front_page_components_nena_biographies';
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
      'front-page-components.massage-price': FrontPageComponentsMassagePrice;
      'front-page-components.massage': FrontPageComponentsMassage;
      'front-page-components.nena-biography': FrontPageComponentsNenaBiography;
    }
  }
}
