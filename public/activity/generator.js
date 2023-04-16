
let autoInit = async()=>{

        
    var subject_array= await EventTypesFetch();
    subject_array = subject_array['results']
    
    var subject_options = ''
    let content = ''
    let initial = 0;

    for(let i=0;i< subject_array.length;i++){

        var ActivityList = await EventTypeFilter(subject_array[i]['id']);
        
        if(ActivityList['count'] > 0){

            subject_options+=`<li class='nav-item'>
            <a class='nav-link mb-sm-3 mb-md-0 ${(initial === 0) ? " active" : ""}' data-toggle='tab' href='#${subject_array[i]['slug']}' role='tab' aria-controls='"' aria-selected="true" style='margin:10px;'>${subject_array[i]['title']} </a>
        </li>`
       
        content +=`<div class='tab-pane fade show${(initial === 0) ? " active" : ""}' id='${subject_array[i]['slug']}' role='tabpanel' aria-labelledby='${subject_array[i]['slug']}'-tab'>`
        
        content+= await eventReader(ActivityList['results'])
        content +='</div>'

        initial++
        }
    }

    console.log(content)


    document.getElementById('tabs-icons-text').innerHTML = subject_options
    document.getElementById("myTabContent").innerHTML = content
}

autoInit()