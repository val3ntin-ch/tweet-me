export type TweetItem = {
  text: string;
  created_at: string;
  author_id: string;
  id: string;
};

export type TwitterUser = {
  username: string;
  profile_image_url: string;
  id: string;
  name: string;
  created_at: string;
};

export type TweetMeta = {
  oldest_id: string;
  newest_id: string;
  result_count: number;
  next_token: string;
  previous_token: string;
};

export type TweetsPage = {
  data: TweetItem[];
  includes: TwitterUser[];
  meta: TweetMeta;
};

export type TweetsPages = {
  pages: TweetsPage[];
};

export type ScreensParams = {
  Login: undefined;
  Main: { userId: string };
  Tweets: { userId?: string; userName?: string };
  Details: { tweet: TweetItem };
  Settings: { params: { params: { userId?: string; userName?: string } } };
};
