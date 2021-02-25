import axiosInstance from './axios';
import { useQuery } from 'react-query';

export const useUserProfile = (username: string, isValid: boolean) =>
  useQuery(
    `user-data-${username}`,
    () => axiosInstance.get(`users/by?usernames=${username}`).then((response) => response.data),
    { enabled: isValid },
  );

export const useUserTweetsList = (userId: string) =>
  useQuery(`user-tweets-list-${userId}`, () =>
    axiosInstance
      .get(
        `users/${userId}/tweets?max_results=20&tweet.fields=created_at&user.fields=created_at,profile_image_url&expansions=author_id`,
      )
      .then((response) => response.data),
  );

export const useUserTweetsPaginationList = (userId: string, paginationToken: string, isEndOfList: boolean) =>
  useQuery(
    `user-tweets-list-${userId}`,
    () =>
      axiosInstance
        .get(
          `users/${userId}/tweets?max_results=20&tweet.fields=created_at&user.fields=created_at,profile_image_url&expansions=author_id&pagination_token=${paginationToken}`,
        )
        .then((response) => response.data),
    { enabled: isEndOfList },
  );
