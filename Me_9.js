
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : ` trace_sdk_context_pv_id=/wscuser/membercenter~2dc75614-5b39-43e6-bc6e-6165eef34080; yz_log_seqb=1652427110655; yz_log_seqn=100; _kdt_id_=97284269; yz_ep_page_track=RpGv3QXvf4lmjp1MJVxZlQ%3D%3D; yz_ep_page_type_track=M9LzzsFr8gNxs8%2Ffk6DNDg%3D%3D; dfp=340eef046bb381d95cbfbaba6e98117a; loc_dfp=c672cc27cdfc9750f39267cc614db9f4; rdfp=340eef046bb381d95cbfbaba6e98117a; _efmdata=Ou6yD%2BubYZ%2BfHZycnwASiCdPUzHJGf4PWi0shPKvy0lTf%2BTCLUXYnJ6tDGYUqxNSrYWC7k9bqBOdHxJhbeZFIcFpnpE85ilcdeN6VkENTrk%3D; _exid=8JQaxl1S7jZz6lg1H8nk%2Bet1eehT3yzMFbQ%2BUK2NsFLNeVEPGUJBA8zjQninw6zLHtzeFpB0urtYWOhxd6CFaQ%3D%3D; ec=gZTByKGh-1651242283632-350cf713ca0c1-1159131008; yz_fp_hash=d373515805d7b22ecbdff0ceefda810a; Hm_lpvt_679ede9eb28bacfc763976b10973577b=1652427235; Hm_lvt_679ede9eb28bacfc763976b10973577b=1652427235; paid=-BlTBPr4e0SVRodCDmCgSx0MDyDHUs4BP2JFtH81frg70O3153HVJ5p1R4C05ydAnsKqvlROteRV-23wUBidGA; csrf-secret=TuKuNK5Rii4o2v1t2K; csrf-token=YaSaLlPdpq-FlIRxRCIaceMrIhU/Q/EYVoKj6I=; captcha_sid=YZ974695943696699392YZhyRX6RgD; yz_log_ftime=1652427105009; yz_log_uuid=a6b43630-eb58-768b-e047-77756d48bf5a; KDTSESSIONID=YZ966009061246267392YZSdn5nmlT; nobody_sign=YZ966009061246267392YZSdn5nmlT; KDTWEAPPSESSIONID=YZ965996659115114496YZIXMWSYw5`,
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
    $notify("W9", "元初13295867082", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
