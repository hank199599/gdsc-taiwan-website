
var GDGEventFetch = async()=>{
  try {
    const response = await fetch(`https://gdg.community.dev/api/chapter/748/event?order_by=start_date&start_date=${todayDate()}&end_date=9999-12-31&fields=title,audience_type,description_short,start_date,end_date,picture,tags,tickets,url,event_type_title,audience_type,event_type&page_size=4`);
    const data = await response.json();
    const futureEvents = []
    let eventRows = data['results']

    for(let i=0;i < eventRows.length;i++ ){
      
      const targetTime = new Date(eventRows[i]['end_date']);
      const currentTime = new Date();
      // console.log(eventRows[i]['title']+targetTime)
      if (targetTime > currentTime) {
        futureEvents.push(eventRows[i])
      }
    }

    return futureEvents

  } catch (error) {
    console.error(error);
  }
}


var todayDate = ()=>{
  let today = new Date()
  let date = new Date(today.getTime() + ( 8* 60 * 60 * 1000 ))
  return `${date.getFullYear()}-${date.getMonth() + 1 }-${date.getDate()}`
}