
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `yz_log_seqb=1652973293883; yz_log_seqn=12; _kdt_id_=97284269; yz_ep_page_track=xY4l6gceGV7GK7xcVMh4dQ%3D%3D; yz_ep_page_type_track=M9LzzsFr8gNxs8%2Ffk6DNDg%3D%3D; trace_sdk_context_pv_id=/v2/showcase/homepage~99b3b10a-28b6-4b83-8708-a48c7e0f0c9a; dfp=ae4724b0cdfaf1d8bda6579c3da40ba90d453f75; _efmdata=TUTo4472F2AGZEQv7LBo3UrBJCakeFpvkObxYVlFXzccrFfg5d28LSGMekqs3g8OcxqM7QpP7jPMq%2BBQd7igVI1OucEtkA8UxHD5HIzDkXk%3D; _exid=0nEFPFyLQQV%2F62CcD6adq3x3spBE66EsA96XpKcnWaKNxFh8zfM9y%2BCfHRHAbgN1RlgNf7eADWaT5l6sVHZ86w%3D%3D; ec=fAM4SzXB-1651145258648-53b2fce35e727-1819943470; yz_fp_hash=754fb1d33b4b30fd57a039604a7ce432; yz_log_ftime=1652973293595; yz_log_uuid=52d60ab4-8f6a-54ed-d6e4-aadbe9f97c59; entry=3; KDTSESSIONID=YZ969318975802343424YZMEunaccf; nobody_sign=YZ969318975802343424YZMEunaccf`,
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
    $notify("W4", "元初13094792433", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
