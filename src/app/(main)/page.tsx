import { type Metadata } from 'next'

import { loadCaseStudies } from '@/lib/mdx'
import { Card } from 'flowbite-react';
import { PageProps } from '../../../.next/types/app/layout';
import Pagination from '@/components/Pagination';
const getData = async (searchParams: {
  page: number; gp: string; mediumClassification: string;
}): Promise<{
  products: any[];
  count: number;
}> => {
  const mchGroupId = 10000
  const mchCode = '00651'
  const shopId = 'EC001'
  const pageIndex = searchParams.page ?? 1
  const pageSize = 20
  const countryCode = 'korea'
  const languageCode = 'ko-kr'
  const countFlag = true
  const sort = 'GOODS_SALES_COUNT'
  const order = 'DESC'
  const purchasedFlag = null
  const gp = searchParams.gp ?? '10000-98008379-0002'
  const mediumClassification = searchParams.mediumClassification ?? ''
  const products = await fetch("https://mpglobal.donki.com/EcWebManagement/category/detail/list", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
      "content-type": "application/x-www-form-urlencoded",
      "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin"
    },
    "referrer": "https://mpglobal.donki.com/ec-web/d/pcd?titleStr=5pel55So5ZOB&gpId=gm-0002?lan=ko-kr",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": `mchGroupId=${mchGroupId}&mchCode=${mchCode}&shopId=${shopId}&pageIndex=${pageIndex}&pageSize=${pageSize}&countryCode=korea&languageCode=ko-kr&countFlag=true&sort=${sort}&order=${order}&purchasedFlag=&gp=${gp}${mediumClassification ? `&mediumClassification=${mediumClassification}` : ''}`,
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  })
    .then(async (data) => await data.json())
    .catch((e) => console.log('e1', e));
  console.log(gp, mediumClassification)
  return {
    products: products?.data?.data ?? [],
    count: products?.data?.count ?? 0,
  };
}
function Component({ product }) {
  return (
    <Card
      className="max-w-sm max-h-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={product?.imageNetAddress?.length ? product.imageNetAddress[0] : ''}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {product.goodsName}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <span>{product.goodsSalesPrice}엔</span>
        {product.goodsOrgPrice !== product.goodsSalesPrice && <del className="text-body-secondary mx-1">{product.goodsOrgPrice}엔</del>}
      </p>
    </Card>
  );
}
function Shop({ count, products }) {
  return (
    <>
      <div className="flex items-center m-8">
        <h1 className="font-semibold text-lg md:text-2xl">Interactive Map</h1>
      </div>
      <div className="flex gap-4 p-4 md:gap-8 md:p-6">
        <div className="grid grid-cols-4 gap-4">
          {products.map((product): any =>
            <Component key={product.goodsId} product={product} />
          )}
        </div>
      </div>
      <Pagination count={count} />
    </>

  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home({ params, searchParams }: PageProps) {
  const data = await getData(searchParams)
  return (
    <>
      <Shop count={data.count} products={data.products} />
    </>
  )
}
