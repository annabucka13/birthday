import "./style.css"
import dayjs from "dayjs"
import isSameOrBefore from "dayjs/plugin/isSameOrBefore"
dayjs.extend(isSameOrBefore)
document.getElementById("submit").addEventListener("click", () => {
  const dateValue= document.getElementById("birthday-date").value
  const birthday_input = dayjs(dateValue)
  const day = birthday_input.date()
  const month = birthday_input.month()+1
  const today = dayjs()
  let birthday = dayjs().year(today.year()).month(month-1).date(day)
  if (birthday.isAfter(today)){
    birthday = birthday.subtract(1, "year")
  }
  const daysPassed = today.diff(birthday, "days")
  let nextBirthday = dayjs().year(today.year()).month(month-1).date(day)
if (nextBirthday.isSameOrBefore(today)) {
  nextBirthday = nextBirthday.add(1, 'year')
}
const weeksLeft = nextBirthday.diff(today, 'weeks')
  let message = `Od twoich ostatnich urodzin minęło ` + daysPassed + ` dni.`
  if (daysPassed === 0){
    message += " Wszystkiego najlepszego!"
  }
  if (daysPassed !== 0) {
  if (weeksLeft === 0) {
    message += " Masz urodziny w tym tygodniu!"
  } else {
    message += " Do urodzin pozostało " + weeksLeft + " tygodni!"
  }
}
  document.getElementById("result-text").innerText = message
  document.getElementById("result-dialog").showModal()
})
document.getElementById("close-dialog").addEventListener("click", () => {
  document.getElementById("result-dialog").close()
})