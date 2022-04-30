
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscump/checkin/result~565576de-1f79-43e0-9cbb-8fc028f4a51b; loc_dfp=e255374553d61ca1e064ccd819ff4feb; yz_log_seqb=1651291074676; yz_log_seqn=16; _kdt_id_=97284269; yz_ep_page_track=RpGv3QXvf4lmjp1MJVxZlQ%3D%3D; yz_ep_page_type_track=M9LzzsFr8gNxs8%2Ffk6DNDg%3D%3D; _efmdata=Ou6yD%2BubYZ%2BfHZycnwASiCdPUzHJGf4PWi0shPKvy0lTf%2BTCLUXYnJ6tDGYUqxNSanq5NOq%2BM%2BN%2B5LKX%2Bw5KR3FGPngARjPDeWt3X51ThRo%3D; _exid=uBocROpwR%2FFpwn0WyVKhKK5KQ0PrX6xECGnlsvMiLwoQaSf%2B60tziKh6nkc0dMKLuF9Q9CuCIURe%2Bs6wK3BKkw%3D%3D; dfp=94eee1ee3393172c4d33c3419cc83a618e63a525; ec=OwK9xl5x-1650356115159-64c4a1625cb3a-130471897; yz_fp_hash=ed488ecff6af61c5037841922c8137cb; rdfp=340eef046bb381d95cbfbaba6e98117a; yz_log_ftime=1651242280325; yz_log_uuid=cfc01d3a-fa98-3791-5ea5-5a54d4a3d2f3; KDTSESSIONID=YZ966009061246267392YZSdn5nmlT; nobody_sign=YZ966009061246267392YZSdn5nmlT; KDTWEAPPSESSIONID=YZ965996659115114496YZIXMWSYw5`,
'Accept' : `application/json, text/plain, */*`,
'Connection' : `keep-alive`,
'Referer' : `https://shop97476437.youzan.com/wscump/checkin/result?kdt_id=97284269`,
'Accept-Encoding' : `gzip, deflate, br`,
'Host' : `shop97476437.youzan.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.20(0x1800142f) NetType/WIFI Language/zh_CN`,
'x-yz-action-id' : `wsc-h5-ump-0ae889d3-1651277541513-316802`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
