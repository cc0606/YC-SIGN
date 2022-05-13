
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscuser/membercenter~f239e4f7-470d-4c63-9d08-3ce62ac0b958; yz_log_seqb=1652427042259; yz_log_seqn=51; _kdt_id_=97284269; yz_ep_page_track=2urwMABYxvnvp3TE9e7xUQ%3D%3D; yz_ep_page_type_track=M9LzzsFr8gNxs8%2Ffk6DNDg%3D%3D; _efmdata=mxCcp8j%2FiMWKG0vB1Nm%2F4pXFPzPyS84z9WAlfhrT%2F0gjTsnRSgIlf9nJ8iYsIClMfF5hoQwW4Eo1XgArh4ybbnB16jj5%2FOu3IylUSfTvXEU%3D; _exid=%2B%2F6IdcL6XE3CmvCWviL0852kXrJEAaE3cpdqF7Yc9B0bVIgqIxPLCxeHxDl2zpy3CEKCyJSTXmbgQkrpPTsCeA%3D%3D; dfp=2b2950e407d851d146598e5740005a13d8555e5d; ec=4rsxiorU-1651242277857-b41ca3af46c88-1670831277; yz_fp_hash=66e0c54c2d46f02f7d6e8e5a6b8d4ba8; loc_dfp=c1a039f013b8f7ff2b0c180992b970a6; rdfp=63b9388f1648b3fbdead0bdf7dd5312d; yz_log_ftime=1652427041997; yz_log_uuid=a32eade1-cd3e-e597-0dfd-78b3546a7edc; KDTSESSIONID=YZ969725908819456000YZdmsldwzy; nobody_sign=YZ969725908819456000YZdmsldwzy; KDTWEAPPSESSIONID=YZ965995138199334912YZosLawcuO`,
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
    $notify("W8", "元初15397470261", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
