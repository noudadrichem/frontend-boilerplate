import {requestPost} from './requestBannerPage.js'
requestPost()
var creations = [{
  'bannerName': 'Banner 1',
  'companyName': 'Company 1',
  'country': 'Country 1',
  'designer': 'Designer 1',
  'rating': 'rating 1',
  'image': 'http://24.media.tumblr.com/dd4509f78fc468b95625f993f657886e/tumblr_mkr3tnjoCj1rwys80o1_400.gif'
}, {
  'bannerName': 'Banner 2',
  'companyName': 'Company 2',
  'country': 'Country 2',
  'designer': 'Designer 2',
  'rating': 'rating 2',
  'image': 'http://images5.fanpop.com/image/photos/26000000/Nyan-Pikachu-Gif-nyan-cat-26042081-500-375.gif'
}, {
  'bannerName': 'Banner 3',
  'companyName': 'Company 3',
  'country': 'Country 3',
  'designer': 'Designer 3',
  'rating': 'rating 3',
  'image': 'https://media.giphy.com/media/i3LVQMwESvRw4/giphy.gif'
}, {
  'bannerName': 'Banner 4',
  'companyName': 'Company 4',
  'country': 'Country 4',
  'designer': 'Designer 4',
  'rating': 'rating 4',
  'image': 'http://vignette4.wikia.nocookie.net/nyancat/images/b/b8/Nyan_dash_by_flavinbagel-d4o93k7.gif/revision/latest?cb=20120526010044'
}]

function createPanel(creation) {
  return `<div class="column">
    <div class="ui segment inverted grey">
      <div class="panel image">
        <img class="ui image" src="${creation.image}" alt="image">
      </div>
      <div class="panel info">
        <ul class="main info">
          <li>${creation.bannerName}</li>
          <li>For <span>${creation.companyName}</span> from <span>${creation.country}</span></li>
          <li>Made by <span>${creation.designer}</span></li>
        </ul>
        <div class="rating">
          <ul>
            <li><i class="star icon"></i></li>
            <li><i class="star icon"></i></li>
            <li><i class="star half empty icon"></i></li>
            <li><i class="star empty icon"></i></li>
            <li><i class="star empty icon"></i></li>
            <a class="ui tiny button pink" href="#">See more</a>
          </ul>
        </div>
      </div>
    </div>
  </div>`
}

const panelList = document.getElementById('panel-list')
panelList.innerHTML = creations.map(createPanel).join('')
