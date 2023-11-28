export async function GET(request: Request) {
    const url = new URL(request.url)


    const mchGroupId = 10000
    const mchCode = '00651'
    const shopId = 'EC001'
    const pageIndex = 1
    const pageSize = 20
    const countryCode = 'korea'
    const languageCode = 'ko-kr'
    const countFlag = true
    const sort = 'GOODS_SALES_COUNT'
    const order = 'DESC'
    const purchasedFlag = null
    const gp = url.searchParams.get('gp') ?? '10000-98008379-0002'
    const mediumClassification = url.searchParams.get('mediumClassification') ?? ''
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
    return {
        products,
    };
}