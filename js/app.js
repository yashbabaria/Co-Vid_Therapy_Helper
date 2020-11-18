const form = document.getElementById('survey-form')

form.addEventListener('submit', function(e){
  e.preventDefault()

  surveyResult()
})

function surveyResult() {
  const age = document.getElementById('Age')
  if(age.value < 18){
    location.href = '../OrgSitePages/TeenCounselingOrgInfo.html'
    return
  }

  const insur = document.getElementById('dropdown')
  if(insur.value === 'yes'){
    //has insurance
  }else if(insur.value === 'no'){
    // does not have insurance
  }

  const cost = document.getElementsByName('price')
  if(cost[0].checked){
    //less
  }else if(cost[1].checked){
    //middle
  }else if(cost[2].checked){
    //high
  }else if(cost[3].checked){
    //insurance will cover
  }

  const mental = document.getElementsByName('mental')
  if(mental[0].checked){
    //Anxiety
  }
  if(mental[1].checked){
    //Depression
  }
  if(mental[2].checked){
    //Stress Management
  }
  if(mental[3].checked){
    //LGBTQ Couseling
  }
  if(mental[4].checked){
    //Grief
  }
  if(mental[5].checked){
    //OCD
  }
  if(mental[6].checked){
    //Couple or Relationship Therapy
  }
  if(mental[7].checked){
    //PTSD/Trauma
  }
  if(mental[8].checked){
    //Insomnia
  }
  if(mental[9].checked){
    //Life-Transition
  }

  const care = document.getElementsByName('care')
  if(care[0].checked){
    // Need of Psychiatric Care
  }

  const online = document.getElementsByName('online')
  if(online[0].checked){
    // Wants a Video Conference
  }else if(online[1].checked){
    // Wants to only Message
  }else if(online[2].checked){
    // Wants Both
  }

  const vg = document.getElementsByName('game')
  if(vg[0].checked){
    // plays video games
  }

  location.href = "../OrgSitePages/TalkSpaceOrgInfo.html"
}
