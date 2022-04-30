
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscump/checkin/result~8534d1c5-81e0-4c3b-8f07-06e40162a284; yz_log_seqb=1651290270755; yz_log_seqn=17; _kdt_id_=97284269; yz_ep_page_track=ijAK%2FSmR0L5lawIt9msJ%2Bg%3D%3D; yz_ep_page_type_track=M9LzzsFr8gNxs8%2Ffk6DNDg%3D%3D; dfp=63b9388f1648b3fbdead0bdf7dd5312d; loc_dfp=5e0dc5cbb8f7490bbc90ef9b028ab24d; rdfp=63b9388f1648b3fbdead0bdf7dd5312d; _efmdata=dl8ENxWRLIgCCy6g5vxHQlwxevMhLyRJc6BjKl0pzdBO05KEbEXQFiQYgrhKUxq%2FsUeX5rQkhbE0n79EqTJqLLmgJ6dxu%2FXZ0jHR4gfhDuQ%3D; _exid=hsfn0hWuwL1v%2FDYT8gNlfr6fKyk4b2mnQ27SmbAJcbeYGCwKOaNjYpOEL6D3uG%2F%2FEoq%2FzRbTaR71zlYpvLWPMw%3D%3D; ec=sjNFznHn-1651242160828-fd24acfcdcd7b81384642869; yz_fp_hash=281b90addf47d64da6230d08593fdb9c; yz_log_ftime=1651242157601; yz_log_uuid=accdcb6f-8079-2049-482b-b6dbcb9d4a7d; KDTSESSIONID=YZ967138529904951296YZD2HIHU7f; nobody_sign=YZ967138529904951296YZD2HIHU7f`,
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
