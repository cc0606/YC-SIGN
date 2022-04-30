
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscump/checkin/result~575bab12-00fb-44d5-8a7f-c6fdbab4a9f9; loc_dfp=6d11bef7a05386e5f5a472f71df8baf2; yz_log_seqb=1651285579572; yz_log_seqn=16; _kdt_id_=97284269; yz_ep_page_track=xY4l6gceGV7GK7xcVMh4dQ%3D%3D; yz_ep_page_type_track=M9LzzsFr8gNxs8%2Ffk6DNDg%3D%3D; dfp=63b9388f1648b3fbdead0bdf7dd5312d; rdfp=63b9388f1648b3fbdead0bdf7dd5312d; _efmdata=TUTo4472F2AGZEQv7LBo3UrBJCakeFpvkObxYVlFXzccrFfg5d28LSGMekqs3g8Ot4kl7g6%2BPWlv%2BTRaNOjUdbUFHhIj38h8D4JJ%2BRuPhLg%3D; _exid=ZGd3uF3EhXIuqyjXEe1GmxXE1wdd8cLilsQCHzTnVZ84sTeseEKcy1qdpaAdJDCQra%2B7x6lob4xp0h6Q%2BnT2og%3D%3D; ec=fAM4SzXB-1651145258648-53b2fce35e727-1819943470; yz_fp_hash=aae154dd3cd4a71e4eb50ed466eac452; yz_log_ftime=1651145255842; yz_log_uuid=7e8f35d4-da2c-0ad8-1712-6c1a4253a097; KDTSESSIONID=YZ969318975802343424YZMEunaccf; nobody_sign=YZ969318975802343424YZMEunaccf`,
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
