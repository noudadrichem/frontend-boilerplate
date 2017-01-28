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
}]

creations.forEach(function(creation) {
  createPanelItem(creation)
})

function createPanelItem(creation) {
  var panelItem = document.createElement('div')
  panelItem.className = 'column'

  var innerContainer = document.createElement('div')
  innerContainer.className = 'ui segment inverted grey'
  panelItem.appendChild(innerContainer)
  // image container
  var panelImageContainer = document.createElement('div')
  panelImageContainer.className = 'panel image'
  var panelImage = document.createElement('img')
  panelImage.className = 'ui image'
  panelImage.src = creation.image
  innerContainer.appendChild(panelImageContainer)
  panelImageContainer.appendChild(panelImage)

  // info container
  var panelInfoContainer = document.createElement('div')
  panelInfoContainer.className = 'panel info'
  innerContainer.appendChild(panelInfoContainer)
  // info list
  var infoList = document.createElement('ul')
  infoList.className = 'main info'
  var infoItem1 = document.createElement('li')
  infoItem1.appendChild(document.createTextNode(creation.bannerName))
  var infoItem2 = document.createElement('li')
  infoItem2.appendChild(document.createTextNode('for ' + creation.companyName + ' from ' + creation.country))
  var infoItem3 = document.createElement('li')
  infoItem3.appendChild(document.createTextNode('Made by ' + creation.designer))
  panelInfoContainer.appendChild(infoList)
  infoList.appendChild(infoItem1)
  infoList.appendChild(infoItem2)
  infoList.appendChild(infoItem3)
  // rating
  var rating = document.createElement('div')
  rating.className = 'rating'
  panelInfoContainer.appendChild(rating)
  var ratingList = document.createElement('ul')
  rating.appendChild(ratingList)
  for (var i = 0; i < 5; i++) {
    var listItem = document.createElement('li')
    var starFull = document.createElement('i')
    starFull.className = 'star icon'
    listItem.appendChild(starFull)
    ratingList.appendChild(listItem)
  }
  // button
  var button = document.createElement('a')
  button.className = 'ui tiny button pink'
  button.href = '#'
  button.innerHTML = 'See more'
  ratingList.appendChild(button)

  console.log(panelItem)
  document.getElementById('panel-list').appendChild(panelItem)
}
