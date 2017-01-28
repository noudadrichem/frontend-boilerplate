import $ from 'jquery'
function requestPost() {
  $(document).ready(function() {
    $.ajax({
      type: 'POST',
      crossDomain: true,
      url: 'http://localhost:9091/v1/getCommunityPageInfo',
      data: {'setId': '58493d5e6f1ea50011811f40'},
      dataType: 'json',
      success: function(responseData, textStatus, jqXHR) {
        console.log('SUCCES', responseData, textStatus, jqXHR)
      },
      error: function(responseData, textStatus, errorThrown) {
        console.log(' error')
        console.log('ERROR', responseData, textStatus, errorThrown)
      }
    })
  })
}
export {requestPost}
