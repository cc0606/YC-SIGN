
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscuser/membercenter~95132a51-3f4f-4ef8-b4e5-15bfa9fccee7; yz_log_seqb=1652198275671; yz_log_seqn=32; _kdt_id_=97284269; KDTSESSIONID=YZ973735669367500800YZJ0sphvJI; nobody_sign=YZ973735669367500800YZJ0sphvJI; captcha_sid=YZ973735990675091456YZddFMDEI7; dfp=eb1daea92145eda7d32d1883befc25b5; loc_dfp=34157e3b76d40d2bd8841dfc2b48c47f; yz_log_ftime=1652198275282; yz_log_uuid=e32a8215-59cd-2b03-1d68-f8e571c1b939`,
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
    $notify("冻冻1", "19924384492", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

