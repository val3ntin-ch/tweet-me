import axiosInstance from './axios';
import { useQuery, useInfiniteQuery } from 'react-query';
import { TwitterUser } from '../types';

type UserProfileResult = {
  data: TwitterUser[];
};

export const useUserProfile = (username: string, isValid: boolean) =>
  useQuery<UserProfileResult>(
    `user-data-${username}`,
    () =>
      axiosInstance
        .get(`users/by?usernames=${username}&user.fields=profile_image_url`)
        .then((response) => response.data),
    { enabled: isValid },
  );

export const useUserTweetsList = (userId?: string) =>
  useInfiniteQuery(
    `user-tweets-list-${userId}`,
    ({ pageParam }) => {
      const requestPaginationURL = pageParam ? `&pagination_token=${pageParam}` : '';
      return axiosInstance
        .get(
          `users/${userId}/tweets?max_results=20&tweet.fields=created_at&user.fields=created_at,profile_image_url&expansions=author_id${requestPaginationURL}`,
        )
        .then((response) => response.data);
    },
    {
      getNextPageParam: (lastPage) => lastPage.meta.next_token,
    },
  );
