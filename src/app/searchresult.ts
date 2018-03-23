
export interface SearchResult {
  'items': [SearchItem];
}

export interface SearchItem {
  'name': string;
  'id': number;
  'description': string;
  'language': string;
  'html_url': string;
  'owner': {
    'login': string;
    'avatar_url': string; };
}
