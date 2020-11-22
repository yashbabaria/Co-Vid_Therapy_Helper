const form = document.getElementById('survey-form')

form.addEventListener('submit', function(e){
  e.preventDefault()

  surveyResult()
})

function surveyResult() {
  const age = document.getElementById('Age')
  var young = ""
  if(age.value < 18){
    young = "true"
  }
  var hasInsurance = ""
  const insur = document.getElementById('dropdown')
  if(insur.value === 'yes'){
    hasInsurance = "yes"
  }else if(insur.value === 'no'){
    hasInsurance == "no"
  }

  var price = ""
  const cost = document.getElementsByName('price')
  if(cost[0].checked){
    price = "low"
  }else if(cost[1].checked){
    price = "mid"
  }else if(cost[2].checked){
    price = "high"
  }else if(cost[3].checked){
    price = "any"
  }

  var help = 0;
  const mental = document.getElementsByName('mental')
  if(mental[0].checked){
    help++
  }
  if(mental[1].checked){
    help++
  }
  if(mental[2].checked){
    help++
  }
  if(mental[3].checked){
    if(price != "low"){
      location.href = "../OrgSitePages/PrideCounselingOrgInfo.html"
      return
    }
    help++
  }
  if(mental[4].checked){
    help++
  }
  if(mental[5].checked){
    help++
  }
  if(mental[6].checked){
    if(price != "low"){
      location.href = "../OrgSitePages/RegainOrgInfo.html"
      return
    }
    help++
  }
  if(mental[7].checked){
    help++
  }
  if(mental[8].checked){
    help++
  }
  if(mental[9].checked){
    help++
  }

  var psych = ""
  const care = document.getElementsByName('care')
  if(care[0].checked){
    psych = "yes"
  }
  if(psych == "yes"){
    if(price == "high" || price == "any"){
      if(help < 2){
        location.href = "../OrgSitePages/MDLiveOrgInfo.html"
        return
      }else if(help < 5){
        location.href = "../OrgSitePages/AmwellOrgInfo.html"
        return
      }else{
        location.href = "../OrgSitePages/DrOnDemandOrgInfo.html"
        return
      }
    }
  }

  var video = ""
  const online = document.getElementsByName('online')
  if(online[0].checked){
    video = "true"
  }else if(online[1].checked){
    video = "false"
  }else if(online[2].checked){
    video = "either"
  }


  const vg = document.getElementsByName('game')
  if(vg[0].checked){
    location.href = "../OrgSitePages/HealthyGamerOrgInfo.html"
    return
  }

  if(young == "true"){
    if(price == "low"){
      location.href = "../OrgSitePages/7CupsOrgInfo.html"
      return
    }else{
      location.href = "../OrgSitePages/TeenCounselingOrgInfo.html"
      return
    }
  }

  var rand = 0
  if(price == "low"){
    location.href = "../OrgSitePages/7CupsOrgInfo.html"
    return
  }else if(price == "mid"){
    if(help < 3){
      location.href = "../OrgSitePages/TalkSpaceOrgInfo.html"
      return
    }else{
      location.href = "../OrgSitePages/BetterHelpOrgInfo.html"
      return
    }
  }else if(price == "high"){
    if(help < 2){
      location.href = "../OrgSitePages/MDLiveOrgInfo.html"
      return
    }else if(help < 5){
      location.href = "../OrgSitePages/AmwellOrgInfo.html"
      return
    }else{
      location.href = "../OrgSitePages/DrOnDemandOrgInfo.html"
      return
    }
  }

  location.href = "../OrgSitePages/TalkSpaceOrgInfo.html"
}
