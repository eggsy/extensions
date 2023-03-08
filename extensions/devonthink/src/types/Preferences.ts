export type Preferences = {
  searchIsShowingDetail: boolean;
  hideEmptySearchResultItemProperties: boolean;
  useSIUnits: boolean;
  orderSearchResultItemProperties: string;

  propertyID: boolean;
  propertyUUID: boolean;
  propertyName: boolean;
  propertyScore: boolean;
  propertyPath: boolean;
  propertyTags: boolean;
  propertyNumberOfHits: boolean;
  propertyAltitude: boolean;
  propertyGeolocation: boolean;
  propertyLatitude: boolean;
  propertyInterval: boolean;
  propertyNumberOfReplicants: boolean;
  propertyBatesNumber: boolean;
  propertyNameWithoutExtension: boolean;
  propertyState: boolean;
  propertyAnnotationCount: boolean;
  propertyDate: boolean;
  propertyCharacterCount: boolean;
  propertyAdditionDate: boolean;
  propertyModificationDate: boolean;
  propertyRating: boolean;
  propertyUrl: boolean;
  propertyLongitude: boolean;
  propertyPageCount: boolean;
  propertyType: boolean;
  propertyExcludeFromTagging: boolean;
  propertyContentHash: boolean;
  propertyLocation: boolean;
  propertyMetaData: boolean;
  propertyStateVisibility: boolean;
  propertyWordCount: boolean;
  propertyFilename: boolean;
  propertyAliases: boolean;
  propertyExcludeFromWikiLinking: boolean;
  propertySize: boolean;
  propertyExcludeFromClassification: boolean;
  propertyReferenceURL: boolean;
  propertyAttachmentCount: boolean;
  propertyComment: boolean;
  propertyNumberOfDuplicates: boolean;
  propertyTagType: boolean;
  propertyLocationGroup: boolean;
  propertyHeight: boolean;
  propertyKind: boolean;
  propertyLocking: boolean;
  propertyMimeType: boolean;
  propertyOpeningDate: boolean;
  propertyUnread: boolean;
  propertyIndexed: boolean;
  propertyDuration: boolean;
  propertyAttachedScript: boolean;
  propertyExcludeFromSeeAlso: boolean;
  propertyDpi: boolean;
  propertyCreationDate: boolean;
  propertyExcludeFromSearch: boolean;
  propertyWidth: boolean;
  propertyLabel: boolean;
  propertyClass: boolean;
};

export type PropertyKey =
  | "propertyID"
  | "propertyUUID"
  | "propertyName"
  | "propertyScore"
  | "propertyPath"
  | "propertyTags"
  | "propertyNumberOfHits"
  | "propertyAltitude"
  | "propertyGeolocation"
  | "propertyLatitude"
  | "propertyInterval"
  | "propertyNumberOfReplicants"
  | "propertyBatesNumber"
  | "propertyNameWithoutExtension"
  | "propertyState"
  | "propertyAnnotationCount"
  | "propertyDate"
  | "propertyCharacterCount"
  | "propertyAdditionDate"
  | "propertyModificationDate"
  | "propertyRating"
  | "propertyUrl"
  | "propertyLongitude"
  | "propertyPageCount"
  | "propertyType"
  | "propertyExcludeFromTagging"
  | "propertyContentHash"
  | "propertyLocation"
  | "propertyMetaData"
  | "propertyStateVisibility"
  | "propertyWordCount"
  | "propertyFilename"
  | "propertyAliases"
  | "propertyExcludeFromWikiLinking"
  | "propertySize"
  | "propertyExcludeFromClassification"
  | "propertyReferenceURL"
  | "propertyAttachmentCount"
  | "propertyComment"
  | "propertyNumberOfDuplicates"
  | "propertyTagType"
  | "propertyLocationGroup"
  | "propertyHeight"
  | "propertyKind"
  | "propertyLocking"
  | "propertyMimeType"
  | "propertyOpeningDate"
  | "propertyUnread"
  | "propertyIndexed"
  | "propertyDuration"
  | "propertyAttachedScript"
  | "propertyExcludeFromSeeAlso"
  | "propertyDpi"
  | "propertyCreationDate"
  | "propertyExcludeFromSearch"
  | "propertyWidth"
  | "propertyLabel"
  | "propertyClass";
