'use strict';
function createMsg(returnCode, returnUserMessage, data) {
  const msg = {
    error: {
      returnCode: returnCode || 0,
      returnMessage: returnUserMessage || 'success',
      returnUserMessage: returnUserMessage || '成功',
    },
  };
  if (Array.isArray(data) && data.length === 0) {
    msg.data = [];
  } else {
    msg.data = data || {};
  }

  return msg;
}

function returnMsg(returnCode, returnUserMessage, data) {
  this.body = createMsg(returnCode, returnUserMessage, data);
}

function success(data){
  this.body = createMsg('0','',data);
}

function error(code,msg){
  this.body = createMsg(code,msg,[]);
}

module.exports = {
  returnMsg,
  success,
  error
};
