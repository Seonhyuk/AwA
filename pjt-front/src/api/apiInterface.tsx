export interface LoginData {
  id: string;
  pw: string;
}

export interface SignUpData {
  id: string;
  pw1: string;
  pw2: string;
  nickname: string;
  birth: string;
  gender: boolean | null;
}

export interface NewNoticeData {
  title: string;
  content: string;
}

export interface NewItemData {
  description: string;
  genre: string[];
  ingredient: string;
  price: number;
  sell_user_nickname: string;
  title: string;
}

interface Media {
  type: string;
  url: string;
}

export interface UpdateItemData {
  title: string;
  price: number;
  ingredient: string;
  description: string;
  sell_user_nickname: string;
  genre: string[];
  attachmentList: Media[];
}

export interface UpdateProfileObject {
  description: string;
  nickname: string;
  profile_picture_url: string;
  favorite_field: string[];
}

export interface QueryType {
  word: string;
  genres: string[];
  min_price: number;
  max_price: number;
  status: number;
}

export interface newCommentType {
  content: string;
  nickname: string;
  parent_artwork_id: number;
}

export interface ReportType {
  reported_artwork_id: string;
  category: string;
  content: string;
  report_profile_nickname: string;
}

export interface ChangePasswordType {
  userEmail: string;
  password: string;
}
