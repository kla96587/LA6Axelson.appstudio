
let memberName = " "

let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

btnRun.onclick=function(){
    memberName = inptName.value
    if (members.includes(memberName)  == true) {
    lblMember.value = "You are a member!"
} else {
    lblMember.value = "You are currently not a member! But we just added your name to our membership database."
    members.push(memberName)
        }
    }

