import * as CT from '../strapi/types/generated/contentTypes';
import * as C from '../strapi/types/generated/components';

export type RichTextBlock = Array<any>;

// Create a helper which accepts a parent type and a key of that parent.
// It omits the original key/value and replaces it with [key]: RichTextBlock.
type WithRichText<T, K extends keyof T> = Omit<T, K> & {
  [key in K]: RichTextBlock;
};

type WithString<T, K extends keyof T> = Omit<T, K> & {
  [key in K]: string;
};

type WithChildren<T, K extends keyof T, ChildType> = Omit<T, K> & {
  [key in K]: Array<ChildType>;
};

type MassagePrice = C.FrontPageComponentsMassagePrice['attributes'];
export type Massage = WithChildren<
  WithRichText<C.FrontPageComponentsMassage['attributes'], 'Description'>,
  'PriceList',
  MassagePrice
>;

export type ClinicLocation = WithRichText<
  C.FrontPageComponentsClinicLocation['attributes'],
  'Address' | 'Parking' | 'Times'
>;
export type ClinicLocationZone = WithChildren<
  WithRichText<C.FrontPageComponentsClinicLocationZone['attributes'], 'Blurb'>,
  'LocationList',
  ClinicLocation
>;

export type BiographyZone = WithRichText<
  C.FrontPageComponentsNenaBiography['attributes'],
  'Description'
>;

export type FrontPage = Omit<
  CT.ApiFrontPageFrontPage['attributes'],
  'BiographyZone' | 'Massages' | 'LocationZone'
> & {
  BiographyZone: BiographyZone;
  Massages: Array<Massage>;
  LocationZone: ClinicLocationZone;
};

export type GlobalSettings = WithString<
  CT.ApiGlobalSettingsGlobalSettings['attributes'],
  | 'EmailAddress'
  | 'GoogleMapsURL'
  | 'InstagramAccount'
  | 'PhoneNumber'
  | 'WhatsAppMessage'
>;

type BookingsBlock = WithString<
  WithRichText<C.MiscBookingsBlock['attributes'], 'Address' | 'Signposts'>,
  'Title' | 'Subtitle'
>;

export type BookingsPage = WithChildren<
  CT.ApiBookingsPageBookingsPage['attributes'],
  'BookingsList',
  BookingsBlock
>;
