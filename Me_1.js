
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `loc_dfp=0a744940f6e1e376a63e05d9cde48524; trace_sdk_context_pv_id=/wscump/checkin/result~205291c0-5777-4e8c-99c2-e97b059fadbd; yz_log_seqb=1651283683750; yz_log_seqn=29; _kdt_id_=97284269; yz_ep_page_track=RSwmh1WIWw1bn%2F90ijBD6A%3D%3D; yz_ep_page_type_track=M9LzzsFr8gNxs8%2Ffk6DNDg%3D%3D; dfp=cdf62d8abb5e92f97c1ccc4c28376f1c; rdfp=cdf62d8abb5e92f97c1ccc4c28376f1c; entry=3; yz_log_ftime=1651241372831; yz_log_uuid=ff567f28-d9a2-97f5-6e58-a8d6d1d5420a; KDTSESSIONID=YZ969240952296230912YZZFVB2cEC; nobody_sign=YZ969240952296230912YZZFVB2cEC; KDTWEAPPSESSIONID=YZ968118470889549824YZ5j6Bx8BD; kdt_id=99209606`,
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
