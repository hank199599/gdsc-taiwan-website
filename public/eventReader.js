let eachDateContent = ''

let eventReader = async () => {

  var ActivityList = await GDGEventFetch();

  //console.log("ActivityList" + ActivityList);

  let dateTrans = (dateString) => {

    const dateObject = new Date(dateString);

    const month = dateObject.getMonth() + 1; // add 1 to get 1-12 range instead of 0-11
    const date = dateObject.getDate();

    return `${month}/${date}`;

  };


  let eventList = {}

  ActivityList.forEach((event) => {
    if (!eventList[dateTrans(event.start_date)]) {
      eventList[dateTrans(event.start_date)] = [];
    }
    eventList[dateTrans(event.start_date)].push(event);
  });

  //console.log("eventList:"+JSON.stringify(eventList))

  let eventDates = Object.keys(eventList)

  for (let j = 0; j < eventDates.length; j++) {

    let cardBodyContent = ''

    for(let event of eventList[eventDates[j]]){

      let audience_type = ''
      let tagButton = ''

      // 標記活動類型
      if(event['audience_type']==='VIRTUAL'){
        audience_type =`<span class="badge badge-pill badge-warning">線上活動</span>`

      }
      else{
        audience_type =`<span class="badge badge-pill badge-default">實體活動</span>`
      }
      
      //活動圖片
      let eventPic = 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/event_banners/gdev-eccosystems-bevy-chapters-thumbnail_x4z1EBy.png'

      if(event['picture']['url']){
        eventPic = event['picture']['url']
      }
      
      //活動標籤
      for(let tag of event['tags']){
        tagButton += `<span class="badge badge-pill badge-lg badge-secondary" style="margin:5px 5px;">${tag}</span>`
      }


      cardBodyContent += `
          
      <div class="card-body">
          <div class="row">
            <div class="col-md-3" style = "display: flex;
            justify-content: center;
            align-items: center;">
              <img src="${eventPic}" alt="Circle image" class="img-fluid rounded-circle shadow" style="width: 150px;">
            </div>
            <div class="col-md-9 text-left" style="vertical-align: center;">
            ${audience_type}
            
              <h3>${event['title']}</h3>
              <h6 style="color:#4285F4">${event['event_type_title']}</h6>
              ${tagButton}
              <p style="margin-top:10px">${event['description_short']}</p>
              <a href="${event['url']}" class="btn btn-outline-primary btn-round" target="_blank" style="margin: 5px 5px;">立刻報名</a>
            </div>
          </div>
        </div>`;
    }

    // 活動報名連結
    eachDateContent += `
      <div class="row col-md-12" style = "margin-top: 0rem !important; margin-bottom: 0rem !important;padding-right: 0px;">
          <div class="col-lg-2 mr-auto text-left mt-4" style = "margin-top: 0rem !important;">
              <p class="h1 card-title mb-3" style="word-break:break-all; color: #4285F4; margin-bottom: 0rem !important;">${eventDates[j]}</p>
          </div>
          <div class="col-lg-12 col-md-12 col-12 text-right" style = "margin-top: 0rem !important; margin-bottom: 1.5rem !important;padding-right: 0px;">
                ${cardBodyContent}
          </div>
      </div>`;
  }



  document.getElementById("recentContentList").innerHTML = `<div class="row col-md-12" style="margin-top: 1.5em; margin-right: 0em; padding-right: 0px;">${eachDateContent}</div>`;

}

eventReader()