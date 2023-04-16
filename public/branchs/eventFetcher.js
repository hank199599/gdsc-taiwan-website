var EventTypeFilter = async(id)=>{
  try{
    const response = await fetch(`https://gdsc.community.dev/api/chapter/${id}/event?order_by=start_date&start_date=${todayDate()}&end_date=9999-12-31`);
    const data = await response.json();
    return data

  } catch (error) {
    console.error(error);
  }
}


var todayDate = ()=>{
  let today = new Date()
  let date = new Date(today.getTime() + ( 8* 60 * 60 * 1000 ))
  return `${date.getFullYear()}-${date.getMonth() + 1 }-${date.getDate()}`
}