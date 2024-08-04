import { getHumeAccessToken } from '@/utils/get_hume_access_token';
import React from 'react'

export default async function childWithHumeAccessToken({childFunction}:{childFunction:(accessToken: string) => React.JSX.Element}) {
  const accessToken = await getHumeAccessToken();
  const child = childFunction(accessToken);
  return (
    {child}
  );
}
