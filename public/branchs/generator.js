
let autoInit = async()=>{

let tabListContent = ''
let BranchContent = ''

// Convert the Set to an array and sort it
const citiesList = counties = [
  '基隆市',
  '臺北市',
  '新北市',
  '桃園市',
  '新竹市',
  '新竹縣',
  '苗栗縣',
  '臺中市',
  '彰化縣',
  '南投縣',
  '雲林縣',
  '嘉義市',
  '嘉義縣',
  '臺南市',
  '高雄市',
  '屏東縣',
  '宜蘭縣',
  '花蓮縣',
  '臺東縣',
  '澎湖縣',
  '金門縣',
  '連江縣'
]

  let chapterExistCountyCount = 0

  for(let i=0;i < citiesList.length;i++){

    const chapteList = Object.values(branchList).filter(item => shcoolCountyMapping[chapterNameMap[item['title']]] === citiesList[i])

    console.log(chapteList.length)

    if(chapteList.length===0){
      continue
    }

    tabListContent+=`<li class="nav-item p-0 text-center" style="margin:5px 5px;">
        <a class="nav-link ${chapterExistCountyCount===0?'active':""}" data-toggle="tab" href="#${citiesList[i]}"
            role="tablist" style="margin-bottom: 10px;">
            ${citiesList[i]}
        </a>
    </li>`
    
    let organizationInfo = ''
    

    for(let content of chapteList){
      

      // const chapterDetail = await EventTypeFilter(content['id'])

      // console.log(chapterDetail)

      let eventPic = 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/event_banners/gdev-eccosystems-bevy-chapters-thumbnail_x4z1EBy.png'

      if(content.logo.url){
        eventPic = content.logo.url
      }

      organizationInfo+=`
            <div class="card-body">
            <div class="row">
              <div class="col-md-3" style = "display: flex;
              justify-content: center;
              align-items: center;">
                <img src="${eventPic}" alt="Circle image" class="img-fluid rounded-circle shadow" style="width: 150px;">
              </div>
              <div class="col-md-9 text-left" style="vertical-align: center;">
              
                <h3>${chapterNameMap[content['title']]}</h3>
                <h6 style="color:#4285F4">${content.state}</h6>
                <p style="margin-top:10px">${content.description}</p>
                <a href="${content['url']}" class="btn btn-outline-primary btn-round" target="_blank" style="margin: 5px 5px;">找到我們</a>
              </div>
            </div>
          </div>`;

    }

    BranchContent+=`<div class="tab-pane fade ${chapterExistCountyCount===0?'active':""} show" id="${citiesList[i]}">
                      <div class="row">
                        <div class="col-lg-9">
                          ${organizationInfo}      
                        </div>
                      </div>                
                    </div>`

    chapterExistCountyCount++

  }

  document.getElementById('tablist').innerHTML = tabListContent
  document.getElementById('BranchContent').innerHTML = BranchContent


}

autoInit()