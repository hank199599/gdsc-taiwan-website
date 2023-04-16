
let autoInit = ()=>{

let tabListContent = ''
let BranchContent = ''
let branchNameList = Object.keys(branchList)


  for(let i=0;i < branchNameList.length;i++){

    tabListContent+=`<li class="nav-item p-0 text-center" style="margin-bottom: 10px;">
        <a class="nav-link ${i===0?'active':""}" data-toggle="tab" href="#${branchNameList[i]}"
            role="tablist" style="margin-bottom: 10px;">
            ${branchList[branchNameList[i]].city}
        </a>
    </li>`
    
    let organizationInfo = ''

    for(let content of branchList[branchNameList[i]].organization){
      organizationInfo+=`
                    <div class="col-lg-12 mr-auto text-left mt-12" style = "margin-top: 0rem !important;">
                            <img src="${content.pic_url}" alt="main image" class="img-fluid "style="width: 500px;">
                    </div>
                    <div class="col-lg-12 col-md-12 col-12 text-left" style = "margin-top: 0rem !important; margin-bottom: 1.5rem !important;padding-right: 0px;">
                          <p class="card-title mb-3" style="word-break:break-all; margin-bottom: 0rem !important;">${content.name}</p>
                          <a href="${content.link}" class="btn btn-outline-default btn-round" target="_blank" style="margin: 5px 5px;">查看詳情</a>
                    </div>
                  `
    }

    BranchContent+=`<div class="tab-pane fade ${i===0?'active':""} show" id="${branchNameList[i]}">
                      <div class="row">
                        <div class="col-lg-9">
                          ${organizationInfo}      
                        </div>
                        <div class="col-lg-3">
                          <img class="card-img-top" src="../assets/img/branch/map/${branchNameList[i]}.png" alt="Card image cap" style="max-width: 50vw;">  
                        </div>    
                      </div>                
                    </div>`

  }

  document.getElementById('tablist').innerHTML = tabListContent
  document.getElementById('BranchContent').innerHTML = BranchContent


}

autoInit()