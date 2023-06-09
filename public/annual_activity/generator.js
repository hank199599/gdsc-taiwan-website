let eventReader = async () => {

  let eachDateContent = "";

    for (let item of eventList){

      var cardBodyContent = `
        <div class="card-body">
            <div class="row">
              <div class="col-md-5" style = "display: flex;
              justify-content: center;
              align-items: center; margin-bottom:1rem;">
                <img src="${item['pic_url']}" alt="${item["title"]} image" class="img-fluid shadow" style="width: 300px;">
              </div>
              <div class="col-md-7 text-left" style="vertical-align: center;">
              <span class="badge badge-pill badge-lg badge-success" style="background-color: #4285F4;">${item["date"]}</span>
              <h3>${item["title"]}</h3>
                <p style="margin-top:10px">${item["description"]}</p>
                ${item['link']?`<a href="${item['link']}" class="btn btn-outline-default btn-round" target="_blank" style="margin: 5px 5px;">了解更多</a>`:''}
              </div>
            </div>
          </div>
        `;

      eachDateContent += `<div class="col-lg-12 col-md-12 col-12 text-right" style = "margin-top: 0rem !important; margin-bottom: 1.5rem !important;padding-right: 0px;">
        ${cardBodyContent}
        </div>`;
    }
   

  let final_content = `<div class="row col-md-12" style="margin-top: 1.5em; margin-right: 0em; padding-right: 0px;">${eachDateContent}</div>`;

  document.getElementById("partner_List").innerHTML = final_content
};

eventReader()