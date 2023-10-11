import {
  ApiGlobalSettingsGlobalSettings,
  ApiFrontPageFrontPage,
} from '../strapi/types/generated/contentTypes';
import {
  FrontPageComponentsNenaBiography,
  FrontPageComponentsMassage,
  FrontPageComponentsMassagePrice,
} from '../strapi/types/generated/components';

export type GlobalSettings = ApiGlobalSettingsGlobalSettings['attributes'];

type FrontPageRaw = ApiFrontPageFrontPage['attributes'];

export type Massage = Omit<
  FrontPageComponentsMassage['attributes'],
  'PriceList'
> & {
  PriceList: Array<FrontPageComponentsMassagePrice['attributes']>;
};

export type FrontPage = Omit<FrontPageRaw, 'BiographyZone' | 'Massages'> & {
  BiographyZone: FrontPageComponentsNenaBiography['attributes'] & {
    description: any[];
  };
  Massages: Array<Massage>;
};
